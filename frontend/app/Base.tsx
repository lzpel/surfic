import IconTextUI from "@/stateless_ui/IconTextUI";
import NavUI from "@/stateless_ui/NavUI";
import PartialContainerUI from "@/stateless_ui/PartialContainerUI";
import BreadUI from "@/stateless_ui/BreadUI";
import Image from "next/image";
import type React from "react";
import { Megaphone, Boxes, Info } from "lucide-react";

export default function Base(props: { children?: React.ReactNode }) {
  return (
    <>
      <NavUI container={PartialContainerUI}>
        <IconTextUI
          key="logo"
          href="/"
          icon={
            <Image
              src="/logo.svg"
              alt="surfic"
              width={186}
              height={126}
              className="h-[30px] w-auto"
            />
          }
        >
          サーフィック合同会社
        </IconTextUI>
          <IconTextUI
            key="news"
            href="/news"
            icon={<Megaphone className="h-5 w-5" />}
          >
            ニュース
          </IconTextUI>

          <IconTextUI
            key="product"
            href="/product"
            icon={<Boxes className="h-5 w-5" />}
          >
            製品・サービス
          </IconTextUI>

          <IconTextUI
            key="about"
            href="/about"
            icon={<Info className="h-5 w-5" />}
          >
            会社情報
          </IconTextUI>
      </NavUI>

      <PartialContainerUI>
        <BreadUI />
        {props.children}
      </PartialContainerUI>
    </>
  );
}