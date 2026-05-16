"use client";
import { useState, useEffect, useRef } from "react";
import "./globals.css";

export default function RootLayout({ children }) {
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activePath, setActivePath] = useState("/");
  const mobileRef = useRef(null);

  // ── Theme init (no flash) ──────────────────────────────
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // ── Active path ────────────────────────────────────────
  useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);

  // ── Scroll detection ───────────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Close mobile menu on outside click ────────────────
  useEffect(() => {
    const handle = (e) => {
      if (mobileRef.current && !mobileRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const navLinks = [
    { href: "/", label: "الرئيسية" },
    { href: "/about", label: "حول المنصة" },
    { href: "/instructions", label: "التعليمات" },
    { href: "/units", label: "المحتوى" },
    { href: "/activity", label: "النشاط" },
    { href: "/exam", label: "الاختبارات" },
  ];

  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');if(t==='dark')document.documentElement.classList.add('dark');})()`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>

        {/* ╔══════════════════════════════════════╗ */}
        {/* ║  NAVBAR                              ║ */}
        {/* ╚══════════════════════════════════════╝ */}
        <nav className={`navbar${scrolled ? " scrolled" : ""}`} ref={mobileRef}>
          <div className="navbar-inner">

            {/* Logo */}
            <div className="navbar-logo">
              <a href="/">
                <img src="/images/log2.png" alt="شعار المنصة" />
              </a>
            </div>

            {/* Desktop links */}
            <ul className="navbar-links">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className={activePath === href ? "active" : ""}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Right controls */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <label className="switch" aria-label="تبديل الوضع الداكن">
                <input
                  type="checkbox"
                  checked={isDark}
                  onChange={toggleTheme}
                />
                <span className="slider" />
              </label>

              {/* Hamburger — mobile only */}
              <button
                className={`hamburger${mobileOpen ? " open" : ""}`}
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="فتح القائمة"
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <div className={`mobile-menu${mobileOpen ? " open" : ""}`}>
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={activePath === href ? "active" : ""}
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
        </nav>

        {/* ╔══════════════════════════════════════╗ */}
        {/* ║  PAGE CONTENT                        ║ */}
        {/* ╚══════════════════════════════════════╝ */}
        <main>{children}</main>

        {/* ╔══════════════════════════════════════╗ */}
        {/* ║  FOOTER                              ║ */}
        {/* ╚══════════════════════════════════════╝ */}
        <footer className="footer">
          <div className="footer-inner">
            <div className="footer-top">

              {/* Brand column */}
              <div className="footer-brand">
                <img src="/images/log2.png" alt="شعار المنصة" className="footer-logo" />
                <p>
                  منصة تعليمية رائدة تهدف إلى تبسيط مفاهيم الذكاء الاصطناعي وتمكين الجيل القادم من المبتكرين.
                </p>
                <div className="footer-social">
                  {[
                    { icon: "𝕏", label: "تويتر", href: "#" },
                    { icon: "in", label: "لينكدإن", href: "#" },
                    { icon: "▶", label: "يوتيوب", href: "#" },
                    { icon: "📘", label: "فيسبوك", href: "#" },
                  ].map(({ icon, label, href }) => (
                    <a key={label} href={href} className="social-link" aria-label={label} title={label}>
                      <span style={{ fontSize: "13px", fontWeight: "700" }}>{icon}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Links columns */}
              <div className="footer-col">
                <h4>روابط سريعة</h4>
                <ul className="footer-links">
                  <li><a href="/">الرئيسية</a></li>
                  <li><a href="/units">المحتوى التعليمي</a></li>
                  <li><a href="/exam">الاختبارات</a></li>
                  <li><a href="/activity">النشاط</a></li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>عن المنصة</h4>
                <ul className="footer-links">
                  <li><a href="/about">من نحن</a></li>
                  <li><a href="/instructions">التعليمات</a></li>
                  <li><a href="/about#team">فريق العمل</a></li>
                  <li><a href="/about#vision">رؤيتنا</a></li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>الدعم</h4>
                <ul className="footer-links">
                  <li><a href="#">مركز المساعدة</a></li>
                  <li><a href="#">سياسة الخصوصية</a></li>
                  <li><a href="#">شروط الاستخدام</a></li>
                  <li><a href="#">تواصل معنا</a></li>
                </ul>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="footer-bottom">
              <p>© {new Date().getFullYear()} منصة الذكاء الاصطناعي. جميع الحقوق محفوظة.</p>
              <div className="footer-bottom-links">
                <a href="#">الخصوصية</a>
                <a href="#">الشروط</a>
                <a href="#">ملفات تعريف الارتباط</a>
              </div>
            </div>
          </div>
        </footer>

        {/* ── Scroll-reveal script ─────────────────────── */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                var els = document.querySelectorAll('.reveal');
                if (!('IntersectionObserver' in window)) {
                  els.forEach(function(el){ el.classList.add('visible'); });
                  return;
                }
                var io = new IntersectionObserver(function(entries){
                  entries.forEach(function(e){
                    if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); }
                  });
                }, { threshold: 0.12 });
                els.forEach(function(el){ io.observe(el); });
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
