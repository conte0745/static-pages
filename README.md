# conte0745 — Personal Pages

[conte0745](https://profile.shiftonton.net) のポートフォリオ・紹介サイトのリポジトリです。  
Cloudflare を利用してホスティングされています。

🌐 **Webサイト**: https://profile.shiftonton.net

---

## 📌 サイト構成

| ファイル / ディレクトリ                      | 説明                                                                |
| :------------------------------------------- | :------------------------------------------------------------------ |
| `index.html`                                 | トップページ。自己紹介、プロダクト一覧、各種リンクを掲載            |
| `subbear/`                                   | サブスク管理アプリ「サブベア（Subbear）」の紹介ページと画像         |
| `privacy.html`                               | プライバシーポリシーページ（Google Analytics 利用に関する規約）     |
| `drink-diagnosis/`                           | 20歳以上向けのお酒の好み診断「一杯診断」のページ・CSS・JS・画像     |
| `yotei/` / `evirest/` / `pikniwa/` / `captgrab/` / `incident-lab/` | トップページに載せる各プロダクトの画像         |
| `subbear.html` / `drink-diagnosis.html`      | 旧URLから新しいフォルダへ転送するページ                             |
| `sitemap.xml` / `robots.txt`                 | 検索エンジン向けのサイトマップとクローラー設定                      |
| `ogp-*.svg` / `ogp-*.png`                    | SNS共有用のOGP画像（SVGが元データ、PNGを `rsvg-convert` で書き出し） |
| `.nojekyll`                                  | GitHub Pages で配信していたときの Jekyll 無効化用ファイル            |
| `*.png` / `*.jpg` / `*.webp`                 | サイト・プロダクト・プロフィールの各種画像アセット                  |

---

## 🚀 掲載コンテンツ・プロダクト

### 1. サブベア (Subbear)
- **概要**: 毎月の固定費と支払日をまとめて管理できる、個人向けサブスクリプション管理アプリ。
- **特徴**:
  - 月払い・年払いの総額を月額換算で可視化
  - 更新日カウントダウンで支払い前に見直し
  - クレジットカード連携不要で安心・安全
- **技術スタック**: Next.js, React, Clerk, Tailwind CSS
- **ページ**: [subbear/](subbear/index.html) / [公式LP](https://subbare.shiftonton.net/lp)

### 2. YOTEI
- **概要**: 候補日程を選んでURLを送るだけのシンプルな日程調整アプリ。
- **特徴**:
  - ログイン不要で即時利用可能
  - カレンダー連携なしでURL共有だけで完結
- **技術スタック**: Next.js, React, Cloudflare Workers, GCP
- **リンク**: [YOTEI Webサイト](https://shiftonton.net/)

### 3. インシデントラボ (Incident Lab)
- **概要**: 過去の大規模なシステム障害やインシデント事例を分かりやすく解説するYouTubeチャンネル。
- **リンク**: [YouTubeチャンネル](https://www.youtube.com/@%E3%82%A4%E3%83%B3%E3%82%B7%E3%83%87%E3%83%B3%E3%83%88%E3%83%A9%E3%83%9C)

### 4. 一杯診断 (Ippai Shindan)
- **概要**: 6つの質問から、好みに合うお酒を提案する診断コンテンツ。
- **特徴**:
  - スライダーで甘さや苦味などの好みを入力
  - 診断結果におすすめと豆知識、参照元を表示
  - 20歳未満向けの入場制限と飲酒に関する注意を掲載
- **ページ**: [一杯診断](drink-diagnosis/index.html)

### 5. EviREST
- **概要**: HTTP/REST APIの送信・検証と、テストエビデンスの出力ができるChrome拡張機能。
- **特徴**:
  - アサーション結果からOK / NGを自動判定
  - エビデンスをHTML・Excelで出力
  - アカウント登録なし、データはブラウザ内だけ
- **技術スタック**: JavaScript, Chrome拡張機能 (Manifest V3)
- **リンク**: [Chrome ウェブストア](https://chromewebstore.google.com/detail/evirest-api-tester/edocmaemplpnhjpfnoenibkoopfndgaa) / [GitHub](https://github.com/conte0745/evirest)

### 6. ピクニワ (PIKNIWA)
- **概要**: 好きなことや、つくったものからドット絵の島を作り、ひとこと日記で育てるサービス。
- **特徴**:
  - ログインなしでも始められる
  - ひとこと日記で島を育てる
  - 日記は公開・非公開を選べる
- **技術スタック**: SvelteKit, Cloudflare Workers, Clerk
- **リンク**: [ピクニワ](https://pikniwa.shiftonton.net/)

### 7. CaptGrab
- **概要**: 画面サイズを固定して、Webページ全体を1枚のPNGにするChrome拡張機能。
- **特徴**:
  - 100vhの要素が伸びず、画像の継ぎ目も出ない
  - 撮影サイズや保存先を設定で変更できる
  - アカウント登録なし、画像は外部に送信しない
- **技術スタック**: TypeScript, Chrome拡張機能 (Manifest V3)
- **リンク**: [Chrome ウェブストア](https://chromewebstore.google.com/detail/lanhcfgmjnbbalhiljdhcleahpineilm) / [紹介ページ](https://captgrab.shiftonton.net/) / [GitHub](https://github.com/conte0745/Capt-Glab)

---

## 🛠 技術仕様

- **フロントエンド**: HTML5, CSS3, Vanilla JavaScript（外部ライブラリ非依存）
- **ホスティング**: Cloudflare
- **アクセス解析**: Google Analytics (gtag.js)
- **フォント / アイコン**: システムフォント (Hiragino Kaku Gothic, Yu Gothic, Arial など)

---

## 💻 ローカル確認方法

静的HTMLで構成されているため、ファイルをブラウザで直接開くか、ローカルWebサーバーを起動して確認できます。

### Python を使う場合
```bash
python3 -m http.server 8000
# ブラウザで http://localhost:8000 を開く
```

### Node.js (npx) を使う場合
```bash
npx serve .
```

---

## 🔗 各種リンク

- **GitHub**: [@conte0745](https://github.com/conte0745)
- **Qiita**: [@conte0745](https://qiita.com/conte0745)
- **Zenn**: [@conte0745](https://zenn.dev/conte0745)
