// Deepfake Governance Dashboard — App Logic
// All rendering uses pre-computed DATA from data.js (fat data, thin client)

// === THEME ===
function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');
  const next = current === 'light' ? '' : 'light';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next || 'dark');
  initializedTabs.clear();
  var activeTab = document.querySelector('.tab-btn.active').dataset.tab;
  initTab(activeTab, true);
}
(function() {
  const saved = localStorage.getItem('theme');
  if (saved === 'light') document.documentElement.setAttribute('data-theme', 'light');
})();

// === ECHARTS HELPERS ===
function chartColors() {
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  return {
    text: isLight ? '#1a1a2e' : '#e0e0f0',
    muted: isLight ? '#666680' : '#8888aa',
    border: isLight ? '#d0d0e0' : '#2a2a45',
    accent: '#e11d48',
    palette: ['#e11d48','#60a5fa','#34d399','#fbbf24','#a78bfa','#f472b6','#38bdf8','#4ade80','#facc15','#c084fc','#fb923c','#2dd4bf'],
  };
}

const chartInstances = {};
function getChart(id) {
  if (chartInstances[id]) chartInstances[id].dispose();
  const el = document.getElementById(id);
  if (!el) return { setOption: function(){}, resize: function(){} };
  const chart = echarts.init(el, null, { renderer: 'canvas' });
  chartInstances[id] = chart;
  return chart;
}

// === RENDERING HELPERS ===
function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function scoreBadgeEl(v) {
  const cls = v >= 75 ? 'score-high' : v >= 40 ? 'score-med' : 'score-low';
  const span = document.createElement('span');
  span.className = 'score-badge ' + cls;
  span.textContent = v;
  return span;
}

function tierBadgeEl(t) {
  const n = t === 'tier1_explicit' ? 1 : t === 'tier2_contextual' ? 2 : 3;
  const label = ['','Tier 1: Explicit','Tier 2: Contextual','Tier 3: Adjacent'][n];
  const span = document.createElement('span');
  span.className = 'tier-badge tier-' + n;
  span.textContent = label;
  return span;
}

// ============================================================
// === COUNCIL NARRATIVE LAYER ===
// Authored by 12-member DEEPFAKE expert council; see interpretations.js
// Renders tab-level executive summaries + per-chart Description/Analysis/
// Interpretation/Conclusion blocks. createElement + textContent only.
// Idempotent: safe to call repeatedly across theme toggles & tab switches.
// ============================================================

// Frozen chart-ID → block-ID mount map per tab.
// Must match interpretations.js schema exactly. Validator enforces.
var NARRATIVE_MOUNT_MAP = {
  overview: [
    ['chartTierDonut', 'chartTierDonut'],
    ['chartOrgType', 'chartOrgType'],
    ['chartYearLine', 'chartYearLine'],
    ['top10Table', 'top10Table']
  ],
  dimensions: [
    ['chartHeatmap', 'chartHeatmap'],
    ['chartDimCoverage', 'chartDimCoverage'],
    ['chartDimMean', 'chartDimMean']
  ],
  geographic: [
    ['chartCountryBar', 'chartCountryBar'],
    ['chartRegionBar', 'chartRegionBar'],
    ['chartRegionTier', 'chartRegionTier']
  ],
  orgtype: [
    ['chartOrgTier', 'chartOrgTier'],
    ['chartOrgRadar', 'chartOrgRadar']
  ],
  anchors: [
    ['anchorTable', 'anchorTable'],
    ['anchorTable', 'dpaAnchorRow'],
    ['chartAnchorRadar', 'chartAnchorRadar'],
    ['chartVictimGap', 'chartVictimGap']
  ],
  browser: []
};

var AUDIENCE_LABELS = { L: 'Legislators', P: 'Platforms', C: 'Civil society', I: 'International' };

