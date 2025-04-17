import { Sheet } from "@mui/joy";
import { FC, ReactNode } from "react";

interface HeroProps {
  /**
   * @default "/images/wallpapers/riparazioni.webp"
   */
  backgroundImageUrl?: string;

  /**
   * @default "35vh"
   */
  height?: string;

  children?: ReactNode
}

export const Hero: FC<HeroProps> = ({ backgroundImageUrl = "/static/images/wallpapers/riparazioni.webp", height = "35vh", children }) => {
  return (
    <div>
      <Sheet sx={{
        backgroundImage: "url(" + backgroundImageUrl + ")",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: height,
        borderRadius: "16px"
      }}>
        {children}
      </Sheet>
    </div>
  )
}