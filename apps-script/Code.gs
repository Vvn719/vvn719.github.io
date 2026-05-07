const DEFAULT_SEMESTER_ID = 'sem-114-down';

const SHEETS = {
  semesters: 'semesters',
  classes: 'classes',
  students: 'students',
  attendance: 'attendance'
};

const HEADERS = {
  semesters: ['id', 'name', 'year', 'term', 'status'],
  classes: ['id', 'semesterId', 'date', 'title', 'sortOrder'],
  students: ['id', 'group', 'role', 'unit', 'name', 'studentNo', 'url', 'active', 'sortOrder', 'semesterId'],
  attendance: ['semesterId', 'classId', 'studentId', 'status', 'note', 'updatedAt']
};

const DEFAULT_SEMESTERS = [
  { id: DEFAULT_SEMESTER_ID, name: '114下培緣', year: '114', term: '下', status: 'active' }
];

const DEFAULT_CLASSES = [
  { id: 'class-1', semesterId: DEFAULT_SEMESTER_ID, date: '5/17', title: '一貫道宗旨', sortOrder: 1 },
  { id: 'class-2', semesterId: DEFAULT_SEMESTER_ID, date: '5/24', title: '新世紀健康飲食', sortOrder: 2 },
  { id: 'class-3', semesterId: DEFAULT_SEMESTER_ID, date: '5/30（六）', title: '認識基礎忠恕道場', sortOrder: 3 },
  { id: 'class-4', semesterId: DEFAULT_SEMESTER_ID, date: '6/7', title: '孝道仁之本', sortOrder: 4 },
  { id: 'class-5', semesterId: DEFAULT_SEMESTER_ID, date: '6/14', title: '結班', sortOrder: 5 }
];

