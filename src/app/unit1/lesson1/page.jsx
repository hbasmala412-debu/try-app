export default function LessonOne() {
  return (
    <section className="lesson-section" dir="rtl">
      <div className="lesson-inner">

        {/* ── Breadcrumb ── */}
        <nav className="lesson-breadcrumb reveal">
          <a href="/units" className="breadcrumb-link">الوحدات</a>
          <span className="breadcrumb-sep">/</span>
          <a href="/unit1" className="breadcrumb-link">الوحدة الأولى</a>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-current">الدرس الأول</span>
        </nav>

        {/* ── Title ── */}
        <div className="lesson-header reveal">
          <div className="section-tag">🤖 الدرس الأول</div>
          <h1 className="unit-title">
            تعريف{" "}
            <span className="gradient-text">الذكاء الاصطناعي</span>
          </h1>
        </div>

        {/* ── Section 1: Definition ── */}
        <div className="lesson-card reveal">
          <div className="lesson-card-glow" />
          <div className="lesson-card-body">
            <p className="lesson-lead">
              الذكاء الاصطناعي هو فرع من فروع التكنولوجيا وعلوم الحاسب، يهدف إلى تصميم برامج وأجهزة تستطيع أن{" "}
              <strong className="gradient-text">تفكّر وتتعلّم وتتصرف</strong>{" "}
              بطريقة تشبه الإنسان.
            </p>

            <div className="lesson-callout">
              <p>
                بمعنى آخر، هو محاولة لجعل الكمبيوتر أو الآلة "ذكية"، بحيث لا تنفذ الأوامر فقط، بل تفهم المعلومات وتستخدمها لاتخاذ قرارات.
              </p>
            </div>
          </div>
        </div>

        {/* ── Section 2: How AI learns ── */}
        <div className="lesson-feature-card reveal">
          <div className="lesson-feature-text">
            <h2 className="lesson-section-title">كيف يتعلم الذكاء الاصطناعي؟</h2>
            <p className="lesson-feature-desc">
              يعتمد على تدريب الأجهزة باستخدام كميات كبيرة من البيانات. فكلما زادت المعلومات التي يحصل عليها، أصبح أكثر قدرة على الفهم والتوقع، تماماً مثلما يتعلم الطفل من التجارب.
            </p>
          </div>
          <div className="lesson-feature-img-wrap">
            <img src="/images/ai6.jpg" alt="تعلم الذكاء الاصطناعي" className="lesson-feature-img" />
            <div className="lesson-feature-img-overlay" />
          </div>
        </div>

        {/* ── Section 3: Daily example ── */}
        <div className="lesson-example-card reveal">
          <div className="lesson-example-icon">💡</div>
          <div>
            <h3 className="lesson-example-title">مثال من حياتك اليومية</h3>
            <p className="lesson-example-text">
              عندما تستخدم الهاتف للبحث عن شيء، أو عندما يقترح لك تطبيق فيديوهات قد تعجبك، فهذا لأن الذكاء الاصطناعي تعلّم من اختياراتك السابقة وفهم اهتماماتك.
            </p>
          </div>
        </div>

        {/* ── Navigation ── */}
        <div className="lesson-nav reveal">
          <a href="/unit1" className="btn-secondary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 19l7-7-7-7" />
            </svg>
            العودة للوحدة
          </a>
          <a href="/unit1/lesson2" className="btn-primary">
            الدرس التالي: المميزات
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
          </a>
        </div>

      </div>

      <style>{`
        ${lessonSharedStyles}

        /* Section 2 — feature card */
        .lesson-feature-card {
          display: flex;
          gap: 2rem;
          align-items: center;
          background: var(--gradient-hero);
          border-radius: var(--radius-xl);
          padding: 2.5rem;
          box-shadow: var(--shadow-lg);
          color: white;
          overflow: hidden;
        }
        .lesson-feature-text { flex: 1; }
        .lesson-section-title {
          font-size: 1.6rem;
          font-weight: 800;
          margin-bottom: 1rem;
          color: white;
        }
        .lesson-feature-desc {
          font-size: 1.05rem;
          line-height: 1.8;
          opacity: 0.92;
        }
        .lesson-feature-img-wrap {
          width: 40%;
          flex-shrink: 0;
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.2);
          position: relative;
          aspect-ratio: 4/3;
        }
        .lesson-feature-img {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.4,0,0.2,1);
        }
        .lesson-feature-img-wrap:hover .lesson-feature-img { transform: scale(1.05); }
        .lesson-feature-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(79,70,229,0.15) 0%, transparent 60%);
          pointer-events: none;
        }

        @media (max-width: 640px) {
          .lesson-feature-card { flex-direction: column-reverse; }
          .lesson-feature-img-wrap { width: 100%; }
        }
      `}</style>
    </section>
  );
}

