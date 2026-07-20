// Case-study renderer — Oleksandr Tanashkin
const PROJECTS = {
  live: {
    title: 'Live Streaming', category: 'Consumer app · iOS', kind: 'mobile',
    shots: ['assets/work/live.png', 'assets/work/live-2.png', 'assets/work/live-3.png'],
    lede: 'Live video dating inside a consumer dating app. I redesigned the streaming experience end to end — and watch time went up +242%.',
    meta: { Role: 'Product Designer', Timeline: 'Feb – Jul 2024', Platform: 'iOS · Android', Team: 'PM · Eng · Design' },
    glance: {
      problem: 'Going live felt intimidating, streams fizzled out early, and viewers had no reason to stay — a key engagement lever was underperforming.',
      role: 'Owned the redesign end to end: entry points, pre-live setup, the in-stream experience, chat, and the Live Match mechanic.',
      result: '+242% average stream duration, +300% daily messages, +43% live audience after launch.',
    },
    whatH: 'Dating that happens live, not in a chat queue.',
    what: 'Streamers broadcast to the community, and any viewer can request a Live Match — a short one-on-one video date inside the stream. At the end, both sides like or pass. It turns passive watching into a real dating moment.',
    problemH: 'Going live felt like stage fright — and streams died in minutes.',
    problemP: 'Starting a broadcast was intimidating, chat was passive, and viewers had no reason to stay. The app’s biggest engagement lever was quietly underperforming.',
    peakH: 'Every short stream taught users not to come back.',
    peakP: 'A dating product lives on daily activity. The real question wasn’t “how do we make streaming nicer” — it was: what gives a stranger a reason to stay for twenty minutes?',
    solutionH: 'The date, built into the stream.',
    resH: 'Shipped with the team, sharpened after launch.',
    resP: 'I owned the flows from entry point to match, prototyped the risky moments early, and iterated with PM and engineering through design QA and post-release fixes.',
    impactLine: 'Ever since launch, streams run 3.4× longer — and the audience talks back.',
    features: [
      { t: 'Join the speed date', d: 'Any viewer can request a Live Match and join the streamer face to face — a timed speed date inside the stream, with the audience watching in chat.', img: 'assets/work/live-join.gif' },
      { t: 'Rate the date — it’s a match', d: 'When the timer ends, viewer and streamer each like or pass. Both liked it? It’s a match — celebrated live on stream.', img: 'assets/work/live-rate.gif' },
      { t: 'The match moves to Messages', d: 'After the stream, the match carries over into a private chat — the live moment becomes a real conversation.', img: 'assets/work/live-chat.gif' },
    ],
    stats: [['+242%', 'Avg. stream duration'], ['+300%', 'Daily messages'], ['+43%', 'Live audience']],
    caseLink: 'https://www.figma.com/design/Cg0aqAcvnYEe1iUulpyynM/Live-streaming-in-Dating-App?node-id=6-8',
    next: 'social',
  },
  social: {
    title: 'Mark', category: 'AR social · iOS', kind: 'mobile',
    shots: ['assets/work/ar-3.png', 'assets/work/ar.png', 'assets/work/ar-2.png'],
    lede: 'Mark is an AR social platform where people pin photos, video, and audio to real-world places — and the world around you comes alive. I led UX/UI from concept to MVP.',
    meta: { Role: 'UX/UI Designer', Timeline: '2021 – 2023', Platform: 'iOS · Android', Team: 'Shark Software' },
    glance: {
      problem: 'Social apps trap moments inside feeds. Mark set out to put them back into the physical world — without making location-based social feel invasive.',
      role: 'Led UX/UI from concept to MVP: information architecture, the core AR flows (scan, place, view), map discovery, and the visual system.',
      result: 'Shipped the MVP of a full AR social ecosystem — with use cases spanning tourism, education, and AR art events.',
    },
    whatH: 'A social layer on top of the real world.',
    what: 'Users drop “Marks” — photo, video, or audio — pinned to physical locations. Walk within ten meters of one and it activates: you can view it in AR, reply with your own, and explore what others left around you.',
    problemH: 'AR was impressive tech in search of a human reason.',
    problemP: 'Camera-first interfaces overwhelm people, location-based social can feel invasive, and an empty world gives nobody a reason to come back.',
    peakH: 'If placing a Mark felt like work, the world would stay empty.',
    peakP: 'No content means no discovery; no discovery means no creators. The whole product hinged on making one complex AR interaction feel effortless.',
    solutionH: 'Every flow anchored to a human moment.',
    resH: 'From concept sketches to a working MVP.',
    resP: 'I owned the information architecture, the scan–place–view loop, map discovery, and the visual system — working with engineering through delivery.',
    impactLine: 'Mark shipped as a full AR social ecosystem — and the world became the feed.',
    features: [
      { t: 'The world through the camera', d: 'Point your phone at a place and see the Marks people left there — floating in AR, exactly where they were posted. The UI stays out of the way; the world is the interface.', img: 'assets/work/ar-scan.gif' },
      { t: 'A map of what’s around you', d: 'A dark, calm map shows nearby Marks and viewpoints. It answers “what’s here?” before you ever raise the camera.', img: 'assets/work/ar-map.gif' },
      { t: 'Placing a Mark feels like magic', d: 'Scan a surface, position your content, and publish — a guided flow that makes a complex AR interaction feel like posting a story.', img: 'assets/work/ar-place.gif' },
    ],
    stats: [['10 m', 'Radius that activates a Mark'], ['3', 'Media types: photo · video · audio'], ['MVP', 'Concept → launch']],
    next: 'sync',
  },
  sync: {
    title: 'Sync', category: 'B2B SaaS · Web', kind: 'desktop',
    shots: ['assets/work/sync.png', 'assets/work/sync-2.png', 'assets/work/sync-3.png'],
    lede: 'A B2B SaaS concept that turns Figma designs into tracked dev tickets — designed from two points of view: the designer who hands off, and the developer who builds.',
    meta: { Role: 'Product Designer', Timeline: 'Dec 2025 – Feb 2026', Platform: 'Web', Team: 'Solo · end-to-end' },
    glance: {
      problem: 'Design intent dies in handoff. Specs live in Figma, tickets in Jira, questions in Slack — and developers rebuild context from fragments.',
      role: 'Researched and designed the whole product solo — the Figma plugin for designers, the web platform for developers, onboarding, and integrations.',
      result: 'A single board where frames become tickets and design context travels with them — from mockup to merge.',
    },
    whatH: 'One board, two points of view.',
    what: 'Sync has two halves. A Figma plugin lets designers record contextual notes — voice or screen — right on their frames and attach them to tickets. The web platform gives developers those tickets with the design, the notes, and generated code in one place. Both sides see the same truth.',
    problemH: 'Design intent dies somewhere between Figma and Jira.',
    problemP: 'Specs live in one tool, tickets in another, questions in Slack. Developers rebuild context from fragments — and designers re-explain the same decision three times.',
    peakH: 'Every handoff was a game of telephone.',
    peakP: 'The further a decision traveled from the design file, the more it decayed. The challenge: keep the designer’s voice attached to the work — all the way to the merge.',
    solutionH: 'Both sides of one system.',
    resH: 'One concept, carried end to end.',
    resP: 'Research, flows, and UI for the Figma plugin and the web platform — plus onboarding — designed solo as a complete product story.',
    impactLine: 'Frames become tickets, context travels with them, and both sides read the same truth.',
    features: [
      { t: 'The designer captures context, right inside Figma', d: 'A plugin records a screen or voice note on the exact frame, lets the designer review it, and links it to a dev ticket — intent captured once, in the moment, without leaving the canvas.', img: 'assets/work/sync-home.png' },
      { t: 'The developer opens the assigned ticket', d: 'On the Sync board, a ticket opens with everything attached: the linked frame, the designer’s notes, and status the whole team can see.', img: 'assets/work/sync-dashboard.png' },
      { t: 'Linked design, in full context', d: 'One click from ticket to design: annotated key points, the designer’s recordings, and a generated code snippet — side by side.', img: 'assets/work/sync-dev1.png' },
      { t: 'Review, resolve, ship', d: 'The developer plays the notes, checks the implementation details, and resolves the thread inside Sync — no archaeology across tools.', img: 'assets/work/sync-dev3.png' },
    ],
    stats: [['2', 'User POVs designed'], ['Solo', 'Designed end-to-end'], ['1', 'Source of truth']],
    caseLink: 'https://www.figma.com/design/Snphf5p8bv3HQV5aOVNefK/Sync--B2B-SaaS-?node-id=180-814',
    next: 'system',
  },
  system: {
    title: 'Design System', category: 'Design system · Web', kind: 'desktop',
    heroMedia: 'assets/work/ds-hero.gif',
    shots: ['assets/work/ds-2.png', 'assets/work/ds.png', 'assets/work/ds-3.png'],
    lede: 'A token-first design system for a marketplace platform — built to stop design and development drifting apart, with Figma as the single source of truth.',
    meta: { Role: 'Product Designer', Timeline: 'Jan 2025 – ongoing', Platform: 'Web · Desktop', Team: 'Design · Eng' },
    glance: {
      problem: 'Inconsistent UI, slow handoffs, and duplicated work — design and development each kept their own version of the truth.',
      role: 'Built the system end to end: foundations, semantic token architecture, component library, and dev-ready documentation.',
      result: 'Faster, predictable handoff — with token names mapping straight to code. Developers called it out in retrospectives.',
    },
    whatH: 'Every value has a name. Every name has a meaning.',
    what: 'Foundations — colour, type, spacing, iconography — are expressed as semantic tokens like color.background.brand, so designers and developers speak the same language. Components are documented with specs engineers build from directly.',
    problemH: 'Design and code each kept their own version of the truth.',
    problemP: 'Inconsistent UI, slow handoffs, duplicated work — every new screen negotiated its own colors and spacing from scratch.',
    peakH: 'Every new screen made the debt worse.',
    peakP: 'Without a shared language, each component multiplied the inconsistencies. The system had to give every value a name both sides trust — before scale made it unfixable.',
    solutionH: 'It starts at the token, not the component.',
    resH: 'Foundations first, then everything on top.',
    resP: 'Primitives → semantic tokens → components → nested patterns, each layer documented with dev-ready specs and mapped one-to-one to code.',
    impactLine: 'Handoff became predictable — developers noticed, and said so in retrospectives.',
    features: [
      { t: 'Before the system: hardcoded and disconnected', d: 'Every value lived as a raw hex or pixel number, pasted screen by screen. Restyling a single button meant editing it by hand — and design and code had no shared structure to point at. The first move was to give each value a semantic name both sides could trust, so one change would ripple everywhere.', img: 'assets/work/ds-before.gif' },
      { t: 'Foundation: token architecture', d: 'Three layers — primitives, semantic tokens, and component tokens — so every value traces from a raw hex to the exact place it’s used. Change the brand color once; it propagates everywhere.', img: 'assets/work/ds-arch.gif' },
      { t: 'Components built on the system', d: 'Buttons, inputs, cards — every component consumes semantic tokens only, documented with variants, states, and dev-ready specs.', img: 'assets/work/ds-comp.gif' },
      { t: 'Nested components that scale', d: 'Bigger patterns compose from smaller ones — a listing card nests buttons, badges, and imagery, so a fix to one primitive updates every pattern built on it.', img: 'assets/work/ds-nested.jpg' },
    ],
    stats: [['Token-first', 'Architecture'], ['1', 'Source of truth'], ['Faster', 'Design → dev handoff']],
    caseLink: 'https://www.figma.com/design/P3cMI0P7L46Zec6SlDhW82/Design-System-for-marketplace-platform?node-id=1-2',
    next: 'gust',
  },
  gust: {
    title: 'aiGust', category: 'Advisory SaaS · Web', kind: 'desktop',
    heroMedia: 'assets/work/gust.gif',
    shots: ['assets/work/gust.png', 'assets/work/gust-2.png', 'assets/work/gust-3.png'],
    lede: 'aiGust helps accountants advise, not just process. Founded by Belgium’s largest accounting firms, it turns raw bookkeeping data into reports, benchmarks, and AI alerts. I was the UX/UI designer on the MVP.',
    meta: { Role: 'UX/UI Designer', Scope: 'MVP', Platform: 'Web · Desktop', Client: 'aiGust · Belgium' },
    glance: {
      problem: 'Accountants spend their hours processing client data across disconnected tools — time that should go into advice. Clients get numbers, not answers.',
      role: 'UX/UI designer on the MVP — the full portal: dashboard, reports, benchmarking, transactions, notes, users, and settings.',
      result: 'Launched November 2024. 10+ accounting firms onboarded since, on top of the founding network.',
    },
    whatH: 'The right figures, in the right context.',
    what: 'aiGust connects to the accounting software firms already use (Exact, Yuki) and pulls every client’s books into one hub. From there it generates always-up-to-date reports, benchmarks each client against anonymised peers, and uses AI to flag anomalies worth a conversation — so the accountant walks into every meeting with the story, not just the spreadsheet.',
    problemH: 'Accountants process. They rarely get to advise.',
    problemP: 'Client data sits across disconnected tools, so the hours go into collecting and reconciling — and clients get numbers instead of answers.',
    peakH: 'The MVP had to make dense financial data feel calm.',
    peakP: 'Belgium’s largest accounting firms were betting on one shared platform. If the interface felt like another spreadsheet, accountants would never switch.',
    solutionH: 'Every screen answers an advisory question.',
    resH: 'From MVP to market.',
    resP: 'I designed the full portal — dashboard, reports, benchmarking, transactions, notes, users, and settings — as the UX/UI designer on the MVP.',
    impactLine: 'Launched November 2024 — and the founding network keeps growing.',
    features: [
      { t: 'One dashboard, the whole story', d: 'KPIs, revenue trend, peer benchmark, and AI-detected anomalies on a single screen — an accountant sees how a client is doing in ten seconds.', img: 'assets/work/gust.png', crop: true },
      { t: 'Reports that adapt to the conversation', d: 'Result sheet, balance sheet, ratios, and employee stats — switchable between book-year and rolling views, absolute numbers, percentages, or forecast, with fully configurable tables.', img: 'assets/work/gust-rep.png' },
      { t: 'Benchmarks against real competitors', d: 'Compose a peer group by sector, size, and region from the anonymised dataset — then read every metric against companies that actually compare.', img: 'assets/work/gust-3.png' },
      { t: 'Notes that stay with the client', d: 'A rich-text editor for meeting notes and follow-ups — advisory work documented inside the same portal as the data it refers to.', img: 'assets/work/gust-notes.png' },
      { t: 'Connectors and firm branding', d: 'Plug-and-play connectors to accounting packages, and white-label branding so every firm presents the portal in its own house style.', img: 'assets/work/gust-brand.png' },
    ],
    stats: [['Nov 2024', 'Product launched'], ['10+', 'Firms onboarded since'], ['MVP', 'UX/UI from the start']],
    caseLink: 'https://www.figma.com/design/0sUkJN807gX6NnXal1fyr1/aiGust---Redesigned-Accountancy-Portal?node-id=0-1',
    next: 'live',
  },
};

