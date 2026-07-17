---
title: "基于深度学习的设施化养殖鱼类摄食行为分析"
short_title: "鱼类摄食行为分析"
permalink: /projects/fish-feeding-analysis/
category: "视觉研究"
featured: true
order: 60
excerpt: "结合 YOLOX、SlowFast 与 PyQt5 构建鱼类摄食强度检测识别系统。"
tech: [MMDetection, MMAction2, YOLOX, SlowFast, PyQt5]
research_areas: [computer-vision]
project_parent_url: "/research/computer-vision/"
project_parent_label: "返回计算机视觉"
---

## 项目背景

对设施化养殖鱼类的摄食行为进行调查研究，分析摄食行为特征，并建立鱼类摄食状态和强度的指标体系与评价方法。

## 我的工作

- 将摄食强度评价拆分为目标检测和动作识别两个阶段。
- 改进 MMDetection 模型进行鱼类目标检测，并使用 SlowFast 网络完成动作识别。
- 使用 PyQt5 设计桌面端界面，实现模型选择、参数设置、输入选择和结果展示。

## 技术方案

目标检测阶段使用 YOLOX 的解耦检测头，使各分类与定位任务独立预测。消融实验表明，解耦检测头能够加快模型收敛并提升检测精度。动作识别阶段使用 SlowFast 网络，分别提取空间与时间信息后进行时空融合，相比双流方法更加轻量、高效。

## 项目成果

完成了从视频输入、模型推理到结果展示的完整识别系统，改进后的模型在检测准确率和召回率上均有提升。

## 技术栈

MMDetection、MMAction2、YOLOX、SlowFast、PyQt5