function renderNarrativeBody(block, mount, isExec) {
  // 3 visual zones (whatYouSee / whatItMeans / takeaway)
  var zones = [
    { label: 'What you see', body: block.whatYouSee, cls: 'n-whatyousee' },
    { label: 'What it means', body: block.whatItMeans, cls: 'n-whatitmeans' },
    { label: 'Takeaway', body: block.takeaway, cls: 'n-takeaway' }
  ];
  zones.forEach(function(z) {
    if (!z.body) return;
    var zone = document.createElement('div');
    zone.className = 'n-zone ' + z.cls;
    var label = document.createElement('div');
    label.className = 'n-label';
    label.textContent = z.label;
    var body = document.createElement('p');
    body.className = 'n-body';
    if (z.cls === 'n-takeaway') body.classList.add('n-takeaway');
    body.textContent = z.body;
    zone.appendChild(label);
    zone.appendChild(body);
    mount.appendChild(zone);
  });

  // tensionNote (italic, warning border) — minority-report disagreement articulation
  if (block.tensionNote) {
    var tn = document.createElement('div');
    tn.className = 'n-tension';
    tn.textContent = block.tensionNote;
    mount.appendChild(tn);
  }

  // thinnessWarning (red callout) — no-winners enforcement
  if (block.thinnessWarning) {
    var tw = document.createElement('div');
    tw.className = 'thinness-warning';
    tw.textContent = block.thinnessWarning;
    mount.appendChild(tw);
  }

  // actions table (only on _exec blocks where mandated by recommendations matrix)
  if (isExec && block.actions) {
    var at = document.createElement('div');
    at.className = 'actions-table';
    ['L', 'P', 'C', 'I'].forEach(function(k) {
      if (!block.actions[k]) return;
      var aud = document.createElement('div');
      aud.className = 'a-aud';
      aud.textContent = AUDIENCE_LABELS[k] || k;
      var act = document.createElement('div');
      act.className = 'a-act';
      act.textContent = block.actions[k];
      at.appendChild(aud);
      at.appendChild(act);
    });
    mount.appendChild(at);
  }

  // helplineOfframp (victim-facing blocks only) — M6 hard-block requirement
  if (block.helplineOfframp && block.helplineOfframp.length) {
    var ho = document.createElement('div');
    ho.className = 'helpline-offramp';
    var ht = document.createElement('div');
    ht.className = 'h-title';
    ht.textContent = 'Survivor support';
    ho.appendChild(ht);
    var ul = document.createElement('ul');
    block.helplineOfframp.forEach(function(h) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = h.url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.textContent = h.name;
      li.appendChild(a);
      if (h.desc) {
        var d = document.createElement('span');
        d.className = 'h-desc';
        d.textContent = '— ' + h.desc;
        li.appendChild(d);
      }
      ul.appendChild(li);
    });
    ho.appendChild(ul);
    mount.appendChild(ho);
  }

  // refs chips
  if (block.refs && block.refs.length) {
    var refs = document.createElement('div');
    refs.className = 'narrative-refs';
    block.refs.forEach(function(r) {
      var chip = document.createElement('span');
      chip.className = 'ref-chip';
      chip.textContent = r;
      refs.appendChild(chip);
    });
    mount.appendChild(refs);
  }

  // crossRefs chips (clickable tab links)
  if (block.crossRefs && block.crossRefs.length) {
    var cr = document.createElement('div');
    cr.className = 'narrative-refs';
    var crLabel = document.createElement('span');
    crLabel.className = 'ref-chip';
    crLabel.textContent = 'See also';
    cr.appendChild(crLabel);
    block.crossRefs.forEach(function(t) {
      var chip = document.createElement('a');
      chip.className = 'crossref-chip';
      chip.textContent = '→ ' + t;
      chip.href = '#' + t;
      chip.addEventListener('click', function(e) {
        e.preventDefault();
        var btn = document.querySelector('.tab-btn[data-tab="' + t + '"]');
        if (btn) btn.click();
      });
      cr.appendChild(chip);
    });
    mount.appendChild(cr);
  }
}

function renderNarrative(tabId, blockId, mountEl) {
  if (!window.INTERPRETATIONS || !mountEl) return;
  var tab = INTERPRETATIONS.tabs[tabId];
  if (!tab) return;
  var block = tab[blockId];
  if (!block) return;

  // contentNote rendered ABOVE the chart (amber banner) — handled separately
  // since it lives outside the .narrative-block container.
  if (block.contentNote) {
    var card = mountEl.closest('.card');
    if (card && !card.querySelector('.content-note')) {
      var cn = document.createElement('div');
      cn.className = 'content-note';
      cn.textContent = block.contentNote;
      card.insertBefore(cn, card.firstChild.nextSibling);
    }
  }

  renderNarrativeBody(block, mountEl, false);
}

function renderTabExec(tabId) {
  if (!window.INTERPRETATIONS) return;
  var tab = INTERPRETATIONS.tabs[tabId];
  if (!tab || !tab._exec) return;
  var pane = document.getElementById('tab-' + tabId);
  if (!pane) return;
  if (pane.querySelector('.narrative-exec')) return; // idempotent

  var execBlock = tab._exec;

  // contentNote on _exec rendered as standalone amber banner above the exec card
  if (execBlock.contentNote) {
    var cnExec = document.createElement('div');
    cnExec.className = 'content-note';
    cnExec.textContent = execBlock.contentNote;
    pane.insertBefore(cnExec, pane.firstChild);
  }

  var exec = document.createElement('div');
  exec.className = 'narrative-exec'; // starts collapsed via CSS max-height
  if (execBlock.thinnessWarning) exec.classList.add('narrative-thinness');

  // Click to expand/collapse
  exec.addEventListener('click', function() {
    if (!exec.classList.contains('expanded')) {
      exec.classList.add('expanded');
    }
  });

  var head = document.createElement('div');
  head.className = 'card-title';
  head.style.color = 'var(--info)';
  head.textContent = 'Council narrative — tab summary';
  exec.appendChild(head);

  renderNarrativeBody(execBlock, exec, true);

  // Insert exec narrative as the FIRST child of the pane (above all charts/KPIs)
  pane.insertBefore(exec, pane.firstChild);
}

function renderAllNarratives(tabId) {
  renderTabExec(tabId);
  var mountEntries = NARRATIVE_MOUNT_MAP[tabId] || [];
  mountEntries.forEach(function(entry) {
    var chartId = entry[0];
    var blockId = entry[1];
    var chartEl = document.getElementById(chartId);
    if (!chartEl) return;
    var card = chartEl.closest('.card');
    if (!card) return;
    // Idempotence: only mount if no narrative block for this blockId already exists
    if (card.querySelector('[data-narrative-block="' + blockId + '"]')) return;
    var mount = document.createElement('div');
    mount.className = 'narrative-block';
    mount.setAttribute('data-narrative-block', blockId);
    card.appendChild(mount);
    renderNarrative(tabId, blockId, mount);
  });
}

