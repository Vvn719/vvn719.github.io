# PROJECT_NOTES

最後整理日期：2026-05-08

## 專案概要

`vvn719.github.io` 是 34 期培緣班報到系統。它是一個無 build step 的 GitHub Pages 靜態網站，入口是 `index.html`。資料後端是一份 Google Sheet，透過 `apps-script/Code.gs` 發布成 Apps Script Web App API。

## 目前版本狀態

- GitHub Pages 版本以 `origin/main` 最新 commit 為準。
- GitHub Pages 已確認可讀到拆分後版本；目前 `index.html` 載入 `app.js?v=16`。
- 前端已拆為 `index.html` + `app.js`；主要業務邏輯在 `app.js`。
- 目前 `DEFAULT_API_URL` 指向 Apps Script `/exec` URL，且 `normalizeApiUrl()` 會拒絕非 `/exec` 的 Apps Script URL。
- 已支援多學期、每學期 cache、自動同步、管理模式、課程單筆編輯、學生 CSV 匯入、課程 CSV 匯入、複製學期、Excel 匯出。
- 正式使用前檢查文件：`docs/release-checklist.md`。
- Google Sheet 備份流程文件：`docs/backup.md`。

## 已知注意事項

- 正式點名前請先複製 Google Sheet，或至少建立 `attendance` backup 工作表。
- 修改 Apps Script 後，必須重新部署 Web App；只儲存程式碼不會更新正式 `/exec`。
- Apps Script `Code.gs` 需以 repo 版本為準；舊版線上程式若仍用整學期覆蓋的 `saveAttendance_()`，會有覆蓋 attendance 風險。
- `saveAttendance` 帶有 `classId` 時只會替換同學期同課程 attendance；避免誤送單堂課時清掉其他課程紀錄。送出前仍應先確認同步成功。
- `excluded` 仍會以整學期為邊界同步保存，讓「不列入出席」可從被標記那堂開始往後代入；前端載入既有 attendance 時也會依最早的 `excluded` 紀錄往後推導，避免舊資料只顯示單堂課。
- 前端在右上角不是 `已同步`、或仍有同步進行中時，會禁止送出報到。
- 若雲端該課程已有 attendance，但前端沒有帶 `allowOverwrite`，Apps Script 會拒絕寫入，避免舊 cache 誤覆蓋既有資料。
- `saveAttendance` 寫入 attendance 後會針對目前課程代送 Google Form；表單失敗不會 rollback attendance，請查看 `formSubmissions`。
- 所有 `doPost` actions 都需要 `payload.apiToken` 等於 Apps Script 的 `API_TOKEN`；前端 `postApi()` 會自動帶入同名常數。若 token 不一致，畫面會顯示「API 驗證失敗，請檢查設定」。
- 目前 `API_TOKEN` 寫在前端與 Apps Script 常數裡，只是簡易防誤寫，不是真正私密驗證。
- 修改 `apps-script/Code.gs` 後，請在 Apps Script 重新部署既有 Web App 的新版本，不要新增新的 deployment。
- 管理模式目前沒有登入或權限控管；知道網址的人若能操作頁面，就能看到管理入口。
- CSV 匯入會替換目前學期的學生或課程 rows；匯入前務必先備份 Google Sheet。
- 學生名單維持以 CSV 匯入管理；目前不提供逐筆編修或個別停用介面。若要停用學生，請在 CSV/Sheet 中調整 `active` 後匯入。
- 課程單筆編輯需要 Apps Script 重新部署後才會正式支援 `updateClass`。
- 複製學期不會複製 attendance，這是刻意設計，避免新學期帶入舊點名紀錄。
- 前端 `localStorage` 可能保存舊 API URL 或舊學期 cache；測正式版時請用無痕模式或清除站台資料確認。
- ExcelJS 由 CDN 載入；若現場網路無法連 CDN，Excel 匯出會不可用。
- 下次修改 `app.js` 時，必須同步更新 `index.html` 內的 `app.js?v=...` 版本號，避免 GitHub Pages 或瀏覽器快取載入舊 JS。

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
  - `postApi()` 自動附帶 `API_TOKEN`，處理 Apps Script POST 驗證失敗訊息。
  - 管理模式 Modal：查看目前學期資料、單筆編輯課程、新增/複製學期、預覽並匯入學生 CSV、預覽並匯入課程 CSV。
- Backend：`apps-script/Code.gs`
  - 綁定 Google Sheet。
  - 自動建立 `semesters`、`classes`、`students`、`attendance`、`formSubmissions` 五張工作表。
  - 提供 GET actions、`saveAttendance`、`updateClass`、`createSemester`、`cloneSemester`、`importStudents`、`importClasses` POST。
  - POST actions 會檢查 `payload.apiToken`；GET 目前不強制 token。
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

`id`, `group`, `role`, `unit`, `name`, `studentNo`, `formId`, `qrUrl`, `url`, `active`, `sortOrder`, `semesterId`

