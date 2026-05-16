export default function LessonFeatures() {
  const features = [
    {
      icon: "⚡",
      iconBg: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
      badge: "الأهم",
      badgeClass: "badge-popular",
      t: "توفير الوقت والجهد",
      d: "إنجاز المهام بسرعة فائقة مقارنة بالإنسان، مما يتيح التركيز على المهام الأكثر إبداعاً.",
      img: "/images/ai1.jpg",
    },
    {
      icon: "🎯",
      iconBg: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
      badge: null,
      badgeClass: "",
      t: "الدقة وتقليل الأخطاء",
      d: "أداء العمليات المعقدة بدقة عالية جداً وتقليل نسبة الخطأ البشري إلى أدنى مستوياتها.",
      img: "/images/ai47.jpeg",
    },
    {
      icon: "📚",
      iconBg: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
      badge: "جديد",
      badgeClass: "badge-new",
      t: "المساعدة في التعليم",
      d: "تطوير طرق التعلم بتطبيقات تفاعلية ذكية تتكيف مع مستوى كل طالب.",
      img: "/images/ai9.jpg",
    },
    {
      icon: "🏥",
      iconBg: "linear-gradient(135deg, #10b981 0%, #3b82f6 100%)",
      badge: "مميز",
      badgeClass: "badge-hot",
      t: "التقدم في المجال الطبي",
      d: "يساعد الأطباء في تشخيص الأمراض واكتشافها بشكل أسرع وأكثر دقة مما يُنقذ الأرواح.",
      img: "/images/ai21.jpg",
    },
    {
      icon: "🔄",
      iconBg: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
      badge: null,
      badgeClass: "",
      t: "العمل المستمر",
      d: "يمكنه العمل على مدار الساعة لفترات طويلة دون تعب أو توقف أو حاجة لاستراحة.",
      img: "/images/ai45.jpeg",
    },
    {
      icon: "💬",
      iconBg: "linear-gradient(135deg, #e879f9 0%, #f97316 100%)",
      badge: "الأكثر شعبية",
      badgeClass: "badge-popular",
      t: "تحسين خدمة العملاء",
      d: "يساعد في الرد على استفسارات العملاء بسرعة فائقة من خلال الدردشة الآلية الذكية.",
      img: "/images/ai46.jpeg",
    },
  ];

  const stats = [
    { num: "٦", label: "ميزة رئيسية", icon: "✨" },
    { num: "٢٤/٧", label: "عمل متواصل", icon: "🔄" },
    { num: "×١٠٠", label: "أسرع من الإنسان", icon: "⚡" },
  ];

  return (
    <div className="lesson-page">

      {/* ══════════════════════════════════
          HEADER
      ══════════════════════════════════ */}
      <div className="lesson-header reveal">
        <div className="section-tag">📚 الوحدة الأولى · الدرس الثاني</div>
        <h1 className="lesson-title">
          مميزات{" "}
          <span className="gradient-text">الذكاء الاصطناعي</span>
        </h1>
        <p className="lesson-subtitle">
          اكتشف أبرز المزايا التي يقدمها الذكاء الاصطناعي لحياتنا اليومية —
          من توفير الوقت إلى إحداث ثورة في الرعاية الطبية.
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
        <div className="section-tag">🧠 المميزات الرئيسية</div>
      </div>

      {/* ══════════════════════════════════
          FEATURES GRID
      ══════════════════════════════════ */}
      <div className="lesson-grid">
        {features.map((f, i) => (
          <div className="lesson-card reveal" key={i}>

            {/* Badge */}
            {f.badge && (
              <span className={`card-badge ${f.badgeClass}`}>{f.badge}</span>
            )}

            {/* Image */}
            <div className="lesson-card-img-wrap">
              <img src={f.img} alt={f.t} className="lesson-card-img" />
              <div className="lesson-card-img-overlay" />
            </div>

            {/* Icon badge */}
            <div className="lesson-card-icon-wrap" style={{ background: f.iconBg }}>
              <span style={{ fontSize: "22px", lineHeight: 1 }}>{f.icon}</span>
            </div>

            {/* Body */}
            <div className="lesson-card-body">
              <h3 className="lesson-card-title">{f.t}</h3>
              <p className="lesson-card-desc">{f.d}</p>
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
            الذكاء الاصطناعي يمكنه معالجة{" "}
            <span className="gradient-text" style={{ fontWeight: 700 }}>ملايين البيانات</span>{" "}
            في ثوانٍ معدودة — وهو ما يستغرق الإنسان أياماً أو أسابيع كاملة لإنجازه.
          </p>
        </div>
      </div>

      {/* ══════════════════════════════════
          NAVIGATION
      ══════════════════════════════════ */}
      <div className="lesson-nav reveal">
        <a href="/unit1/lesson1" className="btn-secondary">
          <span>→</span>
          الدرس السابق
        </a>
        <a href="/unit1/lesson3" className="btn-primary">
          الدرس التالي: العيوب
          <span>←</span>
        </a>
      </div>

      {/* ══════════════════════════════════
          SCOPED STYLES
      ══════════════════════════════════ */}
      <style>{`
        .lesson-page {
          max-width: 1100px;
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

        /* Grid */
        .lesson-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }

        /* Card */
        .lesson-card {
          position: relative;
          background: var(--bg-card);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--border-card);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-card);
          transition: all var(--transition-base);
        }
        .lesson-card::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: var(--gradient-primary);
          transform: scaleX(0);
          transform-origin: right;
          transition: transform var(--transition-base);
        }
        .lesson-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-lg); border-color: var(--primary); }
        .lesson-card:hover::after { transform: scaleX(1); }

        /* Image */
        .lesson-card-img-wrap {
          position: relative;
          height: 175px;
          overflow: hidden;
          background: var(--bg-surface-2);
        }
        .lesson-card-img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
          transition: transform 0.6s cubic-bezier(0.4,0,0.2,1);
        }
        .lesson-card:hover .lesson-card-img { transform: scale(1.06); }
        .lesson-card-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, transparent 45%, rgba(0,0,0,0.4) 100%);
        }

        /* Icon */
        .lesson-card-icon-wrap {
          position: absolute;
          top: 143px; right: 1.25rem;
          width: 46px; height: 46px;
          border-radius: var(--radius-md);
          display: flex; align-items: center; justify-content: center;
          box-shadow: var(--shadow-md);
          border: 2px solid var(--bg-surface);
          z-index: 2;
        }

        /* Body */
        .lesson-card-body { padding: 2.25rem 1.25rem 1.5rem; }
        .lesson-card-title { font-size: 1.1rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.5rem; }
        .lesson-card-desc { font-size: 0.9rem; color: var(--text-muted); line-height: 1.7; }

        /* Callout */
        .lesson-callout {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.5rem;
          background: var(--primary-glow);
          border: 1px solid var(--border-card);
          border-radius: var(--radius-lg);
          margin-bottom: 2.5rem;
        }
        .callout-icon { font-size: 1.75rem; flex-shrink: 0; }
        .callout-body strong { display: block; font-size: 15px; font-weight: 700; color: var(--text-primary); margin-bottom: 4px; }
        .callout-body p { font-size: 14px; color: var(--text-secondary); line-height: 1.7; }

        /* Navigation */
        .lesson-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 2rem;
          border-top: 1px solid var(--border-subtle);
          flex-wrap: wrap;
          gap: 1rem;
        }

        /* Responsive */
        @media (max-width: 640px) {
          .lesson-page { padding: 5rem 1rem 3rem; }
          .lesson-grid { grid-template-columns: 1fr; }
          .lesson-nav { flex-direction: column-reverse; align-items: stretch; text-align: center; }
          .lesson-stats { gap: 0.75rem; }
          .lesson-stat-card { min-width: 100px; padding: 1rem 1.25rem; }
        }
      `}</style>
    </div>
  );
}