function renderLandingCard() {
  if (!window.INTERPRETATIONS) return;
  var landing = INTERPRETATIONS.tabs.landing && INTERPRETATIONS.tabs.landing._howToRead;
  if (!landing) return;
  var main = document.getElementById('tab-overview');
  if (!main) return;
  if (main.querySelector('.narrative-landing')) return; // idempotent
  if (localStorage.getItem('df-landing-dismissed') === '1') return;

  var card = document.createElement('div');
  card.className = 'narrative-landing collapsed'; // start collapsed

  var title = document.createElement('h2');
  title.textContent = landing.title || 'How to read this dashboard';
  card.appendChild(title);

  // Click card to toggle collapsed/expanded
  card.addEventListener('click', function(e) {
    if (e.target.closest('.l-hide')) return; // let Hide button handle itself
    card.classList.toggle('collapsed');
  });

  var hide = document.createElement('button');
  hide.className = 'l-hide';
  hide.textContent = 'Hide';
  hide.addEventListener('click', function(e) {
    e.stopPropagation();
    localStorage.setItem('df-landing-dismissed', '1');
    card.remove();
  });
  card.appendChild(hide);

  if (landing.intro) {
    var intro = document.createElement('p');
    intro.className = 'l-intro';
    intro.textContent = landing.intro;
    card.appendChild(intro);
  }

  (landing.sections || []).forEach(function(s) {
    var sec = document.createElement('div');
    sec.className = 'l-section';
    var h = document.createElement('span');
    h.className = 'l-heading';
    h.textContent = s.heading + ':';
    var b = document.createElement('span');
    b.className = 'l-body';
    b.textContent = ' ' + s.body;
    sec.appendChild(h);
    sec.appendChild(b);
    card.appendChild(sec);
  });

  if (landing.refs && landing.refs.length) {
    var refs = document.createElement('div');
    refs.className = 'narrative-refs';
    refs.style.marginTop = '0.85rem';
    landing.refs.forEach(function(r) {
      var chip = document.createElement('span');
      chip.className = 'ref-chip';
      chip.textContent = r;
      refs.appendChild(chip);
    });
    card.appendChild(refs);
  }

  main.insertBefore(card, main.firstChild);
}

function verifyDataSignature() {
  // data.js declares `const DATA = {...}` which creates a top-level lexical
  // binding but does NOT attach to window. Reference DATA by name (which
  // resolves via the script-tag global scope chain), not via window.DATA.
  if (typeof DATA === 'undefined' || !window.INTERPRETATIONS) return;
  var expected = INTERPRETATIONS.dataSignature;
  if (!expected) return;
  var n = (DATA.statements && DATA.statements.length) || 0;
  var date = (DATA.generated && DATA.generated.split('T')[0]) || 'unknown';
  var actual = 'corpus-' + n + '-' + date;
  if (expected.indexOf(actual) === 0) return; // matches the prefix; allow extended formula/dimsHash suffix

  // Mismatch: render banner above the Overview tab pane
  var pane = document.getElementById('tab-overview');
  if (!pane || pane.querySelector('.signature-banner')) return;
  var banner = document.createElement('div');
  banner.className = 'signature-banner';
  banner.textContent = 'Council narrative was last validated against corpus snapshot "' + expected + '"; current snapshot is "' + actual + '". Council review pending — interpret with care.';
  pane.insertBefore(banner, pane.firstChild);
}

// === TAB MANAGEMENT ===
const initializedTabs = new Set();

document.querySelectorAll('.tab-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.tab-btn').forEach(function(b) { b.classList.remove('active'); b.setAttribute('aria-selected','false'); });
    document.querySelectorAll('.tab-pane').forEach(function(p) { p.classList.remove('active'); });
    btn.classList.add('active');
    btn.setAttribute('aria-selected','true');
    document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
    initTab(btn.dataset.tab);
    history.replaceState(null, '', '#' + btn.dataset.tab);
  });
});

function initTab(tab, force) {
  if (!force && initializedTabs.has(tab)) {
    Object.values(chartInstances).forEach(function(c) { c.resize(); });
    // Narrative is idempotent — re-call is safe and ensures it exists after theme toggle
    renderAllNarratives(tab);
    return;
  }
  initializedTabs.add(tab);
  var C = chartColors();
  switch(tab) {
    case 'overview': initOverview(C); break;
    case 'dimensions': initDimensions(C); break;
    case 'geographic': initGeographic(C); break;
    case 'orgtype': initOrgType(C); break;
    case 'anchors': initAnchors(C); break;
    case 'browser': initBrowser(); break;
  }
  // Mount council narrative AFTER charts have rendered into the DOM
  renderAllNarratives(tab);
}

