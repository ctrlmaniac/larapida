import { FC } from "react";
import { Box, Container } from "@mui/joy";
import { SxProps } from "@mui/joy/styles/types";

interface SplashProps {
  children: React.ReactNode;

  /**
   * The maximum width of the container
   * @default "sm"
   */
  containerMaxWidth?: "sm" | "md" | "lg" | "xl";

  /**
   * If true, the wallpaper will be displayed
   * @default
   */
  withWallpaper?: boolean;
}

export const Splash: FC<SplashProps> = ({ children, containerMaxWidth = "sm", withWallpaper = true }) => {
  const sxRootComponent: SxProps = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };
  const sxWallpaper: SxProps = {
    backgroundImage: 'url(/static/wallpapers/riparazioni.webp)',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  }

  const sxRootComponentFinal = withWallpaper ? { ...sxRootComponent, ...sxWallpaper } : { ...sxRootComponent };

  return (
    <Box sx={sxRootComponentFinal}>
      <Container maxWidth={containerMaxWidth}>
        {children}
      </Container>
    </Box>
  )
}
