"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Home, ChevronRight } from "lucide-react";

export default function BreadUI() {
  const pathname = usePathname(); // 例: "/news/20251111-A-News"
  const segments = ["", ...pathname.split("/").filter(Boolean)]; // ["", "news", "20251111-A-News"]

  const crumbs = segments.map((segment, index) => {
    const href = segments.slice(0, index + 1).join("/"); // "news/20251111-A-News"
    const label = decodeURIComponent(segment);
    const isLast = index === segments.length - 1;
    return {
      href: href ? href : "/",
      label,
      last: isLast,
    };
  });

  return (
    <nav aria-label="breadcrumb" className="mb-4 text-sm">
      <ol className="flex flex-wrap items-center gap-1 text-slate-500 dark:text-slate-400">
        {crumbs.map((crumb, index) => {
          const isFirst = index === 0;
          const isLast = crumb.last;

          // ルート("")はアイコン、それ以外はテキスト
          const labelNode =
            crumb.label === "" ? (
              <Home className="h-4 w-4" />
            ) : (
              <span>{crumb.label}</span>
            );

          return (
            <li key={crumb.href} className="flex items-center gap-1">
              {index > 0 && (
                <ChevronRight className="h-3 w-3 text-slate-400 dark:text-slate-500" />
              )}

              {isLast ? (
                <span className="font-medium text-slate-900 dark:text-slate-100 flex items-center gap-1">
                  {labelNode}
                </span>
              ) : (
                <Link
                  href={crumb.href}
                  className="flex items-center gap-1 hover:text-slate-900 hover:dark:text-slate-100 hover:underline"
                >
                  {labelNode}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}