// ============================================================
// TAB 1: OVERVIEW
// ============================================================
function initOverview(C) {
  var a = DATA.agg;
  var t1 = a.tierDist.tier1_explicit || 0;
  var t2 = a.tierDist.tier2_contextual || 0;
  var t3 = a.tierDist.tier3_adjacent || 0;
  var total = DATA.statements.length;

  document.getElementById('totalCount').textContent = total.toLocaleString();
  document.getElementById('genDate').textContent = 'Generated: ' + DATA.generated.split('T')[0];

  // KPI cards
  var kpiData = [
    {v: DATA.meta.totalScanned, l: 'Statements Scanned'},
    {v: total, l: 'With Matches'},
    {v: t1, l: 'Tier 1 (Explicit)'},
    {v: t2, l: 'Tier 2 (Contextual)'},
    {v: t3, l: 'Tier 3 (Adjacent)'},
    {v: DATA.meta.dimensions, l: 'Dimensions'},
  ];
  var kpiContainer = document.getElementById('kpiCards');
  kpiContainer.replaceChildren();
  kpiData.forEach(function(k) {
    var card = document.createElement('div');
    card.className = 'kpi-card';
    var val = document.createElement('div');
    val.className = 'kpi-value';
    val.textContent = k.v.toLocaleString();
    var lbl = document.createElement('div');
    lbl.className = 'kpi-label';
    lbl.textContent = k.l;
    card.appendChild(val);
    card.appendChild(lbl);
    kpiContainer.appendChild(card);
  });

  // Provenance callout
  var ps = DATA.provenanceSplit;
  var disc = ps.deepfake_session4;
  var callout = document.getElementById('provenanceCallout');
  if (disc && disc.total > 0) {
    callout.textContent = 'Note: ' + disc.total + ' statements are from targeted deepfake discovery (Session 4). The remaining ' + ps.corpus.total + ' come from the general Tapestry corpus scan. Targeted sources score higher on deepfake-specific dimensions.';
  } else {
    callout.textContent = 'Note: All ' + total + ' matches are from a corpus-wide scan of ' + DATA.meta.totalScanned + ' AI governance statements. Targeted discovery sources will be incorporated after document acquisition and rescanning.';
  }

  // Tier donut
  var tierChart = getChart('chartTierDonut');
  tierChart.setOption({
    tooltip: { trigger: 'item', formatter: '{b}: {c} ({d}%)' },
    legend: { bottom: 0, textStyle: { color: C.text, fontSize: 12 } },
    series: [{
      type: 'pie', radius: ['45%','70%'], center: ['50%','45%'],
      label: { show: true, color: C.text, formatter: '{b}\n{c}' },
      data: [
        { value: t1, name: 'Tier 1: Explicit', itemStyle: { color: '#e11d48' } },
        { value: t2, name: 'Tier 2: Contextual', itemStyle: { color: '#fbbf24' } },
        { value: t3, name: 'Tier 3: Adjacent', itemStyle: { color: '#60a5fa' } },
      ],
    }],
  });

  // Org type bar
  var otEntries = Object.entries(a.orgTypeDist).sort(function(a,b) { return b[1] - a[1]; });
  var orgChart = getChart('chartOrgType');
  orgChart.setOption({
    tooltip: { trigger: 'axis' },
    grid: { left: 150, right: 30, top: 10, bottom: 30 },
    xAxis: { type: 'value', axisLabel: { color: C.muted } },
    yAxis: { type: 'category', data: otEntries.map(function(e){return e[0];}).reverse(), axisLabel: { color: C.text, fontSize: 11 } },
    series: [{ type: 'bar', data: otEntries.map(function(e){return e[1];}).reverse(), itemStyle: { color: C.accent }, barMaxWidth: 30 }],
  });

  // Year line
  var yearEntries = Object.entries(a.yearDist).filter(function(e){return e[0]!=='0';}).sort(function(a,b){return a[0]-b[0];});
  var yearChart = getChart('chartYearLine');
  yearChart.setOption({
    tooltip: { trigger: 'axis' },
    grid: { left: 50, right: 20, top: 10, bottom: 40 },
    xAxis: { type: 'category', data: yearEntries.map(function(e){return e[0];}), axisLabel: { color: C.muted, rotate: 45, fontSize: 10 } },
    yAxis: { type: 'value', axisLabel: { color: C.muted } },
    series: [{ type: 'line', data: yearEntries.map(function(e){return e[1];}), smooth: true, areaStyle: { opacity: 0.2 }, lineStyle: { color: C.accent }, itemStyle: { color: C.accent } }],
  });

  // Top 10 table
  var top10 = DATA.statements.slice(0, 10);
  var tableEl = document.getElementById('top10Table');
  tableEl.replaceChildren();
  var tbl = document.createElement('table');
  tbl.className = 'data-table';
  var thead = document.createElement('thead');
  var hrow = document.createElement('tr');
  ['#','Key','Title','Type','Score','Tier'].forEach(function(h) {
    var th = document.createElement('th'); th.textContent = h; hrow.appendChild(th);
  });
  thead.appendChild(hrow);
  tbl.appendChild(thead);
  var tbody = document.createElement('tbody');
  top10.forEach(function(s, i) {
    var tr = document.createElement('tr');
    var cells = [i+1, s.k, s.t.substring(0,55), s.ot];
    cells.forEach(function(c) { var td = document.createElement('td'); td.textContent = c; tr.appendChild(td); });
    var tdScore = document.createElement('td'); tdScore.appendChild(scoreBadgeEl(s.ms)); tr.appendChild(tdScore);
    var tdTier = document.createElement('td'); tdTier.appendChild(tierBadgeEl(s.tier)); tr.appendChild(tdTier);
    tbody.appendChild(tr);
  });
  tbl.appendChild(tbody);
  tableEl.appendChild(tbl);
}

