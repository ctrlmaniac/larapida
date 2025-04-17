import { Container } from "@mui/joy";
import { MetaFunction } from "react-router";
import { Header, Hero } from "../../ui/components";

export const meta: MetaFunction = () => {
  return [
    { title: "Riparazioni | La Rapida Molinetto" },
    { description: "Riparazioni calzature e pelletteria da viaggio come borse e altro" }
  ]
}

export default function Riparazioni() {
  return (
    <Container maxWidth="lg">
      <Header title="Riparazioni" subtitle="Riparazioni calzature e pelletteria da viaggio come borse e altro" />

      <Hero />
    </Container>
  )
}
