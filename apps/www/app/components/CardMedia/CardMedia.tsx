import { AspectRatio, Button, ButtonGroup, Card, CardActions, CardContent, CardOverflow, Typography } from "@mui/joy";
import { FC } from "react";
import { useNavigate } from "react-router";

interface MediaCardProps {
  title: string;
  shortDescription?: string;
  wallpaper: string;
  action?: string;

  /**
   * @default false
   */
  disabled?: boolean;

  /**
   * @default false
   */
  disableStretch?: false

}

export const CardMedia: FC<MediaCardProps> = ({ title, shortDescription, wallpaper, action, disabled = false, disableStretch = false }) => {
  const navigate = useNavigate();

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
      {(!disabled && action) && (
        <CardActions buttonFlex="1">
          <ButtonGroup variant="outlined" sx={{ bgcolor: 'background.surface' }}>
            <Button onClick={() => navigate(action)}>Scopri di più</Button>
          </ButtonGroup>
        </CardActions>
      )}
    </Card>
  )
}