// ============================================================
// TAB 2: DIMENSIONS
// ============================================================
function initDimensions(C) {
  var h = DATA.heatmap;
  var labels = h.dimLabels;
  var entries = h.entries;
  var hmData = [];
  entries.forEach(function(e, yi) {
    e.scores.forEach(function(v, xi) { if (v > 0) hmData.push([xi, yi, v]); });
  });

  var hmChart = getChart('chartHeatmap');
  hmChart.setOption({
    tooltip: { formatter: function(p) { return escapeHtml(entries[p.value[1]].t) + '<br>' + escapeHtml(labels[p.value[0]]) + ': ' + p.value[2]; } },
    toolbox: { feature: { saveAsImage: { title: 'Save' }, dataZoom: { title: { zoom: 'Zoom', back: 'Reset' } } }, iconStyle: { borderColor: C.muted } },
    dataZoom: [{ type: 'slider', yAxisIndex: 0, right: 5, width: 15, startValue: 0, endValue: 24, filterMode: 'none' }],
    grid: { left: 250, right: 80, top: 10, bottom: 80 },
    xAxis: { type: 'category', data: labels, axisLabel: { color: C.muted, rotate: 55, fontSize: 9, interval: 0 }, splitArea: { show: true } },
    yAxis: { type: 'category', data: entries.map(function(e){return e.t;}), axisLabel: { color: C.text, fontSize: 9 }, inverse: true },
    visualMap: { min: 0, max: 100, calculable: true, orient: 'horizontal', left: 'center', bottom: 0,
      inRange: { color: ['#1e3a5f','#3b82f6','#f59e0b','#ef4444'] }, textStyle: { color: C.text } },
    series: [{ type: 'heatmap', data: hmData, emphasis: { itemStyle: { borderColor: '#fff', borderWidth: 1 } } }],
  });

  // Dimension coverage bar
  var dims = Object.keys(DATA.agg.dimCoverage);
  var covVals = dims.map(function(d){return DATA.agg.dimCoverage[d];});
  var covLabels = dims.map(function(d) { var idx = DATA.heatmap.dims.indexOf(d); return idx >= 0 ? DATA.heatmap.dimLabels[idx] : d; });
  var covChart = getChart('chartDimCoverage');
  covChart.setOption({
    tooltip: { trigger: 'axis' },
    grid: { left: 160, right: 30, top: 10, bottom: 20 },
    xAxis: { type: 'value', axisLabel: { color: C.muted } },
    yAxis: { type: 'category', data: covLabels.slice().reverse(), axisLabel: { color: C.text, fontSize: 10 } },
    series: [{ type: 'bar', data: covVals.slice().reverse(), itemStyle: { color: C.accent }, barMaxWidth: 18 }],
  });

  // Mean score bar
  var meanVals = dims.map(function(d){return DATA.agg.dimMeanScore[d];});
  var meanChart = getChart('chartDimMean');
  meanChart.setOption({
    tooltip: { trigger: 'axis' },
    grid: { left: 160, right: 30, top: 10, bottom: 20 },
    xAxis: { type: 'value', max: 100, axisLabel: { color: C.muted } },
    yAxis: { type: 'category', data: covLabels.slice().reverse(), axisLabel: { color: C.text, fontSize: 10 } },
    series: [{ type: 'bar', data: meanVals.slice().reverse(), itemStyle: { color: '#60a5fa' }, barMaxWidth: 18 }],
  });
}

// ============================================================
// TAB 3: GEOGRAPHIC
// ============================================================
function initGeographic(C) {
  // Country bar chart
  var cd = DATA.agg.countryDist;
  if (cd) {
    var countries = Object.keys(cd).sort(function(a,b){return cd[b]-cd[a];}).slice(0,25);
    var countryChart = getChart('chartCountryBar');
    countryChart.setOption({
      tooltip: { trigger: 'axis' },
      grid: { left: 140, right: 30, top: 10, bottom: 20 },
      xAxis: { type: 'value', axisLabel: { color: C.muted } },
      yAxis: { type: 'category', data: countries.slice().reverse(), axisLabel: { color: C.text, fontSize: 10 } },
      series: [{ type: 'bar', data: countries.map(function(c){return cd[c];}).reverse(), itemStyle: { color: C.accent }, barMaxWidth: 18 }],
    });
  }

  var rd = DATA.agg.regionDist;
  var regions = Object.keys(rd).sort(function(a,b){return rd[b]-rd[a];});
  var regChart = getChart('chartRegionBar');
  regChart.setOption({
    tooltip: { trigger: 'axis' },
    grid: { left: 130, right: 30, top: 10, bottom: 30 },
    xAxis: { type: 'value', axisLabel: { color: C.muted } },
    yAxis: { type: 'category', data: regions.slice().reverse(), axisLabel: { color: C.text, fontSize: 11 } },
    series: [{ type: 'bar', data: regions.map(function(r){return rd[r];}).reverse(), itemStyle: { color: C.accent }, barMaxWidth: 25 }],
  });

  var rt = DATA.agg.regionTier;
  var tierChart = getChart('chartRegionTier');
  tierChart.setOption({
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
    legend: { bottom: 0, textStyle: { color: C.text, fontSize: 11 } },
    grid: { left: 130, right: 30, top: 10, bottom: 40 },
    xAxis: { type: 'value', axisLabel: { color: C.muted } },
    yAxis: { type: 'category', data: regions.slice().reverse(), axisLabel: { color: C.text, fontSize: 11 } },
    series: [
      { name: 'Tier 1', type: 'bar', stack: 'total', data: regions.map(function(r){return (rt[r]||{}).tier1_explicit||0;}).reverse(), itemStyle: { color: '#e11d48' } },
      { name: 'Tier 2', type: 'bar', stack: 'total', data: regions.map(function(r){return (rt[r]||{}).tier2_contextual||0;}).reverse(), itemStyle: { color: '#fbbf24' } },
      { name: 'Tier 3', type: 'bar', stack: 'total', data: regions.map(function(r){return (rt[r]||{}).tier3_adjacent||0;}).reverse(), itemStyle: { color: '#60a5fa' } },
    ],
  });
}

