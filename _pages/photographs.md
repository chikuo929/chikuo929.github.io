---
layout: archive
title: "Photographs"
permalink: /photographs/
author_profile: true
---

<p class="photography-intro">作为一个摄影爱好者，我喜欢记录生活的碎片，在此把生活中的吉光片羽分享给大家。</p>

<div class="photography-grid">
  {% for photo in site.data.photographs %}
    <figure class="photography-card">
      <button
        class="photography-card__media photography-lightbox-trigger"
        type="button"
        aria-label="查看大图：{{ photo.title | escape }}"
        data-image="{{ photo.image | relative_url }}"
        data-alt="{{ photo.alt | default: photo.title | escape }}"
        data-caption="{{ photo.title | escape }} · {{ photo.city | escape }}{% if photo.date %} · {{ photo.date | date: '%Y年%-m月%-d日' }}{% endif %}">
        <img
          src="{{ photo.image | relative_url }}"
          alt="{{ photo.alt | default: photo.title | escape }}"
          width="1200"
          height="800"
          loading="lazy"
          decoding="async">
        <span class="photography-card__zoom" aria-hidden="true">查看大图</span>
      </button>
      <figcaption class="photography-card__caption">
        <span>
          <span class="photography-card__title">{{ photo.title }}</span>
          {% if photo.date %}<time class="photography-card__date" datetime="{{ photo.date | date: '%Y-%m-%d' }}">{{ photo.date | date: "%Y年%-m月%-d日" }}</time>{% endif %}
        </span>
        <span class="photography-card__city">{{ photo.city }}</span>
      </figcaption>
    </figure>
  {% endfor %}
</div>

<dialog class="photography-lightbox" aria-label="摄影作品大图">
  <button class="photography-lightbox__close" type="button" aria-label="关闭大图">×</button>
  <img src="" alt="">
  <p class="photography-lightbox__caption"></p>
</dialog>

<script>
document.addEventListener("DOMContentLoaded", function () {
  var dialog = document.querySelector(".photography-lightbox");
  if (!dialog || typeof dialog.showModal !== "function") return;
  var image = dialog.querySelector("img");
  var caption = dialog.querySelector(".photography-lightbox__caption");
  var lastTrigger;

  document.querySelectorAll(".photography-lightbox-trigger").forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      lastTrigger = trigger;
      image.src = trigger.dataset.image;
      image.alt = trigger.dataset.alt;
      caption.textContent = trigger.dataset.caption;
      dialog.showModal();
    });
  });

  function closeDialog() {
    dialog.close();
    image.src = "";
    if (lastTrigger) lastTrigger.focus();
  }

  dialog.querySelector(".photography-lightbox__close").addEventListener("click", closeDialog);
  dialog.addEventListener("click", function (event) {
    if (event.target === dialog) closeDialog();
  });
});
</script>

