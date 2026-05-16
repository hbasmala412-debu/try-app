export default function Unit2Page() {
  const lessons = [
    {
      id: 1,
      title: "أنواع الذكاء الاصطناعي",
      subtitle: "الموضوع الرابع",
      path: "/unit2/lesson1",
      icon: "📊",
      desc: "تعرّف على الأنواع الثلاثة للذكاء الاصطناعي من الضيق إلى الفائق.",
    },
    {
      id: 2,
      title: "تطبيقات الذكاء الاصطناعي",
      subtitle: "الموضوع الخامس",
      path: "/unit2/lesson2",
      icon: "🚗",
      desc: "اكتشف كيف يدخل الذكاء الاصطناعي في حياتنا اليومية عبر تطبيقات متنوعة.",
    },
    {
      id: 3,
      title: "مجالات الذكاء الاصطناعي",
      subtitle: "الموضوع السادس",
      path: "/unit2/lesson3",
      icon: "🧠",
      desc: "استعرض أبرز المجالات العلمية التي يعمل فيها الذكاء الاصطناعي.",
    },
  ];

  return (
    <section className="unit-page-section" dir="rtl">
      <div className="section-inner" style={{ maxWidth: "860px" }}>

        {/* ── Breadcrumb ── */}
        <nav className="lesson-breadcrumb reveal">
          <a href="/units" className="breadcrumb-link">الوحدات</a>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-current">الوحدة الثانية</span>
        </nav>

        {/* ── Header ── */}
        <div className="unit-header reveal">
          <div className="section-tag">🚀 الوحدة الثانية</div>
          <h1 className="unit-title">
            رحلة في عالم{" "}
            <span className="gradient-text">الذكاء الاصطناعي</span>
          </h1>
          <p className="section-desc" style={{ marginTop: "0.75rem" }}>
            اكتشف كيف يتنوع الذكاء الاصطناعي وكيف يغير عالمنا اليوم.
          </p>

          {/* Progress */}
          <div className="unit-progress">
            <div className="unit-progress-label">
              <span>التقدم في الوحدة</span>
              <span>٠ / {lessons.length} دروس</span>
            </div>
            <div className="unit-progress-track">
              <div className="unit-progress-fill" style={{ width: "0%" }} />
            </div>
          </div>
        </div>

        {/* ── Lessons list ── */}
        <div className="lessons-list">
          {lessons.map((lesson, i) => (
            <a key={lesson.id} href={lesson.path} className="lesson-card reveal">
              <div className="lesson-number">{String(i + 1).padStart(2, "0")}</div>
              <div className="lesson-icon-wrap">
                <span className="lesson-icon">{lesson.icon}</span>
              </div>
              <div className="lesson-text">
                <span className="lesson-subtitle">{lesson.subtitle}</span>
                <h2 className="card-title" style={{ marginBottom: "0.25rem" }}>{lesson.title}</h2>
                <p className="card-desc" style={{ marginBottom: 0 }}>{lesson.desc}</p>
              </div>
              <div className="lesson-arrow">
                <span className="btn-card">
                  دخول
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M19 12H5M12 5l-7 7 7 7" />
                  </svg>
                </span>
              </div>
              <div className="lesson-accent" />
            </a>
          ))}
        </div>

        {/* ── Back button ── */}
        <div className="reveal" style={{ textAlign: "center", marginTop: "1rem" }}>
          <a href="/units" className="btn-secondary" style={{ display: "inline-flex" }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: "16px", height: "16px", transform: "rotate(180deg)" }}>
              <path d="M5 12h14M12 19l7-7-7-7" />
            </svg>
            العودة إلى الوحدات
          </a>
        </div>

      </div>

      <style>{`
        .unit-page-section { padding: 7rem 2rem 5rem; min-height: 100vh; }

        .lesson-breadcrumb {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 8px 18px;
          background: var(--bg-glass); backdrop-filter: blur(12px);
          border: 1px solid var(--border-card); border-radius: var(--radius-full);
          font-size: 13px; font-weight: 500; width: fit-content;
        }
        .breadcrumb-link { color: var(--text-muted); text-decoration: none; transition: color var(--transition-fast); }
        .breadcrumb-link:hover { color: var(--primary); }
        .breadcrumb-sep { color: var(--border-card); }
        .breadcrumb-current { color: var(--primary); font-weight: 700; }

        .unit-header { margin-bottom: 0.5rem; }
        .unit-title {
          font-size: clamp(2rem, 5vw, 3.2rem); font-weight: 900;
          line-height: 1.1; color: var(--text-primary);
          letter-spacing: -0.02em; margin: 0.75rem 0 1rem;
        }

        .unit-progress { margin-top: 2rem; max-width: 480px; }
        .unit-progress-label {
          display: flex; justify-content: space-between;
          font-size: 12px; font-weight: 600; color: var(--text-muted); margin-bottom: 6px;
        }
        .unit-progress-track {
          width: 100%; height: 6px; background: var(--border-subtle);
          border-radius: var(--radius-full); overflow: hidden;
        }
        .unit-progress-fill {
          height: 100%; background: var(--gradient-primary);
          border-radius: var(--radius-full);
          transition: width 0.6s cubic-bezier(0.4,0,0.2,1);
        }

        .lessons-list { display: flex; flex-direction: column; gap: 1.25rem; }

        .lesson-card {
          position: relative; display: flex; align-items: center; gap: 1.5rem;
          padding: 1.5rem 1.75rem;
          background: var(--bg-card); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--border-card); border-radius: var(--radius-lg);
          box-shadow: var(--shadow-card); text-decoration: none; overflow: hidden;
          transition: all var(--transition-base);
        }
        .lesson-card::before {
          content: ''; position: absolute; inset: 0;
          background: var(--gradient-card); opacity: 0; transition: opacity var(--transition-base);
        }
        .lesson-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); border-color: var(--primary); }
        .lesson-card:hover::before { opacity: 1; }
        .lesson-card:nth-child(2) { transition-delay: 0.05s; }
        .lesson-card:nth-child(3) { transition-delay: 0.1s; }

        .lesson-accent {
          position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: var(--gradient-primary);
          transform: scaleX(0); transform-origin: right;
          transition: transform var(--transition-base); border-radius: var(--radius-full);
        }
        .lesson-card:hover .lesson-accent { transform: scaleX(1); }

        .lesson-number {
          position: absolute; left: 1.5rem; top: 50%; transform: translateY(-50%);
          font-size: 4rem; font-weight: 900; color: var(--primary);
          opacity: 0.06; user-select: none; pointer-events: none;
          letter-spacing: -0.04em; line-height: 1;
          transition: opacity var(--transition-base);
        }
        .lesson-card:hover .lesson-number { opacity: 0.1; }

        .lesson-icon-wrap {
          position: relative; z-index: 1;
          width: 52px; height: 52px; border-radius: var(--radius-md);
          background: var(--primary-glow); border: 1px solid var(--border-card);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
          transition: transform var(--transition-fast);
        }
        .lesson-card:hover .lesson-icon-wrap { transform: scale(1.1); }
        .lesson-icon { font-size: 24px; line-height: 1; }

        .lesson-text { position: relative; z-index: 1; flex: 1; }
        .lesson-subtitle { font-size: 11px; font-weight: 700; color: var(--primary); opacity: 0.7; text-transform: uppercase; letter-spacing: 0.06em; display: block; margin-bottom: 3px; }

        .lesson-arrow {
          position: relative; z-index: 1; flex-shrink: 0;
          opacity: 0; transform: translateX(6px);
          transition: opacity var(--transition-fast), transform var(--transition-fast);
        }
        .lesson-card:hover .lesson-arrow { opacity: 1; transform: translateX(0); }

        @media (max-width: 640px) {
          .unit-page-section { padding: 5rem 1rem 3rem; }
          .lesson-card { flex-wrap: wrap; gap: 1rem; }
          .lesson-arrow { display: none; }
          .lesson-number { display: none; }
        }
      `}</style>
    </section>
  );
}