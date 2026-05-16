export default function LessonApps() {
  const apps = [
    {
      icon: "🚗",
      title: "سيارات ذاتية القيادة",
      desc: "تعتمد على الكاميرات والحساسات لرؤية الطريق واتخاذ قرارات فورية مثل التوقف أو الالتفاف دون تدخل بشري.",
      info: "تعتمد على تحليل البيانات في الوقت الحقيقي لاتخاذ قرارات خلال أجزاء من الثانية.",
    },
    {
      icon: "🎙️",
      title: "المساعد الشخصي الذكي",
      desc: "مثل Siri و Alexa، تقوم بفهم لغة البشر الطبيعية وتنفيذ الأوامر وتقديم اقتراحات بناءً على عاداتك.",
      info: "يتطور مع الوقت من خلال تعلم تفضيلات المستخدم وسلوكه اليومي.",
    },
    {
      icon: "🎮",
      title: "الألعاب الذكية",
      desc: "تستخدم الذكاء الاصطناعي لجعل اللعبة أكثر متعةً وتحدياً من خلال التفاعل مع اللاعب.",
      info: "بعض الألعاب تغير مستواها تلقائياً حسب أداء اللاعب.",
    },
    {
      icon: "🏥",
      title: "الأطباء الرقميون",
      desc: "يساعد الذكاء الاصطناعي الأطباء في تشخيص الأمراض وعلاجها بسرعة ودقة أعلى.",
      info: "يمكنه تحليل صور الأشعة واكتشاف الأمراض بدقة تفوق الإنسان.",
    },
    {
      icon: "🌍",
      title: "المترجم الفوري",
      desc: "يمكن ترجمة الكلمات والجمل فوراً، مما يسهل التواصل بين الأشخاص من لغات مختلفة.",
      info: "يدعم مئات اللغات ويساعد في كسر حواجز التواصل بين الشعوب.",
    },
    {
      icon: "🛒",
      title: "التسوق الذكي",
      desc: "تقدم مواقع التسوق اقتراحات لمنتجات مناسبة لك بناءً على اهتماماتك وسجل تصفحك.",
      info: "يعتمد على سجل البحث والمشتريات لعرض منتجات تناسب احتياجاتك تماماً.",
    },
  ];

  return (
    <section className="lesson-section" dir="rtl">
      <div className="lesson-inner">

        {/* ── Breadcrumb ── */}
        <nav className="lesson-breadcrumb reveal">
          <a href="/units" className="breadcrumb-link">الوحدات</a>
          <span className="breadcrumb-sep">/</span>
          <a href="/unit2" className="breadcrumb-link">الوحدة الثانية</a>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-current">الدرس الثاني</span>
        </nav>

        {/* ── Header ── */}
        <div className="lesson-header reveal">
          <div className="section-tag">🚗 الموضوع الخامس</div>
          <h1 className="unit-title">
            تطبيقات{" "}
            <span className="gradient-text">الذكاء الاصطناعي</span>
          </h1>
          <p className="section-desc" style={{ marginTop: "0.75rem" }}>
            كيف يدخل الذكاء الاصطناعي في حياتنا اليومية عبر ستة تطبيقات فعلية.
          </p>
        </div>

        {/* ── Vertical list ── */}
        <div className="vlist">
          {apps.map((app, i) => (
            <div key={i} className="vlist-row reveal">
              <div className="vlist-num">{String(i + 1).padStart(2, "0")}</div>

              <div className="vlist-icon-wrap">
                <span className="vlist-icon">{app.icon}</span>
              </div>

              <div className="vlist-text">
                <h3 className="vlist-title">{app.title}</h3>
                <p className="vlist-desc">{app.desc}</p>
                <div className="vlist-info">
                  <span className="vlist-info-dot">💡</span>
                  <p>{app.info}</p>
                </div>
              </div>

              <div className="vlist-accent" />
            </div>
          ))}
        </div>

        {/* ── Navigation ── */}
        <div className="lesson-nav reveal">
          <a href="/unit2/lesson1" className="btn-secondary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 19l7-7-7-7" />
            </svg>
            الدرس السابق
          </a>
          <a href="/unit2/lesson3" className="btn-primary">
            الدرس التالي: المجالات
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
          </a>
        </div>

      </div>

      <style>{`
        ${sharedStyles}

        .vlist { display: flex; flex-direction: column; gap: 1rem; }

        .vlist-row {
          position: relative; display: flex; align-items: flex-start; gap: 1.5rem;
          padding: 1.75rem 2rem;
          background: var(--bg-card); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--border-card); border-radius: var(--radius-lg);
          box-shadow: var(--shadow-card); overflow: hidden;
          transition: all var(--transition-base);
        }
        .vlist-row::before {
          content: ''; position: absolute; inset: 0;
          background: var(--gradient-card); opacity: 0; transition: opacity var(--transition-base);
        }
        .vlist-row:hover { transform: translateX(-6px); box-shadow: var(--shadow-lg); border-color: var(--primary); }
        .vlist-row:hover::before { opacity: 1; }
        .vlist-row:nth-child(2) { transition-delay: 0.04s; }
        .vlist-row:nth-child(3) { transition-delay: 0.08s; }
        .vlist-row:nth-child(4) { transition-delay: 0.12s; }
        .vlist-row:nth-child(5) { transition-delay: 0.16s; }
        .vlist-row:nth-child(6) { transition-delay: 0.20s; }

        .vlist-accent {
          position: absolute; top: 0; right: 0; bottom: 0; width: 3px;
          background: var(--gradient-primary);
          transform: scaleY(0); transform-origin: top;
          transition: transform var(--transition-base); border-radius: var(--radius-full);
        }
        .vlist-row:hover .vlist-accent { transform: scaleY(1); }

        .vlist-num {
          position: absolute; left: 1.25rem; top: 50%; transform: translateY(-50%);
          font-size: 3.5rem; font-weight: 900; line-height: 1;
          color: var(--primary); opacity: 0.07;
          user-select: none; pointer-events: none; letter-spacing: -0.04em;
          transition: opacity var(--transition-base);
        }
        .vlist-row:hover .vlist-num { opacity: 0.14; }

        .vlist-icon-wrap {
          position: relative; z-index: 1; flex-shrink: 0;
          width: 56px; height: 56px; border-radius: var(--radius-md);
          background: var(--primary-glow); border: 1px solid var(--border-card);
          display: flex; align-items: center; justify-content: center;
          transition: transform var(--transition-fast);
          margin-top: 2px;
        }
        .vlist-row:hover .vlist-icon-wrap { transform: scale(1.1) rotate(-4deg); }
        .vlist-icon { font-size: 26px; line-height: 1; }

        .vlist-text { position: relative; z-index: 1; flex: 1; }
        .vlist-title { font-size: 1.1rem; font-weight: 800; color: var(--primary); margin-bottom: 0.35rem; }
        .vlist-desc { font-size: 0.93rem; color: var(--text-secondary); line-height: 1.75; margin: 0 0 0.85rem; }

        .vlist-info {
          display: flex; align-items: flex-start; gap: 8px;
          padding: 0.65rem 0.9rem;
          background: var(--bg-surface-2); border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
        }
        .vlist-info-dot { font-size: 14px; flex-shrink: 0; margin-top: 1px; }
        .vlist-info p { font-size: 0.85rem; color: var(--text-muted); line-height: 1.6; margin: 0; font-style: italic; }

        @media (max-width: 640px) {
          .lesson-section { padding: 5rem 1rem 3rem; }
          .vlist-row { padding: 1.25rem; gap: 1rem; }
          .vlist-num { display: none; }
        }
      `}</style>
    </section>
  );
}

