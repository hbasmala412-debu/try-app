"use client";

export default function InstructionsPage() {
  const steps = [
    {
      icon: "🎯",
      num: "١",
      title: "ابدأ من الرئيسية",
      desc: "ستجد جميع الأقسام: المحتوى، الاختبارات، والأنشطة التفاعلية منظمة بوضوح.",
    },
    {
      icon: "📚",
      num: "٢",
      title: "اختر وحدة تعليمية",
      desc: "كل وحدة تحتوي على دروس مرتبة من الأبسط إلى الأكثر تعقيداً.",
    },
    {
      icon: "🧠",
      num: "٣",
      title: "ادرس الدروس بعمق",
      desc: "اقرأ المحتوى وتأمل الأمثلة جيداً قبل الانتقال إلى الدرس التالي.",
    },
    {
      icon: "📝",
      num: "٤",
      title: "أجب على الاختبار",
      desc: "اختبر مستواك وستظهر نتيجتك فوراً بعد الانتهاء من الأسئلة.",
    },
    {
      icon: "🎮",
      num: "٥",
      title: "جرب النشاط التفاعلي",
      desc: "اسحب البطاقات وضعها في مكانها الصحيح لترسيخ فهمك بطريقة ممتعة.",
    },
    {
      icon: "🧭",
      num: "٦",
      title: "تنقل بحرية",
      desc: "شريط التنقل العلوي يتيح لك الوصول الفوري لأي قسم في أي وقت.",
    },
  ];

  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "88px 1.5rem 5rem",
      }}
    >
      {/* ── Header ──────────────────────────────────── */}
      <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "5px 16px",
            borderRadius: "var(--radius-full)",
            background: "var(--primary-glow)",
            border: "1px solid var(--border-card)",
            color: "var(--primary)",
            fontSize: "12px",
            fontWeight: "700",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            marginBottom: "1.25rem",
          }}
        >
          📖 دليل الاستخدام
        </div>

        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: "900",
            letterSpacing: "-0.02em",
            color: "var(--text-primary)",
            marginBottom: "1rem",
            lineHeight: 1.1,
          }}
        >
          كيفية{" "}
          <span
            style={{
              background: "var(--gradient-primary)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            استخدام المنصة
          </span>
        </h1>

        <p
          style={{
            fontSize: "1.05rem",
            color: "var(--text-muted)",
            maxWidth: "500px",
            margin: "0 auto",
            lineHeight: "1.75",
          }}
        >
          ست خطوات بسيطة تضمن لك أفضل تجربة تعليمية على المنصة.
        </p>
      </div>

      {/* ── Steps grid ──────────────────────────────── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
          gap: "1.25rem",
          marginBottom: "3.5rem",
        }}
      >
        {steps.map((step, i) => (
          <div
            key={i}
            className="reveal"
            style={{
              position: "relative",
              background: "var(--bg-card)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid var(--border-card)",
              borderRadius: "var(--radius-lg)",
              padding: "1.75rem",
              boxShadow: "var(--shadow-card)",
              transition: "all var(--transition-base)",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "var(--shadow-md)";
              e.currentTarget.style.borderColor = "var(--primary)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "var(--shadow-card)";
              e.currentTarget.style.borderColor = "var(--border-card)";
            }}
          >
            {/* Top accent on hover — pure CSS via the .course-card::after pattern */}
            {/* Step number watermark */}
            <div
              style={{
                position: "absolute",
                top: "12px",
                left: "16px",
                fontSize: "2.5rem",
                fontWeight: "900",
                color: "var(--primary)",
                opacity: 0.08,
                lineHeight: 1,
                fontFamily: "monospace",
                userSelect: "none",
              }}
            >
              {step.num}
            </div>

            {/* Icon */}
            <div
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "var(--radius-md)",
                background: "var(--primary-glow)",
                border: "1px solid var(--border-card)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                marginBottom: "1rem",
                transition: "transform var(--transition-base)",
              }}
            >
              {step.icon}
            </div>

            {/* Content */}
            <h2
              style={{
                fontSize: "1.05rem",
                fontWeight: "700",
                color: "var(--text-primary)",
                marginBottom: "0.5rem",
              }}
            >
              {step.title}
            </h2>
            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--text-muted)",
                lineHeight: "1.7",
              }}
            >
              {step.desc}
            </p>
          </div>
        ))}
      </div>

      {/* ── Bottom CTA ──────────────────────────────── */}
      <div
        className="reveal"
        style={{
          textAlign: "center",
          background: "var(--bg-card)",
          backdropFilter: "blur(16px)",
          border: "1px solid var(--border-card)",
          borderRadius: "var(--radius-lg)",
          padding: "2.5rem 2rem",
          boxShadow: "var(--shadow-card)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: "var(--gradient-primary)",
          }}
        />
        <p
          style={{
            fontSize: "1.05rem",
            color: "var(--text-secondary)",
            marginBottom: "1.5rem",
            lineHeight: "1.75",
          }}
        >
          ابدأ بالدروس بالترتيب، ثم جرّب الاختبار والنشاط لتحصل على أفضل تجربة تعليمية ممكنة.
        </p>
        <a
          href="/units"
          className="btn-primary"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "12px 28px",
            fontSize: "15px",
            fontWeight: "700",
            color: "white",
            borderRadius: "var(--radius-full)",
            background: "var(--gradient-hero)",
            boxShadow: "0 4px 20px rgba(79,70,229,0.35)",
            textDecoration: "none",
            transition: "all var(--transition-fast)",
          }}
        >
          🚀 ابدأ التعلم الآن
        </a>
      </div>
    </div>
  );
}
