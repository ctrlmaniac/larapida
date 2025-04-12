import { Container } from "@mui/joy";
import { MetaFunction } from "react-router";
import { Header, Hero } from "../../components";

export const meta: MetaFunction = () => {
  return [
    { title: "Duplicazione Chiavi Auto | La Rapida Molinetto" },
    { description: "Duplicazione chiavi auto comprese di microchip avviamento motore senza radiocomando" }
  ]
}

export default function ChiaviAuto() {
  return (
    <Container maxWidth="lg">
      <Header title="Duplicazione Chiavi Auto" subtitle="Duplicazione chiavi auto comprese di microchip avviamento motore senza radiocomando" />

      <Hero backgroundImageUrl="/static/images/wallpapers/chiavi-auto.webp" />
    </Container>
  )
}
