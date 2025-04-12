import { Container } from "@mui/joy";
import { MetaFunction } from "react-router";
import { Header, Hero } from "../../components";

export const meta: MetaFunction = () => {
  return [
    { title: "Batterie per orologi e altro | La Rapida Molinetto" },
    { description: "Cambio batterie orologi e rivendita di altre batterie" }
  ]
}

export default function Batterie() {
  return (
    <Container maxWidth="lg">
      <Header title="Batterie per orologi e altro" subtitle="Cambio batterie orologi e rivendita di altre batterie" />

      <Hero backgroundImageUrl="/static/images/wallpapers/orologi.webp" />
    </Container>
  )
}
