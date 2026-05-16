export default function LessonFields() {

  const fields = [
    {
      icon: "🤖",
      iconBg: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
      badge: "أساسي",
      badgeClass: "badge-new",
      title: "تعلم الآلة",
      desc: "تمكين الكمبيوتر من التعلم من الأخطاء والتجارب السابقة، تماماً مثل تعلم الطفل للكلمات.",
      img: "/images/ai48.jpeg",
      examples: ["التوصيات على يوتيوب", "فلاتر البريد المزعج", "التعرف على الكلام"],
    },
    {
      icon: "💬",
      iconBg: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
      badge: "متقدم",
      badgeClass: "badge-popular",
      title: "معالجة اللغة الطبيعية",
      desc: "فهم لغات البشر المختلفة والقدرة على الترجمة الفورية والإجابة عن الأسئلة.",
      img: "/images/ai42.png",
      examples: ["المترجم الفوري", "المساعد الصوتي", "تحليل المشاعر"],
    },
    {
      icon: "👁️",
      iconBg: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
      badge: "مميز",
      badgeClass: "badge-hot",
      title: "الرؤية الحاسوبية",
      desc: "القدرة على التعرف على الوجوه والأشياء داخل الصور حتى في الزحام الشديد.",
      img: "/images/ai43.jpg",
      examples: ["قيادة السيارات", "تشخيص الأمراض", "أمن المطارات"],
    },
    {
      icon: "🦾",
      iconBg: "linear-gradient(135deg, #10b981 0%, #3b82f6 100%)",
      badge: "جديد",
      badgeClass: "badge-new",
      title: "الروبوتات الذكية",
      desc: "أجهزة تقوم بأعمال منزلية أو طبية دقيقة وتعمل في البيئات الخطرة على البشر.",
      img: "/images/ai3.jpg",
      examples: ["الجراحة الروبوتية", "خطوط التصنيع", "استكشاف الفضاء"],
    },
    {
      icon: "🎯",
      iconBg: "linear-gradient(135deg, #10b981 0%, #3b82f6 100%)",
      badge: null,
      badgeClass: "",
      title: "التعلم المعزز",
      desc: "تعلّم الآلة من خلال التجربة والمكافأة، مثلما يتعلم الإنسان من تجاربه اليومية.",
      img: "/images/ai7.jpg",
      examples: ["ألعاب الفيديو الذكية", "إدارة شبكات الطاقة", "روبوتات المستودعات"],
    },
    {
      icon: "✨",
      iconBg: "linear-gradient(135deg, #e879f9 0%, #f97316 100%)",
      badge: "الأكثر شعبية",
      badgeClass: "badge-popular",
      title: "الذكاء الاصطناعي التوليدي",
      desc: "إنشاء نصوص وصور وموسيقى جديدة بواسطة الذكاء الاصطناعي بأسلوب إبداعي مذهل.",
      img: "/images/ai26.jpg",
      examples: ["ChatGPT", "توليد الصور", "تلحين الموسيقى"],
    },
  ];

  const stats = [
    { num: "٦", label: "مجالات رئيسية", icon: "🧩" },
    { num: "+٤٠", label: "تطبيق عملي", icon: "⚡" },
    { num: "٢٠٣٠", label: "مستقبل التقنية", icon: "🚀" },
  ];

  const timeline = [
    { year: "١٩٥٦", text: "ظهور مصطلح الذكاء الاصطناعي لأول مرة على يد جون مكارثي." },
    { year: "١٩٩٧", text: "فاز Deep Blue على بطل الشطرنج العالمي جاري كاسباروف." },
    { year: "٢٠١٢", text: "ثورة التعلم العميق — شبكة AlexNet تفوز بمسابقة ImageNet." },
    { year: "٢٠٢٢", text: "إطلاق ChatGPT وانتشار الذكاء الاصطناعي التوليدي للجميع." },
    { year: "٢٠٣٠", text: "المستقبل — ذكاء اصطناعي عام قادر على حل مشكلات معقدة." },
  ];

  return (
    <div className="lesson-page">

      {/* ══════════════════════════════════
          HERO HEADER
      ══════════════════════════════════ */}
      <div className="lesson-header reveal">
        <div className="section-tag">📚 الوحدة الثانية · الدرس الثالث</div>
        <h1 className="lesson-title">
          مجالات{" "}
          <span className="gradient-text">الذكاء الاصطناعي</span>
        </h1>
        <p className="lesson-subtitle">
          استكشف أبرز المجالات التي يُحدث فيها الذكاء الاصطناعي ثورة حقيقية في حياتنا اليومية —
          من الرؤية الحاسوبية إلى التعلم المعزز.
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
          FIELDS GRID
      ══════════════════════════════════ */}
      <div className="lesson-section-label reveal">
        <div className="section-tag">🧠 المجالات الرئيسية</div>
      </div>

      <div className="lesson-grid">
        {fields.map((f, i) => (
          <div className="lesson-card reveal" key={i}>

            {/* Badge */}
            {f.badge && (
              <span className={`card-badge ${f.badgeClass}`}>{f.badge}</span>
            )}

            {/* Image — ضعي صورتك هنا */}
            <div className="lesson-card-img-wrap">
              <img src={f.img} alt={f.title} className="lesson-card-img" />
              <div className="lesson-card-img-overlay" />
            </div>

            {/* Icon */}
            <div className="lesson-card-icon-wrap" style={{ background: f.iconBg }}>
              <span style={{ fontSize: "22px", lineHeight: 1 }}>{f.icon}</span>
            </div>

            {/* Body */}
            <div className="lesson-card-body">
              <h3 className="lesson-card-title">{f.title}</h3>
              <p className="lesson-card-desc">{f.desc}</p>

              {/* Examples */}
              <div className="lesson-card-examples">
                <span className="lesson-examples-label">أمثلة تطبيقية</span>
                <div className="lesson-examples-list">
                  {f.examples.map((ex) => (
                    <span className="lesson-example-tag" key={ex}>{ex}</span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* ══════════════════════════════════
          TIMELINE
      ══════════════════════════════════ */}
      <div className="lesson-timeline-wrap reveal">
        <div className="section-tag" style={{ marginBottom: "1.25rem" }}>🕰️ محطات تاريخية</div>
        <h2 className="lesson-section-title">
          رحلة <span className="gradient-text">الذكاء الاصطناعي</span> عبر الزمن
        </h2>
        <div className="lesson-timeline">
          <div className="tl-line" />
          {timeline.map((t, i) => (
            <div className="tl-item" key={i}>
              <div className="tl-dot" />
              <div className="tl-year">{t.year}</div>
              <div className="tl-text">{t.text}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════
          CALLOUT
      ══════════════════════════════════ */}
      <div className="lesson-callout reveal">
        <div className="callout-icon">💡</div>
        <div className="callout-body">
          <strong>هل تعلم؟</strong>
          <p>
            يُقدَّر أن الذكاء الاصطناعي سيضيف ما يزيد على{" "}
            <span className="gradient-text" style={{ fontWeight: 700 }}>١٥ تريليون دولار</span>{" "}
            إلى الاقتصاد العالمي بحلول عام ٢٠٣٠ وفقاً لتقارير PwC.
          </p>
        </div>
      </div>

      {/* ══════════════════════════════════
          COMPLETION FOOTER
      ══════════════════════════════════ */}
      <div className="lesson-done reveal">
        <div className="lesson-done-inner glass-card">
          <div className="lesson-done-emoji">🎉</div>
          <p className="lesson-done-text">
            تهانينا! لقد أتممت دراسة مجالات الذكاء الاصطناعي
          </p>
          <div className="lesson-done-actions">
            <a href="/lesson-video" className="btn-primary">
              <span>🎥</span>
              مشاهدة شرح الدرس
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
          max-width: 580px;
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
        .lesson-section-title {
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: -0.02em;
          margin-bottom: 1.75rem;
        }

        /* Cards grid */
        .lesson-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
          margin-bottom: 4rem;
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

        /* Icon badge */
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
        .lesson-card-desc { font-size: 0.9rem; color: var(--text-muted); line-height: 1.7; margin-bottom: 1rem; }

        /* Examples */
        .lesson-card-examples { border-top: 1px solid var(--border-subtle); padding-top: 0.9rem; }
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

        /* Timeline */
        .lesson-timeline-wrap {
          margin-bottom: 2rem;
          padding: 2.5rem;
          background: var(--bg-card);
          backdrop-filter: blur(16px);
          border: 1px solid var(--border-card);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-card);
        }
        .lesson-timeline {
          position: relative;
          padding-right: 2rem;
          margin-top: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .tl-line {
          position: absolute;
          top: 0; bottom: 0; right: 6px;
          width: 2px;
          background: var(--border-card);
          border-radius: var(--radius-full);
        }
        .tl-item {
          position: relative;
          padding-right: 1.5rem;
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }
        .tl-dot {
          position: absolute;
          right: -8px; top: 5px;
          width: 14px; height: 14px;
          border-radius: 50%;
          background: var(--primary);
          border: 3px solid var(--bg-main);
          box-shadow: 0 0 0 2px var(--primary);
          z-index: 1;
        }
        .tl-year { font-size: 13px; font-weight: 800; color: var(--primary); white-space: nowrap; min-width: 55px; padding-top: 2px; }
        .tl-text { font-size: 14px; color: var(--text-secondary); line-height: 1.7; }

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
        @media (max-width: 640px) {
          .lesson-page { padding: 5rem 1rem 3rem; }
          .lesson-grid { grid-template-columns: 1fr; }
          .lesson-done-actions { flex-direction: column; align-items: center; }
          .lesson-timeline-wrap { padding: 1.5rem 1rem; }
          .lesson-stats { gap: 0.75rem; }
          .lesson-stat-card { min-width: 100px; padding: 1rem 1.25rem; }
        }
      `}</style>
    </div>
  );
}
