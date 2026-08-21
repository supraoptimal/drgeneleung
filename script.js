(function () {
  "use strict";

  // Footer year.
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  // ---- Homepage quotation rotation -------------------------------------
  var stage = document.getElementById("quotation");
  if (!stage) return;

  var quotes = Array.prototype.slice.call(stage.querySelectorAll(".quote"));
  if (quotes.length < 2) return;

  var INTERVAL = 12000; // calm, unhurried
  var current = Math.floor(Math.random() * quotes.length);
  var timer = null;

  function show(index) {
    quotes.forEach(function (quote, i) {
      quote.classList.toggle("is-active", i === index);
    });
    current = index;
  }

  function advance() {
    // Never repeat the quotation that is already on screen.
    var next = (current + 1 + Math.floor(Math.random() * (quotes.length - 1))) % quotes.length;
    show(next);
  }

  function start() {
    stop();
    timer = window.setInterval(advance, INTERVAL);
  }

  function stop() {
    if (timer !== null) {
      window.clearInterval(timer);
      timer = null;
    }
  }

  show(current);
  if (!document.hidden) start();

  // Pause while the tab is hidden.
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) stop();
    else start();
  });
})();
