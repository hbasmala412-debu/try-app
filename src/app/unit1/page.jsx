export default function Unit1Page() {
  const lessons = [
    {
      id: 1,
      title: "الدرس الأول: تعريف الذكاء الاصطناعي",
      path: "/unit1/lesson1",
      icon: "🤖",
      desc: "ما هو الذكاء الاصطناعي؟ وكيف بدأت فكرته؟",
    },
    {
      id: 2,
      title: "الدرس الثاني: مميزات الذكاء الاصطناعي",
      path: "/unit1/lesson2",
      icon: "✨",
      desc: "اكتشف أبرز إيجابيات الذكاء الاصطناعي وفوائده.",
    },
    {
      id: 3,
      title: "الدرس الثالث: عيوب الذكاء الاصطناعي",
      path: "/unit1/lesson3",
      icon: "⚠️",
      desc: "تعرف على التحديات والمخاطر المرتبطة بالذكاء الاصطناعي.",
    },
  ];

  return (
    <section className="unit-page-section">
      <div className="section-inner">

        {/* ── Header ── */}
        <div className="unit-header reveal">
          <a href="/units" className="unit-back-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 19l7-7-7-7" />
            </svg>
            العودة إلى الوحدات
          </a>

          <div className="section-tag" style={{ marginTop: "1.5rem" }}>📘 الوحدة الأولى</div>

          <h1 className="unit-title">
            مقدمة عن{" "}
            <span className="gradient-text">الذكاء الاصطناعي</span>
          </h1>

          <p className="section-desc">
            تعرف على أساسيات الذكاء الاصطناعي ومفاهيمه وتأثيره في حياتنا.
          </p>

          {/* Progress bar */}
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

              {/* Number */}
              <div className="lesson-number">{String(i + 1).padStart(2, "0")}</div>

              {/* Icon */}
              <div className="lesson-icon-wrap">
                <span className="lesson-icon">{lesson.icon}</span>
              </div>

              {/* Text */}
              <div className="lesson-text">
                <h2 className="card-title">{lesson.title}</h2>
                <p className="card-desc" style={{ marginBottom: 0 }}>{lesson.desc}</p>
              </div>

              {/* Arrow CTA */}
              <div className="lesson-arrow">
                <span className="btn-card">
                  دخول الدرس
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M19 12H5M12 5l-7 7 7 7" />
                  </svg>
                </span>
              </div>

              {/* Top accent line (same as course-card) */}
              <div className="lesson-accent" />
            </a>
          ))}
        </div>

      </div>

      <style>{`
        .unit-page-section {
          padding: 7rem 2rem 5rem;
          min-height: 100vh;
        }

        /* ── Header ── */
        .unit-header {
          margin-bottom: 3rem;
        }

        .unit-back-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          font-weight: 600;
          color: var(--text-muted);
          text-decoration: none;
          transition: color var(--transition-fast);
          padding: 6px 0;
        }
        .unit-back-link svg {
          width: 16px;
          height: 16px;
          transform: rotate(180deg);
          transition: transform var(--transition-fast);
        }
        .unit-back-link:hover {
          color: var(--primary);
        }
        .unit-back-link:hover svg {
          transform: rotate(180deg) translateX(-3px);
        }

        .unit-title {
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 900;
          line-height: 1.1;
          color: var(--text-primary);
          letter-spacing: -0.02em;
          margin: 0.75rem 0 1rem;
        }

        /* Progress */
        .unit-progress {
          margin-top: 2rem;
          max-width: 480px;
        }
        .unit-progress-label {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          font-weight: 600;
          color: var(--text-muted);
          margin-bottom: 6px;
        }
        .unit-progress-track {
          width: 100%;
          height: 6px;
          background: var(--border-subtle);
          border-radius: var(--radius-full);
          overflow: hidden;
        }
        .unit-progress-fill {
          height: 100%;
          background: var(--gradient-primary);
          border-radius: var(--radius-full);
          transition: width 0.6s cubic-bezier(0.4,0,0.2,1);
        }

        /* ── Lesson cards ── */
        .lessons-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .lesson-card {
          position: relative;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.5rem 1.75rem;
          background: var(--bg-card);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--border-card);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-card);
          text-decoration: none;
          overflow: hidden;
          transition: all var(--transition-base);
        }
        .lesson-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--gradient-card);
          opacity: 0;
          transition: opacity var(--transition-base);
        }
        .lesson-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
          border-color: var(--primary);
        }
        .lesson-card:hover::before { opacity: 1; }

        /* Stagger */
        .lesson-card:nth-child(2) { transition-delay: 0.05s; }
        .lesson-card:nth-child(3) { transition-delay: 0.1s; }

        /* Top accent line */
        .lesson-accent {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: var(--gradient-primary);
          transform: scaleX(0);
          transform-origin: right;
          transition: transform var(--transition-base);
          border-radius: var(--radius-full);
        }
        .lesson-card:hover .lesson-accent { transform: scaleX(1); }

        /* Number watermark */
        .lesson-number {
          position: absolute;
          left: 1.5rem;
          top: 50%;
          transform: translateY(-50%);
          font-size: 4rem;
          font-weight: 900;
          color: var(--primary);
          opacity: 0.06;
          user-select: none;
          pointer-events: none;
          letter-spacing: -0.04em;
          line-height: 1;
          transition: opacity var(--transition-base);
        }
        .lesson-card:hover .lesson-number { opacity: 0.1; }

        /* Icon */
        .lesson-icon-wrap {
          position: relative;
          z-index: 1;
          width: 52px;
          height: 52px;
          border-radius: var(--radius-md);
          background: var(--primary-glow);
          border: 1px solid var(--border-card);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform var(--transition-fast), background var(--transition-fast);
        }
        .lesson-card:hover .lesson-icon-wrap {
          transform: scale(1.1);
          background: var(--primary-glow);
        }
        .lesson-icon {
          font-size: 24px;
          line-height: 1;
        }

        /* Text */
        .lesson-text {
          position: relative;
          z-index: 1;
          flex: 1;
        }

        /* Arrow */
        .lesson-arrow {
          position: relative;
          z-index: 1;
          flex-shrink: 0;
          opacity: 0;
          transform: translateX(6px);
          transition: opacity var(--transition-fast), transform var(--transition-fast);
        }
        .lesson-card:hover .lesson-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        /* ── Responsive ── */
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
