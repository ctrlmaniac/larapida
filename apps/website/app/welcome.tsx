import { Sheet, Typography } from "@mui/joy";

export default function Welcome() {
  return (
    <div>
      <Sheet variant="plain" sx={{ p: 2, textAlign: "center" }}>
        <Typography level="h1" component="h1">La Rapida Molinetto</Typography>
        <Typography level="h2" component="h2" sx={{ fontWeight: "normal" }}>l'artigiano nel cuore del centro commerciale</Typography>
      </Sheet>

      <Sheet sx={{ height: "35vh", backgroundImage: "url('/images/wallpapers/main.jpg')", backgroundPosition: "center", backgroundSize: "cover", m: 2, borderRadius: 20 }} />
    </div>
  )
}
