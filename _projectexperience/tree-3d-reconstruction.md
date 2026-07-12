---
title: "树木精细三维建模和分析"
short_title: "树木精细三维建模"
permalink: /projects/tree-3d-reconstruction/
category: "三维重建"
featured: true
order: 70
excerpt: "基于 SFM、点云处理与网格优化完成树木精细三维建模。"
tech: [VisualSFM, MeshLab, Python]
---

## 项目背景

通过实地采集树木照片，运用 SFM 三维重建方法获得精细、准确的三维模型，并从模型中提取测树学参数。

## 我的工作

- 完成树木多视角照片的实地采集与数据整理。
- 设计并执行从特征匹配、相机参数求解到稠密重建的完整流程。
- 对生成的点云与网格模型进行优化处理。

## 技术方案

首先使用 SIFT 进行特征点检测与匹配，并通过选择式图像匹配策略降低图像对匹配的时间成本；使用 RANSAC 去除误匹配，再利用 Bundle Adjustment 求解精确的相机参数并生成稀疏点云。最后使用 PMVS 完成稠密重建，并在 MeshLab 中对三维模型进行优化。

## 项目成果

完成树木精细三维模型的构建，为后续测树学参数提取和分析提供模型基础。

## 技术栈

VisualSFM、MeshLab、Python、SIFT、RANSAC、PMVS
