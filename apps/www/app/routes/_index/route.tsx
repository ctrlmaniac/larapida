import { Container, Divider } from "@mui/joy";
import { MetaFunction } from "react-router";
import { Header, Hero } from "../../ui/components";
import ProdottiServizi from "./prodotti-servizi";

export const meta: MetaFunction = () => {
  return [
    { title: "La Rapida Molinetto" },
    { description: "La Rapida molinetto l'artigiano calzolaio nel cuore del centro commerciale a Molinetto di Mazzano" }
  ];
};

export default function Index() {
  return (
    <Container maxWidth="lg">
      <Header title="La Rapida Molinetto" subtitle="L'artigiano calzolaio nel cuore del centro commerciale" />

      <Hero />

      <Divider sx={{ my: 6 }} />

      <ProdottiServizi />
    </Container>
  )
}
