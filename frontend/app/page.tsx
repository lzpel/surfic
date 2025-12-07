import TechUI from "@/stateless_ui/TechUI";
import Product from "./product/product";

export default function Home() {
  return (
    <>
      <TechUI />

      <h1 className="mt-10 text-3xl font-bold text-green-600">
        現在プロダクトを鋭意開発中です！公開をお楽しみに！
      </h1>

      <Product />
    </>
  );
}