"use client";
import { useState } from "react";

const questions = [
  {
    id: 1,
    q: "ما هو نوع الذكاء الذي يركز على أداء مهمة واحدة محددة؟",
    options: ["الذكاء العام", "الذكاء الضيق", "الذكاء الفائق"],
    ans: 1,
  },
  {
    id: 2,
    q: "من مميزات الذكاء الاصطناعي التي تساعد في المجال الطبي:",
    options: ["زيادة وقت الانتظار", "تشخيص الأمراض بدقة وسرعة", "الاستغناء عن الأطباء تماماً"],
    ans: 1,
  },
  {
    id: 3,
    q: "أي من الآتي يعتبر من عيوب الذكاء الاصطناعي؟",
    options: ["توفير الوقت", "تحسين خدمة العملاء", "انتهاك خصوصية البيانات"],
    ans: 2,
  },
  {
    id: 4,
    q: "تعتبر السيارات ذاتية القيادة مثالاً شهيراً على:",
    options: ["تطبيقات الذكاء الاصطناعي", "أنواع الذاكرة البشرية", "تطوير الهواتف المحمولة"],
    ans: 0,
  },
  {
    id: 5,
    q: "ما هو المجال الذي يهدف لفهم لغة البشر والرد عليها؟",
    options: ["الرؤية الحاسوبية", "معالجة اللغة الطبيعية", "الروبوتات"],
    ans: 1,
  },
];

