import { Container } from "@mui/joy";
import { MetaFunction } from "react-router";
import { Header, Hero } from "../../ui/components";

export const meta: MetaFunction = () => {
  return [
    { title: "Duplicazione radiocomandi | La Rapida Molinetto" },
    { description: "Duplicazione radiocomandi per cancelli, basculanti e garage" }
  ]
}

export default function Radiocomandi() {
  return (
    <Container maxWidth="lg">
      <Header title="Duplicazione radiocomandi" subtitle="Duplicazione radiocomandi per cancelli, basculanti e garage" />

      <Hero backgroundImageUrl="/static/images/wallpapers/radiocomandi.webp" />
    </Container>
  )
}
