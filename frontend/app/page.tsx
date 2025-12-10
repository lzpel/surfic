import TechUI from "@/stateless_ui/TechUI";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<TechUI />

			<h1 className="mt-10 text-2xl">
				現在プロダクトを鋭意開発中です！公開をお楽しみに！
			</h1>
			{/* 🔥 Full-Width CTA Button */}
			<Link
				href="/product"
				className="
          mt-8 block w-full
          rounded-xl bg-gradient-to-r from-orange-300 to-orange-600
          px-6 py-4
          text-center text-lg font-semibold text-white
          shadow-lg shadow-orange-300/30
          transition-all duration-200
          hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-400/40
          active:scale-[0.98]
        "
			>
				開発中の製品・サービスを見る →
			</Link>

		</>
	);
}