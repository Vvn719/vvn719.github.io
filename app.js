const DEFAULT_SEMESTERS = [
      { id: 'sem-114-down', name: '114下培緣', year: '114', term: '下', status: 'active' }
    ];

    const DEFAULT_CLASSES = [
      { date: '5/17', title: '一貫道宗旨' },
      { date: '5/24', title: '新世紀健康飲食' },
      { date: '5/30（六）', title: '認識基礎忠恕道場' },
      { date: '6/7', title: '孝道仁之本' },
      { date: '6/14', title: '結班' }
    ];

    const DEFAULT_STUDENTS = [
      { group: '講師', role: '指導點傳師', unit: '啟化', name: '陳昭湘', id: '', url: '#' },
      { group: '講師', role: '主班講師', unit: '瑞周天曉天恆', name: '何明達', id: '', url: '#' },
      { group: '講師', role: '主班講師', unit: '瑞周天曉天密', name: '許繼嘉', id: '', url: '#' },
      { group: '講師', role: '主班講師', unit: '瑞周天曉天密', name: '張雅涵', id: '', url: '#' },
      { group: '一組', role: '輔導', unit: '瑞周天達', name: '劉忠宜', id: '', url: '#' },
      { group: '一組', role: '輔導', unit: '瑞周全真天儲', name: '林和諭', id: '', url: '#' },
      { group: '一組', role: '輔導', unit: '瑞周全真天如', name: '許晏慈', id: '', url: '#' },
      { group: '一組', role: '輔導', unit: '瑞周天達', name: '林祐亘', id: '', url: '#' },
      { group: '一組', role: '輔導', unit: '瑞周全真天儲', name: '賴怡璇', id: '', url: '#' },
      { group: '一組', role: '輔導', unit: '瑞周天曉天恆', name: '李洋伶', id: '', url: '#' },
      { group: '一組', role: '輔導', unit: '瑞周全真天如', name: '陳佳愉', id: '', url: '#' },
      { group: '一組', role: '輔導', unit: '瑞周天定', name: '黃念庭', id: '', url: '#' },
      { group: '一組', role: '學員', unit: '瑞周全真天儲', name: '李宥嶙', id: '', url: '#' },
      { group: '一組', role: '學員', unit: '金剛', name: '張晨恩', id: '', url: '#' },
      { group: '一組', role: '學員', unit: '益新', name: '徐業展', id: '', url: '#' },
      { group: '一組', role: '學員', unit: '瑞周天達', name: '陳冠呈', id: '', url: '#' },
      { group: '一組', role: '學員', unit: '瑞周全真天如', name: '邱妍蓁', id: '', url: '#' },
      { group: '一組', role: '學員', unit: '瑞周全真天如', name: '王芝云', id: '', url: '#' },
      { group: '一組', role: '學員', unit: '瑞周天定', name: '陳湘棋', id: '', url: '#' },
      { group: '一組', role: '學員', unit: '瑞周全真至善', name: '林佳臻', id: '', url: '#' },
      { group: '二組', role: '輔導', unit: '瑞周全真至善', name: '廖修德', id: '', url: '#' },
      { group: '二組', role: '輔導', unit: '瑞周天曉天合', name: '吳震謙', id: '', url: '#' },
      { group: '二組', role: '輔導', unit: '瑞周全真天如', name: '蕭銘靚', id: '', url: '#' },
      { group: '二組', role: '輔導', unit: '瑞周天罡', name: '江昀叡', id: '', url: '#' },
      { group: '二組', role: '輔導', unit: '瑞周全真天如', name: '陳晏翎', id: '', url: '#' },
      { group: '二組', role: '輔導', unit: '啟化', name: '吳婉翎', id: '', url: '#' },
      { group: '二組', role: '輔導', unit: '先天', name: '吳依庭', id: '', url: '#' },
      { group: '二組', role: '學員', unit: '瑞周天達', name: '曾昱翰', id: '', url: '#' },
      { group: '二組', role: '學員', unit: '瑞周天曉天恆', name: '曾愿禈', id: '', url: '#' },
      { group: '二組', role: '學員', unit: '瑞周天定', name: '郭虹均', id: '', url: '#' },
      { group: '二組', role: '學員', unit: '瑞周天達', name: '簡子瀰', id: '', url: '#' },
      { group: '二組', role: '學員', unit: '', name: '鄭又瑄', id: '', url: '#' },
      { group: '二組', role: '學員', unit: '啟化', name: '呂欣憓', id: '', url: '#' },
      { group: '二組', role: '學員', unit: '瑞周全真天儲', name: '吳曜丞', id: '', url: '#' },
      { group: '三組', role: '輔導', unit: '先天', name: '吳自閎', id: '', url: '#' },
      { group: '三組', role: '輔導', unit: '啟化', name: '許瀚隆', id: '', url: '#' },
      { group: '三組', role: '輔導', unit: '先天', name: '邱欣柔', id: '', url: '#' },
      { group: '三組', role: '輔導', unit: '瑞周天曉天密', name: '陳祉聿', id: '', url: '#' },
      { group: '三組', role: '輔導', unit: '瑞周全真天如', name: '陳芝嵐', id: '', url: '#' },
      { group: '三組', role: '輔導', unit: '瑞周天曉天恆', name: '李欣霖', id: '', url: '#' },
      { group: '三組', role: '學員', unit: '先天', name: '吳依儒', id: '', url: '#' },
      { group: '三組', role: '學員', unit: '先天', name: '劉泉佑', id: '', url: '#' },
      { group: '三組', role: '學員', unit: '瑞周天定', name: '楊智閔', id: '', url: '#' },
      { group: '三組', role: '學員', unit: '瑞周全真天儲', name: '劉學明', id: '', url: '#' },
      { group: '三組', role: '學員', unit: '瑞周天達', name: '蘇子庭', id: '', url: '#' },
      { group: '三組', role: '學員', unit: '瑞周天曉天恆', name: '卓宜錚', id: '', url: '#' },
      { group: '三組', role: '學員', unit: '瑞周全真天如', name: '陳盈臻', id: '', url: '#' },
      { group: '三組', role: '學員', unit: '瑞周天曉天恆', name: '蔡昀廷', id: '', url: '#' },
      { group: '三組', role: '學員', unit: '瑞周全真天如', name: '邱瑀宸', id: '', url: '#' }
    ];

    let currentClasses = DEFAULT_CLASSES.map((item, index) => ({ ...item, id: item.id || `class-${index + 1}`, sortOrder: index + 1 }));
    let currentStudents = DEFAULT_STUDENTS.map((item, index) => ({ ...item, apiId: item.apiId || `student-${String(index + 1).padStart(3, '0')}`, sortOrder: index + 1, active: true }));
    let semesters = DEFAULT_SEMESTERS.map(item => ({ ...item }));

    const DEFAULT_GROUPS = ['講師', '一組', '二組', '三組'];
    const selected = new Set();
    const confirmed = new Set();
    const excluded = new Set();
    const specialNotes = new Map();
    const editingAbsent = new Set();
    const editingDone = new Set();
    const advancedOpen = new Set();
    const visibleIds = new Set();
    const attendanceRecords = new Map();

    const listEl = document.getElementById('studentList');
    const searchEl = document.getElementById('searchInput');
    const classSelect = document.getElementById('classSelect');
    const semesterSelect = document.getElementById('semesterSelect');
    const syncBadge = document.getElementById('syncBadge');
    const API_URL_STORAGE_KEY = 'attendanceApiUrl';
    const SELECTED_SEMESTER_STORAGE_KEY = 'attendanceSelectedSemesterId';
    const SEMESTERS_CACHE_KEY = 'attendanceSemestersCache:v2';
    const DATA_CACHE_PREFIX = 'attendanceDataCache:v2';
    const DEFAULT_API_URL = 'https://script.google.com/macros/s/AKfycbyuTmdc2cC_zqzP6AOiY5fn_qNduFjseDGs0KuY3m7R5ijQ9fFTred8vB-TmspdciHgDw/exec';
    let apiUrl = localStorage.getItem(API_URL_STORAGE_KEY) || DEFAULT_API_URL;
    let currentSemesterId = localStorage.getItem(SELECTED_SEMESTER_STORAGE_KEY) || DEFAULT_SEMESTERS[0].id;
    let syncInFlight = null;
    let syncInFlightSemesterId = '';
    let queuedSyncSemesterId = '';
    const adminImportState = {
      students: { rows: [], errors: [], fileName: '' },
      classes: { rows: [], errors: [], fileName: '' }
    };
    const clonePreviewCache = new Map();

    function assignStudentKeys() {
      currentStudents.forEach((student, index) => {
        student.key = student.apiId || `${student.group}-${student.role}-${student.name}-${index}`;
      });
    }

    assignStudentKeys();

    function initClasses() {
      classSelect.innerHTML = currentClasses.length
        ? currentClasses.map((item, index) => `<option value="${index}">${item.date}　${item.title}</option>`).join('')
        : '<option value="0">尚未設定課程</option>';
    }

    function initSemesters() {
      semesterSelect.innerHTML = semesters.map(item => `<option value="${item.id}">${item.name || item.id}</option>`).join('');
      semesterSelect.value = currentSemesterId;
    }

    function updateSyncBadge(text, style = 'light') {
      syncBadge.className = `badge text-bg-${style} border align-self-center`;
      syncBadge.textContent = text;
    }

    function setSyncState(state) {
      const states = {
        syncing: ['🔄 同步中', 'warning'],
        synced: ['🟢 已同步', 'success'],
        local: ['🟡 使用本機資料', 'warning'],
        failed: ['🔴 同步失敗', 'danger'],
        unset: ['⚪ 尚未設定 API', 'secondary'],
        saving: ['🔄 儲存中', 'warning'],
        saveFailed: ['🔴 儲存失敗', 'danger']
      };
      const [text, style] = states[state] || states.local;
      updateSyncBadge(text, style);
    }

    function jsonpRequest(action, params = {}) {
      if (!apiUrl) return Promise.reject(new Error('API URL is not set'));
      return new Promise((resolve, reject) => {
        const callbackName = `attendanceApi_${Date.now()}_${Math.random().toString(36).slice(2)}`;
        const script = document.createElement('script');
        const url = new URL(apiUrl);
        let settled = false;
        url.searchParams.set('action', action);
        url.searchParams.set('callback', callbackName);
        Object.entries(params).forEach(([key, value]) => {
          if (value !== undefined && value !== null && value !== '') url.searchParams.set(key, value);
        });

        const timeout = setTimeout(() => {
          if (settled) return;
          settled = true;
          cleanupAfterTimeout();
          reject(new Error('API request timed out'));
        }, 25000);

        function cleanupScript() {
          clearTimeout(timeout);
          script.onload = null;
          script.onerror = null;
          script.remove();
        }

        function cleanupAfterSuccess() {
          cleanupScript();
          delete window[callbackName];
        }

        function cleanupAfterTimeout() {
          cleanupScript();
          // Apps Script JSONP may return after the timeout. Keep a harmless
          // callback so late responses do not throw ReferenceError in Console.
          window[callbackName] = function noopLateJsonpResponse() {};
          setTimeout(() => delete window[callbackName], 60000);
        }

        window[callbackName] = data => {
          if (settled) return;
          settled = true;
          cleanupAfterSuccess();
          if (data && data.ok === false) reject(new Error(data.error || 'API error'));
          else resolve(data);
        };

        script.onerror = () => {
          if (settled) return;
          settled = true;
          cleanupAfterSuccess();
          reject(new Error('API request failed'));
        };

        script.src = url.toString();
        document.body.appendChild(script);
      });
    }

    async function postApi(action, payload) {
      if (!apiUrl) return { ok: false, skipped: true };
      const url = new URL(apiUrl);
      url.searchParams.set('action', action);
      const body = JSON.stringify({ action, payload });

      try {
        const response = await fetch(url.toString(), {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body
        });
        const text = await response.text();
        return text ? JSON.parse(text) : { ok: response.ok };
      } catch (error) {
        await fetch(url.toString(), {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body
        });
        return { ok: true, opaque: true };
      }
    }

    function normalizeClass(item, index) {
      return {
        id: item.id || `class-${index + 1}`,
        semesterId: item.semesterId || currentSemesterId,
        date: item.date || '',
        title: item.title || '',
        sortOrder: Number(item.sortOrder || index + 1)
      };
    }

    function normalizeStudent(item, index) {
      const activeValue = String(item.active ?? 'TRUE').trim().toLowerCase();
      return {
        apiId: item.apiId || item.studentId || item.id || `student-${String(index + 1).padStart(3, '0')}`,
        group: item.group || '',
        role: item.role || '',
        unit: item.unit || '',
        name: item.name || '',
        id: item.studentNo || item.idNo || (item.apiId ? item.id || '' : ''),
        semesterId: item.semesterId || '',
        url: item.url || '#',
        active: !['false', '0', 'no', '否', '停用'].includes(activeValue),
        sortOrder: Number(item.sortOrder || index + 1)
      };
    }

    function applySemesters(nextSemesters = DEFAULT_SEMESTERS, preferredSemesterId = currentSemesterId) {
      semesters = (nextSemesters.length ? nextSemesters : DEFAULT_SEMESTERS).map(normalizeSemester);
      const selectedSemester = semesters.find(item => item.id === preferredSemesterId);
      const activeSemester = semesters.find(item => item.status === 'active');
      currentSemesterId = (selectedSemester || activeSemester || semesters[0] || DEFAULT_SEMESTERS[0]).id;
      localStorage.setItem(SELECTED_SEMESTER_STORAGE_KEY, currentSemesterId);
      initSemesters();
    }

    function currentGroups() {
      const groups = [];
      currentStudents.forEach(student => {
        if (student.group && !groups.includes(student.group)) groups.push(student.group);
      });
      return groups.length ? groups : DEFAULT_GROUPS;
    }

    function reportGroups() {
      return currentGroups().filter(group => group !== '講師');
    }

    function currentSemester() {
      return semesters.find(item => item.id === currentSemesterId) || DEFAULT_SEMESTERS[0];
    }

    function currentSemesterLabel() {
      const semester = currentSemester();
      if (semester.name) return semester.name;
      return `${semester.year || ''}${semester.term || ''}` || currentSemesterId;
    }

    function normalizeSemester(item) {
      return {
        id: item.id || currentSemesterId,
        name: item.name || item.id || '目前學期',
        year: item.year || '',
        term: item.term || '',
        status: item.status || ''
      };
    }

    function resetWorkingAttendanceState() {
      selected.clear();
      confirmed.clear();
      excluded.clear();
      specialNotes.clear();
      editingAbsent.clear();
      editingDone.clear();
      advancedOpen.clear();
    }

    function restoreStateForSelectedClass() {
      resetWorkingAttendanceState();
      const record = attendanceRecords.get(classRecordKey());

      if (record) {
        record.forEach((item, key) => {
          if (item.status === 'excluded') {
            excluded.add(key);
            return;
          }

          if (['present', 'online', 'late'].includes(item.status)) {
            selected.add(key);
            confirmed.add(key);
          }

          if (item.status === 'online') specialNotes.set(key, { type: 'online', note: item.note });
          if (item.status === 'late') specialNotes.set(key, { type: 'late', note: item.note });
          if (item.status === 'absent') specialNotes.set(key, { type: 'absent', note: item.note });
        });
      }
    }

    function loadAttendanceRecords(records = []) {
      attendanceRecords.clear();
      records.forEach(item => {
        const classIndex = classIndexById(item.classId);
        const student = currentStudents.find(candidate => candidate.apiId === item.studentId || candidate.key === item.studentId);
        if (classIndex < 0 || !student) return;
        const recordKey = classRecordKey(classIndex);
        const record = new Map(attendanceRecords.get(recordKey) || []);
        record.set(student.key, { status: item.status, note: item.note || '' });
        attendanceRecords.set(recordKey, record);
      });
    }

    function applyDataSet(data = {}) {
      const selectedClassId = currentClass()?.id || '';
      applySemesters(data.semesters || semesters, data.semesterId || currentSemesterId);

      currentClasses = (data.classes || [])
        .filter(item => !item.semesterId || item.semesterId === currentSemesterId)
        .map(normalizeClass)
        .sort((a, b) => a.sortOrder - b.sortOrder);
      currentStudents = (data.students || [])
        .filter(item => !item.semesterId || item.semesterId === currentSemesterId)
        .map(normalizeStudent)
        .filter(item => item.active)
        .sort((a, b) => a.sortOrder - b.sortOrder);

      if (!currentClasses.length && currentSemesterId === DEFAULT_SEMESTERS[0].id) currentClasses = DEFAULT_CLASSES.map(normalizeClass);
      if (!currentStudents.length && currentSemesterId === DEFAULT_SEMESTERS[0].id) currentStudents = DEFAULT_STUDENTS.map(normalizeStudent);

      assignStudentKeys();
      initClasses();
      const nextClassIndex = currentClasses.findIndex(item => item.id === selectedClassId);
      if (nextClassIndex >= 0) classSelect.value = String(nextClassIndex);
      loadAttendanceRecords(data.records || data.attendance || []);
      restoreStateForSelectedClass();
      renderList();
    }

    function cacheableStudents() {
      return currentStudents.map(student => {
        const { key, ...item } = student;
        return item;
      });
    }

    function saveDataCache(source = 'local') {
      const payload = {
        source,
        cachedAt: new Date().toISOString(),
        semesterId: currentSemesterId,
        semesters,
        classes: currentClasses,
        students: cacheableStudents(),
        attendance: attendancePayloadFromRecords()
      };
      localStorage.setItem(dataCacheKey(), JSON.stringify(payload));
      localStorage.setItem(SEMESTERS_CACHE_KEY, JSON.stringify({ cachedAt: payload.cachedAt, semesterId: currentSemesterId, semesters }));
    }

    function dataCacheKey(semesterId = currentSemesterId) {
      return `${DATA_CACHE_PREFIX}:${semesterId || DEFAULT_SEMESTERS[0].id}`;
    }

    function loadCachedSemesters() {
      try {
        const raw = localStorage.getItem(SEMESTERS_CACHE_KEY);
        const cached = raw ? JSON.parse(raw) : null;
        if (cached?.semesters?.length) applySemesters(cached.semesters, localStorage.getItem(SELECTED_SEMESTER_STORAGE_KEY) || cached.semesterId);
      } catch (error) {
        console.warn('Failed to read semester cache', error);
      }
    }

    function loadDataCache(semesterId = currentSemesterId) {
      try {
        const raw = localStorage.getItem(dataCacheKey(semesterId))
          || (semesterId === DEFAULT_SEMESTERS[0].id ? localStorage.getItem('attendanceDataCache:v1') : null);
        return raw ? JSON.parse(raw) : null;
      } catch (error) {
        console.warn('Failed to read local attendance cache', error);
        return null;
      }
    }

    function renderFromCache(semesterId = currentSemesterId) {
      const cached = loadDataCache(semesterId);
      if (!cached) return false;
      applyDataSet({ ...cached, semesterId });
      setSyncState(apiUrl ? 'local' : 'unset');
      return true;
    }

    async function loadAttendanceFromApi() {
      const data = await jsonpRequest('attendance', { semesterId: currentSemesterId });
      loadAttendanceRecords(data.records || data.attendance || []);
    }

    function attendancePayloadFromRecords() {
      const records = [];
      attendanceRecords.forEach((record, recordKey) => {
        const classItem = currentClasses[Number(recordKey)];
        if (!classItem) return;

        record.forEach((item, key) => {
          const student = currentStudents.find(candidate => candidate.key === key);
          if (!student || !item.status) return;
          records.push({
            semesterId: currentSemesterId,
            classId: classItem.id,
            studentId: student.apiId || student.key,
            status: item.status,
            note: item.note || ''
          });
        });
      });
      return records;
    }

    function sortedByKeys(items, keys) {
      return [...items].sort((a, b) => {
        for (const key of keys) {
          const left = String(a[key] ?? '');
          const right = String(b[key] ?? '');
          if (left !== right) return left.localeCompare(right, 'zh-Hant');
        }
        return 0;
      });
    }

    function normalizedDataForSignature(data = {}) {
      const semesterId = data.semesterId || currentSemesterId;
      const nextSemesters = (data.semesters || semesters).map(normalizeSemester);
      let nextClasses = (data.classes || [])
        .filter(item => !item.semesterId || item.semesterId === semesterId)
        .map((item, index) => ({
          id: item.id || `class-${index + 1}`,
          semesterId: item.semesterId || semesterId,
          date: item.date || '',
          title: item.title || '',
          sortOrder: Number(item.sortOrder || index + 1)
        }))
        .sort((a, b) => a.sortOrder - b.sortOrder);
      let nextStudents = (data.students || [])
        .filter(item => !item.semesterId || item.semesterId === semesterId)
        .map((item, index) => normalizeStudent(item, index))
        .filter(item => item.active)
        .sort((a, b) => a.sortOrder - b.sortOrder);

      if (!nextClasses.length && semesterId === DEFAULT_SEMESTERS[0].id) nextClasses = DEFAULT_CLASSES.map((item, index) => ({ ...normalizeClass(item, index), semesterId }));
      if (!nextStudents.length && semesterId === DEFAULT_SEMESTERS[0].id) nextStudents = DEFAULT_STUDENTS.map((item, index) => normalizeStudent(item, index));

      const classIds = new Set(nextClasses.map(item => item.id));
      const studentIds = new Set(nextStudents.map(item => item.apiId));
      const nextAttendance = (data.records || data.attendance || [])
        .map(item => ({
          semesterId: item.semesterId || semesterId,
          classId: item.classId || '',
          studentId: item.studentId || '',
          status: item.status || '',
          note: item.note || ''
        }))
        .filter(item => item.semesterId === semesterId && classIds.has(item.classId) && studentIds.has(item.studentId) && item.status);

      return {
        semesterId,
        semesters: sortedByKeys(nextSemesters, ['id']),
        classes: nextClasses.map(item => ({
          id: item.id,
          semesterId: item.semesterId || semesterId,
          date: item.date,
          title: item.title,
          sortOrder: item.sortOrder
        })),
        students: nextStudents.map(item => ({
          id: item.apiId,
          group: item.group,
          role: item.role,
          unit: item.unit,
          name: item.name,
          studentNo: item.id || '',
          url: item.url || '#',
          active: item.active,
          sortOrder: item.sortOrder,
          semesterId: item.semesterId || ''
        })),
        attendance: sortedByKeys(nextAttendance, ['classId', 'studentId', 'status', 'note'])
      };
    }

    function dataSignature(data = {}) {
      return JSON.stringify(normalizedDataForSignature(data));
    }

    function currentDataSignature() {
      return dataSignature({
        semesterId: currentSemesterId,
        semesters,
        classes: currentClasses,
        students: cacheableStudents(),
        attendance: attendancePayloadFromRecords()
      });
    }

    async function persistAttendanceToApi() {
      if (!apiUrl) {
        setSyncState('unset');
        return { ok: false, skipped: true };
      }
      setSyncState('saving');
      const result = await postApi('saveAttendance', {
        semesterId: currentSemesterId,
        records: attendancePayloadFromRecords()
      });
      if (result && result.ok === false) throw new Error(result.error || 'API save failed');
      setSyncState('synced');
      return result;
    }

    function shouldSkipBackgroundSync(options = {}) {
      return options.background && document.hidden;
    }

    async function performApiSync(options = {}) {
      if (!apiUrl) {
        setSyncState('unset');
        return { ok: false, skipped: true };
      }

      if (shouldSkipBackgroundSync(options)) return { ok: false, skipped: true };
      setSyncState('syncing');

      try {
        const preferredSemesterId = options.semesterId || currentSemesterId;
        let nextSemesters = semesters;
        let semesterId = preferredSemesterId;

        if (options.includeSemesters) {
          const semesterData = await jsonpRequest('semesters');
          nextSemesters = (semesterData.semesters || []).map(normalizeSemester);
          const requestedSemester = nextSemesters.find(item => item.id === preferredSemesterId);
          const activeSemester = nextSemesters.find(item => item.status === 'active') || nextSemesters[0];
          semesterId = requestedSemester?.id || (options.keepSemester ? preferredSemesterId : activeSemester?.id) || preferredSemesterId;
          applySemesters(nextSemesters.length ? nextSemesters : semesters, semesterId);
        } else if (semesterId !== currentSemesterId) {
          currentSemesterId = semesterId;
          localStorage.setItem(SELECTED_SEMESTER_STORAGE_KEY, currentSemesterId);
          initSemesters();
        }

        const classesData = await jsonpRequest('classes', { semesterId });
        const studentsData = await jsonpRequest('students', { semesterId });
        const attendanceData = await jsonpRequest('attendance', { semesterId });
        const nextData = {
          semesters: nextSemesters,
          semesterId,
          classes: classesData.classes || [],
          students: studentsData.students || [],
          attendance: attendanceData.records || attendanceData.attendance || []
        };

        if (dataSignature(nextData) !== currentDataSignature()) {
          applyDataSet(nextData);
        }
        saveDataCache('api');
        setSyncState('synced');
        return { ok: true };
      } catch (error) {
        if (options.manual || options.throwOnError) console.error(error);
        else console.warn('Background sync failed:', error.message || error);
        setSyncState('failed');
        if (options.throwOnError) throw error;
        return { ok: false, error };
      }
    }

    async function reloadFromApi(options = {}) {
      const requestedSemesterId = options.semesterId || currentSemesterId;
      if (!apiUrl) {
        setSyncState('unset');
        return { ok: false, skipped: true };
      }
      if (shouldSkipBackgroundSync(options)) return { ok: false, skipped: true };

      if (syncInFlight) {
        if (options.force) {
          await syncInFlight;
          return reloadFromApi({ ...options, force: false });
        }
        if (requestedSemesterId !== syncInFlightSemesterId) queuedSyncSemesterId = requestedSemesterId;
        return syncInFlight;
      }

      syncInFlightSemesterId = requestedSemesterId;
      syncInFlight = performApiSync({ ...options, semesterId: requestedSemesterId })
        .finally(() => {
          syncInFlight = null;
          syncInFlightSemesterId = '';
          const queuedSemesterId = queuedSyncSemesterId;
          queuedSyncSemesterId = '';
          if (queuedSemesterId && queuedSemesterId !== requestedSemesterId && apiUrl && !document.hidden) {
            setTimeout(() => reloadFromApi({ semesterId: queuedSemesterId, keepSemester: true, background: true }), 0);
          }
        });

      return syncInFlight;
    }

    async function switchSemester(semesterId) {
      if (!semesterId || semesterId === currentSemesterId) return;
      currentSemesterId = semesterId;
      localStorage.setItem(SELECTED_SEMESTER_STORAGE_KEY, currentSemesterId);
      initSemesters();

      const usedCache = renderFromCache(currentSemesterId);
      if (!usedCache) {
        applyDataSet({ semesters, semesterId: currentSemesterId, classes: [], students: [], attendance: [] });
        setSyncState(apiUrl ? 'local' : 'unset');
      }

      if (apiUrl) reloadFromApi({ semesterId: currentSemesterId, keepSemester: true, background: true });
    }

    function configureApi() {
      const nextUrl = prompt('貼上 Apps Script Web App URL（留空恢復預設）', apiUrl || DEFAULT_API_URL);
      if (nextUrl === null) return;
      apiUrl = nextUrl.trim();

      if (apiUrl) {
        localStorage.setItem(API_URL_STORAGE_KEY, apiUrl);
        reloadFromApi({ semesterId: currentSemesterId, keepSemester: true, includeSemesters: true, force: true });
      } else {
        localStorage.removeItem(API_URL_STORAGE_KEY);
        apiUrl = DEFAULT_API_URL;
        reloadFromApi({ semesterId: currentSemesterId, keepSemester: true, includeSemesters: true, force: true });
      }
    }


    function escapeHtml(value) {
      return String(value ?? '')
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;');
    }

    function openAdminModal() {
      renderAdminOverview();
      setAdminTab('overview');
      setAdminStatus('尚未執行管理操作', 'light');
      document.getElementById('adminModal').classList.add('show');
      document.getElementById('adminModal').setAttribute('aria-hidden', 'false');
      document.body.classList.add('admin-modal-open');
    }

    function closeAdminModal() {
      document.getElementById('adminModal').classList.remove('show');
      document.getElementById('adminModal').setAttribute('aria-hidden', 'true');
      document.body.classList.remove('admin-modal-open');
    }

    function handleAdminBackdrop(event) {
      if (event.target.id === 'adminModal') closeAdminModal();
    }

    function setAdminTab(tab) {
      ['overview', 'semesters', 'students', 'classes'].forEach(item => {
        document.getElementById(`adminTab-${item}`).classList.toggle('active', item === tab);
        document.getElementById(`adminPanel-${item}`).classList.toggle('active', item === tab);
      });
      if (tab === 'overview') renderAdminOverview();
      if (tab === 'semesters') renderSemesterAdmin();
    }

    function setAdminStatus(text, style = 'light') {
      const status = document.getElementById('adminStatus');
      status.className = `alert alert-${style} border py-2 mb-3`;
      status.textContent = text;
    }

    function countAttendanceRecords() {
      let count = 0;
      attendanceRecords.forEach(record => { count += record.size; });
      return count;
    }

    function renderSimpleTable(rows, columns, emptyText = '尚無資料') {
      if (!rows.length) return `<div class="alert alert-light border mb-0">${emptyText}</div>`;
      return `
        <div class="table-responsive admin-preview-table border rounded">
          <table class="table table-sm table-hover align-middle mb-0">
            <thead><tr>${columns.map(column => `<th>${escapeHtml(column.label)}</th>`).join('')}</tr></thead>
            <tbody>${rows.map(row => `<tr>${columns.map(column => `<td>${escapeHtml(row[column.key])}</td>`).join('')}</tr>`).join('')}</tbody>
          </table>
        </div>`;
    }

    function renderAdminOverview() {
      const semester = currentSemester();
      const groupRows = currentGroups().map(group => {
        const people = currentStudents.filter(student => student.group === group);
        return {
          group,
          total: people.length,
          guides: people.filter(student => student.role === '輔導').length,
          members: people.filter(student => student.role === '學員').length,
          others: people.filter(student => !['輔導', '學員'].includes(student.role)).length
        };
      });
      const studentRows = currentStudents.map(student => ({
        group: student.group,
        role: student.role,
        unit: student.unit,
        name: student.name,
        id: student.id || student.apiId
      }));
      const classRows = currentClasses.map(item => ({
        id: item.id,
        date: item.date,
        title: item.title,
        sortOrder: item.sortOrder
      }));

      document.getElementById('adminOverview').innerHTML = `
        <div class="row g-3 mb-3">
          <div class="col-12 col-md-3"><div class="border rounded p-3 h-100"><div class="text-muted small">學期</div><div class="fw-bold">${escapeHtml(semester.name || semester.id)}</div><div class="small text-muted">${escapeHtml(semester.id)}</div></div></div>
          <div class="col-4 col-md-3"><div class="border rounded p-3 h-100"><div class="text-muted small">課程</div><div class="h4 mb-0">${currentClasses.length}</div></div></div>
          <div class="col-4 col-md-3"><div class="border rounded p-3 h-100"><div class="text-muted small">人員</div><div class="h4 mb-0">${currentStudents.length}</div></div></div>
          <div class="col-4 col-md-3"><div class="border rounded p-3 h-100"><div class="text-muted small">紀錄</div><div class="h4 mb-0">${countAttendanceRecords()}</div></div></div>
        </div>

        <h6 class="fw-bold mt-3">課程</h6>
        ${renderSimpleTable(classRows, [
          { key: 'id', label: 'id' },
          { key: 'date', label: '日期' },
          { key: 'title', label: '課程' },
          { key: 'sortOrder', label: '排序' }
        ], '目前學期沒有課程')}

        <h6 class="fw-bold mt-4">組別統計</h6>
        ${renderSimpleTable(groupRows, [
          { key: 'group', label: '組別' },
          { key: 'total', label: '總數' },
          { key: 'guides', label: '輔導' },
          { key: 'members', label: '學員' },
          { key: 'others', label: '其他' }
        ], '目前學期沒有人員')}

        <h6 class="fw-bold mt-4">學生名單</h6>
        ${renderSimpleTable(studentRows, [
          { key: 'group', label: '組別' },
          { key: 'role', label: '角色' },
          { key: 'unit', label: '單位' },
          { key: 'name', label: '姓名' },
          { key: 'id', label: 'id / 學號' }
        ], '目前學期沒有學生')}
      `;
    }

    function semesterExists(semesterId) {
      return semesters.some(item => item.id === semesterId);
    }

    function semesterFormatLooksGood(semesterId) {
      return /^sem-\d{3}-(up|down)$/.test(semesterId);
    }

    function semesterNameFromId(semesterId) {
      const match = /^sem-(\d{3})-(up|down)$/.exec(semesterId);
      if (!match) return '';
      return `${match[1]}${match[2] === 'up' ? '上' : '下'}培緣`;
    }

    function semesterPayloadFromInputs(idInputId, nameInputId) {
      return {
        id: document.getElementById(idInputId).value.trim(),
        name: document.getElementById(nameInputId).value.trim()
      };
    }

    function semesterFormErrors(payload, options = {}) {
      const errors = [];
      if (!payload.id) errors.push('semesterId 不可空白');
      else {
        if (semesterExists(payload.id)) errors.push(`semesterId 已存在：${payload.id}`);
      }
      if (!payload.name) errors.push('name 不可空白');
      if (options.requireCloneSelection && !options.copyStudents && !options.copyClasses) errors.push('請至少勾選複製學生或複製課程');
      return errors;
    }

    function semesterFormatHint(semesterId) {
      return semesterId && !semesterFormatLooksGood(semesterId) ? 'semesterId 建議格式：sem-115-up' : '';
    }

    function renderSemesterValidation(targetId, payload, errors, details = '') {
      const target = document.getElementById(targetId);
      if (errors.length) {
        target.innerHTML = `<div class="alert alert-danger py-2 mb-0"><ul class="mb-0">${errors.map(error => `<li>${escapeHtml(error)}</li>`).join('')}</ul></div>`;
        return;
      }

      const hint = semesterFormatHint(payload.id);
      target.innerHTML = `
        <div class="alert alert-success py-2 mb-0">
          <div class="fw-bold">${escapeHtml(payload.id)} / ${escapeHtml(payload.name)}</div>
          ${hint ? `<div class="small text-warning mt-1">${escapeHtml(hint)}</div>` : ''}
          ${details ? `<div class="small mt-1">${details}</div>` : ''}
        </div>`;
    }

    function validateCreateSemesterForm() {
      const payload = semesterPayloadFromInputs('newSemesterIdInput', 'newSemesterNameInput');
      if (payload.id && !payload.name) {
        const suggestedName = semesterNameFromId(payload.id);
        if (suggestedName) document.getElementById('newSemesterNameInput').placeholder = suggestedName;
      }
      const errors = semesterFormErrors(payload);
      renderSemesterValidation('createSemesterPreview', payload, errors, '將新增一筆 semesters row，不會建立學生、課程或 attendance。');
      document.getElementById('createSemesterButton').disabled = Boolean(errors.length);
    }

    function renderSemesterOptions() {
      const options = semesters
        .map(item => `<option value="${escapeHtml(item.id)}">${escapeHtml(item.name || item.id)} (${escapeHtml(item.id)})</option>`)
        .join('');
      const cloneSelect = document.getElementById('cloneSourceSemesterSelect');
      cloneSelect.innerHTML = options;
      if (semesters.some(item => item.id === currentSemesterId)) cloneSelect.value = currentSemesterId;
    }

    function renderSemesterAdmin() {
      renderSemesterOptions();
      validateCreateSemesterForm();
      renderCloneSemesterPreview();
    }

    async function sourceSemesterCounts(semesterId) {
      if (!semesterId) return { students: 0, classes: 0 };
      if (clonePreviewCache.has(semesterId)) return clonePreviewCache.get(semesterId);

      if (!apiUrl) return { students: 0, classes: 0 };
      const studentsData = await jsonpRequest('students', { semesterId });
      const classesData = await jsonpRequest('classes', { semesterId });
      const counts = {
        students: (studentsData.students || []).length,
        classes: (classesData.classes || []).length
      };
      clonePreviewCache.set(semesterId, counts);
      return counts;
    }

    async function renderCloneSemesterPreview() {
      const sourceSemesterId = document.getElementById('cloneSourceSemesterSelect').value;
      const payload = semesterPayloadFromInputs('cloneSemesterIdInput', 'cloneSemesterNameInput');
      if (payload.id && !payload.name) {
        const suggestedName = semesterNameFromId(payload.id);
        if (suggestedName) document.getElementById('cloneSemesterNameInput').placeholder = suggestedName;
      }
      const copyStudents = document.getElementById('cloneStudentsCheckbox').checked;
      const copyClasses = document.getElementById('cloneClassesCheckbox').checked;
      const errors = semesterFormErrors(payload, { requireCloneSelection: true, copyStudents, copyClasses });
      const button = document.getElementById('cloneSemesterButton');

      if (!sourceSemesterId) errors.push('請選擇來源 semester');
      button.disabled = true;

      if (errors.length) {
        renderSemesterValidation('cloneSemesterPreview', payload, errors);
        return;
      }

      document.getElementById('cloneSemesterPreview').innerHTML = '<div class="alert alert-warning py-2 mb-0">讀取來源學期預覽中...</div>';

      try {
        const counts = await sourceSemesterCounts(sourceSemesterId);
        const details = [
          `來源：${escapeHtml(sourceSemesterId)}`,
          copyStudents ? `將複製學生 ${counts.students} 人` : '不複製學生',
          copyClasses ? `將複製課程 ${counts.classes} 堂` : '不複製課程',
          '不複製 attendance'
        ].join('；');
        renderSemesterValidation('cloneSemesterPreview', payload, [], details);
        button.disabled = false;
      } catch (error) {
        console.error(error);
        renderSemesterValidation('cloneSemesterPreview', payload, [`讀取來源學期失敗：${error.message}`]);
      }
    }

    async function syncToSemester(semesterId) {
      currentSemesterId = semesterId;
      localStorage.setItem(SELECTED_SEMESTER_STORAGE_KEY, currentSemesterId);
      clonePreviewCache.clear();
      await reloadFromApi({ semesterId, keepSemester: true, includeSemesters: true, force: true, throwOnError: true });
      renderAdminOverview();
      renderSemesterAdmin();
    }

    async function confirmCreateSemester() {
      const payload = semesterPayloadFromInputs('newSemesterIdInput', 'newSemesterNameInput');
      const errors = semesterFormErrors(payload);
      validateCreateSemesterForm();
      if (errors.length) return;
      if (!confirm(`確定新增學期「${payload.name}」？\nsemesterId：${payload.id}`)) return;

      const button = document.getElementById('createSemesterButton');
      button.disabled = true;
      setAdminStatus('新增學期中', 'warning');

      try {
        const result = await postApi('createSemester', payload);
        if (result && result.ok === false) throw new Error(result.error || '新增學期失敗');
        await syncToSemester(payload.id);
        document.getElementById('newSemesterIdInput').value = '';
        document.getElementById('newSemesterNameInput').value = '';
        validateCreateSemesterForm();
        setAdminStatus(`已新增並切換到 ${payload.name}`, 'success');
      } catch (error) {
        console.error(error);
        setAdminStatus(`新增學期失敗：${error.message}`, 'danger');
        validateCreateSemesterForm();
      }
    }

    async function confirmCloneSemester() {
      const sourceSemesterId = document.getElementById('cloneSourceSemesterSelect').value;
      const payload = semesterPayloadFromInputs('cloneSemesterIdInput', 'cloneSemesterNameInput');
      const copyStudents = document.getElementById('cloneStudentsCheckbox').checked;
      const copyClasses = document.getElementById('cloneClassesCheckbox').checked;
      const errors = semesterFormErrors(payload, { requireCloneSelection: true, copyStudents, copyClasses });
      if (!sourceSemesterId) errors.push('請選擇來源 semester');
      if (errors.length) {
        renderSemesterValidation('cloneSemesterPreview', payload, errors);
        return;
      }

      let counts;
      try {
        counts = await sourceSemesterCounts(sourceSemesterId);
      } catch (error) {
        console.error(error);
        renderSemesterValidation('cloneSemesterPreview', payload, [`讀取來源學期失敗：${error.message}`]);
        return;
      }
      const studentText = copyStudents ? `學生 ${counts.students} 人` : '不複製學生';
      const classText = copyClasses ? `課程 ${counts.classes} 堂` : '不複製課程';
      if (!confirm(`確定複製學期？\n來源：${sourceSemesterId}\n新學期：${payload.id} / ${payload.name}\n${studentText}，${classText}\n不會複製 attendance。`)) return;

      const button = document.getElementById('cloneSemesterButton');
      button.disabled = true;
      setAdminStatus('複製學期中', 'warning');

      try {
        const result = await postApi('cloneSemester', {
          sourceSemesterId,
          targetSemesterId: payload.id,
          name: payload.name,
          copyStudents,
          copyClasses
        });
        if (result && result.ok === false) throw new Error(result.error || '複製學期失敗');
        await syncToSemester(payload.id);
        document.getElementById('cloneSemesterIdInput').value = '';
        document.getElementById('cloneSemesterNameInput').value = '';
        setAdminStatus(`已複製並切換到 ${payload.name}`, 'success');
      } catch (error) {
        console.error(error);
        setAdminStatus(`複製學期失敗：${error.message}`, 'danger');
        renderCloneSemesterPreview();
      }
    }

    function canonicalCsvHeader(value) {
      return String(value || '').replace(/^\ufeff/, '').trim().toLowerCase().replace(/[\s_-]+/g, '');
    }

    function normalizeClientSortOrder(value, fallback) {
      const number = Number(value);
      return Number.isFinite(number) && number > 0 ? number : fallback;
    }

    function csvAliases(type) {
      if (type === 'classes') {
        return {
          id: ['id', 'classId', '課程id', '編號'],
          semesterId: ['semesterId', '學期id', '學期'],
          date: ['date', '日期', '上課日期'],
          title: ['title', '課程', '課程名稱', '名稱'],
          sortOrder: ['sortOrder', '排序', '順序']
        };
      }
      return {
        id: ['id', 'apiId', 'studentId', '學員id', '學生id', '編號'],
        group: ['group', '組別', '組'],
        role: ['role', '角色', '身分'],
        unit: ['unit', '單位', '地方單位'],
        name: ['name', '姓名', '名字'],
        studentNo: ['studentNo', '學號'],
        url: ['url', 'link', '連結', '報到連結'],
        active: ['active', '啟用', '是否啟用'],
        sortOrder: ['sortOrder', '排序', '順序'],
        semesterId: ['semesterId', '學期id', '學期']
      };
    }

    function parseCsv(text) {
      const rows = [];
      let row = [];
      let field = '';
      let inQuotes = false;
      const source = String(text || '');

      for (let index = 0; index < source.length; index += 1) {
        const char = source[index];
        if (inQuotes) {
          if (char === '"') {
            if (source[index + 1] === '"') {
              field += '"';
              index += 1;
            } else {
              inQuotes = false;
            }
          } else {
            field += char;
          }
        } else if (char === '"') {
          inQuotes = true;
        } else if (char === ',') {
          row.push(field);
          field = '';
        } else if (char === '\n') {
          row.push(field);
          rows.push(row);
          row = [];
          field = '';
        } else if (char !== '\r') {
          field += char;
        }
      }

      row.push(field);
      rows.push(row);
      return rows.filter(item => item.some(cell => String(cell).trim() !== ''));
    }

    function mapCsvRows(type, text) {
      const matrix = parseCsv(text);
      const errors = [];
      if (matrix.length < 2) return { rows: [], errors: ['CSV 需要標題列與至少一筆資料'] };

      const headers = matrix[0].map(canonicalCsvHeader);
      const aliases = csvAliases(type);
      const canonicalAliases = Object.fromEntries(Object.entries(aliases).map(([key, list]) => [key, list.map(canonicalCsvHeader)]));
      const ids = new Set();

      function valueFor(row, key) {
        const index = headers.findIndex(header => canonicalAliases[key].includes(header));
        return index >= 0 ? String(row[index] ?? '').trim() : '';
      }

      const rows = matrix.slice(1).map((row, index) => {
        const line = index + 2;
        if (type === 'classes') {
          const item = {
            id: valueFor(row, 'id') || `class-${index + 1}`,
            semesterId: valueFor(row, 'semesterId') || currentSemesterId,
            date: valueFor(row, 'date'),
            title: valueFor(row, 'title'),
            sortOrder: normalizeClientSortOrder(valueFor(row, 'sortOrder'), index + 1)
          };
          if (!item.date) errors.push(`第 ${line} 列缺少 date`);
          if (!item.title) errors.push(`第 ${line} 列缺少 title`);
          if (ids.has(item.id)) errors.push(`第 ${line} 列 id 重複：${item.id}`);
          ids.add(item.id);
          return item;
        }

        const item = {
          id: valueFor(row, 'id') || `student-${String(index + 1).padStart(3, '0')}`,
          group: valueFor(row, 'group'),
          role: valueFor(row, 'role'),
          unit: valueFor(row, 'unit'),
          name: valueFor(row, 'name'),
          studentNo: valueFor(row, 'studentNo'),
          url: valueFor(row, 'url') || '#',
          active: valueFor(row, 'active') || 'TRUE',
          sortOrder: normalizeClientSortOrder(valueFor(row, 'sortOrder'), index + 1),
          semesterId: valueFor(row, 'semesterId') || currentSemesterId
        };
        if (!item.group) errors.push(`第 ${line} 列缺少 group`);
        if (!item.role) errors.push(`第 ${line} 列缺少 role`);
        if (!item.name) errors.push(`第 ${line} 列缺少 name`);
        if (ids.has(item.id)) errors.push(`第 ${line} 列 id 重複：${item.id}`);
        ids.add(item.id);
        return item;
      });

      return { rows, errors };
    }

    function importPreviewConfig(type) {
      if (type === 'classes') {
        return {
          label: '課程',
          previewId: 'classImportPreview',
          buttonId: 'classImportButton',
          action: 'importClasses',
          columns: [
            { key: 'id', label: 'id' },
            { key: 'semesterId', label: 'semesterId' },
            { key: 'date', label: 'date' },
            { key: 'title', label: 'title' },
            { key: 'sortOrder', label: 'sortOrder' }
          ]
        };
      }
      return {
        label: '學生',
        previewId: 'studentImportPreview',
        buttonId: 'studentImportButton',
        action: 'importStudents',
        columns: [
          { key: 'id', label: 'id' },
          { key: 'group', label: 'group' },
          { key: 'role', label: 'role' },
          { key: 'unit', label: 'unit' },
          { key: 'name', label: 'name' },
          { key: 'studentNo', label: 'studentNo' },
          { key: 'active', label: 'active' },
          { key: 'sortOrder', label: 'sortOrder' }
        ]
      };
    }

    function renderImportPreview(type) {
      const state = adminImportState[type];
      const config = importPreviewConfig(type);
      const preview = document.getElementById(config.previewId);
      const button = document.getElementById(config.buttonId);
      button.disabled = Boolean(state.errors.length || !state.rows.length);

      if (!state.fileName) {
        preview.innerHTML = '';
        return;
      }

      const shownRows = state.rows.slice(0, 80);
      const hiddenCount = Math.max(state.rows.length - shownRows.length, 0);
      const errorHtml = state.errors.length
        ? `<div class="alert alert-danger"><div class="fw-bold mb-1">匯入前請修正</div><ul class="mb-0">${state.errors.map(error => `<li>${escapeHtml(error)}</li>`).join('')}</ul></div>`
        : `<div class="alert alert-success">${escapeHtml(state.fileName)} 已解析 ${state.rows.length} 筆${config.label}資料</div>`;

      preview.innerHTML = `
        ${errorHtml}
        ${renderSimpleTable(shownRows, config.columns, 'CSV 沒有可匯入資料')}
        ${hiddenCount ? `<div class="small text-muted mt-2">另有 ${hiddenCount} 筆未顯示</div>` : ''}
      `;
    }

    function readFileText(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result || '');
        reader.onerror = () => reject(new Error('讀取 CSV 失敗'));
        reader.readAsText(file, 'utf-8');
      });
    }

    async function handleCsvFile(type, input) {
      const file = input.files && input.files[0];
      adminImportState[type] = { rows: [], errors: [], fileName: file ? file.name : '' };
      renderImportPreview(type);
      if (!file) return;

      try {
        const text = await readFileText(file);
        const parsed = mapCsvRows(type, text);
        adminImportState[type] = { ...parsed, fileName: file.name };
        renderImportPreview(type);
        setAdminStatus(parsed.errors.length ? 'CSV 預覽包含錯誤' : 'CSV 預覽完成', parsed.errors.length ? 'danger' : 'success');
      } catch (error) {
        adminImportState[type] = { rows: [], errors: [error.message], fileName: file.name };
        renderImportPreview(type);
        setAdminStatus('CSV 讀取失敗', 'danger');
      }
    }

    async function confirmCsvImport(type) {
      const state = adminImportState[type];
      const config = importPreviewConfig(type);
      if (!state.rows.length || state.errors.length) return;
      if (!apiUrl) {
        alert('請先設定 Apps Script API URL');
        configureApi();
        return;
      }
      if (!confirm(`確定將 ${state.rows.length} 筆${config.label}資料匯入「${currentSemesterLabel()}」？\n這會替換 Google Sheet 目前學期的${config.label}清單。`)) return;

      const button = document.getElementById(config.buttonId);
      button.disabled = true;
      setAdminStatus(`${config.label}匯入中`, 'warning');

      try {
        const result = await postApi(config.action, {
          semesterId: currentSemesterId,
          rows: state.rows
        });
        if (result && result.ok === false) throw new Error(result.error || '匯入失敗');
        await reloadFromApi({ semesterId: currentSemesterId, keepSemester: true, throwOnError: true });
        renderAdminOverview();
        renderImportPreview(type);
        setAdminStatus(`${config.label}匯入完成，已重新同步前端資料`, 'success');
      } catch (error) {
        console.error(error);
        button.disabled = false;
        setAdminStatus(`${config.label}匯入失敗：${error.message}`, 'danger');
      }
    }

    function pct(actual, total) { if (!total) return '0%'; return `${Math.round((actual / total) * 100)}%`; }
    function findStudent(key) { return currentStudents.find(student => student.key === key); }
    function classEndColumn() { return 5 + currentClasses.length * 3; }
    function summaryStartColumn() { return classEndColumn() + 2; }
    function totalExportColumns() { return summaryStartColumn() + 2; }
    function classRecordKey(index = classSelect.value || 0) { return String(index); }
    function currentClass() { return currentClasses[Number(classSelect.value || 0)] || currentClasses[0]; }
    function classIndexById(classId) { return currentClasses.findIndex(item => item.id === classId); }
    function isExcluded(student) { return Boolean(student && excluded.has(student.key)); }
    function isPresent(student) { if (!student || isExcluded(student)) return false; const special = specialNotes.get(student.key); return selected.has(student.key) || special?.type === 'online' || special?.type === 'late'; }
    function isAbsent(student) { if (!student || isExcluded(student)) return false; return specialNotes.get(student.key)?.type === 'absent'; }
    function isDone(student) { return confirmed.has(student.key) || isAbsent(student) || isExcluded(student); }
    function isEditingDone(student) { return editingDone.has(student.key); }
    function isLocked(student) { return isDone(student) && !isEditingDone(student); }

    function attendanceSummaryFor(student) {
      let presentCount = 0;
      let absentCount = 0;
      attendanceRecords.forEach(record => {
        const item = record.get(student.key);
        if (!item || item.status === 'excluded') return;
        if (['present', 'online', 'late'].includes(item.status)) presentCount += 1;
        if (item.status === 'absent') absentCount += 1;
      });
      const currentClassIndex = String(classSelect.value || 0);
      const alreadyRecordedCurrent = attendanceRecords.get(currentClassIndex)?.has(student.key);
      if (!alreadyRecordedCurrent && isPresent(student)) presentCount += 1;
      if (!alreadyRecordedCurrent && isAbsent(student)) absentCount += 1;
      return { presentCount, absentCount, totalCount: currentClasses.length };
    }

    function nameClassFor(student) {
      const { absentCount, totalCount } = attendanceSummaryFor(student);
      if (absentCount > totalCount / 2) return 'name-danger';
      if (absentCount >= 3) return 'name-warning';
      return '';
    }

    function statsFor(group, role = null) {
      const people = currentStudents.filter(student => student.group === group && (!role || student.role === role) && !isExcluded(student));
      const actual = people.filter(isPresent).length;
      return { actual, total: people.length, rate: pct(actual, people.length) };
    }

    function roleClass(role) { if (role.includes('講師') || role.includes('點傳師')) return 'text-bg-danger'; if (role === '輔導') return 'text-bg-warning'; return 'text-bg-success'; }
    function specialLabel(type) { return { online: '線上', late: '遲到', absent: '缺席' }[type] || ''; }
    function specialBadgeClass(type) { return { online: 'text-bg-info', late: 'text-bg-warning', absent: 'text-bg-secondary' }[type] || 'text-bg-light'; }

    function renderStudentStatus(student) {
      if (isExcluded(student)) return '<span class="badge text-bg-dark">不列入出席</span>';
      const special = specialNotes.get(student.key);
      if (!special) return '<span class="text-muted small">一般出席</span>';
      if (special.type === 'absent') return `<span class="badge ${specialBadgeClass(special.type)}">已請假</span> <span class="small text-muted">${special.note}</span>`;
      return `<span class="badge ${specialBadgeClass(special.type)}">${specialLabel(special.type)}</span>`;
    }

    function specialTextFor(group) {
      const list = currentStudents.filter(student => student.group === group && !isExcluded(student) && specialNotes.has(student.key)).map(student => ({ ...student, special: specialNotes.get(student.key) }));
      if (!list.length) return '<span class="text-muted">無</span>';
      return `<ul class="mb-0 ps-3">${list.map(student => student.special.type === 'absent' ? `<li><strong>${student.name}</strong>：${student.special.note}</li>` : `<li><strong>${student.name}</strong>：${specialLabel(student.special.type)}</li>`).join('')}</ul>`;
    }

    function getFilteredAndSortedPeople(group, keyword) {
      return currentStudents.filter(student => {
        if (student.group !== group) return false;
        if (!keyword) return true;
        return [student.name, student.group, student.role, student.unit, student.id].join(' ').toLowerCase().includes(keyword);
      }).sort((a, b) => {
        const aDone = isDone(a);
        const bDone = isDone(b);
        if (aDone === bDone) return 0;
        return aDone ? 1 : -1;
      });
    }

    function renderSummary() {
      const selectedClass = currentClasses[classSelect.value] || currentClasses[0] || { date: '', title: '尚未設定課程' };
      const totalActual = currentStudents.filter(isPresent).length;
      const total = currentStudents.filter(student => !isExcluded(student)).length;
      document.getElementById('summaryArea').innerHTML = `
        <div class="card summary-card shadow-sm"><div class="card-body">
          <div class="d-flex flex-column flex-md-row justify-content-between gap-2 mb-3">
            <div><div class="text-muted">本次課程</div><h4 class="mb-0">${selectedClass.date} ${selectedClass.title}</h4></div>
            <div class="text-md-end"><div class="text-muted">總出席率</div><h4 class="mb-0">${totalActual} / ${total}（${pct(totalActual, total)}）</h4></div>
          </div>
          <div class="table-responsive"><table class="table table-sm table-bordered align-middle mb-0 table-summary"><thead class="table-light"><tr><th>組別</th><th>輔導</th><th>學員</th><th>該組當天總出席率</th></tr></thead><tbody>
            ${currentGroups().map(group => {
              const guide = statsFor(group, '輔導');
              const member = statsFor(group, '學員');
              const all = statsFor(group);
              const isTeacherGroup = group === '講師';
              return `<tr><th>${group} ${all.total > 0 && all.actual === all.total ? '🎉' : ''}</th><td>${isTeacherGroup ? '-' : `${guide.actual} / ${guide.total}（${guide.rate}）`}</td><td>${isTeacherGroup ? '-' : `${member.actual} / ${member.total}（${member.rate}）`}</td><td>${all.actual} / ${all.total}（${all.rate}）</td></tr>`;
            }).join('')}
          </tbody></table></div>
          <div class="mt-4"><h5 class="fw-bold mb-2">特殊情況</h5><div class="table-responsive"><table class="table table-sm table-bordered align-middle mb-0 table-summary"><thead class="table-light"><tr><th style="width: 7rem;">組別</th><th>特殊情況條列</th></tr></thead><tbody>${reportGroups().map(group => `<tr><th>${group}</th><td>${specialTextFor(group)}</td></tr>`).join('')}</tbody></table></div></div>
        </div></div>`;
    }

    function renderStudentCard(student) {
      const special = specialNotes.get(student.key);
      const present = isPresent(student);
      const absent = isAbsent(student);
      const done = isDone(student);
      const excludedStudent = isExcluded(student);
      const attendance = attendanceSummaryFor(student);
      return `
        <div class="col-12 col-md-6 col-xl-4"><div class="card student-card h-100 ${present ? 'checked' : ''} ${absent ? 'absent' : ''} ${done ? 'done' : ''} ${excludedStudent ? 'excluded' : ''}" onclick="cardToggle('${student.key}', event)"><div class="card-body position-relative">
          ${done ? `<button type="button" class="btn btn-sm ${isEditingDone(student) ? 'btn-primary' : 'btn-light'} position-absolute top-0 end-0 m-2 border" onclick="toggleEditDone('${student.key}', event)" title="編輯">✎ 編輯</button>` : ''}
          <div class="d-flex align-items-start gap-3 pe-4">
            <input class="form-check-input fs-4 mt-1" type="checkbox" ${selected.has(student.key) ? 'checked' : ''} ${(absent || isLocked(student) || excludedStudent) ? 'disabled' : ''} onclick="event.stopPropagation()" onchange="toggleStudent('${student.key}', this.checked)">
            <div class="flex-grow-1">
              <div class="d-flex flex-wrap gap-2 align-items-center mb-1">
                <span class="badge role-badge ${roleClass(student.role)}">${student.role}</span>
                <strong class="${nameClassFor(student)}">${student.name}</strong>
                <span class="small text-muted">(${attendance.presentCount}/${attendance.totalCount})</span>
                ${confirmed.has(student.key) ? '<span class="badge text-bg-success">已報到</span>' : ''}
                ${absent ? '<span class="badge text-bg-secondary">已請假</span>' : ''}
                ${excludedStudent ? '<span class="badge text-bg-dark">不列入出席</span>' : ''}
              </div>
              <div class="text-muted unit">${student.unit || '未填單位'}</div>
              ${student.id ? `<div class="text-muted student-id">${student.id}</div>` : ''}
              <div class="status-line mt-2">${renderStudentStatus(student)}</div>
              <div class="special-actions d-flex flex-wrap gap-2 mt-2">
                <button type="button" class="btn btn-sm ${special?.type === 'online' ? 'btn-info' : 'btn-outline-info'}" ${(isLocked(student) || excludedStudent) ? 'disabled' : ''} onclick="setSpecial('${student.key}', 'online', event)">線上</button>
                <button type="button" class="btn btn-sm ${special?.type === 'late' ? 'btn-warning' : 'btn-outline-warning'}" ${(isLocked(student) || excludedStudent) ? 'disabled' : ''} onclick="setSpecial('${student.key}', 'late', event)">遲到</button>
                <button type="button" class="btn btn-sm ${special?.type === 'absent' ? 'btn-secondary' : 'btn-outline-secondary'}" ${(isLocked(student) || confirmed.has(student.key) || excludedStudent) ? 'disabled' : ''} onclick="startAbsent('${student.key}', event)">缺席</button>
              </div>
              ${(editingAbsent.has(student.key) || (isEditingDone(student) && absent)) ? `<div class="mt-3 p-2 bg-light rounded border" onclick="event.stopPropagation()"><label class="form-label small fw-bold mb-1">請假理由</label><input class="form-control form-control-sm" id="reason-${student.key}" value="${absent ? (special?.note || '').replace('請假：', '') : ''}" placeholder="例如：家中有事、身體不適"><div class="d-flex gap-2 mt-2"><button type="button" class="btn btn-sm btn-success" onclick="saveAbsent('${student.key}', event)">${absent ? '儲存修改' : '確認缺席'}</button><button type="button" class="btn btn-sm btn-outline-secondary" onclick="cancelAbsentEdit('${student.key}', event)">取消</button></div></div>` : ''}
              ${isEditingDone(student) ? `<div class="mt-3 pt-2 border-top" onclick="event.stopPropagation()"><button type="button" class="btn btn-link btn-sm text-muted p-0" onclick="toggleAdvanced('${student.key}', event)">其他設定</button>${advancedOpen.has(student.key) ? `<div class="mt-2"><button type="button" class="btn btn-sm ${excludedStudent ? 'btn-dark' : 'btn-outline-dark'}" onclick="toggleExclude('${student.key}', event)">${excludedStudent ? '恢復列入出席' : '不列入出席'}</button></div>` : ''}</div>` : ''}
            </div>
          </div>
        </div></div></div>`;
    }

    function renderList() {
      const keyword = searchEl.value.trim().toLowerCase();
      visibleIds.clear();
      listEl.innerHTML = currentGroups().map(group => {
        const people = getFilteredAndSortedPeople(group, keyword);
        people.forEach(student => visibleIds.add(student.key));
        if (!people.length) return '';
        const groupStats = statsFor(group);
        return `<section class="mb-4" id="group-${group}"><div class="d-flex justify-content-between align-items-center mb-2 flex-wrap gap-2"><div class="d-flex align-items-center gap-2"><h5 class="mb-0 fw-bold">${group} ${groupStats.total > 0 && groupStats.actual === groupStats.total ? '🎉' : ''}</h5><span class="badge text-bg-light border">${groupStats.actual} / ${groupStats.total}</span></div><div class="d-flex gap-2"><button class="btn btn-sm btn-outline-primary" type="button" onclick="selectGroup('${group}')">全選</button><button class="btn btn-sm btn-outline-secondary" type="button" onclick="clearGroup('${group}')">取消</button></div></div><div class="row g-3">${people.map(renderStudentCard).join('')}</div></section>`;
      }).join('');
      updateSummary();
      renderSummary();
    }

    function cardToggle(key, event) {
      if (event.target.closest('button') || event.target.closest('input')) return;
      if (specialNotes.get(key)?.type === 'absent' || excluded.has(key)) return;
      const student = findStudent(key);
      if (confirmed.has(key)) return;
      if (isPresent(student)) { selected.delete(key); specialNotes.delete(key); editingAbsent.delete(key); }
      else selected.add(key);
      renderList();
    }

    function toggleStudent(key, isChecked) {
      if (specialNotes.get(key)?.type === 'absent' || excluded.has(key)) return;
      if (confirmed.has(key) && !isChecked) { selected.add(key); renderList(); return; }
      if (isChecked) selected.add(key);
      else { selected.delete(key); specialNotes.delete(key); editingAbsent.delete(key); }
      renderList();
    }

    function setSpecial(key, type, event) {
      event.stopPropagation();
      const student = findStudent(key);
      if (isLocked(student) || excluded.has(key)) return;
      const current = specialNotes.get(key);
      if (current?.type === type) { specialNotes.delete(key); editingAbsent.delete(key); selected.add(key); renderList(); return; }
      editingAbsent.delete(key);
      specialNotes.set(key, { type, note: type === 'online' ? '線上（須整堂課上完）' : '遲到' });
      selected.add(key);
      renderList();
    }

    function startAbsent(key, event) {
      event.stopPropagation();
      const student = findStudent(key);
      if (confirmed.has(key) || isLocked(student) || excluded.has(key)) return;
      const current = specialNotes.get(key);
      if (current?.type === 'absent') { specialNotes.delete(key); editingAbsent.delete(key); renderList(); return; }
      editingAbsent.add(key);
      renderList();
    }

    function saveAbsent(key, event) {
      event.stopPropagation();
      const input = document.getElementById(`reason-${key}`);
      const reason = input.value.trim();
      if (!reason) { input.classList.add('is-invalid'); input.placeholder = '請假理由必填'; return; }
      specialNotes.set(key, { type: 'absent', note: `請假：${reason}` });
      editingDone.delete(key);
      selected.delete(key);
      editingAbsent.delete(key);
      renderList();
    }

    function cancelAbsentEdit(key, event) { event.stopPropagation(); editingAbsent.delete(key); renderList(); }

    function toggleEditDone(key, event) {
      event.stopPropagation();
      const student = findStudent(key);
      if (isAbsent(student)) editingAbsent.add(key);
      if (editingDone.has(key)) { editingDone.delete(key); editingAbsent.delete(key); advancedOpen.delete(key); }
      else editingDone.add(key);
      renderList();
    }

    function toggleAdvanced(key, event) { event.stopPropagation(); if (advancedOpen.has(key)) advancedOpen.delete(key); else advancedOpen.add(key); renderList(); }

    function setExcludedFromClass(key, classIndex, shouldExclude) {
      for (let index = classIndex; index < currentClasses.length; index += 1) {
        const recordKey = String(index);
        const record = new Map(attendanceRecords.get(recordKey) || []);

        if (shouldExclude) {
          record.set(key, { status: 'excluded', note: '不列入出席' });
        } else if (record.get(key)?.status === 'excluded') {
          record.delete(key);
        }

        if (record.size) attendanceRecords.set(recordKey, record);
        else attendanceRecords.delete(recordKey);
      }
    }

    function toggleExclude(key, event) {
      event.stopPropagation();
      const classIndex = Number(classSelect.value || 0);
      if (excluded.has(key)) {
        excluded.delete(key);
        setExcludedFromClass(key, classIndex, false);
      } else {
        excluded.add(key);
        setExcludedFromClass(key, classIndex, true);
        selected.delete(key);
        confirmed.delete(key);
        specialNotes.delete(key);
        editingAbsent.delete(key);
      }
      editingDone.delete(key);
      advancedOpen.delete(key);
      renderList();
    }

    function updateSummary() {
      const presentCount = currentStudents.filter(isPresent).length;
      const pendingCount = currentStudents.filter(student => isPresent(student) && !confirmed.has(student.key)).length;
      document.getElementById('countBadge').textContent = `已出席 ${presentCount} 人`;
      document.getElementById('selectedSummary').textContent = pendingCount ? `準備送出 ${pendingCount} 人報到` : '尚未勾選';
    }

    function clearChecks() {
      selected.clear(); confirmed.clear(); excluded.clear(); specialNotes.clear(); editingAbsent.clear(); editingDone.clear(); advancedOpen.clear(); attendanceRecords.clear(); renderList();
    }

    function checkAllVisible() { visibleIds.forEach(key => { if (specialNotes.get(key)?.type !== 'absent' && !excluded.has(key)) selected.add(key); }); renderList(); }

    function selectGroup(group) {
      currentStudents.forEach(student => {
        if (student.group !== group) return;
        if (excluded.has(student.key)) return;
        if (specialNotes.get(student.key)?.type === 'absent') return;
        selected.add(student.key);
      });
      renderList();
    }

    function clearGroup(group) {
      currentStudents.forEach(student => {
        if (student.group !== group) return;
        if (confirmed.has(student.key)) return;

        selected.delete(student.key);

        if (specialNotes.get(student.key)?.type !== 'absent') {
          specialNotes.delete(student.key);
        }
      });
      renderList();
    }
    function scrollToGroup(group) { const el = document.getElementById(`group-${group}`); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    function scrollToTop() { document.getElementById('pageTop').scrollIntoView({ behavior: 'smooth', block: 'start' }); }

    function snapshotRecordForClass(classIndex) {
      const record = new Map(attendanceRecords.get(String(classIndex)) || []);
      const currentClassIndex = String(classSelect.value || 0);
      if (String(classIndex) !== currentClassIndex) return record;

      currentStudents.forEach(student => {
        if (excluded.has(student.key)) {
          record.set(student.key, { status: 'excluded', note: '不列入出席' });
          return;
        }

        const special = specialNotes.get(student.key);
        if (special?.type === 'absent') record.set(student.key, { status: 'absent', note: special.note });
        else if (special?.type === 'online') record.set(student.key, { status: 'online', note: special.note });
        else if (special?.type === 'late') record.set(student.key, { status: 'late', note: special.note });
        else if (isPresent(student)) record.set(student.key, { status: 'present', note: '已報到' });
      });

      return record;
    }

    function excelStatusFor(item) {
      if (!item) return '';
      if (item.status === 'excluded') return '△';
      if (item.status === 'absent') return 'X';
      if (item.status === 'late') return '/';
      if (item.status === 'online') return 'V';
      if (item.status === 'present') return 'V';
      return '';
    }

    function excelReasonFor(item) {
      if (!item) return '';
      if (item.status === 'absent') return (item.note || '').replace(/^請假：/, '');
      if (item.status === 'online') return '線上';
      if (item.status === 'late') return '遲到';
      if (item.status === 'excluded') return '不列入出席';
      return '';
    }

    function classStartColumn(index) { return 6 + index * 3; }
    function roleLabelForExcel(student) {
      if (student.group === '講師') return student.role;
      return `${student.group.replace('組', '')}${student.role}`;
    }

    function styleCell(cell, options = {}) {
      cell.border = {
        top: { style: 'thin', color: { argb: 'FF999999' } },
        left: { style: 'thin', color: { argb: 'FF999999' } },
        bottom: { style: 'thin', color: { argb: 'FF999999' } },
        right: { style: 'thin', color: { argb: 'FF999999' } }
      };
      cell.alignment = { vertical: 'middle', horizontal: options.horizontal || 'center', wrapText: true };
      if (options.fill) cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: options.fill } };
      if (options.bold) cell.font = { ...(cell.font || {}), bold: true };
    }

    function attendanceCounts(people, record) {
      const expected = people.filter(student => record.get(student.key)?.status !== 'excluded').length;
      const actual = people.filter(student => ['present', 'online', 'late'].includes(record.get(student.key)?.status)).length;
      return {
        actual,
        expected,
        rate: expected ? `${Math.round((actual / expected) * 100)}%` : '0%'
      };
    }

    function termCounts(people, recordsByClass) {
      return recordsByClass.reduce((totals, record) => {
        const counts = attendanceCounts(people, record);
        totals.expected += counts.expected;
        totals.actual += counts.actual;
        return totals;
      }, { actual: 0, expected: 0 });
    }

    function writeTermSummaryCells(row, people, recordsByClass) {
      const { actual, expected } = termCounts(people, recordsByClass);
      const startCol = summaryStartColumn();
      row.getCell(startCol).value = actual;
      row.getCell(startCol + 1).value = Math.max(expected - actual, 0);
      row.getCell(startCol + 2).value = `${actual}/${expected}`;
    }

    function writeSummaryRow(ws, rowNumber, label, people, recordsByClass, options = {}) {
      const row = ws.getRow(rowNumber);
      row.getCell(1).value = options.rawLabel ? label : `${label}  ( 實到 / 應到 )`;
      ws.mergeCells(rowNumber, 1, rowNumber, 5);

      currentClasses.forEach((_, classIndex) => {
        const startCol = classStartColumn(classIndex);
        const { actual, expected, rate } = attendanceCounts(people, recordsByClass[classIndex]);
        row.getCell(startCol).value = actual;
        row.getCell(startCol + 1).value = expected;
        row.getCell(startCol + 2).value = rate;
      });
      writeTermSummaryCells(row, people, recordsByClass);

      for (let col = 1; col <= totalExportColumns(); col += 1) styleCell(row.getCell(col), { fill: options.fill || 'FFFFF2CC', bold: true });
      row.height = 24;
    }

    function writeSectionRow(ws, rowNumber, label) {
      ws.mergeCells(rowNumber, 1, rowNumber, totalExportColumns());
      const cell = ws.getCell(rowNumber, 1);
      cell.value = label;
      cell.font = { bold: true, size: 13 };
      styleCell(cell, { fill: 'FFD9EAD3', bold: true, horizontal: 'left' });
      ws.getRow(rowNumber).height = 24;
    }

    function writePersonRow(ws, rowNumber, student, recordsByClass) {
      const row = ws.getRow(rowNumber);
      row.getCell(1).value = roleLabelForExcel(student);
      row.getCell(2).value = student.id || '';
      row.getCell(3).value = student.unit || '';
      row.getCell(4).value = '';
      row.getCell(5).value = student.name;

      currentClasses.forEach((_, classIndex) => {
        const startCol = classStartColumn(classIndex);
        const item = recordsByClass[classIndex].get(student.key);
        ws.mergeCells(rowNumber, startCol, rowNumber, startCol + 1);
        row.getCell(startCol).value = excelStatusFor(item);
        row.getCell(startCol + 2).value = excelReasonFor(item);
      });
      writeTermSummaryCells(row, [student], recordsByClass);

      for (let col = 1; col <= totalExportColumns(); col += 1) {
        const value = row.getCell(col).value;
        const fill = value === 'X' ? 'FFF4CCCC' : value === '/' ? 'FFFFF2CC' : value === '△' ? 'FFE7E6E6' : null;
        styleCell(row.getCell(col), { fill, horizontal: col === 3 || col === 5 || col % 3 === 2 ? 'left' : 'center' });
      }
      row.height = 24;
    }

    async function exportAttendanceExcel() {
      if (!window.ExcelJS) {
        alert('Excel 匯出套件尚未載入完成，請稍後再試。');
        return;
      }

      const exportButton = document.getElementById('exportButton');
      exportButton.disabled = true;
      exportButton.textContent = '匯出中...';

      try {
        const recordsByClass = currentClasses.map((_, index) => snapshotRecordForClass(index));
        const workbook = new ExcelJS.Workbook();
        workbook.creator = '34期培緣班報到系統';
        workbook.created = new Date();

        const ws = workbook.addWorksheet('34期培緣114下', {
          pageSetup: { orientation: 'landscape', fitToPage: true, fitToWidth: 1, fitToHeight: 0 },
          views: [{ state: 'frozen', xSplit: 5, ySplit: 3 }]
        });

        ws.columns = [
          { width: 16 }, { width: 10 }, { width: 18 }, { width: 10 }, { width: 12 },
          ...currentClasses.flatMap(() => [{ width: 5 }, { width: 5 }, { width: 16 }]),
          { width: 3 }, { width: 12 }, { width: 12 }, { width: 12 }
        ];

        ws.mergeCells(1, 1, 1, 10);
        ws.getCell(1, 1).value = '學界34期 114年度下學期 培緣班 出缺席統計';
        ws.getCell(1, 12).value = '請假需填寫請假單，未繳回請假單請於該欄位以紅底標示';
        ws.getCell(1, 1).font = { bold: true, size: 16 };
        ws.getCell(1, 12).font = { bold: true, color: { argb: 'FFC00000' } };
        ws.getRow(1).height = 28;

        ['組別', '學號', '地方\n單位', '道育班', '姓名'].forEach((label, index) => {
          ws.getCell(3, index + 1).value = label;
        });

        currentClasses.forEach((item, index) => {
          const startCol = classStartColumn(index);
          ws.mergeCells(2, startCol, 2, startCol + 1);
          ws.mergeCells(3, startCol, 3, startCol + 1);
          ws.getCell(2, startCol).value = item.date;
          ws.getCell(3, startCol).value = item.title;
          ws.getCell(3, startCol + 2).value = '缺席\n事由';
        });

        const summaryStart = summaryStartColumn();
        ws.getCell(2, summaryStart).value = '應出席次數';
        ws.getCell(2, summaryStart + 1).value = currentClasses.length;
        ws.getCell(2, summaryStart + 2).value = currentSemesterLabel();
        ws.getCell(3, summaryStart).value = '已出席次數';
        ws.getCell(3, summaryStart + 1).value = '未出席次數';
        ws.getCell(3, summaryStart + 2).value = '培緣';

        for (let row = 2; row <= 3; row += 1) {
          for (let col = 1; col <= totalExportColumns(); col += 1) {
            styleCell(ws.getCell(row, col), { fill: 'FFD9EAD3', bold: row === 3 });
          }
        }

        let rowNumber = 4;
        const teachers = currentStudents.filter(student => student.group === '講師');
        if (teachers.length) {
          teachers.forEach(student => writePersonRow(ws, rowNumber++, student, recordsByClass));
          writeSummaryRow(ws, rowNumber++, '講師', teachers, recordsByClass);
        }

        reportGroups().forEach(group => {
          const groupStudents = currentStudents.filter(student => student.group === group);
          const guides = groupStudents.filter(student => student.role === '輔導');
          const members = groupStudents.filter(student => student.role === '學員');
          groupStudents.forEach(student => writePersonRow(ws, rowNumber++, student, recordsByClass));
          writeSummaryRow(ws, rowNumber++, '輔導', guides, recordsByClass);
          writeSummaryRow(ws, rowNumber++, '學員', members, recordsByClass);
          writeSummaryRow(ws, rowNumber++, '該組當天總出席率', groupStudents, recordsByClass, { rawLabel: true, fill: 'FFD9EAD3' });
        });

        rowNumber += 1;
        writeSectionRow(ws, rowNumber++, '全班統計');
        const allGuides = currentStudents.filter(student => student.role === '輔導');
        const allMembers = currentStudents.filter(student => student.role === '學員');
        const allClassMembers = [...allGuides, ...allMembers];
        writeSummaryRow(ws, rowNumber++, '全輔導  ( 實到 / 應到 )、出席率', allGuides, recordsByClass, { rawLabel: true, fill: 'FFD9EAD3' });
        writeSummaryRow(ws, rowNumber++, '全學員  ( 實到 / 應到 )、出席率', allMembers, recordsByClass, { rawLabel: true, fill: 'FFD9EAD3' });
        writeSummaryRow(ws, rowNumber++, '總出席率', allClassMembers, recordsByClass, { rawLabel: true, fill: 'FFD9EAD3' });

        for (let col = 1; col <= totalExportColumns(); col += 1) styleCell(ws.getCell(1, col));

        const buffer = await workbook.xlsx.writeBuffer();
        const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = '34期出缺席紀錄-114年度培緣下.xlsx';
        document.body.appendChild(link);
        link.click();
        link.remove();
        setTimeout(() => URL.revokeObjectURL(url), 0);
      } catch (error) {
        console.error(error);
        alert('匯出 Excel 時發生錯誤，請再試一次。');
      } finally {
        exportButton.disabled = false;
        exportButton.textContent = '匯出 Excel';
      }
    }

    async function submitAttendance() {
      const checkedStudents = currentStudents.filter(isPresent);
      const pendingStudents = checkedStudents.filter(student => !confirmed.has(student.key));
      if (!checkedStudents.length) { alert('請先勾選有來的人'); return; }
      const classIndex = String(classSelect.value || 0);
      const record = new Map();
      currentStudents.forEach(student => {
        if (excluded.has(student.key)) { record.set(student.key, { status: 'excluded', note: '不列入出席' }); return; }
        const special = specialNotes.get(student.key);
        if (special?.type === 'absent') record.set(student.key, { status: 'absent', note: special.note });
        else if (special?.type === 'online') record.set(student.key, { status: 'online', note: special.note });
        else if (special?.type === 'late') record.set(student.key, { status: 'late', note: special.note });
        else if (isPresent(student)) record.set(student.key, { status: 'present', note: '已報到' });
      });
      attendanceRecords.set(classIndex, record);
      checkedStudents.forEach((student, index) => {
        confirmed.add(student.key);
        editingDone.delete(student.key);
        if (!student.url || student.url === '#') return;
      });
      pendingStudents.forEach((student, index) => {
        if (!student.url || student.url === '#') return;
        setTimeout(() => window.open(student.url, '_blank'), index * 800);
      });
      let saveFailed = false;
      let cacheSource = 'api';
      try {
        const result = await persistAttendanceToApi();
        if (result?.skipped) cacheSource = 'local';
      } catch (error) {
        console.error(error);
        saveFailed = true;
        cacheSource = 'local';
        setSyncState('saveFailed');
      }
      saveDataCache(cacheSource);
      renderList();
      const message = pendingStudents.length ? `已送出 ${pendingStudents.length} 人報到。` : '目前沒有新增報到人員。';
      alert(saveFailed ? `${message}\n本機已更新，但 Google Sheet 儲存失敗，請再按一次送出或同步後確認。` : message);
    }

    function runSelfTests() {
      console.assert(Array.isArray(currentStudents) && currentStudents.length === 49, '測試失敗：人員數應為 49');
      console.assert(statsFor('一組', '輔導').total === 8, '測試失敗：一組輔導應為 8 人');
      console.assert(statsFor('一組', '學員').total === 8, '測試失敗：一組學員應為 8 人');
      console.assert(statsFor('二組', '輔導').total === 7, '測試失敗：二組輔導應為 7 人');
      console.assert(statsFor('二組', '學員').total === 7, '測試失敗：二組學員應為 7 人');
      console.assert(statsFor('三組', '輔導').total === 6, '測試失敗：三組輔導應為 6 人');
      console.assert(statsFor('三組', '學員').total === 9, '測試失敗：三組學員應為 9 人');
      console.assert(pct(1, 2) === '50%', '測試失敗：百分比計算錯誤');
      console.assert(attendanceSummaryFor(currentStudents[0]).totalCount === 5, '測試失敗：總堂數應為 5');
    }

    searchEl.addEventListener('input', renderList);
    semesterSelect.addEventListener('change', event => switchSemester(event.target.value));
    classSelect.addEventListener('change', () => {
      restoreStateForSelectedClass();
      renderList();
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && document.getElementById('adminModal').classList.contains('show')) closeAdminModal();
    });
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden && apiUrl) {
        reloadFromApi({ semesterId: currentSemesterId, keepSemester: true, background: true });
      }
    });
    loadCachedSemesters();
    initClasses();
    initSemesters();
    runSelfTests();
    const usedCache = renderFromCache(currentSemesterId);
    if (apiUrl) {
      if (!usedCache) {
        setSyncState('local');
        renderList();
      }
      reloadFromApi({ semesterId: currentSemesterId, keepSemester: true, includeSemesters: true, background: true });
    } else if (!usedCache) {
      setSyncState('unset');
      renderList();
    }
