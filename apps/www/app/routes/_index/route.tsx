import { Container, Divider, Sheet, Typography } from "@mui/joy";
import { MetaFunction } from "react-router";
import { Hero } from "../../components";
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
      <Sheet sx={{ my: 6 }}>
        <Typography level="h1" sx={{ textAlign: "center" }}>La Rapida Molinetto</Typography>
        <Typography level="h3" sx={{ textAlign: "center" }} gutterBottom>L'artigiano calzolaio nel cuore del centro commerciale</Typography>
      </Sheet>

      <Hero />

      <Divider sx={{ my: 6 }} />

      <ProdottiServizi />
    </Container>
  )
}