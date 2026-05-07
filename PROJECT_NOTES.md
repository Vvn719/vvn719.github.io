# PROJECT_NOTES

最後整理日期：2026-05-07

## 專案概要

`vvn719.github.io` 是 34 期培緣班報到系統。它是一個無 build step 的 GitHub Pages 靜態網站，入口是 `index.html`。資料後端是一份 Google Sheet，透過 `apps-script/Code.gs` 發布成 Apps Script Web App API。

目前資料來源優先順序：

1. Apps Script + Google Sheet。
2. `localStorage` 快取。
3. `index.html` 與 `Code.gs` 內建預設資料。

同步策略：頁面載入與重整時先顯示 cache，再背景同步目前學期最新資料。API URL 會優先使用 `localStorage` 覆蓋值，沒有覆蓋值時自動使用 `DEFAULT_API_URL`，所以換裝置不需要重新設定。

## 系統架構

- Frontend：`index.html`
  - Bootstrap 5 UI。
  - ExcelJS 匯出。
  - JSONP GET 讀取 Apps Script。
  - `fetch` POST 儲存 attendance。
  - `localStorage` 保存 API URL、學期選擇與每學期資料快取。
  - 管理模式 Modal：查看目前學期資料、新增/複製學期、預覽並匯入學生 CSV、預覽並匯入課程 CSV。
- Backend：`apps-script/Code.gs`
  - 綁定 Google Sheet。
  - 自動建立 `semesters`、`classes`、`students`、`attendance` 四張工作表。
  - 提供 GET actions、`saveAttendance`、`createSemester`、`cloneSemester`、`importStudents`、`importClasses` POST。
- Hosting：GitHub Pages
  - repo 名稱是 `vvn719.github.io`。
  - 目前沒有 build、package、workflow，直接部署 root 的 `index.html`。

## Google Sheet Schema

### `semesters`

`id`, `name`, `year`, `term`, `status`

用途：定義學期。`status` 為 `active` 時會成為預設同步候選。

### `classes`

`id`, `semesterId`, `date`, `title`, `sortOrder`

用途：定義每個學期的課程。前端依 `sortOrder` 排序。

### `students`

`id`, `group`, `role`, `unit`, `name`, `studentNo`, `url`, `active`, `sortOrder`, `semesterId`

用途：定義人員、分組、角色與排序。`active` 若為 `false`、`0`、`no`、`否`、`停用`，前端不顯示。

### `attendance`

`semesterId`, `classId`, `studentId`, `status`, `note`, `updatedAt`

用途：保存出缺席。`status` 支援 `present`、`online`、`late`、`absent`、`excluded`。

## Apps Script API

GET actions：

- `setup`：建表與 seed 預設資料。
- `semesters`：讀學期。
- `classes&semesterId=...`：讀指定學期課程。
- `students&semesterId=...`：讀指定學期人員。
- `attendance&semesterId=...`：讀指定學期 attendance。
- `bootstrap`：讀學期、課程、人員；目前不含 attendance。

POST actions：

- `saveAttendance`：儲存 attendance。
- `createSemester`：新增學期，檢查 `semesterId` 不可重複、`name` 不可空白。
- `cloneSemester`：複製來源學期到新學期，可複製 students/classes，不複製 attendance。
- `importStudents`：匯入目前學期學生名單，替換 `students` 同學期 rows。
- `importClasses`：匯入目前學期課程，替換 `classes` 同學期 rows。

注意：目前 `saveAttendance` 是整個學期替換寫入。它保留其他學期 records，但會清空目前學期的 attendance 後重寫前端 payload，因此送出前最好先同步完整資料。

CSV 匯入流程：前端先解析 CSV 並顯示預覽，確認後才寫入 Google Sheet，寫入完成會重新同步前端資料。匯入不會移除程式內建 fallback data。學生 CSV 欄位為 `id`, `group`, `role`, `unit`, `name`, `studentNo`, `url`, `active`, `sortOrder`, `semesterId`；課程 CSV 欄位為 `id`, `semesterId`, `date`, `title`, `sortOrder`。

## localStorage Cache

- `attendanceApiUrl`：Apps Script Web App URL。
- `attendanceSelectedSemesterId`：目前選取學期。
- `attendanceSemestersCache:v2`：學期列表快取。
- `attendanceDataCache:v2:<semesterId>`：每學期資料快取，含 `semesters`、`classes`、`students`、`attendance`。
- `attendanceDataCache:v1`：舊版預設學期 fallback。

