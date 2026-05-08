# Google Sheet 安全備份流程

正式點名前，請先備份 Google Sheet。這個系統的 `saveAttendance` 會以目前前端 payload 重寫同一學期的 attendance，所以備份是最便宜、也最安心的保險。

## 建議方式：複製整份 Google Sheet

1. 開啟正式使用的 Google Sheet。
2. 點選「檔案」->「建立副本」。
3. 檔名建議包含日期與用途。
   - 例：`34期出缺席紀錄-正式點名前備份-2026-05-08`
4. 確認副本內有以下工作表：
   - `semesters`
   - `classes`
   - `students`
   - `attendance`
5. 將副本放在固定備份資料夾，避免誤刪。

這個方式最完整，還原時也最簡單：打開副本，比對或複製需要的工作表資料回正式 Sheet。

## 替代方式：建立 backup 工作表

如果不想複製整份檔案，可以在同一份 Google Sheet 內建立備份工作表。

1. 複製 `attendance` 工作表。
2. 將複本重新命名為：
   - `backup_attendance_YYYYMMDD_HHMM`
   - 例：`backup_attendance_20260508_1400`
3. 若當天會調整學生或課程，也請一起複製：
   - `backup_students_YYYYMMDD_HHMM`
   - `backup_classes_YYYYMMDD_HHMM`
   - `backup_semesters_YYYYMMDD_HHMM`
4. 不要更名正式工作表，正式工作表仍須維持原名：
   - `semesters`
   - `classes`
   - `students`
   - `attendance`

## 還原建議

- 少量資料錯誤：從備份工作表複製特定 rows 回正式工作表。
- 大量資料錯誤：先複製整份 Google Sheet，再從備份檔案還原正式表。
- 不確定錯在哪：先不要再次送出報到，避免把錯誤狀態覆蓋得更遠。

## 備份時機

- 正式點名前。
- 使用管理模式匯入 CSV 前。
- 使用複製學期前。
- Apps Script 重新部署前。
- 大量修改 `students`、`classes`、`semesters` 前。

## 備份檢查

- [ ] 備份檔案或備份工作表已建立。
- [ ] 備份包含 `attendance`。
- [ ] 若有調整名單或課程，備份包含 `students` 與 `classes`。
- [ ] 備份名稱含日期時間。
- [ ] 已確認正式工作表名稱沒有被更改。
