export default function LessonDisadvantages() {
  const bads = [
    {
      icon: "💼",
      title: "فقدان الوظائف",
      desc: "اعتماد الشركات على الآلات قد يقلل فرص العمل للبشر في كثير من القطاعات.",
    },
    {
      icon: "💸",
      title: "التكلفة العالية",
      desc: "تحتاج أنظمة الذكاء الاصطناعي لميزانيات ضخمة لتطويرها وصيانتها وتحديثها.",
    },
    {
      icon: "🧠",
      title: "الاعتماد الزائد عليه",
      desc: "قد يتوقف الإنسان تدريجياً عن التفكير وحل المشكلات بنفسه مع مرور الوقت.",
    },
    {
      icon: "📊",
      title: "الاعتماد على البيانات",
      desc: "إذا كانت البيانات المدخلة غير دقيقة أو منحازة، تكون النتائج خاطئة تماماً.",
    },
    {
      icon: "⚠️",
      title: "إمكانية سوء الاستخدام",
      desc: "قد يُستخدم في أغراض غير أخلاقية كالاختراق الإلكتروني أو نشر المعلومات المضللة.",
    },
    {
      icon: "🔒",
      title: "انتهاك الخصوصية",
      desc: "قد يؤدي إلى جمع بيانات شخصية بشكل مفرط دون علم المستخدمين أو موافقتهم.",
    },
  ];

  return (
    <section className="lesson-section" dir="rtl">
      <div className="lesson-inner">

        {/* ── Breadcrumb ── */}
        <nav className="lesson-breadcrumb reveal">
          <a href="/units" className="breadcrumb-link">الوحدات</a>
          <span className="breadcrumb-sep">/</span>
          <a href="/unit1" className="breadcrumb-link">الوحدة الأولى</a>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-current">الدرس الثالث</span>
        </nav>

        {/* ── Header ── */}
        <div className="lesson-header reveal">
          <div className="section-tag warn-tag">⚠️ الدرس الثالث</div>
          <h1 className="unit-title">
            عيوب{" "}
            <span className="gradient-text-warn">الذكاء الاصطناعي</span>
          </h1>
          <p className="section-desc" style={{ marginTop: "0.75rem" }}>
            ستة تحديات مهمة يجب فهمها قبل الاعتماد على الذكاء الاصطناعي بشكل كامل.
          </p>
        </div>

        {/* ── Warning callout ── */}
        <div className="warn-callout reveal">
          <span>⚠️</span>
          <p>رغم الفوائد الكبيرة للذكاء الاصطناعي، إلا أنه يحمل تحديات ومخاطر يجب أخذها بعين الاعتبار عند تطبيقه.</p>
        </div>

        {/* ── Vertical list ── */}
        <div className="vlist">
          {bads.map((b, i) => (
            <div key={i} className="vlist-row vlist-row-warn reveal">
              <div className="vlist-num vlist-num-warn">{String(i + 1).padStart(2, "0")}</div>
              <div className="vlist-icon-wrap vlist-icon-wrap-warn">
                <span className="vlist-icon">{b.icon}</span>
              </div>
              <div className="vlist-text">
                <h3 className="vlist-title vlist-title-warn">{b.title}</h3>
                <p className="vlist-desc">{b.desc}</p>
              </div>
              <div className="vlist-accent vlist-accent-warn" />
            </div>
          ))}
        </div>

        {/* ── Navigation ── */}
        <div className="lesson-nav reveal">
          <a href="/unit1/lesson2" className="btn-secondary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 19l7-7-7-7" />
            </svg>
            الدرس السابق
          </a>
          <a href="/unit2/lesson1" className="btn-primary btn-success">
            بداية الوحدة الثانية
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
          </a>
        </div>

      </div>

      <style>{`
        ${sharedStyles}

        /* Warn color overrides */
        .warn-tag {
          background: rgba(239,68,68,0.1) !important;
          border-color: rgba(239,68,68,0.25) !important;
          color: #ef4444 !important;
        }
        .gradient-text-warn {
          background: linear-gradient(135deg, #f97316 0%, #ef4444 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .warn-callout {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 1.1rem 1.4rem;
          background: rgba(239,68,68,0.06);
          border: 1px solid rgba(239,68,68,0.2);
          border-right: 3px solid #ef4444;
          border-radius: var(--radius-md);
          font-size: 0.95rem;
          line-height: 1.75;
          color: var(--text-secondary);
        }
        .warn-callout p { margin: 0; }

        /* List */
        .vlist { display: flex; flex-direction: column; gap: 1rem; }

        .vlist-row {
          position: relative;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.75rem 2rem;
          background: var(--bg-card);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--border-card);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-card);
          overflow: hidden;
          transition: all var(--transition-base);
        }
        .vlist-row::before {
          content: '';
          position: absolute; inset: 0;
          opacity: 0;
          transition: opacity var(--transition-base);
        }
        .vlist-row-warn::before {
          background: linear-gradient(135deg, rgba(239,68,68,0.04) 0%, rgba(249,115,22,0.03) 100%);
        }
        .vlist-row:hover { transform: translateX(-6px); box-shadow: var(--shadow-lg); }
        .vlist-row-warn:hover { border-color: #ef4444; }
        .vlist-row:hover::before { opacity: 1; }

        .vlist-row:nth-child(2) { transition-delay: 0.04s; }
        .vlist-row:nth-child(3) { transition-delay: 0.08s; }
        .vlist-row:nth-child(4) { transition-delay: 0.12s; }
        .vlist-row:nth-child(5) { transition-delay: 0.16s; }
        .vlist-row:nth-child(6) { transition-delay: 0.20s; }

        .vlist-accent {
          position: absolute;
          top: 0; right: 0; bottom: 0;
          width: 3px;
          transform: scaleY(0);
          transform-origin: top;
          transition: transform var(--transition-base);
          border-radius: var(--radius-full);
        }
        .vlist-accent-warn { background: linear-gradient(180deg, #f97316 0%, #ef4444 100%); }
        .vlist-row:hover .vlist-accent { transform: scaleY(1); }

        .vlist-num {
          font-size: 3.5rem;
          font-weight: 900;
          line-height: 1;
          opacity: 0.12;
          letter-spacing: -0.04em;
          min-width: 72px;
          text-align: center;
          flex-shrink: 0;
          user-select: none;
          transition: opacity var(--transition-base);
        }
        .vlist-num-warn { color: #ef4444; }
        .vlist-row:hover .vlist-num { opacity: 0.22; }

        .vlist-icon-wrap {
          position: relative; z-index: 1;
          width: 56px; height: 56px;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-card);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: transform var(--transition-fast);
        }
        .vlist-icon-wrap-warn { background: rgba(239,68,68,0.08); border-color: rgba(239,68,68,0.2); }
        .vlist-row:hover .vlist-icon-wrap { transform: scale(1.1) rotate(-4deg); }
        .vlist-icon { font-size: 26px; line-height: 1; }

        .vlist-text { position: relative; z-index: 1; flex: 1; }
        .vlist-title { font-size: 1.15rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.35rem; }
        .vlist-title-warn { color: #ef4444; }
        .vlist-desc { font-size: 0.95rem; color: var(--text-muted); line-height: 1.7; margin: 0; }

        /* Green CTA */
        .btn-success {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%) !important;
          box-shadow: 0 4px 20px rgba(16,185,129,0.35) !important;
        }
        .btn-success:hover { box-shadow: 0 8px 30px rgba(16,185,129,0.45) !important; }

        @media (max-width: 640px) {
          .vlist-row { padding: 1.25rem; gap: 1rem; }
          .vlist-num { font-size: 2.5rem; min-width: 48px; }
          .vlist-icon-wrap { width: 46px; height: 46px; }
        }
      `}</style>
    </section>
  );
}

