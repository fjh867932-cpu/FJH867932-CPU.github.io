# huiwu.com — 项目规格说明

> 一个未来感个人 AI 工作台：便签墙 + AI 对话 + 信息收集。

---

## UI 视觉设计系统

### 整体设计风格

网站整体视觉风格：

**白色新拟态（Neumorphism）+ 轻科技感 + 克莱因蓝点缀**

设计目标：

| 关键词 | 说明 |
| ------ | ---- |
| 干净 | 无冗余元素，呼吸感强 |
| 柔和 | 低对比度、软阴影、慢动效 |
| 高级 | Apple VisionOS / Widget 风格 |
| 科技感 | 克莱因蓝点缀、线性图标、悬浮卡片 |
| 极简 | 信息密度低，一屏一事 |

排除项：

- ❌ 赛博朋克霓虹风
- ❌ 深色主题
- ❌ 高饱和度蓝色
- ❌ 玻璃拟态 / 毛玻璃
- ❌ 强发光 / 重描边
- ❌ 弹跳 / 抖动 / 旋转 / 粒子特效

整体观感参考：

> Apple VisionOS 风格 — Apple Widget 风格 — 白色新拟态桌面组件风格

---

### 页面背景

背景颜色：

```
基础色：#f5f6fa 或 #f7f8fc（浅灰白）
```

约束：

- 不使用纯白 `#ffffff`
- 不使用深色背景
- 不使用明显纹理
- 可加入极弱渐变

实际使用：

```css
background: linear-gradient(180deg, #f8f9fd 0%, #eef2f8 100%);
```

---

### 卡片设计

所有功能模块统一为**新拟态悬浮卡片**。

卡片规格：

| 属性 | 值 |
| ---- | --- |
| 圆角 | `border-radius: 24px` |
| 背景 | `#f6f7fb` |
| 外阴影 | `8px 8px 18px rgba(0,0,0,0.08)` |
| 内高光 | `-8px -8px 18px rgba(255,255,255,0.9)` |
| 效果 | 像从背景中轻微凸起 |

排除：

- ❌ 玻璃拟态
- ❌ 毛玻璃
- ❌ 强发光
- ❌ 描边感太重

---

### 功能卡片配色

功能模块卡片采用**浅克莱因蓝渐变**。

```css
/* 推荐方案 */
background: linear-gradient(135deg, #8ca7ff, #6d8cff);
opacity: 0.9;

/* 备选方案 */
background: linear-gradient(135deg, #9bb3ff, #7b94ff);
opacity: 0.9;
```

要求：淡蓝、高级感、柔和、不刺眼、不抢视觉中心。

---

### 悬停效果

PC 端鼠标悬停：

```css
transform: translateY(-4px);
box-shadow: /* 轻微增强 */;
```

效果：卡片被轻轻托起。

排除：翻转动画、旋转动画、炫酷特效。

---

### 动效规范

| 属性 | 值 |
| ---- | --- |
| 原则 | 慢 · 轻 · 柔和 |
| 进入动画 | `opacity` + `translateY` 组合 |
| 动画时长 | `0.4s ~ 0.6s` |
| 缓动 | `ease` 或 `cubic-bezier(0.4, 0, 0.2, 1)` |

排除：弹跳、抖动、粒子爆炸、赛博光效。

---

### 图标风格

统一使用**线性图标（Line Icon）**。

参考图标库：Lucide / Tabler Icons

风格要求：

- 细线条（`stroke-width: 1.5~2`）
- 圆角端点（`stroke-linecap: round`）
- 简洁几何造型

排除：彩色图标、拟物图标、复杂插画。

---

### CSS 变量体系

```css
:root {
  /* 背景 */
  --bg: #f5f6fa;
  --bg-card: #f6f7fb;

  /* 文字 */
  --text: #2d3047;
  --text-muted: #8a8fa8;
  --text-light: #b0b5c8;

  /* 克莱因蓝 */
  --accent: #7b94ff;
  --accent-light: #9bb3ff;

  /* 新拟态阴影 */
  --neu-light: rgba(255, 255, 255, 0.9);
  --neu-dark: rgba(0, 0, 0, 0.08);

  /* 卡片阴影 */
  --shadow-card: 8px 8px 18px var(--neu-dark), -8px -8px 18px var(--neu-light);
  --shadow-card-hover: 6px 6px 14px rgba(0,0,0,0.10), -6px -6px 14px var(--neu-light);

  /* 按钮阴影 */
  --shadow-btn: 3px 3px 8px rgba(0,0,0,0.06), -3px -3px 8px #fff;
  --shadow-btn-pressed: inset 3px 3px 6px rgba(0,0,0,0.06), inset -3px -3px 6px #fff;
}
```

---

### 最终视觉目标

> 一个未来感个人 AI 工作台，而不是传统网页后台。

关键词：

```
白色新拟态 · Apple 风格 · Widget 布局 · 柔和阴影
浅克莱因蓝 · 极简科技感 · 高级感 · 轻量化 · 低饱和
```

---

## 项目结构

| 文件 | 用途 |
| ---- | ---- |
| `gate.html` | 入口过渡页（旋转光环动画） |
| `index.html` | 门禁过渡页（视频背景，点击进入主站） |
| `main.html` | 主 SPA（便签墙 + AI 对话 + 信息板块） |
| `style.css` | 全局样式系统 |
| `app.js` | SPA 路由 + 便签墙逻辑 + AI 对话逻辑 |
| `gate-config.js` | 门禁配置 |
| `init.sql` | 数据库初始化脚本 |
| `supabase/functions/` | Edge Functions（auth / chat） |
| `test-mimo.html` | MIMO 测试页面 |

## 数据流

```
gate.html → (点击) → index.html → (点击) → main.html
                                                    ├── 便签墙 ← Supabase REST API
                                                    ├── AI 对话 ← Supabase Edge Function
                                                    └── 背景图 ← Supabase REST API
```

## 约束

- 修改门禁页面和 main 时，**不动 gate.html**
- 所有视觉变更必须对齐本规格说明中的设计系统
