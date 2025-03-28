import { Sheet, Typography } from "@mui/joy";

export default function Header() {
  return (
    <Sheet variant="plain" sx={{ p: 2, textAlign: "center" }}>
      <Typography level="h1" component="h1">La Rapida Molinetto</Typography>
      <Typography level="h2" component="h2" sx={{ fontWeight: "normal" }}>l'artigiano nel cuore del centro commerciale</Typography>
    </Sheet>
  )
}