// ============================================================
// TAB 4: STAKEHOLDER TYPES
// ============================================================
function initOrgType(C) {
  var otd = DATA.agg.orgTypeDist;
  var types = Object.keys(otd).sort(function(a,b){return otd[b]-otd[a];}).filter(function(t){return t;});
  var tierByOt = {};
  DATA.statements.forEach(function(s) {
    if (!tierByOt[s.ot]) tierByOt[s.ot] = {tier1_explicit:0, tier2_contextual:0, tier3_adjacent:0};
    tierByOt[s.ot][s.tier] = (tierByOt[s.ot][s.tier]||0) + 1;
  });
  var otChart = getChart('chartOrgTier');
  otChart.setOption({
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
    legend: { bottom: 0, textStyle: { color: C.text, fontSize: 11 } },
    grid: { left: 150, right: 30, top: 10, bottom: 40 },
    xAxis: { type: 'value', axisLabel: { color: C.muted } },
    yAxis: { type: 'category', data: types.slice().reverse(), axisLabel: { color: C.text, fontSize: 11 } },
    series: [
      { name: 'Tier 1', type: 'bar', stack: 'total', data: types.map(function(t){return (tierByOt[t]||{}).tier1_explicit||0;}).reverse(), itemStyle: { color: '#e11d48' } },
      { name: 'Tier 2', type: 'bar', stack: 'total', data: types.map(function(t){return (tierByOt[t]||{}).tier2_contextual||0;}).reverse(), itemStyle: { color: '#fbbf24' } },
      { name: 'Tier 3', type: 'bar', stack: 'total', data: types.map(function(t){return (tierByOt[t]||{}).tier3_adjacent||0;}).reverse(), itemStyle: { color: '#60a5fa' } },
    ],
  });

  // Radar
  var odm = DATA.agg.orgDimMeans;
  var topTypes = types.slice(0, 5);
  var dimKeys = DATA.heatmap.dims;
  var dimLabels = DATA.heatmap.dimLabels;
  var radarDims = dimKeys.filter(function(d) {
    var vals = topTypes.map(function(t){return (odm[t]||{})[d]||0;});
    return Math.max.apply(null, vals) > 10;
  }).slice(0, 10);
  var radarLabels = radarDims.map(function(d){ var idx = dimKeys.indexOf(d); return idx>=0?dimLabels[idx]:d; });

  var radarChart = getChart('chartOrgRadar');
  radarChart.setOption({
    tooltip: {},
    legend: { bottom: 0, textStyle: { color: C.text, fontSize: 11 } },
    radar: {
      indicator: radarLabels.map(function(l){return {name:l, max:100};}),
      radius: '60%',
      axisName: { color: C.text, fontSize: 9 },
      splitArea: { areaStyle: { color: ['transparent'] } },
      splitLine: { lineStyle: { color: C.border } },
      axisLine: { lineStyle: { color: C.border } },
    },
    series: [{ type: 'radar',
      data: topTypes.map(function(t, i) {
        return { name: t, value: radarDims.map(function(d){return (odm[t]||{})[d]||0;}),
          lineStyle:{color:C.palette[i]}, itemStyle:{color:C.palette[i]}, areaStyle:{opacity:0.1,color:C.palette[i]} };
      }),
    }],
  });
}

