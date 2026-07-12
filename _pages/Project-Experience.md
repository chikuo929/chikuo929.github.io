---
layout: archive
title: "项目经历"
permalink: /Project-Experience/
author_profile: true
---

<p class="page-intro">按项目查看问题背景、个人职责、技术方案与最终成果。</p>

{% assign projects = site.projectexperience | sort: "order" %}
{% for post in projects %}
  {% include archive-single.html %}
{% endfor %}
