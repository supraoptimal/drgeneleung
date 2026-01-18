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
})();