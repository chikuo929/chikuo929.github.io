(function () {
  "use strict";

  function initializeProjectDetail() {
    var content = document.querySelector(".project-prose");
    var tocLists = document.querySelectorAll("[data-project-toc]");

    if (!content || !tocLists.length) return;

    var headings = Array.prototype.slice.call(content.querySelectorAll("h2"));
    if (!headings.length) {
      document.querySelectorAll(".project-toc, .project-toc-mobile").forEach(function (toc) {
        toc.hidden = true;
      });
      return;
    }

    var usedIds = {};
    headings.forEach(function (heading, index) {
      var baseId = heading.id || "project-section-" + (index + 1);
      var uniqueId = baseId;
      var suffix = 2;

      while (usedIds[uniqueId]) {
        uniqueId = baseId + "-" + suffix;
        suffix += 1;
      }

      heading.id = uniqueId;
      usedIds[uniqueId] = true;

      tocLists.forEach(function (list) {
        var item = document.createElement("li");
        var link = document.createElement("a");
        var number = document.createElement("span");
        var label = document.createElement("span");

        link.href = "#" + uniqueId;
        link.dataset.targetId = uniqueId;
        number.className = "project-toc__number";
        number.textContent = String(index + 1).padStart(2, "0");
        label.textContent = heading.textContent.trim();

        link.appendChild(number);
        link.appendChild(label);
        item.appendChild(link);
        list.appendChild(item);

        link.addEventListener("click", function () {
          var mobileToc = link.closest(".project-toc-mobile");
          if (mobileToc) mobileToc.open = false;
        });
      });
    });

    function setActiveHeading(id) {
      document.querySelectorAll("[data-project-toc] a").forEach(function (link) {
        var isActive = link.dataset.targetId === id;
        link.classList.toggle("is-active", isActive);
        if (isActive) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    }

    setActiveHeading(headings[0].id);

    if ("IntersectionObserver" in window) {
      var visibleHeadings = {};
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) visibleHeadings[entry.target.id] = entry.target.offsetTop;
          else delete visibleHeadings[entry.target.id];
        });

        var visibleIds = Object.keys(visibleHeadings).sort(function (a, b) {
          return visibleHeadings[a] - visibleHeadings[b];
        });

        if (visibleIds.length) setActiveHeading(visibleIds[0]);
      }, { rootMargin: "-18% 0px -68% 0px", threshold: 0 });

      headings.forEach(function (heading) { observer.observe(heading); });
    }

    document.querySelectorAll(".project-toc-mobile").forEach(function (details) {
      var hint = details.querySelector(".project-toc-mobile__hint");
      if (!hint) return;
      details.addEventListener("toggle", function () {
        hint.textContent = details.open ? "收起" : "展开";
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeProjectDetail);
  } else {
    initializeProjectDetail();
  }
})();
