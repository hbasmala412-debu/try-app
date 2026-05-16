export default function About() {
const pillars = [
{
icon: "🎯",
title: "هدفنا",
desc: "تبسيط مفاهيم الذكاء الاصطناعي وجعلها في متناول الجميع من خلال محتوى تفاعلي وعملي.",
},
{
icon: "🌍",
title: "رؤيتنا",
desc: "بناء جيل واعٍ بتقنيات المستقبل قادر على توظيف الذكاء الاصطناعي في حياته اليومية.",
},
{
icon: "🚀",
title: "أسلوبنا",
desc: "محتوى مُصمَّم بعناية يجمع بين النظرية والتطبيق — من التعريفات حتى الأنشطة التفاعلية.",
},
];

return (
<div
style={{
minHeight: "100vh",
padding: "88px 1.5rem 5rem",
maxWidth: "1100px",
margin: "0 auto",
}}
>
{/* ── Page header ───────────────────────── */}
<div
className="reveal"
style={{
textAlign: "center",
marginBottom: "2.5rem",
}}
>
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
<span
style={{
width: "6px",
height: "6px",
borderRadius: "50%",
background: "var(--primary)",
display: "inline-block",
}}
/>
من نحن </div>

    <h1
      style={{
        fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
        fontWeight: "900",
        letterSpacing: "-0.02em",
        color: "var(--text-primary)",
        marginBottom: "1.25rem",
        lineHeight: 1.1,
      }}
    >
      حول <span className="gradient-text">المنصة</span>
    </h1>

    <p
      style={{
        fontSize: "1.1rem",
        color: "var(--text-muted)",
        maxWidth: "560px",
        margin: "0 auto",
        lineHeight: "1.75",
      }}
    >
      مشروع تعليمي طموح يسعى لتمكين الجيل القادم من فهم وتوظيف تقنيات الذكاء الاصطناعي.
    </p>
  </div>

  {/* ── Main description card ─────────────── */}
  <div
    className="reveal"
    style={{
      position: "relative",
      background: "var(--bg-card)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      border: "1px solid var(--border-card)",
      borderRadius: "var(--radius-xl)",
      padding: "clamp(2rem, 5vw, 3.5rem)",
      boxShadow: "var(--shadow-lg)",
      marginBottom: "2.5rem",
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

    <div
      style={{
        position: "absolute",
        top: "-60px",
        left: "-60px",
        width: "240px",
        height: "240px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
        filter: "blur(30px)",
        pointerEvents: "none",
      }}
    />

    <div style={{ position: "relative", zIndex: 1 }}>
      <p
        style={{
          fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
          color: "var(--text-secondary)",
          lineHeight: "1.85",
          marginBottom: "2rem",
          fontWeight: "500",
        }}
      >
        هذه المنصة هي مشروع تعليمي يهدف إلى تبسيط مفاهيم الذكاء الاصطناعي للطلاب، مع التركيز على المحتوى التفاعلي والتطبيقات العملية في حياتنا اليومية.
      </p>

      <div
        style={{
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, var(--border-card), transparent)",
          marginBottom: "2rem",
        }}
      />

      <p
        style={{
          fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
          color: "var(--text-muted)",
          lineHeight: "1.85",
        }}
      >
        تم تصميم المحتوى بعناية ليشمل التعريفات، المميزات، العيوب، والأنواع المختلفة للتقنيات الحديثة، لتمكين الجيل القادم من فهم أدوات المستقبل والاستعداد لعالم تقوده الخوارزميات الذكية.
      </p>
    </div>
  </div>

  {/* ── Pillars grid ──────────────────────── */}
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "1.25rem",
    }}
  >
    {pillars.map((p, i) => (
      <div key={i} className="about-pillar-card reveal">
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "var(--radius-md)",
            background: "var(--primary-glow)",
            border: "1px solid var(--border-card)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "22px",
            marginBottom: "1rem",
          }}
        >
          {p.icon}
        </div>

        <h3
          style={{
            fontSize: "1.05rem",
            fontWeight: "700",
            color: "var(--text-primary)",
            marginBottom: "0.5rem",
          }}
        >
          {p.title}
        </h3>

        <p
          style={{
            fontSize: "0.9rem",
            color: "var(--text-muted)",
            lineHeight: "1.7",
          }}
        >
          {p.desc}
        </p>
      </div>
    ))}
  </div>
</div>

);
}
