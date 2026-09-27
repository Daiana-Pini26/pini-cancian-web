(function () {
  "use strict";

  var data = window.__BRAND__ || {};
  var fineHover = matchMedia("(hover: hover) and (pointer: fine)").matches;

  var $ = function (sel, scope) { return (scope || document).querySelector(sel); };
  var $$ = function (sel, scope) { return Array.prototype.slice.call((scope || document).querySelectorAll(sel)); };
  var escHTML = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  function safe(fn, name) {
    try { fn(); } catch (e) { console.warn("[" + name + "] failed:", e); }
  }
  function waLink(message) {
    var num = (data.contact && data.contact.whatsapp) || "";
    var msg = encodeURIComponent(message || tr(data.contact, "whatsappMessage") || "Hola");
    return "https://wa.me/" + num + "?text=" + msg;
  }

  /* ---------- i18n ---------- */

  var LANG_KEY = "pc_lang";
  var SUPPORTED_LANGS = ["es", "en", "pt", "zh"];
  function getStoredLang() {
    try {
      var stored = localStorage.getItem(LANG_KEY);
      if (SUPPORTED_LANGS.indexOf(stored) !== -1) return stored;
    } catch (e) {}
    return "es";
  }
  var currentLang = getStoredLang();

  function t(key) {
    var dict = (window.__I18N__ && window.__I18N__[currentLang]) || {};
    return dict[key] != null ? dict[key] : key;
  }
  function tr(obj, field) {
    if (!obj) return "";
    if (currentLang !== "es" && obj[field + "_" + currentLang] != null) return obj[field + "_" + currentLang];
    return obj[field];
  }

  /* ---------- Mounts (idempotent) ---------- */

  function mountWhatsappLinks(force) {
    $$("[data-wa-link]").forEach(function (el) {
      if (!force && el.dataset.waBound) return;
      el.dataset.waBound = "1";
      el.setAttribute("href", waLink());
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    });
  }

  function mountContact(force) {
    var target = $("[data-contact-list]");
    if (!target || (!force && target.children.length > 0)) return;
    var c = data.contact || {};
    target.innerHTML = [
      '<div class="contact-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 21s-7-6.1-7-11a7 7 0 1 1 14 0c0 4.9-7 11-7 11z"/><circle cx="12" cy="10" r="2.4"/></svg><span>' + escHTML(c.addressLine) + '<br>' + escHTML(c.cityLine) + '</span></div>',
      '<div class="contact-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M17.5 14.5c-.6.6-1.7 1.1-2.6.8-1.7-.5-3.6-1.7-5.1-3.2S7.2 9.1 6.7 7.4c-.3-.9.2-2 .8-2.6l1-1c.4-.4 1.1-.4 1.5.1l1.6 1.9c.3.4.3 1-.1 1.4l-.8.8c.5 1 1.3 1.9 2.2 2.6l.8-.8c.4-.4 1-.4 1.4-.1l1.9 1.6c.5.4.5 1.1.1 1.5l-1 1z"/></svg><a href="' + waLink() + '" target="_blank" rel="noopener">' + escHTML(t("contact_whatsapp_link")) + '</a></div>',
      '<div class="contact-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg><a href="mailto:' + escHTML(c.email) + '">' + escHTML(c.email) + '</a></div>'
    ].join("");
  }

  function mountAreas(force) {
    var target = $("[data-areas]");
    if (!target || (!force && target.children.length > 0) || !data.practiceAreas) return;
    var revealClass = force ? " is-revealed" : "";
    target.innerHTML = data.practiceAreas.map(function (a) {
      return '<article class="area-card' + revealClass + '" data-reveal>' +
        '<span class="kicker">' + escHTML(a.kicker) + '</span>' +
        '<h3>' + escHTML(tr(a, "name")) + '</h3>' +
        '<p>' + escHTML(tr(a, "summary")) + '</p>' +
        '<p class="area-detail">' + escHTML(tr(a, "detail")) + '</p>' +
        '</article>';
    }).join("");
    if (force) safe(initTilt, "initTilt");
  }

  function mountTeam(force) {
    var target = $("[data-team]");
    if (!target || (!force && target.children.length > 0) || !data.team) return;
    var revealClass = force ? " is-revealed" : "";
    target.innerHTML = data.team.map(function (member) {
      var initials = escHTML(member.initials || "");
      return '<div class="team-card' + revealClass + '" data-reveal>' +
        '<div class="team-photo">' +
          '<img src="' + escHTML(member.photo) + '" alt="Retrato de ' + escHTML(member.name) + '" loading="lazy" decoding="async" onerror="this.style.display=\'none\'" />' +
          '<span class="initials" aria-hidden="true">' + initials + '</span>' +
        '</div>' +
        '<h3 class="team-name">' + escHTML(member.name) + '</h3>' +
        '<p class="team-role">' + escHTML(tr(member, "role")) + '</p>' +
        '<p class="team-bio">' + escHTML(tr(member, "bio")) + '</p>' +
        '</div>';
    }).join("");
  }

  function mountProcess(force) {
    var target = $("[data-process]");
    if (!target || (!force && target.children.length > 0) || !data.process) return;
    var revealClass = force ? " is-revealed" : "";
    target.innerHTML = data.process.map(function (p) {
      return '<div class="process-step' + revealClass + '" data-reveal>' +
        '<div class="n">' + escHTML(p.n) + '</div>' +
        '<h3>' + escHTML(tr(p, "title")) + '</h3>' +
        '<p>' + escHTML(tr(p, "text")) + '</p>' +
        '</div>';
    }).join("");
  }

  function mountMap() {
    var frame = $("[data-map]");
    if (!frame || frame.querySelector("iframe")) return;
    var q = encodeURIComponent((data.contact && data.contact.mapQuery) || "");
    var iframe = document.createElement("iframe");
    iframe.loading = "lazy";
    iframe.setAttribute("title", t("map_iframe_title"));
    iframe.referrerPolicy = "no-referrer-when-downgrade";
    iframe.src = "https://www.google.com/maps?q=" + q + "&output=embed";
    frame.appendChild(iframe);
  }

  function updateMapTitle() {
    var iframe = $("[data-map] iframe");
    if (iframe) iframe.setAttribute("title", t("map_iframe_title"));
  }

  function mountOfficeGallery(force) {
    var target = $("[data-office-gallery]");
    if (!target || (!force && target.children.length > 0) || !data.officePhotos) return;
    target.innerHTML = data.officePhotos.map(function (p) {
      return '<div class="office-photo">' +
        '<img src="' + escHTML(p.photo) + '" alt="' + escHTML(tr(p, "alt") || "") + '" loading="lazy" decoding="async" onerror="this.closest(\'.office-photo\').style.display=\'none\'" />' +
        '</div>';
    }).join("");
  }

  function mountFooterYear() {
    var el = $("[data-year]");
    if (el) el.textContent = (data.year || new Date().getFullYear());
  }

  /* ---------- Inits ---------- */

  function initSplash() {
    var splash = $("[data-splash]");
    if (!splash) return;
    var hide = function () { splash.classList.add("is-out"); };
    if (document.readyState === "complete") setTimeout(hide, 450);
    else window.addEventListener("load", function () { setTimeout(hide, 350); });
    setTimeout(hide, 2800);
  }

  function initNav() {
    var nav = $(".nav");
    if (!nav) return;
    var onScroll = function () {
      if (window.scrollY > 60) nav.classList.add("is-scrolled");
      else nav.classList.remove("is-scrolled");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    var toggle = $("[data-nav-toggle]");
    var close = $("[data-nav-close]");
    var mobile = $("[data-nav-mobile]");
    var openMobile = function () {
      mobile.setAttribute("data-open", "true");
      document.documentElement.classList.add("nav-open");
    };
    var closeMobile = function () {
      mobile.setAttribute("data-open", "false");
      document.documentElement.classList.remove("nav-open");
    };
    if (toggle && mobile) toggle.addEventListener("click", openMobile);
    if (close && mobile) close.addEventListener("click", closeMobile);
    if (mobile) {
      $$("a", mobile).forEach(function (a) { a.addEventListener("click", closeMobile); });
    }
  }

  function initSmoothAnchors() {
    document.addEventListener("click", function (e) {
      var a = e.target.closest('a[href^="#"]');
      if (!a) return;
      var id = a.getAttribute("href");
      if (!id || id === "#") return;
      var el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      var navOffset = 76;
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - navOffset,
        behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
      });
    });
  }

  function initReveals() {
    var els = $$("[data-reveal]");
    if (!els.length) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("is-revealed");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.01, rootMargin: "0px 0px -2% 0px" });
    els.forEach(function (el) { io.observe(el); });

    setTimeout(function () {
      $$("[data-reveal]:not(.is-revealed)").forEach(function (el) {
        if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("is-revealed");
      });
    }, 6000);
  }

  function initTilt() {
    if (!fineHover) return;
    $$(".area-card").forEach(function (card) {
      var MAX = 6, tx = 0, ty = 0, cx = 0, cy = 0, raf = null;
      card.addEventListener("mousemove", function (e) {
        var r = card.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width - 0.5;
        var py = (e.clientY - r.top) / r.height - 0.5;
        tx = -py * MAX; ty = px * MAX;
        card.style.setProperty("--mx", ((e.clientX - r.left) / r.width * 100) + "%");
        card.style.setProperty("--my", ((e.clientY - r.top) / r.height * 100) + "%");
        if (!raf) raf = requestAnimationFrame(loop);
      });
      card.addEventListener("mouseleave", function () { tx = 0; ty = 0; if (!raf) raf = requestAnimationFrame(loop); });
      function loop() {
        cx += (tx - cx) * 0.15; cy += (ty - cy) * 0.15;
        card.style.setProperty("--rx", cx.toFixed(2) + "deg");
        card.style.setProperty("--ry", cy.toFixed(2) + "deg");
        raf = (Math.abs(tx - cx) > 0.05 || Math.abs(ty - cy) > 0.05) ? requestAnimationFrame(loop) : null;
      }
    });
  }

  function splitWords(el) {
    el.setAttribute("aria-label", el.textContent.trim().replace(/\s+/g, " "));
    var wrap = function (text) {
      return text.split(/(\s+)/).map(function (w) {
        return /^\s+$/.test(w) ? w : '<span class="split-word" aria-hidden="true">' + escHTML(w) + '</span>';
      }).join("");
    };
    var html = Array.prototype.map.call(el.childNodes, function (node) {
      if (node.nodeType === 3) return wrap(node.textContent);
      if (node.nodeName === "BR") return "<br>";
      if (node.nodeType === 1) {
        var tag = node.tagName.toLowerCase();
        return "<" + tag + ">" + wrap(node.textContent) + "</" + tag + ">";
      }
      return "";
    }).join("");
    el.innerHTML = html;
    return $$(".split-word", el);
  }

  function initSplitText() {
    var el = $("[data-split]");
    if (!el) return;
    var parts = splitWords(el);
    if (!window.gsap) return;
    gsap.set(parts, { y: 22, opacity: 0 });
    gsap.to(parts, {
      y: 0, opacity: 1, duration: 0.9, stagger: 0.045, ease: "expo.out", delay: 0.35
    });
  }

  function initHeroParallax() {
    if (!window.gsap || !window.ScrollTrigger) return;
    var bg = $(".hero-bg img");
    if (bg) {
      gsap.to(bg, {
        yPercent: 14, ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true }
      });
    }
  }

  function initAudioWelcome() {
    var btn = $("[data-audio-toggle]");
    var audio = $("[data-audio-el]");
    if (!btn || !audio) return;

    btn.addEventListener("click", function () {
      if (audio.paused) {
        audio.play().catch(function () {});
      } else {
        audio.pause();
      }
    });
    audio.addEventListener("play", function () {
      btn.classList.add("is-playing", "has-played");
      btn.setAttribute("aria-pressed", "true");
    });
    audio.addEventListener("pause", function () {
      btn.classList.remove("is-playing");
      btn.setAttribute("aria-pressed", "false");
    });
    audio.addEventListener("ended", function () {
      btn.classList.remove("is-playing");
      btn.setAttribute("aria-pressed", "false");
    });
  }

  function initConsultaForm() {
    var form = $("[data-consulta-form]");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (form.classList.contains("is-sending")) return;
      if (!form.reportValidity()) return;
      var nombre = form.elements.nombre.value.trim();
      var apellido = form.elements.apellido.value.trim();
      var telefono = form.elements.telefono.value.trim();
      var msg = t("consulta_wa_template")
        .replace("{nombre}", nombre)
        .replace("{apellido}", apellido)
        .replace("{telefono}", telefono);
      window.open(waLink(msg), "_blank", "noopener");
    });
  }

  function applyStaticI18n() {
    $$("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    $$("[data-i18n-aria]").forEach(function (el) {
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
    });
    $$("[data-i18n-title]").forEach(function (el) {
      el.setAttribute("title", t(el.getAttribute("data-i18n-title")));
    });
    document.title = t("meta_title");
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", t("meta_description"));
  }

  function updateLangSwitchUI() {
    $$("[data-lang-switch] .lang-btn").forEach(function (btn) {
      var isActive = btn.getAttribute("data-lang") === currentLang;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  }

  function applyLanguage(lang) {
    currentLang = (SUPPORTED_LANGS.indexOf(lang) !== -1) ? lang : "es";
    try { localStorage.setItem(LANG_KEY, currentLang); } catch (e) {}
    document.documentElement.lang = currentLang;
    applyStaticI18n();
    safe(function () { mountAreas(true); }, "mountAreas:lang");
    safe(function () { mountTeam(true); }, "mountTeam:lang");
    safe(function () { mountProcess(true); }, "mountProcess:lang");
    safe(function () { mountContact(true); }, "mountContact:lang");
    safe(function () { mountOfficeGallery(true); }, "mountOfficeGallery:lang");
    safe(function () { mountWhatsappLinks(true); }, "mountWhatsappLinks:lang");
    safe(updateMapTitle, "updateMapTitle");
    updateLangSwitchUI();
  }

  function initLangSwitch() {
    $$("[data-lang-switch] .lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var lang = btn.getAttribute("data-lang");
        if (lang === currentLang) return;
        applyLanguage(lang);
      });
    });
  }

  function initMeshFollow() {
    var hero = $(".hero");
    var mesh = $(".hero-mesh");
    if (!hero || !mesh || !fineHover) return;
    var tx = 30, ty = 40, mx = 30, my = 40;
    hero.addEventListener("mousemove", function (e) {
      var r = hero.getBoundingClientRect();
      tx = (e.clientX - r.left) / r.width * 100;
      ty = (e.clientY - r.top) / r.height * 100;
    });
    (function frame() {
      mx += (tx - mx) * 0.03; my += (ty - my) * 0.03;
      mesh.style.setProperty("--mesh-x", mx.toFixed(1) + "%");
      mesh.style.setProperty("--mesh-y", my.toFixed(1) + "%");
      requestAnimationFrame(frame);
    })();
  }

  function boot() {
    document.documentElement.lang = currentLang;
    safe(applyStaticI18n, "applyStaticI18n");
    safe(updateLangSwitchUI, "updateLangSwitchUI");

    safe(mountAreas, "mountAreas");
    safe(mountTeam, "mountTeam");
    safe(mountProcess, "mountProcess");
    safe(mountContact, "mountContact");
    safe(mountMap, "mountMap");
    safe(mountOfficeGallery, "mountOfficeGallery");
    safe(mountFooterYear, "mountFooterYear");
    safe(mountWhatsappLinks, "mountWhatsappLinks");

    safe(initSplash, "initSplash");
    safe(initNav, "initNav");
    safe(initSmoothAnchors, "initSmoothAnchors");
    safe(initReveals, "initReveals");
    safe(initTilt, "initTilt");
    safe(initMeshFollow, "initMeshFollow");
    safe(initConsultaForm, "initConsultaForm");
    safe(initAudioWelcome, "initAudioWelcome");
    safe(initLangSwitch, "initLangSwitch");

    if (window.gsap) {
      if (window.ScrollTrigger) {
        try { gsap.registerPlugin(ScrollTrigger); } catch (e) {}
      }
      safe(initSplitText, "initSplitText");
      safe(initHeroParallax, "initHeroParallax");
    }

    document.documentElement.classList.add("is-ready");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
