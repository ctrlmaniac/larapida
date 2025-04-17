import { Container } from "@mui/joy";
import { MetaFunction } from "react-router";
import { Header, Hero } from "../../ui/components";

export const meta: MetaFunction = () => {
  return [
    { title: "Accessori calzature | La Rapida Molinetto" },
    { description: "Rivendita accessori per la cura della scarpa e della piccola pelletteria da viaggio in generale" }
  ]
}

export default function AccessoriCalzature() {
  return (
    <Container maxWidth="lg">
      <Header title="Accessori calzature" subtitle="Rivendita accessori per la cura della scarpa e della piccola pelletteria da viaggio in generale" />

      <Hero backgroundImageUrl="/static/images/wallpapers/accessori-calzature.webp" />
    </Container>
  )
}