/* ─────────────────────────────────────────
   Shared styles injected into every lesson
───────────────────────────────────────── */
const lessonSharedStyles = `
  .lesson-section {
    padding: 7rem 2rem 5rem;
    min-height: 100vh;
  }
  .lesson-inner {
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  /* Breadcrumb */
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
  .breadcrumb-link {
    color: var(--text-muted);
    text-decoration: none;
    transition: color var(--transition-fast);
  }
  .breadcrumb-link:hover { color: var(--primary); }
  .breadcrumb-sep { color: var(--border-card); }
  .breadcrumb-current { color: var(--primary); font-weight: 700; }

  /* Header */
  .lesson-header { margin-bottom: 0.5rem; }
  .unit-title {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 900;
    line-height: 1.1;
    color: var(--text-primary);
    letter-spacing: -0.02em;
    margin-top: 0.75rem;
  }

  /* Main card */
  .lesson-card {
    position: relative;
    background: var(--bg-card);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid var(--border-card);
    border-radius: var(--radius-xl);
    overflow: hidden;
    box-shadow: var(--shadow-card);
  }
  .lesson-card-glow {
    position: absolute; inset: 0;
    background: var(--gradient-card);
    pointer-events: none;
  }
  .lesson-card-body { position: relative; z-index: 1; padding: 2.5rem; }

  .lesson-lead {
    font-size: clamp(1.05rem, 2.5vw, 1.25rem);
    line-height: 1.85;
    color: var(--text-secondary);
    font-weight: 500;
  }

  .lesson-callout {
    margin-top: 1.5rem;
    padding: 1.25rem 1.5rem;
    background: var(--bg-glass);
    backdrop-filter: blur(8px);
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-md);
    border-right: 3px solid var(--primary);
  }
  .lesson-callout p {
    font-size: 1rem;
    line-height: 1.8;
    color: var(--text-secondary);
    font-style: italic;
    margin: 0;
  }

  /* Example card */
  .lesson-example-card {
    display: flex;
    align-items: flex-start;
    gap: 1.25rem;
    padding: 2rem;
    background: var(--bg-card);
    backdrop-filter: blur(16px);
    border: 2px dashed var(--border-card);
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-sm);
  }
  .lesson-example-icon {
    font-size: 2.2rem;
    line-height: 1;
    flex-shrink: 0;
    margin-top: 2px;
  }
  .lesson-example-title {
    font-size: 1.2rem;
    font-weight: 800;
    color: var(--text-primary);
    margin-bottom: 0.6rem;
  }
  .lesson-example-text {
    font-size: 1rem;
    color: var(--text-secondary);
    line-height: 1.8;
    margin: 0;
  }

  /* Navigation */
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
  .btn-primary svg, .btn-secondary svg {
    width: 16px; height: 16px;
    flex-shrink: 0;
  }
  .btn-secondary svg { transform: rotate(180deg); }

  @media (max-width: 640px) {
    .lesson-section { padding: 5rem 1rem 3rem; }
    .lesson-card-body { padding: 1.5rem; }
    .lesson-nav { flex-direction: column-reverse; }
    .lesson-nav a { width: 100%; justify-content: center; }
  }
`;
