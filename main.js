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
    target.innerHTML = data.practiceAreas.map(function (a) {
      return '<div class="area-ref">' +
        '<span class="area-ref-num">' + escHTML(a.kicker) + '</span>' +
        '<span class="area-ref-name">' + escHTML(tr(a, "name")) + '</span>' +
        '</div>';
    }).join("");
  }

  function renderNavAreas(force) {
    var target = $("[data-nav-areas]");
    if (!target || (!force && target.children.length > 0) || !data.practiceAreas) return;
    target.innerHTML = data.practiceAreas.map(function (a) {
      return '<div class="nav-area-item">' +
        '<button type="button" class="nav-area-toggle" data-nav-area-toggle aria-expanded="false">' +
          '<span class="nav-area-num">' + escHTML(a.kicker) + '</span>' +
          '<span class="nav-area-name">' + escHTML(tr(a, "name")) + '</span>' +
          '<svg class="nav-area-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>' +
        '</button>' +
        '<div class="nav-area-body">' +
          '<p>' + escHTML(tr(a, "summary")) + '</p>' +
          '<p class="nav-area-detail">' + escHTML(tr(a, "detail")) + '</p>' +
        '</div>' +
        '</div>';
    }).join("");
  }

  function initNavAreasAccordion() {
    var root = $("[data-nav-areas]");
    if (!root) return;
    root.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-nav-area-toggle]");
      if (!btn) return;
      var item = btn.closest(".nav-area-item");
      var isOpen = item.classList.contains("is-open");
      item.classList.toggle("is-open", !isOpen);
      btn.setAttribute("aria-expanded", (!isOpen).toString());
    });
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

  var DATE_LOCALES = { es: "es-AR", en: "en-US", pt: "pt-BR", zh: "zh-CN" };
  function formatInsightDate(iso) {
    var d = new Date(iso + "T12:00:00");
    if (isNaN(d.getTime())) return "";
    try {
      return new Intl.DateTimeFormat(DATE_LOCALES[currentLang] || "es-AR", { day: "numeric", month: "long", year: "numeric" }).format(d);
    } catch (e) { return iso; }
  }

  function mountInsights(force) {
    var target = $("[data-insights]");
    if (!target || (!force && target.children.length > 0) || !data.insights) return;
    var revealClass = force ? " is-revealed" : "";
    target.innerHTML = data.insights.map(function (item) {
      var title = tr(item, "title");
      var msg = t("insight_wa_template").replace("{title}", title);
      var bodyId = "insight-body-" + item.id;
      return '<article class="insight-card' + revealClass + '" data-reveal>' +
        '<div class="insight-meta">' +
          '<span class="insight-cat">' + escHTML(tr(item, "category")) + '</span>' +
          '<time datetime="' + escHTML(item.date) + '">' + escHTML(formatInsightDate(item.date)) + '</time>' +
        '</div>' +
        '<h3>' + escHTML(title) + '</h3>' +
        '<p class="insight-excerpt">' + escHTML(tr(item, "excerpt")) + '</p>' +
        '<div class="insight-body" id="' + bodyId + '"><div><p>' + escHTML(tr(item, "body")) + '</p></div></div>' +
        '<div class="insight-actions">' +
          '<button type="button" class="insight-toggle" data-insight-toggle aria-expanded="false" aria-controls="' + bodyId + '">' + escHTML(t("insight_read_more")) + '</button>' +
          '<a class="insight-consult" href="' + escHTML(waLink(msg)) + '" target="_blank" rel="noopener">' + escHTML(t("insight_consult")) + '</a>' +
        '</div>' +
        '</article>';
    }).join("");
  }

  function initInsights() {
    var root = $("[data-insights]");
    if (!root) return;
    root.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-insight-toggle]");
      if (!btn) return;
      var card = btn.closest(".insight-card");
      var open = !card.classList.contains("is-open");
      card.classList.toggle("is-open", open);
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      btn.textContent = t(open ? "insight_read_less" : "insight_read_more");
    });
  }

  function mountTrust(force) {
    var grid = $("[data-trust]");
    if (grid && (force || grid.children.length === 0) && data.trust) {
      grid.innerHTML = data.trust.map(function (item) {
        return '<div class="trust-item">' +
          '<h3>' + escHTML(tr(item, "title")) + '</h3>' +
          '<p>' + escHTML(tr(item, "text")) + '</p>' +
          '</div>';
      }).join("");
    }
    var quotes = $("[data-testimonials]");
    if (quotes && (force || quotes.children.length === 0) && data.testimonials) {
      quotes.innerHTML = data.testimonials.map(function (q) {
        return '<figure class="testimonial">' +
          '<blockquote>' + escHTML(tr(q, "quote")) + '</blockquote>' +
          '<figcaption><strong>' + escHTML(q.name) + '</strong>' +
          (tr(q, "role") ? '<span>' + escHTML(tr(q, "role")) + '</span>' : '') +
          '</figcaption></figure>';
      }).join("");
    }
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

  function mountCollageGrid(force) {
    var target = $("[data-collage-grid]");
    if (!target || (!force && target.children.length > 0)) return;
    var media = data.mediaCollage || {};
    var images = media.images || [];
    var html = '<div class="collage-video" data-collage-video>' +
      '<div class="collage-video-play" aria-hidden="true">' +
        '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>' +
      '</div>' +
      '<p class="collage-video-label" data-i18n="media_video_label">' + escHTML(t("media_video_label")) + '</p>' +
      '</div>';
    html += images.map(function (img) {
      return '<div class="collage-photo">' +
        '<img src="' + escHTML(img.photo) + '" alt="' + escHTML(tr(img, "alt") || "") + '" loading="lazy" decoding="async" onerror="this.closest(\'.collage-photo\').style.display=\'none\'" />' +
        '</div>';
    }).join("");
    target.innerHTML = html;
  }

  function mountInstagram(force) {
    var target = $("[data-instagram-grid]");
    if (target && (force || target.children.length === 0)) {
      var tiles = "";
      for (var i = 0; i < 6; i++) {
        tiles += '<div class="instagram-tile" aria-hidden="true">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1"/></svg>' +
          '</div>';
      }
      target.innerHTML = tiles;
    }
    var ig = data.instagram || {};
    var link = $("[data-instagram-link]");
    var handle = $("[data-instagram-handle]");
    if (link && ig.url) link.setAttribute("href", ig.url);
    if (handle && ig.handle) handle.textContent = ig.handle;
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
    var moreBtn = $("[data-areas-more]");
    var openMobile = function () {
      mobile.setAttribute("data-open", "true");
      document.documentElement.classList.add("nav-open");
    };
    var closeMobile = function () {
      mobile.setAttribute("data-open", "false");
      document.documentElement.classList.remove("nav-open");
    };
    if (toggle && mobile) toggle.addEventListener("click", openMobile);
    if (moreBtn && mobile) moreBtn.addEventListener("click", openMobile);
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

  /* ---------- Wizard de consulta (2 pasos) ---------- */

  var wizardState = { areaId: null, selections: {} };

  function getWizardArea(id) {
    var areas = (data.wizard && data.wizard.areas) || [];
    for (var i = 0; i < areas.length; i++) { if (areas[i].id === id) return areas[i]; }
    return null;
  }

  function wizardGroupOptions(group) {
    if (group.dependsOn) return (group.optionsFor && group.optionsFor[wizardState.selections[group.dependsOn]]) || [];
    return group.options || [];
  }

  function wizardGroupVisible(area, index) {
    if (index === 0) return true;
    var group = area.groups[index];
    if (group.dependsOn) return wizardState.selections[group.dependsOn] != null;
    var prev = area.groups[index - 1];
    return wizardState.selections[prev.id] != null;
  }

  function buildWizardMessage(area) {
    if (!area) return "";
    var lines = [t("wizard_msg_intro").replace("{area}", tr(area, "label"))];
    (area.groups || []).forEach(function (group) {
      var selId = wizardState.selections[group.id];
      if (selId == null) return;
      var opts = wizardGroupOptions(group);
      var opt = null;
      for (var i = 0; i < opts.length; i++) { if (opts[i].id === selId) { opt = opts[i]; break; } }
      if (opt) lines.push(tr(group, "question") + ": " + tr(opt, "label"));
    });
    if (area.id === "notificacion" && wizardState.selections.tipo != null) {
      lines.push(t("wizard_msg_attach_note"));
    }
    lines.push("");
    lines.push(t("wizard_msg_closing"));
    return lines.join("\n");
  }

  function renderWizardAreas() {
    var target = $("[data-wizard-areas]");
    if (!target || !data.wizard) return;
    target.innerHTML = data.wizard.areas.map(function (area) {
      return '<button type="button" class="wizard-area-card" data-wizard-area="' + escHTML(area.id) + '">' +
        '<span class="wizard-area-icon" aria-hidden="true">' + escHTML(area.icon) + '</span>' +
        '<h3>' + escHTML(tr(area, "label")) + '</h3>' +
        '<p>' + escHTML(tr(area, "desc")) + '</p>' +
        '</button>';
    }).join("");
  }

  function renderWizardStep2() {
    var area = getWizardArea(wizardState.areaId);
    if (!area) return;

    var heading = $("[data-wizard-area-heading]");
    if (heading) {
      heading.innerHTML = '<span class="wizard-area-icon" aria-hidden="true">' + escHTML(area.icon) + '</span>' +
        '<h3>' + escHTML(tr(area, "label")) + '</h3>';
    }

    var groupsEl = $("[data-wizard-groups]");
    if (groupsEl) {
      groupsEl.innerHTML = area.groups.map(function (group, i) {
        if (!wizardGroupVisible(area, i)) return "";
        var opts = wizardGroupOptions(group);
        var selId = wizardState.selections[group.id];
        var optsHtml = opts.map(function (o) {
          var sel = (o.id === selId) ? " is-selected" : "";
          return '<button type="button" class="wizard-option' + sel + '" data-wizard-option data-group="' + escHTML(group.id) + '" data-option="' + escHTML(o.id) + '" aria-pressed="' + (o.id === selId ? "true" : "false") + '">' +
            escHTML(tr(o, "label")) + '</button>';
        }).join("");
        return '<div class="wizard-group">' +
          '<p class="wizard-group-question">' + escHTML(tr(group, "question")) + '</p>' +
          '<div class="wizard-options">' + optsHtml + '</div>' +
          '</div>';
      }).join("");
    }

    updateWizardPreview(area);
  }

  function updateWizardPreview(area) {
    area = area || getWizardArea(wizardState.areaId);
    var previewText = $("[data-wizard-preview-text]");
    var sendBtn = $("[data-wizard-send]");
    if (!area || !previewText || !sendBtn) return;
    var msg = buildWizardMessage(area);
    previewText.textContent = msg;
    var complete = (area.groups || []).every(function (g) { return wizardState.selections[g.id] != null; });
    sendBtn.setAttribute("href", waLink(msg));
    sendBtn.classList.toggle("is-disabled", !complete);
    if (complete) sendBtn.removeAttribute("tabindex");
    else sendBtn.setAttribute("tabindex", "-1");
  }

  var wizardStepNow = 1;
  function updateWizardProgress() {
    var label = $("[data-wizard-progress-label]");
    if (label) label.textContent = t("wizard_progress").replace("{n}", wizardStepNow);
    $$("[data-wizard-bar]").forEach(function (bar) {
      bar.classList.toggle("is-active", Number(bar.getAttribute("data-wizard-bar")) <= wizardStepNow);
    });
  }

  function showWizardStep(n) {
    wizardStepNow = n;
    updateWizardProgress();
    $$("[data-wizard-step]").forEach(function (el) {
      el.hidden = (el.getAttribute("data-wizard-step") !== String(n));
    });
    if (n === 2) {
      var root = $("[data-wizard]");
      if (root) {
        root.scrollIntoView({
          behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
          block: "start"
        });
      }
    }
  }

  function initWizard() {
    var root = $("[data-wizard]");
    if (!root || !data.wizard) return;
    renderWizardAreas();

    root.addEventListener("click", function (e) {
      var areaCard = e.target.closest("[data-wizard-area]");
      if (areaCard) {
        wizardState = { areaId: areaCard.getAttribute("data-wizard-area"), selections: {} };
        renderWizardStep2();
        showWizardStep(2);
        return;
      }
      var optBtn = e.target.closest("[data-wizard-option]");
      if (optBtn) {
        var groupId = optBtn.getAttribute("data-group");
        var optId = optBtn.getAttribute("data-option");
        var areaNow = getWizardArea(wizardState.areaId);
        var gIdx = areaNow.groups.map(function (g) { return g.id; }).indexOf(groupId);
        var wasSelected = wizardState.selections[groupId] === optId;
        areaNow.groups.slice(gIdx).forEach(function (g) { delete wizardState.selections[g.id]; });
        if (!wasSelected) wizardState.selections[groupId] = optId;
        renderWizardStep2();
        var curArea = getWizardArea(wizardState.areaId);
        var done = curArea && curArea.groups.every(function (g) { return wizardState.selections[g.id] != null; });
        var sendEl = $("[data-wizard-send]");
        if (done && sendEl) {
          sendEl.scrollIntoView({
            behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
            block: "center"
          });
        }
        return;
      }
      if (e.target.closest("[data-wizard-back]")) {
        var backArea = getWizardArea(wizardState.areaId);
        var lastAnswered = null;
        if (backArea) {
          backArea.groups.forEach(function (g) { if (wizardState.selections[g.id] != null) lastAnswered = g; });
        }
        if (lastAnswered) {
          delete wizardState.selections[lastAnswered.id];
          renderWizardStep2();
        } else {
          showWizardStep(1);
        }
        return;
      }
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
    safe(function () { mountInsights(true); }, "mountInsights:lang");
    safe(function () { mountTrust(true); }, "mountTrust:lang");
    safe(updateWizardProgress, "updateWizardProgress:lang");
    safe(function () { mountContact(true); }, "mountContact:lang");
    safe(function () { mountOfficeGallery(true); }, "mountOfficeGallery:lang");
    safe(function () { mountCollageGrid(true); }, "mountCollageGrid:lang");
    safe(function () { mountInstagram(true); }, "mountInstagram:lang");
    safe(function () { mountWhatsappLinks(true); }, "mountWhatsappLinks:lang");
    safe(updateMapTitle, "updateMapTitle");
    safe(renderWizardAreas, "renderWizardAreas:lang");
    safe(function () { if (wizardState.areaId) renderWizardStep2(); }, "renderWizardStep2:lang");
    safe(function () { renderNavAreas(true); }, "renderNavAreas:lang");
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
    safe(renderNavAreas, "renderNavAreas");
    safe(mountTeam, "mountTeam");
    safe(mountProcess, "mountProcess");
    safe(mountInsights, "mountInsights");
    safe(mountTrust, "mountTrust");
    safe(updateWizardProgress, "updateWizardProgress");
    safe(mountContact, "mountContact");
    safe(mountMap, "mountMap");
    safe(mountOfficeGallery, "mountOfficeGallery");
    safe(mountCollageGrid, "mountCollageGrid");
    safe(mountInstagram, "mountInstagram");
    safe(mountFooterYear, "mountFooterYear");
    safe(mountWhatsappLinks, "mountWhatsappLinks");

    safe(initSplash, "initSplash");
    safe(initNav, "initNav");
    safe(initNavAreasAccordion, "initNavAreasAccordion");
    safe(initInsights, "initInsights");
    safe(initSmoothAnchors, "initSmoothAnchors");
    safe(initReveals, "initReveals");
    safe(initMeshFollow, "initMeshFollow");
    safe(initWizard, "initWizard");
    safe(initConsultaForm, "initConsultaForm");
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
