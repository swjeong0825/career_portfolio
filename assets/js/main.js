(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    setupMobileNav();
    setupScrollHeader();
    stampFooterYear();
  });

  function setupMobileNav() {
    var toggle = document.querySelector("[data-nav-toggle]");
    var links = document.querySelector("[data-nav-links]");
    if (!toggle || !links) return;

    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-controls", "primary-nav");
    links.id = links.id || "primary-nav";

    toggle.addEventListener("click", function () {
      var isOpen = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    links.addEventListener("click", function (e) {
      var target = e.target;
      if (target && target.tagName === "A" && links.classList.contains("is-open")) {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  function setupScrollHeader() {
    var header = document.querySelector(".site-header");
    if (!header) return;
    var update = function () {
      if (window.scrollY > 4) header.classList.add("is-scrolled");
      else header.classList.remove("is-scrolled");
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  function stampFooterYear() {
    var nodes = document.querySelectorAll("[data-current-year]");
    var year = String(new Date().getFullYear());
    nodes.forEach(function (n) { n.textContent = year; });
  }
})();
