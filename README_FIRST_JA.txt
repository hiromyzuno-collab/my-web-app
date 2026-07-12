大地のムクナ LP v6（mukuna-retro-trace-v6）

【最も簡単な起動方法】
1. このZIPを展開
2. START_LOCAL_3000.bat をダブルクリック
3. 初回のみ npm install が実行されます
4. ブラウザで http://localhost:3000 を開く

【コマンドで起動する場合】
npm install
npm run dev

【本番ビルド確認】
npm run build
npm run start

【URL】
LP本体: http://localhost:3000
LINE案内: http://localhost:3000/line

【重要】
・PC版は1024px表示を基準にBaseRETROの構図をHTML/CSSで再構築しています。
・スマホ版はPC版の単純縮小ではなく専用レイアウトです。
・見出し、本文、CTAは画像ではなく選択可能なHTMLテキストです。
・スマホモック内の画面はBaseRETROの画面を使用しています。
・本番公開前にLINE公式URL、QRコード、法務ページURLを差し替えてください。