const DEFAULT_STUDENTS = [
  { id: 'student-001', group: '講師', role: '指導點傳師', unit: '啟化', name: '陳昭湘', studentNo: '', url: '#', active: true, sortOrder: 1 },
  { id: 'student-002', group: '講師', role: '主班講師', unit: '瑞周天曉天恆', name: '何明達', studentNo: '', url: '#', active: true, sortOrder: 2 },
  { id: 'student-003', group: '講師', role: '主班講師', unit: '瑞周天曉天密', name: '許繼嘉', studentNo: '', url: '#', active: true, sortOrder: 3 },
  { id: 'student-004', group: '講師', role: '主班講師', unit: '瑞周天曉天密', name: '張雅涵', studentNo: '', url: '#', active: true, sortOrder: 4 },
  { id: 'student-005', group: '一組', role: '輔導', unit: '瑞周天達', name: '劉忠宜', studentNo: '', url: '#', active: true, sortOrder: 5 },
  { id: 'student-006', group: '一組', role: '輔導', unit: '瑞周全真天儲', name: '林和諭', studentNo: '', url: '#', active: true, sortOrder: 6 },
  { id: 'student-007', group: '一組', role: '輔導', unit: '瑞周全真天如', name: '許晏慈', studentNo: '', url: '#', active: true, sortOrder: 7 },
  { id: 'student-008', group: '一組', role: '輔導', unit: '瑞周天達', name: '林祐亘', studentNo: '', url: '#', active: true, sortOrder: 8 },
  { id: 'student-009', group: '一組', role: '輔導', unit: '瑞周全真天儲', name: '賴怡璇', studentNo: '', url: '#', active: true, sortOrder: 9 },
  { id: 'student-010', group: '一組', role: '輔導', unit: '瑞周天曉天恆', name: '李洋伶', studentNo: '', url: '#', active: true, sortOrder: 10 },
  { id: 'student-011', group: '一組', role: '輔導', unit: '瑞周全真天如', name: '陳佳愉', studentNo: '', url: '#', active: true, sortOrder: 11 },
  { id: 'student-012', group: '一組', role: '輔導', unit: '瑞周天定', name: '黃念庭', studentNo: '', url: '#', active: true, sortOrder: 12 },
  { id: 'student-013', group: '一組', role: '學員', unit: '瑞周全真天儲', name: '李宥嶙', studentNo: '', url: '#', active: true, sortOrder: 13 },
  { id: 'student-014', group: '一組', role: '學員', unit: '金剛', name: '張晨恩', studentNo: '', url: '#', active: true, sortOrder: 14 },
  { id: 'student-015', group: '一組', role: '學員', unit: '益新', name: '徐業展', studentNo: '', url: '#', active: true, sortOrder: 15 },
  { id: 'student-016', group: '一組', role: '學員', unit: '瑞周天達', name: '陳冠呈', studentNo: '', url: '#', active: true, sortOrder: 16 },
  { id: 'student-017', group: '一組', role: '學員', unit: '瑞周全真天如', name: '邱妍蓁', studentNo: '', url: '#', active: true, sortOrder: 17 },
  { id: 'student-018', group: '一組', role: '學員', unit: '瑞周全真天如', name: '王芝云', studentNo: '', url: '#', active: true, sortOrder: 18 },
  { id: 'student-019', group: '一組', role: '學員', unit: '瑞周天定', name: '陳湘棋', studentNo: '', url: '#', active: true, sortOrder: 19 },
  { id: 'student-020', group: '一組', role: '學員', unit: '瑞周全真至善', name: '林佳臻', studentNo: '', url: '#', active: true, sortOrder: 20 },
  { id: 'student-021', group: '二組', role: '輔導', unit: '瑞周全真至善', name: '廖修德', studentNo: '', url: '#', active: true, sortOrder: 21 },
  { id: 'student-022', group: '二組', role: '輔導', unit: '瑞周天曉天合', name: '吳震謙', studentNo: '', url: '#', active: true, sortOrder: 22 },
  { id: 'student-023', group: '二組', role: '輔導', unit: '瑞周全真天如', name: '蕭銘靚', studentNo: '', url: '#', active: true, sortOrder: 23 },
  { id: 'student-024', group: '二組', role: '輔導', unit: '瑞周天罡', name: '江昀叡', studentNo: '', url: '#', active: true, sortOrder: 24 },
  { id: 'student-025', group: '二組', role: '輔導', unit: '瑞周全真天如', name: '陳晏翎', studentNo: '', url: '#', active: true, sortOrder: 25 },
  { id: 'student-026', group: '二組', role: '輔導', unit: '啟化', name: '吳婉翎', studentNo: '', url: '#', active: true, sortOrder: 26 },
  { id: 'student-027', group: '二組', role: '輔導', unit: '先天', name: '吳依庭', studentNo: '', url: '#', active: true, sortOrder: 27 },
  { id: 'student-028', group: '二組', role: '學員', unit: '瑞周天達', name: '曾昱翰', studentNo: '', url: '#', active: true, sortOrder: 28 },
  { id: 'student-029', group: '二組', role: '學員', unit: '瑞周天曉天恆', name: '曾愿禈', studentNo: '', url: '#', active: true, sortOrder: 29 },
  { id: 'student-030', group: '二組', role: '學員', unit: '瑞周天定', name: '郭虹均', studentNo: '', url: '#', active: true, sortOrder: 30 },
  { id: 'student-031', group: '二組', role: '學員', unit: '瑞周天達', name: '簡子瀰', studentNo: '', url: '#', active: true, sortOrder: 31 },
  { id: 'student-032', group: '二組', role: '學員', unit: '', name: '鄭又瑄', studentNo: '', url: '#', active: true, sortOrder: 32 },
  { id: 'student-033', group: '二組', role: '學員', unit: '啟化', name: '呂欣憓', studentNo: '', url: '#', active: true, sortOrder: 33 },
  { id: 'student-034', group: '二組', role: '學員', unit: '瑞周全真天儲', name: '吳曜丞', studentNo: '', url: '#', active: true, sortOrder: 34 },
  { id: 'student-035', group: '三組', role: '輔導', unit: '先天', name: '吳自閎', studentNo: '', url: '#', active: true, sortOrder: 35 },
  { id: 'student-036', group: '三組', role: '輔導', unit: '啟化', name: '許瀚隆', studentNo: '', url: '#', active: true, sortOrder: 36 },
  { id: 'student-037', group: '三組', role: '輔導', unit: '先天', name: '邱欣柔', studentNo: '', url: '#', active: true, sortOrder: 37 },
  { id: 'student-038', group: '三組', role: '輔導', unit: '瑞周天曉天密', name: '陳祉聿', studentNo: '', url: '#', active: true, sortOrder: 38 },
  { id: 'student-039', group: '三組', role: '輔導', unit: '瑞周全真天如', name: '陳芝嵐', studentNo: '', url: '#', active: true, sortOrder: 39 },
  { id: 'student-040', group: '三組', role: '輔導', unit: '瑞周天曉天恆', name: '李欣霖', studentNo: '', url: '#', active: true, sortOrder: 40 },
  { id: 'student-041', group: '三組', role: '學員', unit: '先天', name: '吳依儒', studentNo: '', url: '#', active: true, sortOrder: 41 },
  { id: 'student-042', group: '三組', role: '學員', unit: '先天', name: '劉泉佑', studentNo: '', url: '#', active: true, sortOrder: 42 },
  { id: 'student-043', group: '三組', role: '學員', unit: '瑞周天定', name: '楊智閔', studentNo: '', url: '#', active: true, sortOrder: 43 },
  { id: 'student-044', group: '三組', role: '學員', unit: '瑞周全真天儲', name: '劉學明', studentNo: '', url: '#', active: true, sortOrder: 44 },
  { id: 'student-045', group: '三組', role: '學員', unit: '瑞周天達', name: '蘇子庭', studentNo: '', url: '#', active: true, sortOrder: 45 },
  { id: 'student-046', group: '三組', role: '學員', unit: '瑞周天曉天恆', name: '卓宜錚', studentNo: '', url: '#', active: true, sortOrder: 46 },
  { id: 'student-047', group: '三組', role: '學員', unit: '瑞周全真天如', name: '陳盈臻', studentNo: '', url: '#', active: true, sortOrder: 47 },
  { id: 'student-048', group: '三組', role: '學員', unit: '瑞周天曉天恆', name: '蔡昀廷', studentNo: '', url: '#', active: true, sortOrder: 48 },
  { id: 'student-049', group: '三組', role: '學員', unit: '瑞周全真天如', name: '邱瑀宸', studentNo: '', url: '#', active: true, sortOrder: 49 }
];

