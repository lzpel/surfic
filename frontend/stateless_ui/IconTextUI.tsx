"use client";

import Link from "next/link";
import React from "react";

type Props = {
  icon: React.ReactNode;
  href?: string; // リンク化
  children?: React.ReactNode;

  /**
   * xs: hidden / sm: block のようなレスポンシブ表示用
   * MUI の display={{ xs:"none", sm:"block" }} を再現
   */
  display?: {
    xs?: "none" | "block" | "inline" | "inline-block";
    sm?: "none" | "block" | "inline" | "inline-block";
    md?: "none" | "block" | "inline" | "inline-block";
  };
};

export default function IconTextUI({
  icon,
  href,
  children,
  display = { xs: "none", sm: "block" },
}: Props) {
  // display → Tailwind のクラスに変換
  const displayClass = [
    display.xs === "none" ? "hidden" : display.xs === "block" ? "block" : "",
    display.sm
      ? display.sm === "none"
        ? "sm:hidden"
        : display.sm === "block"
        ? "sm:block"
        : "sm:inline-block"
      : "",
    display.md
      ? display.md === "none"
        ? "md:hidden"
        : display.md === "block"
        ? "md:block"
        : "md:inline-block"
      : "",
  ].join(" ");

  const content = (
    <div className="flex items-center gap-1 text-inherit no-underline whitespace-nowrap overflow-hidden text-ellipsis">
      {icon}
      <span className={displayClass}>{children}</span>
    </div>
  );

  return href ? (
    <Link
      href={href}
      className="flex items-center gap-1 text-inherit no-underline hover:opacity-80"
    >
      {content}
    </Link>
  ) : (
    content
  );
}