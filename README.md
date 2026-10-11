# 彰化縣緊急救護訓練協會 官方網站

網址：<https://tctc-changhua.github.io>

本站使用 GitHub Pages（Jekyll）自動建置；內容由 [Pages CMS](https://app.pagescms.org) 管理，幹部不需要懂程式。

## 日常維護（幹部）

1. 開啟 <https://app.pagescms.org>，用受邀的 email 或 GitHub 帳號登入。
2. 左側選「活動紀錄」→「新增」→ 填活動名稱、日期、上傳照片 → 儲存。
3. 約 1–2 分鐘後網站自動更新。

其他可編輯的項目：最新消息、理事長的話、協會簡介、網站設定（聯絡資訊）。

## 內容結構

| 內容 | 位置 |
|---|---|
| 活動紀錄 | `_activities/YYYY-MM-DD-*.md`（front matter：title / date / category / images） |
| 活動照片 | `assets/img/activities/<年>/` |
| 最新消息 | `_posts/YYYY-MM-DD-*.md` |
| 公告附件 | `assets/uploads/` |
| 協會簡介 | `about.md` |
| 理事長的話 | `chairman.md` |
| 聯絡資訊 | `_data/info.yml` |
| 後台欄位設定 | `.pages.yml` |

## 本機預覽（開發者）

```bash
bundle install
bundle exec jekyll serve
```

照片建議先壓縮（WebP、最長邊 1280px、約 50–100 KB/張），GitHub Pages 網站總量上限 1 GB。
