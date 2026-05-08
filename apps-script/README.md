# Google Sheet API 設定

這個資料庫用一份 Google Sheet，裡面會有四張工作表：

- `semesters`
- `classes`
- `students`
- `attendance`

## 第一次建立

1. 開一份新的 Google Sheet。
2. 到「擴充功能」→「Apps Script」。
3. 把 `Code.gs` 的內容貼到 Apps Script 編輯器。
4. 在 Apps Script 上方函式選單選 `setup`，按「執行」並完成授權。
5. 回到 Sheet，應該會看到四張工作表與預設 34 期資料。

## 發布 API

1. Apps Script 右上角按「部署」→「新增部署作業」。
2. 類型選「網頁應用程式」。
3. 「執行身分」選「我」。
4. 「誰可以存取」選「任何知道連結的人」。
5. 部署後複製 Web App URL。

## 前端連接

1. 打開 GitHub Pages 報到系統。
2. 點右上角「設定 API」。
3. 貼上 Apps Script Web App URL。
4. 按「同步」確認狀態顯示為 `已同步`。

之後送出報到時，點名資料會寫進 `attendance` 工作表。前端會先讀取 `semesters`，再依目前選擇的 `semesterId` 讀取課程、學生與點名紀錄。

新增學期時，請在 `classes` 填入對應的 `semesterId`。`students` 也可以填 `semesterId`，這樣不同學期能使用不同學生、分組與角色；舊資料若 `semesterId` 空白，會視為預設的 `sem-114-down`。

## API 動作

- `GET ?action=bootstrap`：讀取學期、課程、學生。
- `GET ?action=attendance&semesterId=sem-114-down`：讀取點名紀錄。
- `POST action=saveAttendance`：儲存點名紀錄。
- `POST action=updateClass`：更新單筆課程的 `date`、`title`、`sortOrder`。

因為 GitHub Pages 和 Apps Script 是不同網域，前端讀取使用 JSONP，儲存使用 `fetch` 搭配 Apps Script Web App。