快取在 API 同步成功與送出報到後更新。API 失敗時，本機狀態仍保存，badge 會顯示同步或儲存失敗。

自動同步：

- API URL 來源優先序是 `localStorage.attendanceApiUrl`，其次是 `DEFAULT_API_URL`。
- 「設定 API」保留給管理者覆蓋預設 URL，留空會恢復預設 URL。
- 每 30 秒同步目前選取的 `semesterId`。
- 週期同步只抓目前學期的 `classes`、`students`、`attendance`，不重抓所有學期。
- 頁面不可見時暫停；回到頁面時立刻同步一次。
- 同步進行中會避免重複呼叫。
- API 回來後只有資料有變才重新 render。

## Semester-Aware Model

核心狀態是 `currentSemesterId`。

- 前端切換學期後先讀該學期 cache，再同步 API。
- `classes`、`students`、`attendance` 都以 `semesterId` 作為資料邊界。
- 舊資料若沒有 `semesterId`，Apps Script 會視為 `sem-114-down`。
- 前端把 Sheet 的 student `id` 正規化為 `apiId`，UI 內部再用 `student.key` 追蹤狀態。

## Attendance Sync 流程

同步讀取：

1. `reloadFromApi()` 讀 `semesters`。
2. 決定目前學期。
3. 讀該學期 `classes`、`students`、`attendance`。
4. `applyDataSet()` 正規化資料並 render。
5. `saveDataCache('api')` 保存本機快取。

送出報到：

1. 使用者設定出席狀態。
2. `submitAttendance()` 建立目前課程 record。
3. 寫入 `attendanceRecords`。
4. `attendancePayloadFromRecords()` 產生整學期 payload。
5. `persistAttendanceToApi()` 呼叫 `saveAttendance`。
6. 成功顯示 `已同步`；失敗顯示 `儲存失敗` 並保留本機快取。

出席統計規則：

- `present`、`online`、`late` 算出席。
- `absent` 不算出席，且必須填請假理由。
- `excluded` 不列入應到與出席。

## GitHub Pages 部署方式

這是 GitHub Pages user site repo，建議使用 `main` branch root 部署。

日常部署：

1. 修改檔案。
2. 本機開啟 `index.html` 或用簡單靜態 server 檢查。
3. commit 到 `main`。
4. push 到 `origin/main`。
5. 到 GitHub Pages 網址確認。

若頁面未更新，先檢查 GitHub repo Settings -> Pages 的 Source 是否仍指向 `main` / root。

## 已完成功能

- 報到卡片 UI。
- 搜尋、快速跳組、全選可見人員、清除勾選。
- 學期選擇與學期感知資料模型。
- 載入與重整時自動讀 cache 並背景同步。
- 每 30 秒目前學期自動同步，支援 hidden 暫停與 visibility resume。
- 管理模式最小版 Modal。
- 查看目前學期資料。
- 新增學期並自動切換。
- 複製學期，可選擇複製學生與課程，不複製 attendance。
- 學生 CSV 預覽、確認匯入與重新同步。
- 課程 CSV 預覽、確認匯入與重新同步。
- Google Sheet schema 與 Apps Script setup。
- JSONP 讀取與 POST 儲存。
- `localStorage` cache。
- 出席、線上、遲到、缺席理由、不列入出席。
- 各組與全班 summary。
- 缺席次數警示樣式。
- Excel 匯出。
- 預設資料 self tests。

## 下一步 Roadmap

- 將單檔 `index.html` 拆出 JS/CSS，讓同步、UI、匯出各自成模組。
- 將 `saveAttendance` 改為 upsert，避免整學期覆蓋。
- 為管理模式增加登入、passcode 或部署層權限控管。
- 補匯入結果報告與 ID 變更風險提示。
- 加上同步前檢查與衝突提示。
- 讓 Excel 檔名、標題、worksheet 名稱依學期動態產生。
- 補充 README，包含 GitHub Pages、Apps Script、API URL 設定與疑難排解。
- 增加測試：資料正規化、attendance payload、學期切換、匯出統計。
- 加上 Sheet 管理規範：欄位不可更名、`id` 不可重複、`semesterId` 必填策略。
