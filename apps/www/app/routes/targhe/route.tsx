import { Container } from "@mui/joy";
import { MetaFunction } from "react-router";
import { Header, Hero } from "../../components";

export const meta: MetaFunction = () => {
  return [
    { title: "Targhe | La Rapida Molinetto" },
    { description: "Realizzazione di targhe in PVC, plexiglass, ottone e alluminio" }
  ]
}

export default function Targhe() {
  return (
    <Container maxWidth="lg">
      <Header title="Targhe" subtitle="Realizzazione di targhe in PVC, plexiglass, ottone e alluminio" />

      <Hero backgroundImageUrl="/static/images/wallpapers/targhe.webp" />
    </Container>
  )
}
