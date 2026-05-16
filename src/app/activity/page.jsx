"use client";
import { useState, useEffect } from "react";

const originalCards = [
  { id: 1, img: "/images/ai5.jpg", match: 0 },
  { id: 2, img: "/images/ai42.png", match: 1 },
  { id: 3, img: "/images/ai41.jpg", match: 2 },
  { id: 4, img: "/images/ai52.jpg", match: 3 },
  { id: 5, img: "/images/ai9.jpg", match: 4 },
];

const labels = [
  "من تطبيقات الذكاء الاصطناعي",
  "من مجالات الذكاء الاصطناعي",
  "الذكاء الاصطناعي الضيق",
  "من عيوب الذكاء الاصطناعي",
  "من مميزات الذكاء الاصطناعي",
];

export default function ActivityPage() {
  const [cards, setCards] = useState([]);
  const [dragged, setDragged] = useState(null);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [checking, setChecking] = useState(false);

  const shuffleCards = () => {
    setCards([...originalCards].sort(() => Math.random() - 0.5));
    setAnswers({});
    setResult(null);
    setChecking(false);
  };

  useEffect(() => { shuffleCards(); }, []);

  const handleDrop = (index) => {
    if (dragged !== null) {
      setAnswers((prev) => ({ ...prev, [index]: dragged }));
      setDragged(null);
    }
  };

  // Remove a placed card back to the pool
  const removeAnswer = (index) => {
    if (result !== null) return;
    setAnswers((prev) => {
      const next = { ...prev };
      delete next[index];
      return next;
    });
  };

  const checkAnswers = () => {
    setChecking(true);
    let score = 0;
    labels.forEach((_, i) => {
      const card = originalCards.find((c) => c.id === answers[i]);
      if (card && card.match === i) score++;
    });
    setResult(score);
  };

  const placed = Object.values(answers);
  const answered = Object.keys(answers).length;
  const progress = (answered / labels.length) * 100;

  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "88px 1.5rem 5rem",
      }}
    >
      {/* ── Header ──────────────────────────────────── */}
      <div className="reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
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
          🎮 نشاط تفاعلي
        </div>

        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            fontWeight: "900",
            letterSpacing: "-0.02em",
            color: "var(--text-primary)",
            marginBottom: "0.75rem",
            lineHeight: 1.1,
          }}
        >
          اسحب{" "}
          <span
            style={{
              background: "var(--gradient-primary)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            ووصل
          </span>
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem" }}>
          اسحب كل صورة وضعها تحت العنوان المناسب لها
        </p>
      </div>

      {/* ── Progress bar ────────────────────────────── */}
      <div className="reveal" style={{ marginBottom: "2rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "8px",
          }}
        >
          <span style={{ fontSize: "13px", color: "var(--text-muted)", fontWeight: "600" }}>
            التقدم
          </span>
          <span style={{ fontSize: "13px", color: "var(--primary)", fontWeight: "700" }}>
            {answered} / {labels.length}
          </span>
        </div>
        <div
          style={{
            height: "6px",
            background: "var(--border-subtle)",
            borderRadius: "var(--radius-full)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${progress}%`,
              background: "var(--gradient-primary)",
              borderRadius: "var(--radius-full)",
              transition: "width 0.4s cubic-bezier(0.4,0,0.2,1)",
            }}
          />
        </div>
      </div>

      {/* ── Draggable cards pool ─────────────────────── */}
      <div
        className="reveal"
        style={{
          background: "var(--bg-card)",
          backdropFilter: "blur(16px)",
          border: "1px solid var(--border-card)",
          borderRadius: "var(--radius-lg)",
          padding: "1.5rem",
          marginBottom: "2rem",
          boxShadow: "var(--shadow-card)",
          minHeight: "130px",
        }}
      >
        <p
          style={{
            fontSize: "12px",
            color: "var(--text-muted)",
            fontWeight: "700",
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            marginBottom: "1rem",
          }}
        >
          البطاقات المتاحة
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            justifyContent: "center",
            minHeight: "64px",
          }}
        >
          {cards.map((card) => {
            if (placed.includes(card.id)) return null;
            return (
              <div
                key={card.id}
                draggable
                onDragStart={() => setDragged(card.id)}
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                  cursor: "grab",
                  border: "2px solid var(--border-card)",
                  boxShadow: "var(--shadow-card)",
                  transition: "all var(--transition-fast)",
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.08) translateY(-3px)";
                  e.currentTarget.style.boxShadow = "var(--shadow-md)";
                  e.currentTarget.style.borderColor = "var(--primary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1) translateY(0)";
                  e.currentTarget.style.boxShadow = "var(--shadow-card)";
                  e.currentTarget.style.borderColor = "var(--border-card)";
                }}
              >
                <img
                  src={card.img}
                  alt="بطاقة"
                  style={{ width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none" }}
                  draggable={false}
                />
              </div>
            );
          })}
          {placed.length === labels.length && (
            <div
              style={{
                color: "var(--primary)",
                fontWeight: "700",
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              ✅ تم وضع جميع البطاقات!
            </div>
          )}
        </div>
      </div>

      {/* ── Drop zones ──────────────────────────────── */}
      <div
        className="reveal"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
          gap: "1rem",
          marginBottom: "2rem",
        }}
      >
        {labels.map((label, index) => {
          const placedCard = answers[index] != null
            ? originalCards.find((c) => c.id === answers[index])
            : null;

          const isCorrect = checking && placedCard && placedCard.match === index;
          const isWrong = checking && placedCard && placedCard.match !== index;

          return (
            <div key={index} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {/* Drop target */}
              <div
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => handleDrop(index)}
                onClick={() => placedCard && removeAnswer(index)}
                title={placedCard && result === null ? "انقر لإزالة البطاقة" : ""}
                style={{
                  height: "120px",
                  borderRadius: "var(--radius-md)",
                  border: `2px dashed ${
                    isCorrect ? "#22c55e" :
                    isWrong   ? "#ef4444" :
                    placedCard ? "var(--primary)" :
                    "var(--border-card)"
                  }`,
                  background: isCorrect
                    ? "rgba(34,197,94,0.08)"
                    : isWrong
                    ? "rgba(239,68,68,0.08)"
                    : placedCard
                    ? "var(--primary-glow)"
                    : "var(--bg-card)",
                  backdropFilter: "blur(8px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all var(--transition-fast)",
                  overflow: "hidden",
                  cursor: placedCard && result === null ? "pointer" : "default",
                  boxShadow: "var(--shadow-sm)",
                  position: "relative",
                }}
              >
                {placedCard ? (
                  <>
                    <img
                      src={placedCard.img}
                      alt="بطاقة مُوضوعة"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "calc(var(--radius-md) - 2px)",
                      }}
                    />
                    {/* Result indicator */}
                    {checking && (
                      <div
                        style={{
                          position: "absolute",
                          top: "6px",
                          right: "6px",
                          width: "24px",
                          height: "24px",
                          borderRadius: "50%",
                          background: isCorrect ? "#22c55e" : "#ef4444",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "13px",
                          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                        }}
                      >
                        {isCorrect ? "✓" : "✗"}
                      </div>
                    )}
                  </>
                ) : (
                  <span style={{ fontSize: "12px", color: "var(--text-muted)", userSelect: "none" }}>
                    اسحب هنا
                  </span>
                )}
              </div>

              {/* Label */}
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: "700",
                  color: "var(--text-secondary)",
                  textAlign: "center",
                  lineHeight: "1.4",
                }}
              >
                {label}
              </p>
            </div>
          );
        })}
      </div>

      {/* ── Result banner ────────────────────────────── */}
      {result !== null && (
        <div
          className="reveal"
          style={{
            marginBottom: "2rem",
            borderRadius: "var(--radius-lg)",
            padding: "1.75rem 2rem",
            textAlign: "center",
            background:
              result >= 4
                ? "linear-gradient(135deg, rgba(34,197,94,0.15) 0%, rgba(16,185,129,0.1) 100%)"
                : "linear-gradient(135deg, rgba(239,68,68,0.12) 0%, rgba(236,72,153,0.1) 100%)",
            border: `1px solid ${result >= 4 ? "rgba(34,197,94,0.3)" : "rgba(239,68,68,0.3)"}`,
            boxShadow: "var(--shadow-card)",
          }}
        >
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>
            {result === 5 ? "🏆" : result >= 3 ? "✨" : "💪"}
          </div>
          <div
            style={{
              fontSize: "1.5rem",
              fontWeight: "900",
              color: result >= 4 ? "#16a34a" : "#dc2626",
              marginBottom: "0.25rem",
            }}
          >
            {result === 5 ? "ممتاز! علامة كاملة!" : result >= 3 ? "أحسنت، عمل جيد!" : "حاول مرة أخرى!"}
          </div>
          <div style={{ fontSize: "1.1rem", color: "var(--text-muted)", fontWeight: "600" }}>
            نتيجتك: {result} / {labels.length} 🎯
          </div>
        </div>
      )}

      {/* ── Action buttons ───────────────────────────── */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {result === null && (
          <button
            onClick={checkAnswers}
            disabled={answered < labels.length}
            style={{
              padding: "13px 32px",
              borderRadius: "var(--radius-full)",
              fontWeight: "700",
              fontSize: "15px",
              color: "white",
              background:
                answered < labels.length
                  ? "var(--border-card)"
                  : "var(--gradient-hero)",
              border: "none",
              cursor: answered < labels.length ? "not-allowed" : "pointer",
              boxShadow:
                answered < labels.length
                  ? "none"
                  : "0 4px 20px rgba(79,70,229,0.35)",
              transition: "all var(--transition-fast)",
              opacity: answered < labels.length ? 0.6 : 1,
            }}
          >
            ✅ تحقق من الإجابات
          </button>
        )}

        <button
          onClick={shuffleCards}
          style={{
            padding: "13px 32px",
            borderRadius: "var(--radius-full)",
            fontWeight: "700",
            fontSize: "15px",
            color: "var(--text-primary)",
            background: "var(--bg-card)",
            border: "1.5px solid var(--border-card)",
            cursor: "pointer",
            backdropFilter: "blur(8px)",
            transition: "all var(--transition-fast)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "var(--primary)";
            e.currentTarget.style.color = "var(--primary)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--border-card)";
            e.currentTarget.style.color = "var(--text-primary)";
          }}
        >
          🔄 إعادة النشاط
        </button>
      </div>
    </div>
  );
}
