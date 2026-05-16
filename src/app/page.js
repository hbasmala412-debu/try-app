"use client";
import { useState, useEffect } from "react";

// ── Course data ────────────────────────────────────────────────────────────────
const COURSES = [
  {
    id: 1,
    icon: "🧠",
    iconBg: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
    badge: "جديد",
    badgeClass: "badge-new",
    title: "مقدمة في الذكاء الاصطناعي",
    desc: "تعرّف على أساسيات الذكاء الاصطناعي ومفاهيمه الجوهرية وتطبيقاته في عالمنا اليوم.",
    lessons: "١٢ درس",
    duration: "٤ ساعات",
    level: 1,
    href: "/units",
  },
  {
    id: 2,
    icon: "🤖",
    iconBg: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
    badge: "الأكثر شعبية",
    badgeClass: "badge-popular",
    title: "تعلم الآلة للمبتدئين",
    desc: "رحلة تفاعلية في عالم تعلم الآلة وبناء النماذج الذكية خطوة بخطوة.",
    lessons: "١٨ درس",
    duration: "٦ ساعات",
    level: 2,
    href: "/units",
  },
  {
    id: 3,
    icon: "👁️",
    iconBg: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
    badge: "مميز",
    badgeClass: "badge-hot",
    title: "رؤية الحاسوب",
    desc: "استكشف كيف تفهم الآلات الصور والمقاطع المرئية عبر تقنيات رؤية الحاسوب الحديثة.",
    lessons: "١٥ درس",
    duration: "٥ ساعات",
    level: 2,
    href: "/units",
  },
  {
    id: 4,
    icon: "💬",
    iconBg: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
    badge: "جديد",
    badgeClass: "badge-new",
    title: "معالجة اللغة الطبيعية",
    desc: "اكتشف كيف تتعلم الآلات فهم اللغة البشرية والتفاعل معها بشكل طبيعي.",
    lessons: "١٤ درس",
    duration: "٥ ساعات",
    level: 3,
    href: "/units",
  },
  {
    id: 5,
    icon: "🎯",
    iconBg: "linear-gradient(135deg, #10b981 0%, #3b82f6 100%)",
    badge: null,
    badgeClass: "",
    title: "التعلم المعزز",
    desc: "تعمّق في مفاهيم التعلم المعزز وكيف تتعلم الأنظمة الذكية من خلال التجربة والخطأ.",
    lessons: "١٦ درس",
    duration: "٧ ساعات",
    level: 3,
    href: "/units",
  },
  {
    id: 6,
    icon: "✨",
    iconBg: "linear-gradient(135deg, #e879f9 0%, #f97316 100%)",
    badge: "الأكثر شعبية",
    badgeClass: "badge-popular",
    title: "الذكاء الاصطناعي التوليدي",
    desc: "أتقن تقنيات الذكاء التوليدي وتعلّم كيفية إنشاء النصوص والصور بواسطة الذكاء الاصطناعي.",
    lessons: "٢٠ درس",
    duration: "٨ ساعات",
    level: 2,
    href: "/units",
  },
];

// ── Level dots helper ────────────────────────────────────────────────────────
function LevelDots({ level }) {
  return (
    <div className="card-level">
      {[1, 2, 3].map((n) => (
        <span key={n} className={`level-dot${n <= level ? " active" : ""}`} />
      ))}
    </div>
  );
}

// ── Course Card ──────────────────────────────────────────────────────────────
function CourseCard({ course }) {
  return (
    <div className="course-card reveal">
      {/* Badge */}
      {course.badge && (
        <span className={`card-badge ${course.badgeClass}`}>{course.badge}</span>
      )}

      {/* Icon */}
      <div
        className="card-icon-wrap"
        style={{ background: course.iconBg }}
      >
        <span style={{ fontSize: "26px", lineHeight: 1 }}>{course.icon}</span>
      </div>

      {/* Content */}
      <h3 className="card-title">{course.title}</h3>
      <p className="card-desc">{course.desc}</p>

      {/* Meta */}
      <div className="card-meta">
        <span className="card-meta-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 6v6l4 2M12 2a10 10 0 100 20A10 10 0 0012 2z"/>
          </svg>
          {course.duration}
        </span>
        <span className="card-meta-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 19.5A2.5 2.5 0 016.5 17H20M4 4h16v16H4z"/>
          </svg>
          {course.lessons}
        </span>
      </div>

      {/* CTA row */}
      
    </div>
  );
}