function setup() {
  const ss = getSpreadsheet_();
  Object.keys(SHEETS).forEach(key => ensureSheet_(ss, SHEETS[key], HEADERS[key]));
  seedSheetIfEmpty_(ss.getSheetByName(SHEETS.semesters), HEADERS.semesters, DEFAULT_SEMESTERS);
  seedSheetIfEmpty_(ss.getSheetByName(SHEETS.classes), HEADERS.classes, DEFAULT_CLASSES);
  seedSheetIfEmpty_(ss.getSheetByName(SHEETS.students), HEADERS.students, DEFAULT_STUDENTS);
  SpreadsheetApp.flush();
  return { ok: true, message: 'setup complete' };
}

function doGet(e) {
  const params = e && e.parameter ? e.parameter : {};
  const callback = params.callback || '';

  try {
    setup();
    const action = params.action || 'bootstrap';
    if (action === 'setup') return respond_({ ok: true, setup: true }, callback);
    if (action === 'semesters') return respond_({ ok: true, semesters: readSheetObjects_(SHEETS.semesters) }, callback);
    if (action === 'classes') return respond_({ ok: true, classes: filterBySemester_(readSheetObjects_(SHEETS.classes), params.semesterId) }, callback);
    if (action === 'students') return respond_({ ok: true, students: filterBySemester_(readSheetObjects_(SHEETS.students), params.semesterId) }, callback);
    if (action === 'attendance') return respond_({ ok: true, records: filterBySemester_(readSheetObjects_(SHEETS.attendance), params.semesterId) }, callback);

    return respond_({
      ok: true,
      semesters: readSheetObjects_(SHEETS.semesters),
      classes: readSheetObjects_(SHEETS.classes),
      students: readSheetObjects_(SHEETS.students)
    }, callback);
  } catch (error) {
    return respond_({ ok: false, error: String(error && error.message ? error.message : error) }, callback);
  }
}

