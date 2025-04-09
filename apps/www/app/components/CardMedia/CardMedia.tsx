import { AspectRatio, Button, ButtonGroup, Card, CardActions, CardContent, CardOverflow, Typography } from "@mui/joy";
import { FC } from "react";

interface MediaCardProps {
  title: string;
  shortDescription?: string;
  wallpaper: string;

  /**
   * @default false
   */
  disabled?: boolean;

  /**
   * @default false
   */
  disableStretch?: false
}

export const CardMedia: FC<MediaCardProps> = ({ title, shortDescription, wallpaper, disabled = false, disableStretch = false }) => {
  return (
    <Card variant="outlined" sx={{ width: "100%", height: disableStretch ? 'initial' : "100%" }}>
      <CardOverflow>
        <AspectRatio ratio="2">
          <img src={wallpaper} alt="wallpaper" />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="title-md">{title}</Typography>
        {shortDescription && <Typography level="body-sm">{shortDescription}</Typography>}
      </CardContent>
      {!disabled && (
        <CardActions buttonFlex="1">
          <ButtonGroup variant="outlined" sx={{ bgcolor: 'background.surface' }}>
            <Button>Scopri di più</Button>
          </ButtonGroup>
        </CardActions>
      )}
    </Card>
  )
}