---
layout: archive
title: "项目经历"
permalink: /Project-Experience/
author_profile: true
---

<p class="page-intro">按项目查看问题背景、个人职责、技术方案与最终成果。</p>

{% assign projects = site.projectexperience | sort: "order" %}
<div class="all-project-grid">
{% for project in projects %}
  <a class="all-project-card" href="{{ project.url | relative_url }}">
    {% if project.project_image %}
      <div class="all-project-card__media">
        <img src="{{ project.project_image | relative_url }}" alt="{{ project.project_image_alt | default: project.title }}" loading="lazy">
      </div>
    {% else %}
      <div class="all-project-card__media all-project-card__media--placeholder" aria-hidden="true">
        <span>{{ project.category }}</span>
      </div>
    {% endif %}
    <div class="all-project-card__body">
      <span class="all-project-card__category">{{ project.category }}</span>
      <h2>{{ project.short_title | default: project.title }}</h2>
      <p>{{ project.excerpt | strip_html | strip_newlines }}</p>
      {% if project.tech %}
        <div class="all-project-card__tags" aria-label="主要技术">
          {% for item in project.tech limit: 4 %}<span>{{ item }}</span>{% endfor %}
        </div>
      {% endif %}
      <strong>查看项目详情 <span aria-hidden="true">→</span></strong>
    </div>
  </a>
{% endfor %}
</div>
