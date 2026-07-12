---
layout: archive
title: "项目与作品"
permalink: /projects/
author_profile: true
---
<p class="page-intro">从研究原型到工程系统，记录问题、方法、个人职责与最终成果。</p>

## 精选项目
{% assign featured_projects = site.projectexperience | where: "featured", true | sort: "order" %}
<div class="portal-grid">
{% for project in featured_projects %}
  <a class="portal-card" href="{{ project.url | relative_url }}">
    <span>{{ project.category }}</span>
    <h3>{{ project.short_title | default: project.title }}</h3>
    <p>{{ project.excerpt | strip_html | strip_newlines }}</p>
  </a>
{% endfor %}
</div>

<div class="home-actions"><a class="btn btn--primary" href="/Project-Experience/">完整项目经历</a><a class="btn btn--inverse" href="/portfolio/">个人作品集</a></div>