function doPost(e) {
  try {
    setup();
    const body = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    const action = body.action || (e && e.parameter && e.parameter.action) || '';
    if (action === 'saveAttendance') return respond_(saveAttendance_(body.payload || {}));
    return respond_({ ok: false, error: 'Unknown action' });
  } catch (error) {
    return respond_({ ok: false, error: String(error && error.message ? error.message : error) });
  }
}

function saveAttendance_(payload) {
  const lock = LockService.getDocumentLock();
  lock.waitLock(30000);

  try {
    const semesterId = payload.semesterId || DEFAULT_SEMESTER_ID;
    const updatedAt = new Date().toISOString();
    const incoming = (payload.records || [])
      .filter(record => record.semesterId && record.classId && record.studentId && record.status)
      .map(record => ({
        semesterId,
        classId: record.classId,
        studentId: record.studentId,
        status: record.status,
        note: record.note || '',
        updatedAt
      }));

    const existingOtherSemesters = readSheetObjects_(SHEETS.attendance)
      .filter(record => record.semesterId !== semesterId);
    const allRecords = existingOtherSemesters.concat(incoming);
    const sheet = getSpreadsheet_().getSheetByName(SHEETS.attendance);
    const headers = HEADERS.attendance;
    const lastRow = sheet.getLastRow();

    if (lastRow > 1) sheet.getRange(2, 1, lastRow - 1, headers.length).clearContent();
    if (allRecords.length) {
      sheet.getRange(2, 1, allRecords.length, headers.length).setValues(objectsToValues_(allRecords, headers));
    }

    SpreadsheetApp.flush();
    return { ok: true, count: incoming.length, updatedAt };
  } finally {
    lock.releaseLock();
  }
}

function getSpreadsheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  if (!ss) throw new Error('Please bind this Apps Script to a Google Sheet.');
  return ss;
}

function ensureSheet_(ss, name, headers) {
  const sheet = ss.getSheetByName(name) || ss.insertSheet(name);
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.setFrozenRows(1);
  return sheet;
}

function seedSheetIfEmpty_(sheet, headers, rows) {
  if (sheet.getLastRow() > 1) return;
  if (!rows.length) return;
  sheet.getRange(2, 1, rows.length, headers.length).setValues(objectsToValues_(rows, headers));
}

function readSheetObjects_(sheetName) {
  const sheet = getSpreadsheet_().getSheetByName(sheetName);
  const headers = HEADERS[Object.keys(SHEETS).find(key => SHEETS[key] === sheetName)];
  if (!sheet || sheet.getLastRow() < 2) return [];

  return sheet
    .getRange(2, 1, sheet.getLastRow() - 1, headers.length)
    .getValues()
    .filter(row => row.some(value => value !== ''))
    .map(row => {
      const item = {};
      headers.forEach((header, index) => {
        item[header] = normalizeCell_(row[index]);
      });
      return item;
    });
}

function objectsToValues_(rows, headers) {
  return rows.map(row => headers.map(header => row[header] === undefined ? '' : row[header]));
}

function normalizeCell_(value) {
  if (value instanceof Date) {
    return Utilities.formatDate(value, Session.getScriptTimeZone(), 'M/d');
  }
  return value;
}

function filterBySemester_(records, semesterId) {
  if (!semesterId) return records;
  return records.filter(record => record.semesterId ? record.semesterId === semesterId : semesterId === DEFAULT_SEMESTER_ID);
}

function respond_(payload, callback) {
  const json = JSON.stringify(payload);
  if (callback && /^[\w.$]+$/.test(callback)) {
    return ContentService
      .createTextOutput(`${callback}(${json});`)
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }

  return ContentService
    .createTextOutput(json)
    .setMimeType(ContentService.MimeType.JSON);
}