// ── Main Page ────────────────────────────────────────────────────────────────
export default function Home() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const sync = () => setIsDark(document.documentElement.classList.contains("dark"));
    sync();
    const obs = new MutationObserver(sync);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    // Scroll-reveal init (in case layout script hasn't run yet)
    const els = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
        });
      }, { threshold: 0.1 });
      els.forEach((el) => io.observe(el));
      return () => { obs.disconnect(); io.disconnect(); };
    }
    els.forEach((el) => el.classList.add("visible"));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* ╔════════════════════════════════════════════════════╗ */}
      {/* ║  HERO                                              ║ */}
      {/* ╚════════════════════════════════════════════════════╝ */}
      <section className="hero-section">
        <div className="hero-inner">

          {/* ── Text side ───────────────────────── */}
          <div className="hero-text animate-fade-in">

            {/* Live badge */}
            <div className="hero-badge">
              <span className="dot" />
              منصة الذكاء الاصطناعي — الجيل القادم
            </div>

            {/* Heading */}
            <h1 className="hero-title">
              اكتشف مستقبل
              <br />
              <span className="gradient-text">الذكاء الاصطناعي</span>
            </h1>

            {/* Description */}
            <p className="hero-desc">
              منصة تعليمية متطورة تهدف إلى تبسيط مفاهيم الذكاء الاصطناعي
              وتطبيقاته — من المبادئ الأولى حتى أحدث التقنيات.
            </p>

            {/* Quick stats */}
            <div className="hero-stats animate-fade-in-delay">
              {[
                { num: "+٥٠", label: "وحدة تعليمية" },
                { num: "+٢٠٠", label: "طالب نشط" },
                { num: "٦", label: "مسارات تعلم" },
              ].map(({ num, label }) => (
                <div className="hero-stat" key={label}>
                  <span className="num">{num}</span>
                  <span className="label">{label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="hero-ctas animate-fade-in-delay-2">
              <a href="/units" className="btn-primary">
                <span>🚀</span>
                ابدأ التعلم الآن
              </a>
              <a href="/about" className="btn-secondary">
                تعرف علينا
                <span>←</span>
              </a>
            </div>
          </div>

          {/* ── Visual side ─────────────────────── */}
          <div className="hero-visual animate-fade-in-delay">
            <div className="hero-orb" />

            <div className="hero-image-wrap">
              <img
                src="/images/ai99.png"
                alt="مفهوم الذكاء الاصطناعي"
              />
            </div>

            {/* Floating info card */}
            <div className="hero-float-card glass-card animate-float">
              <div className="hero-float-icon">🤖</div>
              <div className="hero-float-text">
                <strong>ذكاء اصطناعي</strong>
                <span>تعلّم بأسلوبك الخاص</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ╔════════════════════════════════════════════════════╗ */}
      {/* ║  COURSES SECTION                                   ║ */}
      {/* ╚════════════════════════════════════════════════════╝ */}
      <section className="courses-section">
        <div className="section-inner">

          {/* Header */}
          <div className="section-header reveal">
            <div className="section-tag">📚 المحتوى التعليمي</div>
            <h2 className="section-title">
              استكشف{" "}
              <span className="gradient-text">مساراتنا التعليمية</span>
            </h2>
            <p className="section-desc">
              تعلّم بشكل تفاعلي وعملي مع محتوى متخصص صُمّم لجعل مفاهيم
              الذكاء الاصطناعي في متناول الجميع.
            </p>
          </div>

          {/* Grid */}
          <div className="courses-grid">
            {COURSES.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          {/* View all CTA */}
          <div style={{ textAlign: "center", marginTop: "3rem" }} className="reveal">
            <a href="/units" className="btn-primary" style={{ display: "inline-flex" }}>
              عرض جميع المحتويات
              <span>←</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}