const sharedStyles = `
  .lesson-section { padding: 7rem 2rem 5rem; min-height: 100vh; }
  .lesson-inner { max-width: 860px; margin: 0 auto; display: flex; flex-direction: column; gap: 2rem; }
  .lesson-breadcrumb {
    display: inline-flex; align-items: center; gap: 8px; padding: 8px 18px;
    background: var(--bg-glass); backdrop-filter: blur(12px);
    border: 1px solid var(--border-card); border-radius: var(--radius-full);
    font-size: 13px; font-weight: 500; width: fit-content;
  }
  .breadcrumb-link { color: var(--text-muted); text-decoration: none; transition: color var(--transition-fast); }
  .breadcrumb-link:hover { color: var(--primary); }
  .breadcrumb-sep { color: var(--border-card); }
  .breadcrumb-current { color: var(--primary); font-weight: 700; }
  .lesson-header { margin-bottom: 0.5rem; }
  .unit-title { font-size: clamp(2rem, 5vw, 3rem); font-weight: 900; line-height: 1.1; color: var(--text-primary); letter-spacing: -0.02em; margin-top: 0.75rem; }
  .lesson-nav {
    display: flex; align-items: center; justify-content: space-between;
    padding-top: 1.5rem; border-top: 1px solid var(--border-subtle);
    flex-wrap: wrap; gap: 1rem; margin-top: 1rem;
  }
  .btn-primary svg, .btn-secondary svg { width: 16px; height: 16px; flex-shrink: 0; }
  .btn-secondary svg { transform: rotate(180deg); }
  @media (max-width: 640px) {
    .lesson-nav { flex-direction: column-reverse; }
    .lesson-nav a { width: 100%; justify-content: center; }
  }
`;