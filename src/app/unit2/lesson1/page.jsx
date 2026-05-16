export default function LessonTypes() {
  const types = [
    {
      icon: "🎯",
      iconBg: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
      badge: "الأكثر انتشاراً",
      badgeClass: "badge-popular",
      ar: "الذكاء الاصطناعي الضيق",
      en: "Narrow AI",
      desc: [
        "هذا النوع من الذكاء الاصطناعي يركز على أداء مهمة محددة، مثل التعرف على الوجوه أو ترجمة اللغات.",
        "مثال: روبوت يستطيع لعب الشطرنج ببراعة، لكنه لا يستطيع القيام بأي شيء آخر."
      ],
      examples: ["التعرف على الوجوه", "ترجمة اللغات", "توصيات يوتيوب"],
      img: "/images/ai15.webp",
    },
    {
      icon: "🤖",
      iconBg: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
      badge: "قيد التطوير",
      badgeClass: "badge-new",
      ar: "الذكاء الاصطناعي العام",
      en: "General AI (GAI)",
      desc: [
        "هذا النوع أكثر تطوراً، ويمكنه أداء أي مهمة يستطيع الإنسان القيام بها.",
        "مثال: روبوت يحاكي الإنسان بشكل كامل — يفكر، يبتكر، يحل المشكلات، ويتكيف مع المواقف المختلفة."
      ],
      examples: ["التفكير النقدي", "الابتكار", "التكيف مع المواقف"],
      img: "/images/ai11.jpg",
    },
    {
      icon: "✨",
      iconBg: "linear-gradient(135deg, #e879f9 0%, #f97316 100%)",
      badge: "مستقبلي",
      badgeClass: "badge-hot",
      ar: "الذكاء الاصطناعي الفائق",
      en: "Super AI (SAI)",
      desc: [
        "هذا النوع هو الأكثر تطوراً، ويمكنه حل المشكلات التي يصعب على البشر حلها بسهولة.",
        "كما يستطيع اكتشاف أشياء جديدة لم نتخيلها من قبل."
      ],
      examples: ["اكتشافات علمية", "حل مشكلات معقدة", "ما وراء الخيال"],
      img: "/images/ai18.jpg",
    },
  ];

  const stats = [
    { num: "٣", label: "أنواع رئيسية", icon: "🧩" },
    { num: "الآن", label: "الذكاء الضيق موجود", icon: "✅" },
    { num: "٢٠٣٠+", label: "الذكاء العام متوقع", icon: "🚀" },
  ];

  return (
    <div className="lesson-page">

      {/* ══════════════════════════════════
          HEADER
      ══════════════════════════════════ */}
      <div className="lesson-header reveal">
        <div className="section-tag">📚 الوحدة الثانية · الدرس الأول</div>
        <h1 className="lesson-title">
          أنواع{" "}
          <span className="gradient-text">الذكاء الاصطناعي</span>
        </h1>
        <p className="lesson-subtitle">
          تعرّف على أبرز تصنيفات الذكاء الاصطناعي — من الأنظمة المتخصصة اليوم،
          إلى الذكاء الفائق الذي يتجاوز حدود الخيال.
        </p>
      </div>

      {/* ══════════════════════════════════
          STATS ROW
      ══════════════════════════════════ */}
      <div className="lesson-stats reveal">
        {stats.map((s) => (
          <div className="lesson-stat-card" key={s.label}>
            <span className="lesson-stat-icon">{s.icon}</span>
            <span className="lesson-stat-num">{s.num}</span>
            <span className="lesson-stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* ══════════════════════════════════
          SECTION LABEL
      ══════════════════════════════════ */}
      <div className="lesson-section-label reveal">
        <div className="section-tag">🧠 التصنيفات الرئيسية</div>
      </div>

      {/* ══════════════════════════════════
          TYPE CARDS — horizontal layout
      ══════════════════════════════════ */}
      <div className="types-list">
        {types.map((type, i) => (
          <div className="type-card reveal" key={i}>

            {/* Badge */}
            {type.badge && (
              <span className={`card-badge ${type.badgeClass}`}>{type.badge}</span>
            )}

            {/* Image side */}
            <div className="type-card-img-wrap">
              <img src={type.img} alt={type.ar} className="type-card-img" />
              <div className="type-card-img-overlay" />
              {/* Icon over image */}
              <div className="type-card-icon" style={{ background: type.iconBg }}>
                <span style={{ fontSize: "22px", lineHeight: 1 }}>{type.icon}</span>
              </div>
            </div>

            {/* Text side */}
            <div className="type-card-body">
              <h2 className="type-card-ar">{type.ar}</h2>
              <p className="type-card-en">{type.en}</p>

              <div className="type-card-desc">
                {type.desc.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>

              {/* Examples */}
              <div className="lesson-card-examples">
                <span className="lesson-examples-label">أمثلة تطبيقية</span>
                <div className="lesson-examples-list">
                  {type.examples.map((ex) => (
                    <span className="lesson-example-tag" key={ex}>{ex}</span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* ══════════════════════════════════
          CALLOUT
      ══════════════════════════════════ */}
      <div className="lesson-callout reveal">
        <div className="callout-icon">💡</div>
        <div className="callout-body">
          <strong>هل تعلم؟</strong>
          <p>
            كل التطبيقات الذكية التي نستخدمها اليوم — من سيري إلى ChatGPT — تنتمي إلى فئة{" "}
            <span className="gradient-text" style={{ fontWeight: 700 }}>الذكاء الاصطناعي الضيق</span>.
            أما الذكاء العام والفائق فلا يزالان في طور البحث والتطوير.
          </p>
        </div>
      </div>

      {/* ══════════════════════════════════
          NEXT LESSON BUTTON
      ══════════════════════════════════ */}
      <div className="lesson-done reveal">
        <div className="lesson-done-inner glass-card">
          <div className="lesson-done-emoji">🚀</div>
          <p className="lesson-done-text">جاهز للدرس التالي؟</p>
          <div className="lesson-done-actions">
            <a href="/unit2/lesson2" className="btn-primary">
              الدرس التالي: التطبيقات
              <span>←</span>
            </a>
            <a href="/units" className="btn-secondary">
              العودة للفهرس
              <span>←</span>
            </a>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════
          SCOPED STYLES
      ══════════════════════════════════ */}
      <style>{`
        .lesson-page {
          max-width: 1000px;
          margin: 0 auto;
          padding: 6rem 2rem 5rem;
        }

        /* Header */
        .lesson-header { text-align: center; margin-bottom: 3rem; }
        .lesson-title {
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 900;
          color: var(--text-primary);
          letter-spacing: -0.02em;
          margin: 1rem 0 0.75rem;
          line-height: 1.15;
        }
        .lesson-subtitle {
          font-size: 1.05rem;
          color: var(--text-muted);
          max-width: 560px;
          margin: 0 auto;
          line-height: 1.8;
        }

        /* Stats */
        .lesson-stats {
          display: flex;
          gap: 1.25rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 3.5rem;
        }
        .lesson-stat-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          padding: 1.25rem 2rem;
          background: var(--bg-card);
          backdrop-filter: blur(16px);
          border: 1px solid var(--border-card);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-card);
          min-width: 130px;
          transition: transform var(--transition-base), box-shadow var(--transition-base);
        }
        .lesson-stat-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-md); }
        .lesson-stat-icon { font-size: 1.5rem; }
        .lesson-stat-num { font-size: 1.7rem; font-weight: 800; color: var(--primary); line-height: 1; }
        .lesson-stat-label { font-size: 12px; color: var(--text-muted); font-weight: 500; }

        /* Section label */
        .lesson-section-label { margin-bottom: 1.5rem; }

        /* Types list — vertical stack of horizontal cards */
        .types-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        /* Type card */
        .type-card {
          position: relative;
          display: flex;
          gap: 0;
          background: var(--bg-card);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--border-card);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-card);
          transition: all var(--transition-base);
          min-height: 220px;
        }
        .type-card::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: var(--gradient-primary);
          transform: scaleX(0);
          transform-origin: right;
          transition: transform var(--transition-base);
        }
        .type-card:hover { transform: translateY(-5px); box-shadow: var(--shadow-lg); border-color: var(--primary); }
        .type-card:hover::after { transform: scaleX(1); }

        /* Image side */
        .type-card-img-wrap {
          position: relative;
          width: 260px;
          flex-shrink: 0;
          overflow: hidden;
        }
        .type-card-img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
          transition: transform 0.6s cubic-bezier(0.4,0,0.2,1);
        }
        .type-card:hover .type-card-img { transform: scale(1.06); }
        .type-card-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to left, rgba(0,0,0,0.3) 0%, transparent 60%);
        }
        .type-card-icon {
          position: absolute;
          bottom: 1rem; left: 1rem;
          width: 44px; height: 44px;
          border-radius: var(--radius-md);
          display: flex; align-items: center; justify-content: center;
          box-shadow: var(--shadow-md);
          border: 2px solid rgba(255,255,255,0.2);
          z-index: 2;
        }

        /* Text side */
        .type-card-body {
          flex: 1;
          padding: 1.75rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .type-card-ar {
          font-size: 1.3rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.2;
        }
        .type-card-en {
          font-size: 13px;
          font-weight: 500;
          color: var(--primary);
          margin-bottom: 0.5rem;
          letter-spacing: 0.02em;
        }
        .type-card-desc {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 1rem;
        }
        .type-card-desc p {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        /* Examples (shared with lesson3) */
        .lesson-card-examples { border-top: 1px solid var(--border-subtle); padding-top: 0.9rem; margin-top: auto; }
        .lesson-examples-label {
          font-size: 11px; font-weight: 700; color: var(--text-muted);
          text-transform: uppercase; letter-spacing: 0.05em;
          display: block; margin-bottom: 0.5rem;
        }
        .lesson-examples-list { display: flex; flex-wrap: wrap; gap: 6px; }
        .lesson-example-tag {
          padding: 3px 10px;
          border-radius: var(--radius-full);
          background: var(--primary-glow);
          border: 1px solid var(--border-card);
          color: var(--primary);
          font-size: 11px; font-weight: 600;
        }

        /* Callout */
        .lesson-callout {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.5rem;
          background: var(--primary-glow);
          border: 1px solid var(--border-card);
          border-radius: var(--radius-lg);
          margin-bottom: 3rem;
        }
        .callout-icon { font-size: 1.75rem; flex-shrink: 0; }
        .callout-body strong { display: block; font-size: 15px; font-weight: 700; color: var(--text-primary); margin-bottom: 4px; }
        .callout-body p { font-size: 14px; color: var(--text-secondary); line-height: 1.7; }

        /* Completion */
        .lesson-done { margin-top: 1rem; }
        .lesson-done-inner {
          padding: 2.5rem 2rem; text-align: center;
          display: flex; flex-direction: column; align-items: center; gap: 1rem;
        }
        .lesson-done-emoji { font-size: 2.5rem; }
        .lesson-done-text { font-size: 1.1rem; color: var(--text-secondary); font-weight: 500; }
        .lesson-done-actions { display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center; margin-top: 0.5rem; }

        /* Responsive */
        @media (max-width: 768px) {
          .type-card { flex-direction: column; min-height: unset; }
          .type-card-img-wrap { width: 100%; height: 180px; }
          .type-card-img-overlay {
            background: linear-gradient(to bottom, transparent 45%, rgba(0,0,0,0.4) 100%);
          }
          .type-card-icon { bottom: 1rem; left: 1rem; }
        }
        @media (max-width: 480px) {
          .lesson-page { padding: 5rem 1rem 3rem; }
          .lesson-done-actions { flex-direction: column; align-items: center; }
          .lesson-stats { gap: 0.75rem; }
          .lesson-stat-card { min-width: 100px; padding: 1rem 1.25rem; }
        }
      `}</style>
    </div>
  );
}