const sharedStyles = `
  .lesson-section { padding: 7rem 2rem 5rem; min-height: 100vh; }
  .lesson-inner {
    max-width: 860px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .lesson-breadcrumb {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 18px;
    background: var(--bg-glass);
    backdrop-filter: blur(12px);
    border: 1px solid var(--border-card);
    border-radius: var(--radius-full);
    font-size: 13px;
    font-weight: 500;
    width: fit-content;
  }
  .breadcrumb-link { color: var(--text-muted); text-decoration: none; transition: color var(--transition-fast); }
  .breadcrumb-link:hover { color: var(--primary); }
  .breadcrumb-sep { color: var(--border-card); }
  .breadcrumb-current { color: var(--primary); font-weight: 700; }
  .lesson-header { margin-bottom: 0.5rem; }
  .unit-title {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 900;
    line-height: 1.1;
    color: var(--text-primary);
    letter-spacing: -0.02em;
    margin-top: 0.75rem;
  }
  .lesson-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 1.5rem;
    border-top: 1px solid var(--border-subtle);
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1rem;
  }
  .btn-primary svg, .btn-secondary svg { width: 16px; height: 16px; flex-shrink: 0; }
  .btn-secondary svg { transform: rotate(180deg); }
  @media (max-width: 640px) {
    .lesson-section { padding: 5rem 1rem 3rem; }
    .lesson-nav { flex-direction: column-reverse; }
    .lesson-nav a { width: 100%; justify-content: center; }
  }
`;
