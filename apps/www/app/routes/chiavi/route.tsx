import { Container } from "@mui/joy";
import { MetaFunction } from "react-router";
import { Header, Hero } from "../../components";

export const meta: MetaFunction = () => {
  return [
    { title: "Duplicazione Chiavi | La Rapida Molinetto" },
    { description: "Duplicazione chiavi domestiche anche di sicurezza" }
  ]
}

export default function Chiavi() {
  return (
    <Container maxWidth="lg">
      <Header title="Duplicazione Chiavi" subtitle="Duplicazione chiavi domestiche anche di sicurezza" />

      <Hero backgroundImageUrl="/static/images/wallpapers/chiavi.webp" />
    </Container>
  )
}