// ============================================================
// TAB 5: BENCHMARK LEGISLATION
// ============================================================
function initAnchors(C) {
  var anc = DATA.anchors;
  document.getElementById('anchorCount').textContent = anc.length;
  var dimKeys = DATA.heatmap.dims;

  // Anchor table
  var container = document.getElementById('anchorTable');
  container.replaceChildren();
  var tbl = document.createElement('table');
  tbl.className = 'data-table';
  var thead = document.createElement('thead');
  var hrow = document.createElement('tr');
  ['Anchor','Key','Title','Country','Score','Tier','Dims'].forEach(function(h){
    var th = document.createElement('th'); th.textContent = h; hrow.appendChild(th);
  });
  thead.appendChild(hrow); tbl.appendChild(thead);
  var tbody = document.createElement('tbody');
  anc.forEach(function(a) {
    var tr = document.createElement('tr');
    var firing = dimKeys.filter(function(d){return (a.dimScores[d]||0)>0;}).length;
    [a.term, a.key, a.title, a.ic || ''].forEach(function(c){
      var td = document.createElement('td'); td.textContent = c; tr.appendChild(td);
    });
    var tdS = document.createElement('td'); tdS.appendChild(scoreBadgeEl(a.maxScore)); tr.appendChild(tdS);
    var tdT = document.createElement('td'); tdT.appendChild(tierBadgeEl(a.tier)); tr.appendChild(tdT);
    var tdD = document.createElement('td'); tdD.textContent = firing+'/'+dimKeys.length; tr.appendChild(tdD);
    tbody.appendChild(tr);
  });
  tbl.appendChild(tbody); container.appendChild(tbl);

  // Anchor radar
  var topAnc = anc.slice().sort(function(a,b){return b.maxScore-a.maxScore;}).slice(0,5);
  var dimLabels = DATA.heatmap.dimLabels;
  var activeDims = dimKeys.filter(function(d){return topAnc.some(function(a){return (a.dimScores[d]||0)>0;});});
  var activeLabels = activeDims.map(function(d){var idx=dimKeys.indexOf(d);return idx>=0?dimLabels[idx]:d;});
  var ancRadar = getChart('chartAnchorRadar');
  ancRadar.setOption({
    tooltip: {},
    legend: { bottom: 0, textStyle: { color: C.text, fontSize: 10 } },
    radar: {
      indicator: activeLabels.map(function(l){return {name:l,max:100};}),
      radius: '55%', axisName: { color: C.text, fontSize: 9 },
      splitArea: { areaStyle: { color: ['transparent'] } },
      splitLine: { lineStyle: { color: C.border } },
      axisLine: { lineStyle: { color: C.border } },
    },
    series: [{ type: 'radar',
      data: topAnc.map(function(a,i){
        return { name: a.title.substring(0,30), value: activeDims.map(function(d){return a.dimScores[d]||0;}),
          lineStyle:{color:C.palette[i]}, itemStyle:{color:C.palette[i]}, areaStyle:{opacity:0.1,color:C.palette[i]} };
      }),
    }],
  });

  // Victim empowerment gap heatmap
  var vg = DATA.victimEmpowermentGap;
  var vgRegions = Object.keys(vg.byRegion).filter(function(r){return r!=='Unknown';}).sort();
  var vgDims = vg.dims;
  var vgData = [];
  vgRegions.forEach(function(r, ri) {
    vgDims.forEach(function(d, di) {
      var key = vg.dimKeys[di];
      var val = (vg.byRegion[r]||{})[key] || 0;
      vgData.push([di, ri, val]);
    });
  });
  var maxVal = Math.max.apply(null, vgData.map(function(d){return d[2];})) || 1;
  var vgChart = getChart('chartVictimGap');
  vgChart.setOption({
    tooltip: { formatter: function(p){return escapeHtml(vgRegions[p.value[1]])+': '+escapeHtml(vgDims[p.value[0]])+' = '+p.value[2]+' Tier 1 stmts';} },
    grid: { left: 130, right: 80, top: 10, bottom: 30 },
    xAxis: { type: 'category', data: vgDims, axisLabel: { color: C.muted, rotate: 35, fontSize: 9, interval: 0 } },
    yAxis: { type: 'category', data: vgRegions, axisLabel: { color: C.text, fontSize: 10 } },
    visualMap: { min: 0, max: maxVal, calculable: true, orient: 'vertical', right: 10, top: 'center',
      inRange: { color: ['#1a1a2e','#e11d48','#fb7185'] }, textStyle: { color: C.text } },
    series: [{ type: 'heatmap', data: vgData, emphasis: { itemStyle: { borderColor: '#fff', borderWidth: 1 } } }],
  });
}

// ============================================================
// TAB 6: STATEMENT BROWSER
// ============================================================
var browserData = [];
var sortKey = 'ms';
var sortDir = -1;
var PAGE_SIZE = 50;
var currentPage = 0;
var browserListenersBound = false;

function initBrowser() {
  browserData = DATA.statements.slice();

  // Populate filters (clear first to avoid duplicates on theme toggle re-init)
  var tiers = []; var orgTypes = []; var regions = [];
  DATA.statements.forEach(function(s) {
    if (tiers.indexOf(s.tier) < 0) tiers.push(s.tier);
    if (orgTypes.indexOf(s.ot) < 0) orgTypes.push(s.ot);
    if (regions.indexOf(s.r) < 0) regions.push(s.r);
  });
  tiers.sort(); orgTypes.sort(); regions.sort();

  var tierSel = document.getElementById('filterTier');
  while (tierSel.options.length > 1) tierSel.remove(1);
  tiers.forEach(function(t) { var o = document.createElement('option'); o.value = t; o.textContent = t === 'tier1_explicit' ? 'Tier 1: Explicit' : t === 'tier2_contextual' ? 'Tier 2: Contextual' : t === 'tier3_adjacent' ? 'Tier 3: Adjacent' : t; tierSel.appendChild(o); });
  var otSel = document.getElementById('filterOrgType');
  while (otSel.options.length > 1) otSel.remove(1);
  orgTypes.forEach(function(t) { var o = document.createElement('option'); o.value = t; o.textContent = t; otSel.appendChild(o); });
  var regSel = document.getElementById('filterRegion');
  while (regSel.options.length > 1) regSel.remove(1);
  regions.forEach(function(r) { var o = document.createElement('option'); o.value = r; o.textContent = r; regSel.appendChild(o); });

  // Event listeners (bind once to prevent duplicates on theme toggle)
  if (!browserListenersBound) {
    browserListenersBound = true;
    document.getElementById('searchInput').addEventListener('input', filterBrowser);
    document.getElementById('filterTier').addEventListener('change', filterBrowser);
    document.getElementById('filterOrgType').addEventListener('change', filterBrowser);
    document.getElementById('filterRegion').addEventListener('change', filterBrowser);

    // Sort headers
    document.querySelectorAll('#browserTable th[data-col]').forEach(function(th) {
      th.addEventListener('click', function() { sortBrowser(th.dataset.col); });
    });
  }

  filterBrowser();
}