function getParam(name) { return new URLSearchParams(window.location.search).get(name); }

function render(key) {
  const p = PROJECTS[key] || PROJECTS.live;
  document.title = `${p.title} — Oleksandr Tanashkin`;
  const next = PROJECTS[p.next];
  const img = (src) => `<img class="zoomable" src="${src}" alt="${p.title} screen" loading="lazy" />`;

  const chips = Object.entries(p.meta).map(([k, v]) => `<span class="chip">${k} · <b>${v}</b></span>`).join('');
  const stats = p.stats.map(([n, l]) => `<div class="scard"><div class="scard__num">${n}</div><div class="scard__label">${l}</div></div>`).join('');
  const figma = p.caseLink ? `<a class="cta cta--primary" href="${p.caseLink}" target="_blank" rel="noopener">Open in Figma ↗</a>` : '';

  let hero;
  if (p.heroMedia) {
    hero = `<div class="band"><div class="win"><img class="hero-gif zoomable" src="${p.heroMedia}" alt="${p.title} — animated walkthrough" /></div></div>`;
  } else if (p.kind === 'mobile') {
    hero = `<div class="band"><div class="phones">${p.shots.map(s => `<div class="phone-fr">${img(s)}</div>`).join('')}</div></div>`;
  } else {
    hero = `<div class="band"><div class="win">${img(p.shots[0])}</div></div>`;
  }

  const glance = `
    <div class="glance">
      <div class="gl"><div class="gl__k">The problem</div><p>${p.glance.problem}</p></div>
      <div class="gl"><div class="gl__k">My role</div><p>${p.glance.role}</p></div>
      <div class="gl"><div class="gl__k">The impact</div><p>${p.glance.result}</p></div>
    </div>`;

  const media = (src, crop) => p.kind === 'mobile'
    ? `<div class="phone-fr">${img(src)}</div>`
    : `<div class="win${crop ? ' win--crop' : ''}">${img(src)}</div>`;

  const frows = p.features.map((f, i) => {
    const num = `<span class="frow__num">${String(i + 1).padStart(2, '0')}</span>`;
    if (f.steps) {
      return `<div class="frow frow--full">
        <div class="frow__txt">${num}<h3>${f.t}</h3><p>${f.d}</p></div>
        <div class="plugin-trio">${f.steps.map((s, j) => `<div class="tool-step"><div class="tool-fr"><img class="zoomable" src="${s.img}" alt="${p.title} plugin" loading="lazy" /></div><div class="tool-cap"><b>${j + 1}</b>${s.label}</div></div>`).join('')}</div>
      </div>`;
    }
    return `<div class="frow">
      <div class="frow__txt">${num}<h3>${f.t}</h3><p>${f.d}</p></div>
      <div class="frow__media">${media(f.img, f.crop)}</div>
    </div>`;
  }).join('');

  document.getElementById('page').innerHTML = `
    <article class="cs cs--${key}">
      <header class="cs__hero">
        <p class="cs__cat">${p.category}</p>
        <h1 class="cs__title">${p.title}</h1>
        <p class="cs__lede">${p.lede}</p>
        <div class="cs__chips">${chips}</div>
        <div class="cs__ctas">${figma}<a class="cta" href="work.html">All work</a></div>
      </header>

      ${hero}

      ${glance}

      <section class="sec">
        <p class="sec__kicker">The solution</p>
        <h2 class="sec__h">${p.solutionH}</h2>
      </section>

      <div class="frows">${frows}</div>

      <section class="sec">
        <p class="sec__kicker">The impact</p>
        <h2 class="sec__h">${p.impactLine}</h2>
      </section>
      <div class="scards">${stats}</div>

      <nav class="cs__next">
        <span class="lbl">Next project</span>
        <a href="project.html?p=${p.next}">${next.title} →</a>
      </nav>
    </article>
  `;
  window.scrollTo(0, 0);
}

render(getParam('p'));

// ---------- Lightbox: click any screenshot to enlarge ----------
(function () {
  const lb = document.createElement('div');
  lb.className = 'lb';
  lb.setAttribute('aria-hidden', 'true');
  lb.innerHTML =
    '<button class="lb__close" type="button" aria-label="Close">' +
    '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>' +
    '</button><img class="lb__img" src="" alt="" />';
  document.body.appendChild(lb);
  const lbImg = lb.querySelector('.lb__img');

  const open = (el) => {
    lbImg.src = el.currentSrc || el.src;
    lbImg.alt = el.alt || '';
    lb.classList.add('is-open');
    lb.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lb-open');
  };
  const close = () => {
    lb.classList.remove('is-open');
    lb.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lb-open');
    lbImg.src = '';
  };

  // open when a screenshot is clicked
  document.addEventListener('click', (e) => {
    const z = e.target.closest('.zoomable');
    if (z) open(z);
  });
  // close on any click that isn't the enlarged image (backdrop or close button)
  lb.addEventListener('click', (e) => { if (e.target !== lbImg) close(); });
  // close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lb.classList.contains('is-open')) close();
  });
})();
