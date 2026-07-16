---
permalink: /
title: "Guo Zhiguo 郭志国"
author_profile: true
---

<div class="home-intro"><p class="home-kicker">COMPUTER SCIENCE · RESEARCH · LIFE</p><h1>你好，我是郭志国。</h1><p class="home-lead">中国农业大学计算机技术专业硕士研究生，本科毕业于北京林业大学。关注计算机视觉、三维重建与自然语言处理，也在这里记录项目实践、生活足迹与持续探索。</p><div class="home-actions"><a class="btn btn--primary" href="/about/">关于我</a><a class="btn btn--inverse" href="/research/">研究与成果</a></div></div>

## 研究方向

<div class="portal-grid portal-grid--three"><a class="portal-card" href="/research/"><span>01</span><h3>计算机视觉</h3><p>面向智慧渔业场景，开展鱼类目标检测、行为识别与表型特征分析。</p></a><a class="portal-card" href="/research/"><span>02</span><h3>循环水养殖系统仿真</h3><p>基于机理模型研究水质、硝化微生物与养殖装备之间的动态关系。</p></a><a class="portal-card" href="/research/"><span>03</span><h3>智能预测与优化</h3><p>利用机器学习和时序模型估计硝化功能，开展运行状态预测与策略优化。</p></a></div>

## 浏览主页

<div class="portal-grid"><a class="portal-card" href="/about/"><h3>关于我</h3><p>教育、经历、荣誉以及中英文简历。</p></a><a class="portal-card" href="/research/"><h3>研究与成果</h3><p>研究方向、论文、报告与教学经历。</p></a><a class="portal-card" href="/projects/"><h3>项目与作品</h3><p>科研实践、工程项目与个人作品。</p></a><a class="portal-card" href="/journey/"><h3>足迹与生活</h3><p>摄影、地点与生活中的吉光片羽。</p></a><a class="portal-card" href="/explorations/"><h3>灵感与探索</h3><p>博客、学习记录与开放中的想法。</p></a></div>

## 精选摄影

<div class="home-featured-photos">
{% assign featured_photos = site.data.photographs | where: "featured", true %}
{% for photo in featured_photos %}
  <a class="home-featured-photo" href="{{ '/photographs/' | relative_url }}" aria-label="查看摄影作品：{{ photo.title | escape }}">
    <img src="{{ photo.image | relative_url }}" alt="{{ photo.alt | default: photo.title | escape }}" width="1200" height="800" loading="lazy" decoding="async">
    <span class="home-featured-photo__overlay">
      <strong>{{ photo.title }}</strong>
      <small>{{ photo.city }}{% if photo.date %} · {{ photo.date | date: "%Y年%-m月%-d日" }}{% endif %}</small>
    </span>
  </a>
{% endfor %}
</div>

<p class="home-featured-more"><a href="{{ '/photographs/' | relative_url }}">浏览全部摄影作品 →</a></p>

## 最近更新
{% for post in site.posts limit:3 %}- [{{ post.title }}]({{ post.url }}) · {{ post.date | date: "%Y-%m-%d" }}
{% endfor %}