function filterBrowser() {
  var q = (document.getElementById('searchInput').value || '').toLowerCase();
  var tier = document.getElementById('filterTier').value;
  var ot = document.getElementById('filterOrgType').value;
  var reg = document.getElementById('filterRegion').value;

  browserData = DATA.statements.filter(function(s) {
    if (q && s.t.toLowerCase().indexOf(q) < 0 && s.o.toLowerCase().indexOf(q) < 0 && s.k.toLowerCase().indexOf(q) < 0) return false;
    if (tier && s.tier !== tier) return false;
    if (ot && s.ot !== ot) return false;
    if (reg && s.r !== reg) return false;
    return true;
  });

  browserData.sort(function(a, b) {
    var av = a[sortKey], bv = b[sortKey];
    if (typeof av === 'number') return (av - bv) * sortDir;
    return String(av).localeCompare(String(bv)) * sortDir;
  });

  currentPage = 0;
  renderBrowserPage();
}

function sortBrowser(key) {
  if (sortKey === key) sortDir *= -1;
  else { sortKey = key; sortDir = (key === 'ms' || key === 'y') ? -1 : 1; }
  filterBrowser();
}

function renderBrowserPage() {
  var start = currentPage * PAGE_SIZE;
  var page = browserData.slice(start, start + PAGE_SIZE);
  var total = browserData.length;

  document.getElementById('browserInfo').textContent =
    'Showing ' + (start+1) + '-' + Math.min(start+PAGE_SIZE, total) + ' of ' + total + ' statements';

  var tbody = document.getElementById('browserBody');
  tbody.replaceChildren();
  page.forEach(function(s) {
    var tr = document.createElement('tr');
    var vals = [s.k, s.t, s.o.substring(0,40), s.ot, s.r, s.y];
    vals.forEach(function(v) { var td = document.createElement('td'); td.textContent = v; tr.appendChild(td); });
    var tdTier = document.createElement('td'); tdTier.appendChild(tierBadgeEl(s.tier)); tr.appendChild(tdTier);
    var tdScore = document.createElement('td'); tdScore.appendChild(scoreBadgeEl(s.ms)); tr.appendChild(tdScore);
    tbody.appendChild(tr);
  });

  // Pagination
  var navEl = document.getElementById('paginationNav');
  navEl.replaceChildren();
  if (total > PAGE_SIZE) {
    var pages = Math.ceil(total / PAGE_SIZE);
    if (currentPage > 0) {
      var prev = document.createElement('button');
      prev.className = 'theme-toggle';
      prev.textContent = 'Prev';
      prev.addEventListener('click', function() { currentPage--; renderBrowserPage(); });
      navEl.appendChild(prev);
    }
    var info = document.createElement('span');
    info.style.cssText = 'padding:0.35rem 0.75rem;color:var(--text-muted);font-size:0.8rem';
    info.textContent = 'Page ' + (currentPage+1) + '/' + pages;
    navEl.appendChild(info);
    if (currentPage < pages - 1) {
      var next = document.createElement('button');
      next.className = 'theme-toggle';
      next.textContent = 'Next';
      next.addEventListener('click', function() { currentPage++; renderBrowserPage(); });
      navEl.appendChild(next);
    }
  }
}

function exportCSV() {
  var header = 'Key,Title,Organization,Type,Region,Year,Tier,MaxScore\n';
  var rows = browserData.map(function(s) {
    return [s.k, '"'+s.t.replace(/"/g,'""')+'"', '"'+s.o.replace(/"/g,'""')+'"', s.ot, s.r, s.y, s.tier, s.ms].join(',');
  }).join('\n');
  var blob = new Blob([header + rows], { type: 'text/csv' });
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url; a.download = 'deepfake-governance-statements.csv'; a.click();
  URL.revokeObjectURL(url);
}

// === INIT ===
function activateFromHash() {
  var h = location.hash.replace('#','');
  if (h) {
    var btn = document.querySelector('.tab-btn[data-tab="'+h+'"]');
    if (btn) btn.click();
  }
}

function startApp() {
  // Council narrative landing card + drift-detection banner BEFORE first chart init
  renderLandingCard();
  verifyDataSignature();
  initTab('overview');
  activateFromHash();
  window.addEventListener('hashchange', activateFromHash);
  window.addEventListener('resize', function() {
    Object.values(chartInstances).forEach(function(c) { c.resize(); });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startApp);
} else {
  startApp();
}
