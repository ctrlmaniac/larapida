import { Sheet } from "@mui/joy";
import defaultBg from "./default-wallpaper.jpg";
import type HeroProps from "./props";
import { type SxProps } from "@mui/joy/styles/types";
import { PropsWithChildren, type FC } from "react";

export const Hero: FC<PropsWithChildren<HeroProps>> = ({ bgImage, height = "35vh", children }) => {
  const defaultImage = bgImage ?? "url(" + defaultBg + ")";

  const Style: SxProps = { height: height, backgroundImage: defaultImage, backgroundPosition: "center", backgroundSize: "cover", m: 2, borderRadius: 20 };

  return <Sheet sx={Style}>{children}</Sheet>
}
