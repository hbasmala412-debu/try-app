"use client";
import { useState, useEffect } from "react";

const UNITS = [
  {
    id: 1,
    href: "/unit1",
    image: "/images/ai3.jpg",
    alt: "الوحدة الأولى",
    number: "٠١",
    title: "الوحدة الأولى",
    desc: "مقدمة شاملة عن الذكاء الاصطناعي، تعريفه، مميزاته وعيوبه.",
    tag: "مبتدئ",
    tagClass: "badge-new",
    lessons: "١٢ درس",
    duration: "٤ ساعات",
  },
  {
    id: 2,
    href: "/unit2",
    image: "/images/ai8.jpg",
    alt: "الوحدة الثانية",
    number: "٠٢",
    title: "الوحدة الثانية",
    desc: "أساسيات الذكاء الاصطناعي، أنواعه، مجالاته وتطبيقاته العملية.",
    tag: "متوسط",
    tagClass: "badge-popular",
    lessons: "١٨ درس",
    duration: "٦ ساعات",
  },
];

export default function UnitsIndex() {
  useEffect(() => {
    // Scroll-reveal
    const els = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("visible");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      els.forEach((el) => io.observe(el));
      return () => io.disconnect();
    }
    els.forEach((el) => el.classList.add("visible"));
  }, []);

  return (
    <section className="units-section">
      <div className="section-inner">

        {/* ── Header ── */}
        <div className="section-header reveal">
          <div className="section-tag">📖 المحتوى التعليمي</div>
          <h1 className="section-title">
            اختر{" "}
            <span className="gradient-text">وحدتك التعليمية</span>
          </h1>
          <p className="section-desc">
            كل وحدة مصمَّمة لتأخذك خطوة أعمق في عالم الذكاء الاصطناعي —
            من المفاهيم الأولى حتى التطبيقات المتقدمة.
          </p>
        </div>

        {/* ── Grid ── */}
        <div className="units-grid">
          {UNITS.map((unit) => (
            <a key={unit.id} href={unit.href} className="unit-card reveal">

              {/* Badge */}
              <span className={`card-badge ${unit.tagClass}`}>{unit.tag}</span>

              {/* Unit number watermark */}
              <span className="unit-number">{unit.number}</span>

              {/* Image */}
              <div className="unit-img-wrap">
                <img src={unit.image} alt={unit.alt} className="unit-img" />
                <div className="unit-img-overlay" />
              </div>

              {/* Content */}
              <div className="unit-body">
                <h2 className="card-title">{unit.title}</h2>
                <p className="card-desc">{unit.desc}</p>

                {/* Meta */}
                <div className="card-meta">
                  <span className="card-meta-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 6v6l4 2M12 2a10 10 0 100 20A10 10 0 0012 2z" />
                    </svg>
                    {unit.duration}
                  </span>
                  <span className="card-meta-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 19.5A2.5 2.5 0 016.5 17H20M4 4h16v16H4z" />
                    </svg>
                    {unit.lessons}
                  </span>
                </div>

                {/* CTA */}
                <div className="unit-cta">
                  <span className="btn-card">
                    ادخل الوحدة
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M19 12H5M12 5l-7 7 7 7" />
                    </svg>
                  </span>
                </div>
              </div>

            </a>
          ))}
        </div>

      </div>

      {/* ── Scoped styles ── */}
      <style>{`
        .units-section {
          padding: 7rem 2rem 5rem;
          min-height: 100vh;
          position: relative;
        }

        /* Grid: 2 columns on desktop, 1 on mobile */
        .units-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        /* ── Card ── */
        .unit-card {
          position: relative;
          display: flex;
          flex-direction: column;
          background: var(--bg-card);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--border-card);
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-card);
          text-decoration: none;
          cursor: pointer;
          transition: all var(--transition-base);
        }
        .unit-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--gradient-card);
          opacity: 0;
          transition: opacity var(--transition-base);
          border-radius: inherit;
          z-index: 0;
        }
        .unit-card::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: var(--gradient-primary);
          transform: scaleX(0);
          transform-origin: right;
          transition: transform var(--transition-base);
        }
        .unit-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
          border-color: var(--primary);
        }
        .unit-card:hover::before { opacity: 1; }
        .unit-card:hover::after   { transform: scaleX(1); }

        /* Stagger */
        .unit-card:nth-child(2) { transition-delay: 0.08s; }

        /* Unit number watermark */
        .unit-number {
          position: absolute;
          top: 1.25rem;
          right: 1.5rem;
          font-size: 4.5rem;
          font-weight: 900;
          line-height: 1;
          color: var(--primary);
          opacity: 0.08;
          z-index: 1;
          user-select: none;
          pointer-events: none;
          letter-spacing: -0.04em;
          transition: opacity var(--transition-base);
        }
        .unit-card:hover .unit-number { opacity: 0.14; }

        /* Image */
        .unit-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 16/9;
          overflow: hidden;
        }
        .unit-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.4,0,0.2,1);
        }
        .unit-card:hover .unit-img { transform: scale(1.05); }
        .unit-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            transparent 40%,
            var(--bg-card) 100%
          );
          pointer-events: none;
        }

        /* Body */
        .unit-body {
          position: relative;
          z-index: 1;
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        /* CTA row */
        .unit-cta {
          margin-top: auto;
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-subtle);
          display: flex;
          justify-content: flex-end;
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .units-grid {
            grid-template-columns: 1fr;
          }
          .units-section {
            padding: 5rem 1rem 3rem;
          }
        }
      `}</style>
    </section>
  );
}
