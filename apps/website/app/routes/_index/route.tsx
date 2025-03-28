import { Fragment } from "react";
import Header from "./header";
import { Hero } from "../../components";
import { Typography } from "@mui/joy";

export default function Index() {
  return (
    <Fragment>
      <Header />

      <Hero />

      <Typography level="h3" sx={{
        textAlign: "center"
      }}>Sito web in costruzione!</Typography>
    </Fragment>
  )
}
