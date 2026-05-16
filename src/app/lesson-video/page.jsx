export default function LessonVideo() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        /* أهم تعديل هنا 👇 */
        paddingTop: "160px",

        paddingRight: "1.5rem",
        paddingLeft: "1.5rem",
        paddingBottom: "5rem",

        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      {/* ── Header ──────────────────────────────────── */}
      <div
        className="reveal"
        style={{
          textAlign: "center",
          marginBottom: "3rem",
          width: "100%",
        }}
      >
        {/* badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "7px 18px",
            borderRadius: "999px",
            background: "rgba(99,102,241,0.12)",
            border: "1px solid rgba(99,102,241,0.18)",
            color: "var(--primary)",
            fontSize: "13px",
            fontWeight: "700",
            marginBottom: "1.5rem",
          }}
        >
          🎬 شرح مرئي
        </div>

        {/* title */}
        <h1
          style={{
            fontSize: "clamp(2.2rem, 5vw, 4rem)",
            fontWeight: "900",
            color: "var(--text-primary)",
            marginBottom: "1.2rem",
            lineHeight: 1.2,
          }}
        >
          شرح{" "}
          <span
            style={{
              background:
                "linear-gradient(135deg,#6366f1,#8b5cf6,#06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            الدرس
          </span>
        </h1>

        {/* description */}
        <p
          style={{
            fontSize: "1.1rem",
            color: "var(--text-primary)",
            opacity: 0.8,
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "2",
          }}
        >
          هذا الفيديو يقدم شرحًا مبسطًا لمجالات الذكاء الاصطناعي
          لمساعدتك على الفهم بشكل أفضل 👇
        </p>
      </div>

      {/* ── Video Card ───────────────────────────── */}
      <div
        className="reveal"
        style={{
          width: "100%",
          borderRadius: "32px",
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.15)",
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(16px)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.18)",
        }}
      >
        {/* glow line */}
        <div
          style={{
            height: "3px",
            width: "100%",
            background:
              "linear-gradient(90deg,#6366f1,#8b5cf6,#06b6d4)",
          }}
        />

        <video
          src="/video/ai100.mp4"
          controls
          style={{
            width: "100%",
            display: "block",
            maxHeight: "620px",
            background: "#000",
          }}
        />
      </div>

      {/* ── Info Cards ───────────────────────────── */}
      <div
        className="reveal"
        style={{
          width: "100%",
          marginTop: "2rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "1rem",
        }}
      >
        {[
          
        ].map((item) => (
          <div
            key={item.label}
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(14px)",
              borderRadius: "24px",
              padding: "1.2rem",
              display: "flex",
              alignItems: "center",
              gap: "14px",
              transition: "0.3s",
            }}
          >
            <div
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background:
                  "linear-gradient(135deg,#6366f1,#8b5cf6)",
                fontSize: "22px",
              }}
            >
              {item.icon}
            </div>

            <div>
              <div
                style={{
                  fontSize: "12px",
                  color: "var(--text-muted)",
                  marginBottom: "4px",
                }}
              >
                {item.label}
              </div>

              <div
                style={{
                  fontSize: "15px",
                  fontWeight: "700",
                  color: "var(--text-primary)",
                }}
              >
                {item.value}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Buttons ───────────────────────────── */}
      <div
        className="reveal"
        style={{
          display: "flex",
          gap: "1rem",
          marginTop: "3rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <a
          href="/units"
          style={{
            padding: "14px 30px",
            borderRadius: "999px",
            background:
              "linear-gradient(135deg,#6366f1,#8b5cf6)",
            color: "#fff",
            textDecoration: "none",
            fontWeight: "700",
            boxShadow: "0 10px 30px rgba(99,102,241,0.3)",
          }}
        >
          ← العودة إلى المحتوى
        </a>

        <a
          href="/exam"
          style={{
            padding: "14px 30px",
            borderRadius: "999px",
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.12)",
            color: "var(--text-primary)",
            textDecoration: "none",
            fontWeight: "700",
            backdropFilter: "blur(10px)",
          }}
        >
          📝 اختبر نفسك
        </a>
      </div>
    </div>
  );
}