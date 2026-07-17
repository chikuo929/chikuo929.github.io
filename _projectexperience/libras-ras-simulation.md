---
title: "LibRAS 循环水养殖系统仿真项目"
short_title: "LibRAS 循环水养殖系统仿真"
permalink: /projects/libras-ras-simulation/
category: "系统仿真"
featured: true
order: 10
excerpt: "基于 LibRAS 与 OpenModelica 复现和改造循环水养殖系统，为算法研究和运行优化构建可重复的仿真数据环境。"
tech: [OpenModelica, Modelica, LibRAS, Python, MATLAB]
research_areas: [recirculating-aquaculture]
project_parent_url: "/research/recirculating-aquaculture/"
project_parent_label: "返回循环水养殖系统仿真"
project_image: "/images/research/recirculating-aquaculture.webp"
project_image_alt: "LibRAS 循环水养殖系统仿真结构图"
---

## 项目背景

循环水养殖系统由养殖池、生物滤池、增氧设备、循环泵、固液分离装置等多个单元组成，各模块之间存在复杂的水量、水质和生物反应耦合关系。直接开展长期实物实验通常存在成本高、周期长、运行条件难以重复等问题。

本项目基于 Chalmers University of Technology 开发的 LibRAS 模型库，在 OpenModelica 环境中复现和改造循环水养殖系统模型，对系统中的水质变化、鱼类生长、硝化微生物变化及设备运行过程进行动态仿真，为后续算法研究和运行策略优化提供可重复的数据环境。

## 我的职责

- 负责 LibRAS 模型库的安装、配置、运行与兼容性测试
- 阅读并分析 LibRAS 相关论文、模型结构和 Modelica 源代码
- 负责循环水养殖系统模型的复现、调试与参数配置
- 修复模型在不同 OpenModelica 版本下的变量、端口和数组维度问题
- 对 FishTank、Biofilter、Oxygenation、Pump 和 Settler 等模块进行结构分析
- 负责 TinyRAS、Recycle 和 Bypass 等系统拓扑模型的运行测试
- 编写仿真结果变量提取与数据导出流程
- 使用 Python、MATLAB 等工具对仿真结果进行分析与可视化
- 整理模型变量含义、单位及水质指标映射关系

## 核心功能

- 模拟循环水养殖系统中水体的循环与处理过程
- 模拟鱼池、生物滤池、增氧设备和循环泵之间的动态耦合
- 输出总氨氮、亚硝酸盐、硝酸盐和溶解氧等水质变量
- 输出 AOB、NOB 等硝化微生物状态变量
- 模拟不同循环流量、换水比例和系统结构下的运行效果
- 支持 Recycle、Bypass 和 TinyRAS 等不同系统拓扑
- 将 OpenModelica 仿真结果导出为 MAT 或 CSV 文件
- 对长期仿真结果进行曲线绘制、数值检查和数据集构建

## 技术方案

项目以 LibRAS 模型库为基础，使用 Modelica 语言描述循环水养殖系统中的物理过程、生物过程和设备运行过程，并通过 OpenModelica 完成模型编译与动态仿真。

系统按照模块化方式构建，主要包括 FishTank、Biofilter、Oxygenation、Pump、Settler 等组件。各模块通过流体端口进行连接，实现水流、溶解性物质和颗粒性物质在系统中的传递。通过调整水力停留时间、系统换水比例、环境温度、设备流量和养殖负荷等参数，可以模拟不同运行条件下的系统响应。

针对模型兼容性问题，对 PartialTank、PartialCST、PartialLumpedVessel 等基础类以及部分端口和介质变量进行了检查与调整，解决参数覆盖、数组维度、介质组分和端口连接等问题。

仿真完成后，通过 OpenModelica 的结果读取接口提取关键变量，并转换为 CSV 等通用数据格式。随后使用 Python、MATLAB 和 Matplotlib 对数据进行清洗、绘图与分析，为水质预测和生物滤池硝化功能研究提供基础数据。

## 项目成果

- 完成 LibRAS 模型库及相关研究资料的系统梳理
- 成功运行 TinyRAS、Recycle 等循环水养殖系统示例模型
- 完成部分模型组件在 OpenModelica 环境下的兼容性修复
- 实现最长 120 天的循环水养殖系统动态仿真
- 完成 TAN、NO₂⁻、NO₃⁻、DO、AOB 和 NOB 等关键变量识别
- 建立 OpenModelica 仿真结果向 MAT、CSV 数据格式的导出流程
- 完成生物滤池关键水质变量和微生物变量的可视化分析
- 为后续时序预测、功能状态评价和控制策略研究构建仿真数据基础

## 技术栈

OpenModelica、Modelica、LibRAS、Python、MATLAB
