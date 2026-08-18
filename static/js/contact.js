/* Contact form for jesusjbriceno.dev — submits to the n8n webhook.
   Security posture on the client:
   - fetch with credentials: 'omit', no cookies involved
   - application/x-www-form-urlencoded (simple request, no preflight leaks)
   - status text set via textContent only — never innerHTML (XSS-safe)
   - server responses are generic; nothing user-supplied is ever reflected
   - honeypot field and load-timestamp sent along for server-side gating */
(function () {
  "use strict";

  var ENDPOINT = "https://n8n.jesusjbriceno.dev/webhook/jbdev-contact";
  var LOADED_AT = Date.now();
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  var MSG = {
    es: {
      sending: "TRANSMITIENDO…",
      ok: "SEÑAL RECIBIDA · GRACIAS",
      errValidation: "REVISA NOMBRE, EMAIL Y MENSAJE",
      errBlocked: "TRANSMISIÓN RECHAZADA",
      errServer: "NO SE PUDO TRANSMITIR · PRUEBA MÁS TARDE"
    },
    en: {
      sending: "TRANSMITTING…",
      ok: "SIGNAL RECEIVED · THANK YOU",
      errValidation: "CHECK NAME, EMAIL AND MESSAGE",
      errBlocked: "TRANSMISSION REJECTED",
      errServer: "COULD NOT TRANSMIT · TRY AGAIN LATER"
    }
  };

  function lang() {
    var l = document.documentElement.lang;
    return MSG[l] ? l : "es";
  }

  function setStatus(el, text, kind) {
    el.textContent = text; // textContent only — never HTML
    el.className = "probe__status" + (kind ? " probe__status--" + kind : "");
  }

  document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("contact-form");
    var status = document.getElementById("probe-status");
    var sendBtn = document.getElementById("probe-send");
    if (!form || !status || !sendBtn) return;

    form.addEventListener("submit", function (ev) {
      ev.preventDefault();

      var name = form.elements.name.value.trim();
      var email = form.elements.email.value.trim();
      var message = form.elements.message.value.trim();
      var honeypot = form.elements.honeypot.value;

      if (honeypot.trim() !== "" || name.length < 2 ||
          !EMAIL_RE.test(email) || message.length < 10) {
        setStatus(status, MSG[lang()].errValidation, "err");
        return;
      }

      sendBtn.disabled = true;
      setStatus(status, MSG[lang()].sending, "");

      var body = new URLSearchParams();
      body.append("name", name);
      body.append("email", email);
      body.append("message", message);
      body.append("honeypot", honeypot);
      body.append("_formLoadedAt", String(LOADED_AT));

      var controller = new AbortController();
      var timer = setTimeout(function () { controller.abort(); }, 15000);

      fetch(ENDPOINT, {
        method: "POST",
        mode: "cors",
        credentials: "omit",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
        signal: controller.signal
      })
        .then(function (res) {
          clearTimeout(timer);
          if (res.ok) {
            setStatus(status, MSG[lang()].ok, "ok");
            form.reset();
          } else if (res.status === 403) {
            setStatus(status, MSG[lang()].errBlocked, "err");
          } else {
            setStatus(status, MSG[lang()].errServer, "err");
          }
        })
        .catch(function () {
          clearTimeout(timer);
          setStatus(status, MSG[lang()].errServer, "err");
        })
        .finally(function () {
          sendBtn.disabled = false;
        });
    });
  });
})();
