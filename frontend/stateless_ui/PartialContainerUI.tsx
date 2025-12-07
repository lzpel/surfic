"use client"
import * as React from "react";

/**
 * 数学の部分関数（partial function）のアナロジーで、
 * 画面中央に幅を制限したコンテナ。
 * fixed な MUI Container の代替。
 */
export default function PartialContainerUI(
  props: React.HTMLAttributes<HTMLDivElement>
) {
  const { className = "", children, ...rest } = props;

  return (
    <div
      {...rest}
      className={
        // 中央寄せ＋最大幅＋左右パディング
        `mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 ${className}`
      }
    >
      {children}
    </div>
  );
}
