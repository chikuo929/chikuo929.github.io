---
layout: archive
title: "研究与成果"
permalink: /research/
author_profile: true
---
<p class="page-intro">围绕智慧渔业中的视觉感知、循环水养殖系统仿真与智能预测优化开展研究，并持续积累论文、报告和教学实践。</p>

## 研究方向
<div class="research-directions">
  {% for direction in site.data.research_directions %}
  <a class="research-card" href="{{ direction.url | relative_url }}" aria-label="查看{{ direction.title }}详细介绍">
    <div class="research-card__media" style="--research-image-scale: {{ direction.image_scale | default: 1 }};">
      <img src="{{ direction.image | relative_url }}" alt="{{ direction.alt }}" loading="lazy" width="1600" height="900">
    </div>
    <div class="research-card__content">
      <span class="research-card__number">{{ direction.number }}</span>
      <h3>{{ direction.title }}</h3>
      <p>{{ direction.description }}</p>
      <div class="research-card__tags" aria-label="研究关键词">
        {% for tag in direction.tags %}<span>{{ tag }}</span>{% endfor %}
      </div>
    </div>
    <span class="research-card__link">查看研究方向与相关项目 <span aria-hidden="true">→</span></span>
  </a>
  {% endfor %}
</div>

## 学术成果
{% for post in site.publications reversed %}{% include archive-single.html %}{% endfor %}

## 更多学术经历
<div class="portal-grid"><a class="portal-card" href="/publications/"><h3>论文归档</h3><p>查看全部论文及相关材料。</p></a><a class="portal-card" href="/talks/"><h3>报告与分享</h3><p>学术报告、演讲与交流记录。</p></a><a class="portal-card" href="/teaching/"><h3>教学经历</h3><p>课程与教学相关记录。</p></a></div>