用途：定義人員、分組、角色與排序。`id` 是系統內部 studentId；`formId` 是送到 Google Form `ID` 欄位的值，兩者不可混用。`qrUrl` 可保存 QR/prefilled URL。`active` 若為 `false`、`0`、`no`、`否`、`停用`，前端不顯示。

### `attendance`

`semesterId`, `classId`, `studentId`, `status`, `note`, `updatedAt`

用途：保存出缺席。`status` 支援 `present`、`online`、`late`、`absent`、`excluded`。

### `formSubmissions`

`semesterId`, `classId`, `studentId`, `formId`, `submittedAt`, `result`, `message`

用途：記錄 Apps Script 代送 Google Form 的成功或失敗結果，並用成功紀錄避免重複送出。

## Apps Script API

GET actions：

- `setup`：建表與 seed 預設資料。
- `semesters`：讀學期。
- `classes&semesterId=...`：讀指定學期課程。
- `students&semesterId=...`：讀指定學期人員。
- `attendance&semesterId=...`：讀指定學期 attendance。
- `bootstrap`：讀學期、課程、人員；目前不含 attendance。

POST actions：

所有 POST payload 都需要包含 `apiToken`，前端會自動附加；後端驗證失敗時回傳 `{ ok:false, error:'Unauthorized' }`。

- `saveAttendance`：儲存 attendance。
- `updateClass`：更新目前學期單筆課程的 `date`、`title`、`sortOrder`，不修改 attendance。
- `createSemester`：新增學期，檢查 `semesterId` 不可重複、`name` 不可空白。
- `cloneSemester`：複製來源學期到新學期，可複製 students/classes，不複製 attendance。
- `importStudents`：匯入目前學期學生名單，替換 `students` 同學期 rows。
- `importClasses`：匯入目前學期課程，替換 `classes` 同學期 rows。

注意：`saveAttendance` 若收到 `classId`，會保留其他學期與同學期其他課程 records，只替換目前課程的 attendance；但 `excluded` 會用 payload 中同學期的 excluded records 重新整理，以保留「不列入出席往後代入」行為。前端讀取 attendance 時也會從每位學生最早的 `excluded` 往後補上不列入出席，但不覆蓋後面課堂已存在的出席、線上、遲到或請假紀錄。若該課程雲端已有紀錄且 payload 沒有 `allowOverwrite`，Apps Script 會拒絕寫入；若沒有 `classId`，才會沿用整學期替換模式。Attendance 保存後會依 payload 的 `classId` 只針對目前課程代送 Google Form，失敗會記錄到 `formSubmissions`，但不會回滾 attendance。

CSV 匯入流程：前端先解析 CSV 並顯示預覽，確認後才寫入 Google Sheet，寫入完成會重新同步前端資料。匯入不會移除程式內建 fallback data。學生 CSV 欄位為 `id`, `group`, `role`, `unit`, `name`, `studentNo`, `formId`, `qrUrl`, `url`, `active`, `sortOrder`, `semesterId`；`qrUrl` 也接受 `qrLink` 或 `prefilledUrl` 欄名。課程 CSV 欄位為 `id`, `semesterId`, `date`, `title`, `sortOrder`。

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
4. 若目前不是 `已同步`，或背景同步尚未完成，會禁止送出。
5. 若目前課程已有紀錄且沒有新增或修改內容，會禁止重複送出。
6. `attendancePayloadFromRecords()` 產生目前記憶體中的 attendance payload。
7. `persistAttendanceToApi()` 呼叫 `saveAttendance`。
8. Apps Script 保存 attendance 後針對目前課程代送 Google Form；只送 `present`、`online`、`late`，`absent` 與 `excluded` 不送。
9. 同一 `semesterId + classId + studentId` 已成功送過表單時會略過。
10. 成功顯示 `已同步`；Google Form 部分失敗時顯示「點名已保存，但部分 Google Form 送出失敗」；儲存失敗時顯示 `儲存失敗` 並保留本機快取。

Google Form 代送目前只處理簽到表單四欄：`ID`、`NAME`、`PASS`、`TYPE`。`PASS` 預設 `303030`，若 QR/prefilled URL 原本已有檢核密碼則保留；`TYPE` 只送 `實體` 或 `線上`，遲到與請假狀態仍以 `attendance` sheet 為準。

若 `formSubmissions` 出現「你沒有呼叫 UrlFetchApp.fetch 的權限」，代表 Apps Script 尚未授權外部 request。請把 `apps-script/appsscript.json` 的 oauthScopes 同步到 Apps Script manifest，執行一次 `authorizeGoogleFormAccess()` 並同意權限，然後重新部署既有 Web App 的新版本。

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
- 課程單筆編輯，可修改 `date`、`title`、`sortOrder`，成功後重新同步目前學期。
- 新增學期並自動切換。
- 複製學期，可選擇複製學生與課程，不複製 attendance。
- 學生 CSV 預覽、確認匯入與重新同步。
- 課程 CSV 預覽、確認匯入與重新同步。
- Google Sheet schema 與 Apps Script setup。
- JSONP 讀取與 POST 儲存。
- Google Form 自動代送與 `formSubmissions` 紀錄。
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
