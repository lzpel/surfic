import ArticleUI from "@/stateless_ui/ArticleUI";

export default function About() {
  return (
    <ArticleUI title="会社情報">
      <div className="space-y-3">
        <Row>社名 サーフィック合同会社 / Surfic LLC</Row>
        <Row>所在 神奈川県横浜市鶴見区４－４５－５</Row>
        <Row>設立 2025年11月</Row>
        <Row>資本金 50万円</Row>
        <Row>お問い合わせ先（@を置き換えて送信してください） infoアットマークsurfic.com </Row>
      </div>
    </ArticleUI>
  );
}

function Row(props: { children?: React.ReactNode }) {
  return (
    <div className="py-2 border-b border-gray-200 last:border-b-0 text-base leading-relaxed">
      {props.children}
    </div>
  );
}