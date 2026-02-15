(function () {
  // Year in footer
  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());

  // Copy site link button
  const btn = document.getElementById("copyLinkBtn");
  if (btn) {
    btn.addEventListener("click", async () => {
      const url = window.location.origin || "https://drgeneleung.com";
      try {
        await navigator.clipboard.writeText(url);
        btn.textContent = "Copied";
        setTimeout(() => (btn.textContent = "Copy site link"), 1200);
      } catch (e) {
        // Fallback
        const ta = document.createElement("textarea");
        ta.value = url;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        btn.textContent = "Copied";
        setTimeout(() => (btn.textContent = "Copy site link"), 1200);
      }
    });
  }

  // ── Scroll-triggered fade-in animations ──
  const fadeEls = document.querySelectorAll(".fade-in");
  if (fadeEls.length && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    fadeEls.forEach((el) => observer.observe(el));
  } else {
    // Fallback: just show everything
    fadeEls.forEach((el) => el.classList.add("visible"));
  }

  // ── Sticky header shadow on scroll ──
  const header = document.querySelector(".site-header");
  if (header) {
    const onScroll = () => {
      header.classList.toggle("scrolled", window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // ── Active nav link highlighting ──
  const navLinks = document.querySelectorAll(".nav-links a[href^='#']");
  const sections = [];
  navLinks.forEach((link) => {
    const id = link.getAttribute("href").slice(1);
    const section = document.getElementById(id);
    if (section) sections.push({ link, section });
  });

  if (sections.length && "IntersectionObserver" in window) {
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const match = sections.find((s) => s.section === entry.target);
          if (match) {
            if (entry.isIntersecting) {
              navLinks.forEach((l) => l.classList.remove("active"));
              match.link.classList.add("active");
            }
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" }
    );
    sections.forEach((s) => navObserver.observe(s.section));
  }
})();
