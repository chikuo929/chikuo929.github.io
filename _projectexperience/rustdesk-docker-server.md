---
title: "基于 Docker 的 RustDesk 自建远程桌面服务器"
short_title: "RustDesk 自建远程桌面服务器"
permalink: /projects/rustdesk-docker-server/
category: "系统运维"
featured: true
order: 40
excerpt: "在 Ubuntu 云服务器上通过 Docker 部署 RustDesk 信令与中继服务，构建可自主维护的私有远程桌面方案。"
tech: [RustDesk, Docker, Docker Compose, Ubuntu, Linux, TCP/IP]
---

## 项目背景

在远程访问实验室电脑、个人工作站和服务器时，公共远程桌面服务可能受到网络环境、连接稳定性和服务策略等因素影响。为提高远程连接的自主性与稳定性，本项目基于 RustDesk 搭建私有远程桌面服务，为不同地点和不同设备之间的远程控制提供独立的信令和中继能力。

项目先后测试学校服务器与云服务器部署方案，并最终在 Ubuntu 云服务器上通过 Docker 部署 RustDesk 服务端，实现客户端之间的跨网络远程连接。

## 我的工作

- 调研 RustDesk 自建服务器架构和部署方案
- 配置 Ubuntu 云服务器、Docker 和 Docker Compose 环境
- 部署 RustDesk hbbs 信令服务和 hbbr 中继服务
- 配置端口、防火墙、安全组及服务参数
- 配置客户端 ID Server、Relay Server 和密钥
- 测试跨网络远程连接和中继通信
- 排查部署过程中的网络和连接问题

## 核心功能

- 提供 RustDesk 客户端设备连接协调服务
- 支持远程设备访问和跨网络连接
- 支持中继转发和密钥身份验证
- 支持 Docker 容器化运行和服务持久化
- 支持日志查看和基础故障排查

## 技术方案

项目采用 RustDesk 服务端组件 hbbs 和 hbbr 搭建私有远程桌面服务。

hbbs 负责设备注册、身份识别、连接协调和网络打洞，hbbr 在客户端无法建立点对点连接时负责数据中继。两个服务均通过 Docker 容器运行在 Ubuntu 云服务器中，并通过端口映射对外提供服务。

部署过程中，首先完成服务器系统、Docker 环境和安全组端口配置，然后启动 hbbs 与 hbbr 容器，并将服务生成的数据和密钥文件保存至宿主机目录。客户端侧配置 ID Server、Relay Server 和服务端公钥，从而接入自建服务器。

针对学校网络端口受限、域名备案和公网访问等问题，项目调整为使用云服务器公网地址和 RustDesk 所需端口进行连接，保证远程桌面服务稳定运行。

## 项目成果

- 完成 RustDesk 自建服务器架构调研和部署方案设计
- 完成 Ubuntu 云服务器及 Docker 环境配置
- 成功部署 hbbs 信令服务和 hbbr 中继服务
- 实现 RustDesk 客户端接入自建服务器
- 完成跨设备和跨网络环境下的远程连接测试
- 实现服务数据和密钥文件持久化
- 完成容器运行状态、日志和端口连接检查
- 形成可重复部署和自主维护的私有远程桌面方案

## 技术栈

RustDesk、Docker、Docker Compose、Ubuntu、Linux、腾讯云、TCP/IP、云服务器安全组
