"use client"
import { Breadcrumbs } from "@mui/material";
import Link from "next/link";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { usePathname } from "next/navigation";
import HomeIcon from '@mui/icons-material/Home';

export default function BreadUI() {
	const pathname = usePathname();// 例: "/news/20251111-A-News"
	const segments = ["", ...pathname.split("/").filter(Boolean)]; // ["", "news", "20251111-A-News"]

	// segmentからリンクを生成
	const crumbs = segments.map((segment, index) => {
		const href = segments.slice(0, index + 1).join("/"); // "news/20251111-A-News"
		const label = decodeURIComponent(segment) // 表示名を整える
		const isLast = index === segments.length - 1;
		return {
			href: href ? href: "/",
			label: label,
			last: index === segments.length - 1,
		};
	});

	const crumbs_nodes:React.ReactNode[]=crumbs.map(v=>{
		const label=v.label || <HomeIcon/>
		const ret=v.last?<span>{label}</span>:<Link key={v.href} href={v.href} style={{textDecoration:"none", color:"inherit"}}>{label}</Link>
		return ret as React.ReactNode
	})

	return (
		<Breadcrumbs
			separator={<NavigateNextIcon fontSize="small"/>}
			aria-label="breadcrumb"
			children={crumbs_nodes}
		/>
	);
}

function intersperseWithComponent(
  nodes: React.ReactNode[],
  Separator: React.ComponentType
): React.ReactNode[] {
	return nodes.flatMap((node, i) =>
		i < nodes.length - 1 ? [node, <Separator key={`sep-${i}`} />] : [node]
	);
}