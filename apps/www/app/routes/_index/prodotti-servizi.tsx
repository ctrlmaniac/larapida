import { Grid } from "@mui/system";
import { CardMedia } from "../../components";
import { Fragment } from "react";
import { Typography } from "@mui/joy";

export default function ProdottiServizi() {
  return (
    <Fragment>
      <Typography level="h3" sx={{ mb: 6 }}>I nostri prodotti e servizi...</Typography>
      <Grid
        container
        direction="row"
        spacing={2}
        columns={12}
        sx={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'stretch',
          mb: 6
        }}
      >
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <CardMedia title="Riparazioni" shortDescription="Riparazioni calzature e borse" wallpaper="/static/images/wallpapers/riparazioni.webp" action="/riparazioni" />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <CardMedia title="Duplicazione Chiavi" shortDescription="Duplicazione chiavi domestiche anche di sicurezza" wallpaper="/static/images/wallpapers/chiavi.webp" action="/chiavi" />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <CardMedia title="Duplicazione Chiavi Auto" shortDescription="Duplicazione chiavi auto comprese di microchip avviamento motore senza radiocomando" wallpaper="/static/images/wallpapers/chiavi-auto.webp" action="/chiavi-auto" />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <CardMedia title="Gusci Chiavi Auto" shortDescription="Cambio guscio in plastica della chiave auto" wallpaper="/static/images/wallpapers/gusci.webp" action="/gusci-chiavi-auto" />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <CardMedia title="Duplicazione Radiocomandi" shortDescription="Duplicazione radiocomandi per cancelli, basculanti e garage" wallpaper="/static/images/wallpapers/radiocomandi.webp" action="/radiocomandi" />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <CardMedia title="Batterie per orologi e altro" shortDescription="Cambio batterie orologi e rivendita di altre batterie" wallpaper="/static/images/wallpapers/orologi.webp" action="/batterie" />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <CardMedia title="Targhe" shortDescription="Realizzazione di targhe in PVC, plexiglass, ottone e alluminio" wallpaper="/static/images/wallpapers/targhe.webp" action="/targhe" />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <CardMedia title="Accessori calzature" shortDescription="Rivendita accessori per la cura della scarpa e della piccola pelletteria da viaggio in generale" wallpaper="/static/images/wallpapers/accessori-calzature.webp" action="/accessori-calzature" />
        </Grid>
      </Grid>
    </Fragment>

  )
}
