/* Language switch for jesusjbriceno.dev
   Two languages live in the same document; the DIP switch flips visibility.
   Preference persists in localStorage; default follows the browser. */
(function () {
  "use strict";

  var SUPPORTED = ["es", "en"];
  var KEY = "jbdev-lang";

  function detect() {
    var nav = (navigator.language || "es").slice(0, 2).toLowerCase();
    return SUPPORTED.indexOf(nav) !== -1 ? nav : "es";
  }

  function setLang(lang) {
    if (SUPPORTED.indexOf(lang) === -1) lang = "es";
    document.documentElement.lang = lang;

    var nodes = document.querySelectorAll("[data-lang]");
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      el.hidden = el.getAttribute("data-lang") !== lang;
    }

    var sw = document.getElementById("lang-switch");
    if (sw) sw.setAttribute("aria-checked", lang === "en" ? "true" : "false");

    try { localStorage.setItem(KEY, lang); } catch (e) { /* private mode */ }
  }

  function toggle() {
    var current = document.documentElement.lang;
    setLang(current === "es" ? "en" : "es");
  }

  document.addEventListener("DOMContentLoaded", function () {
    var saved = null;
    try { saved = localStorage.getItem(KEY); } catch (e) {}
    setLang(saved && SUPPORTED.indexOf(saved) !== -1 ? saved : detect());

    var sw = document.getElementById("lang-switch");
    if (sw) {
      sw.addEventListener("click", toggle);
      sw.addEventListener("keydown", function (ev) {
        if (ev.key === "Enter" || ev.key === " ") {
          ev.preventDefault();
          toggle();
        }
      });
    }
  });
})();
