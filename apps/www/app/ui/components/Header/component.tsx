import { Sheet, Typography } from "@mui/joy";
import { FC, ReactNode } from "react";

interface HeaderProps {
  title: string;
  subtitle?: string;
  children?: ReactNode
}

export const Header: FC<HeaderProps> = ({ title, subtitle, children }) => {
  return (
    <Sheet sx={{ my: 6 }}>
      <Typography level="h1" sx={{ textAlign: "center" }}>{title}</Typography>
      {subtitle && <Typography level="h3" sx={{ textAlign: "center" }} gutterBottom>{subtitle}</Typography>}
    </Sheet>
  )
}
