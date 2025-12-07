import Article from "@/stateless_ui/ArticleUI";

export default function Product() {
  return (
    <Article title="製品・サービス">
      <div className="space-y-6 text-gray-800 leading-relaxed">
        <p>
          Surfic合同会社では、AI・画像解析・生成設計技術を活用した
          次世代のデジタルツールを開発しています。
          現在、以下の 2 つの主要サービスを開発中です。
        </p>
        {/* 1. 作物遠隔見守りサービス */}
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">作物遠隔見守りサービス（開発中）</h2>
		  <div className="grid gap-8 md:grid-cols-3"><figure className="rounded-xl border bg-slate-50 p-3 shadow-sm"><img src="https://storage.googleapis.com/lzpelshare/20251207-mimamori/fig_detect.png" alt="画像認識ビューの例" width="800" height="600" className="h-auto w-full rounded-lg"/><figcaption className="mt-2 text-xs text-slate-500">AI による自動カウント（画像認識ビュー）</figcaption></figure><figure className="rounded-xl border bg-slate-50 p-3 shadow-sm"><img src="https://storage.googleapis.com/lzpelshare/20251207-mimamori/fig_sign.png" alt="サインアップ画面の例" width="800" height="600" className="h-auto w-full rounded-lg"/><figcaption className="mt-2 text-xs text-slate-500">シンプルな新規登録画面</figcaption></figure><figure className="rounded-xl border bg-slate-50 p-3 shadow-sm"><img src="https://storage.googleapis.com/lzpelshare/20251207-mimamori/fig_map.png" alt="地図ビューの例" width="800" height="600" className="h-auto w-full rounded-lg"/><figcaption className="mt-2 text-xs text-slate-500">撮影地点を地図上に表示（マップビュー）</figcaption></figure></div>
          <p>
            <a 
              href="https://mimamori.surfic.com"
              className="text-blue-600 underline"
            >
              mimamori.surfic.com
            </a>{" "}
            にて開発中のサービスです。
          </p>
          <p>
            農業現場における「遠隔監視」「異常検知」「収量予測」を目的としたプラットフォームで、
            カメラやセンサーから得られる画像・データを AI が解析し、
            作物の状態を見える化します。
          </p>
          <p>
            将来的には、ハウス栽培の自動化支援や生育レポート自動生成など、
            生産者の作業を軽減する多様な機能を提供予定です。
          </p>
        </section>

        {/* 2. Lambda360 */}
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Lambda360（生成設計CAD・開発中）</h2>
          <p>
            Lambda360 は、パラメトリック CAD と最適化技術を融合した生成設計プラットフォームです。
            数式・パラメータで形状を定義し、形状生成・解析・最適化をワークフローとして統合します。
          </p>
          <p>
            「創りたい形を記述し、計算で生み出す」ことを目指しており、
            機械設計・3Dプリント・研究用途などに活用可能です。
          </p>
          <p>
            現在は、幾何カーネル、CSG、最適化ソルバー、ブラウザCAD UI の開発を進めています。
          </p>
        </section>

        <p className="pt-4 text-gray-600">
          上記サービスは順次アップデート予定です。公開時期が決まり次第、当サイトにてお知らせいたします。
        </p>

      </div>
    </Article>
  );
}