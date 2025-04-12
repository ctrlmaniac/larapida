import { Container } from "@mui/joy";
import { MetaFunction } from "react-router";
import { Header, Hero } from "../../components";

export const meta: MetaFunction = () => {
  return [
    { title: "Gusci Chiavi Auto | La Rapida Molinetto" },
    { description: "Cambio guscio in plastica della chiave auto" }
  ]
}

export default function GusciChiaviAuto() {
  return (
    <Container maxWidth="lg">
      <Header title="Gusci Chiavi Auto" subtitle="Cambio guscio in plastica della chiave auto" />

      <Hero backgroundImageUrl="/static/images/wallpapers/gusci.webp" />
    </Container>
  )
}