export default function Exam() {
  const [selected, setSelected] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const answered = Object.keys(selected).length;
  const progress = (answered / questions.length) * 100;

  const handleSelect = (qId, optIdx) => {
    if (showResults) return;
    setSelected((prev) => ({ ...prev, [qId]: optIdx }));
  };

  const handleSubmit = () => {
    if (answered < questions.length) {
      alert("الرجاء الإجابة على جميع الأسئلة أولاً");
      return;
    }
    let s = 0;
    questions.forEach((q) => { if (selected[q.id] === q.ans) s++; });
    setScore(s);
    setShowResults(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleRetry = () => {
    setSelected({});
    setShowResults(false);
    setScore(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isPerfect = score === questions.length;
  const isPass = score >= Math.ceil(questions.length / 2);

  return (
    <div
      style={{
        maxWidth: "760px",
        margin: "0 auto",
        padding: "88px 1.5rem 5rem",
      }}
      dir="rtl"
    >
      {/* ── Header ──────────────────────────────────── */}
      <div className="reveal" style={{ textAlign: "center", marginBottom: "2.5rem" }}>
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
          📝 اختبار ذاتي
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
          اختبر{" "}
          <span
            style={{
              background: "var(--gradient-primary)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            معلوماتك
          </span>
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem" }}>
          {questions.length} أسئلة — أجب عن الجميع ثم اضغط تسليم
        </p>
      </div>

      {/* ── Progress bar ────────────────────────────── */}
      <div className="reveal" style={{ marginBottom: "2rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "8px",
          }}
        >
          <span style={{ fontSize: "13px", color: "var(--text-muted)", fontWeight: "600" }}>
            {showResults ? "النتيجة النهائية" : "التقدم"}
          </span>
          <span style={{ fontSize: "13px", color: "var(--primary)", fontWeight: "700" }}>
            {showResults ? `${score} / ${questions.length}` : `${answered} / ${questions.length}`}
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
              width: `${showResults ? (score / questions.length) * 100 : progress}%`,
              background: showResults
                ? isPass
                  ? "linear-gradient(90deg, #22c55e, #16a34a)"
                  : "linear-gradient(90deg, #ef4444, #dc2626)"
                : "var(--gradient-primary)",
              borderRadius: "var(--radius-full)",
              transition: "width 0.6s cubic-bezier(0.4,0,0.2,1)",
            }}
          />
        </div>
      </div>

      {/* ── Result banner ────────────────────────────── */}
      {showResults && (
        <div
          className="reveal"
          style={{
            marginBottom: "2.5rem",
            borderRadius: "var(--radius-lg)",
            padding: "2rem",
            textAlign: "center",
            background: isPass
              ? "linear-gradient(135deg, rgba(34,197,94,0.12) 0%, rgba(16,185,129,0.08) 100%)"
              : "linear-gradient(135deg, rgba(239,68,68,0.1) 0%, rgba(236,72,153,0.08) 100%)",
            border: `1px solid ${isPass ? "rgba(34,197,94,0.25)" : "rgba(239,68,68,0.25)"}`,
            boxShadow: "var(--shadow-card)",
          }}
        >
          <div style={{ fontSize: "2.8rem", marginBottom: "0.75rem" }}>
            {isPerfect ? "🏆" : isPass ? "✨" : "💪"}
          </div>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "900",
              color: isPass ? "#16a34a" : "#dc2626",
              marginBottom: "0.4rem",
            }}
          >
            {isPerfect ? "ممتاز! علامة كاملة!" : isPass ? "أحسنت، عمل جيد!" : "حاول مرة أخرى!"}
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1rem", fontWeight: "600" }}>
            حصلت على {score} من {questions.length}
          </p>
        </div>
      )}

      {/* ── Questions ───────────────────────────────── */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        {questions.map((item, qi) => (
          <div
            key={item.id}
            className="reveal"
            style={{
              background: "var(--bg-card)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid var(--border-card)",
              borderRadius: "var(--radius-lg)",
              padding: "1.5rem",
              boxShadow: "var(--shadow-card)",
              position: "relative",
              overflow: "hidden",
              transition: "box-shadow var(--transition-base)",
            }}
          >
            {/* Question number accent */}
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "3px",
                height: "100%",
                background: selected[item.id] != null
                  ? "var(--gradient-primary)"
                  : "var(--border-subtle)",
                borderRadius: "0 var(--radius-lg) var(--radius-lg) 0",
                transition: "background var(--transition-base)",
              }}
            />

            {/* Question text */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "12px",
                marginBottom: "1.25rem",
              }}
            >
              <div
                style={{
                  minWidth: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  background: "var(--primary-glow)",
                  border: "1px solid var(--border-card)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "800",
                  fontSize: "13px",
                  color: "var(--primary)",
                  flexShrink: 0,
                }}
              >
                {qi + 1}
              </div>
              <p
                style={{
                  fontSize: "1rem",
                  fontWeight: "700",
                  color: "var(--text-primary)",
                  lineHeight: "1.6",
                  paddingTop: "4px",
                }}
              >
                {item.q}
              </p>
            </div>

            {/* Options */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {item.options.map((opt, i) => {
                const isSelected = selected[item.id] === i;
                const isCorrect = showResults && i === item.ans;
                const isWrong = showResults && isSelected && i !== item.ans;

                let bg = "transparent";
                let border = "var(--border-card)";
                let color = "var(--text-secondary)";
                let icon = null;

                if (isCorrect) {
                  bg = "rgba(34,197,94,0.08)";
                  border = "#22c55e";
                  color = "#15803d";
                  icon = "✓";
                } else if (isWrong) {
                  bg = "rgba(239,68,68,0.08)";
                  border = "#ef4444";
                  color = "#dc2626";
                  icon = "✗";
                } else if (isSelected) {
                  bg = "var(--primary-glow)";
                  border = "var(--primary)";
                  color = "var(--primary)";
                }

                return (
                  <button
                    key={i}
                    disabled={showResults}
                    onClick={() => handleSelect(item.id, i)}
                    style={{
                      padding: "12px 16px",
                      borderRadius: "var(--radius-md)",
                      border: `1.5px solid ${border}`,
                      background: bg,
                      color,
                      fontSize: "14px",
                      fontWeight: isSelected || isCorrect ? "700" : "500",
                      textAlign: "right",
                      cursor: showResults ? "default" : "pointer",
                      transition: "all var(--transition-fast)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "8px",
                      fontFamily: "inherit",
                    }}
                    onMouseEnter={(e) => {
                      if (!showResults && !isSelected) {
                        e.currentTarget.style.borderColor = "var(--primary)";
                        e.currentTarget.style.background = "var(--primary-glow)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!showResults && !isSelected) {
                        e.currentTarget.style.borderColor = "var(--border-card)";
                        e.currentTarget.style.background = "transparent";
                      }
                    }}
                  >
                    <span>{opt}</span>
                    {icon && (
                      <span
                        style={{
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          background: isCorrect ? "#22c55e" : "#ef4444",
                          color: "white",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "11px",
                          fontWeight: "900",
                          flexShrink: 0,
                        }}
                      >
                        {icon}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* ── Submit / Retry ───────────────────────────── */}
      <div style={{ marginTop: "2rem" }}>
        {!showResults ? (
          <button
            onClick={handleSubmit}
            style={{
              width: "100%",
              padding: "16px",
              borderRadius: "var(--radius-full)",
              border: "none",
              fontWeight: "800",
              fontSize: "16px",
              color: "white",
              background:
                answered < questions.length
                  ? "var(--border-card)"
                  : "var(--gradient-hero)",
              cursor: answered < questions.length ? "not-allowed" : "pointer",
              opacity: answered < questions.length ? 0.6 : 1,
              boxShadow:
                answered < questions.length
                  ? "none"
                  : "0 4px 20px rgba(79,70,229,0.35)",
              transition: "all var(--transition-fast)",
              fontFamily: "inherit",
            }}
          >
            {answered < questions.length
              ? `أجب على ${questions.length - answered} سؤال متبقي`
              : "🚀 تسليم الإجابات وعرض النتيجة"}
          </button>
        ) : (
          <button
            onClick={handleRetry}
            style={{
              width: "100%",
              padding: "16px",
              borderRadius: "var(--radius-full)",
              border: "1.5px solid var(--border-card)",
              fontWeight: "800",
              fontSize: "16px",
              color: "var(--text-primary)",
              background: "var(--bg-card)",
              cursor: "pointer",
              backdropFilter: "blur(8px)",
              transition: "all var(--transition-fast)",
              fontFamily: "inherit",
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
            🔄 إعادة الاختبار
          </button>
        )}
      </div>
    </div>
  );
}
