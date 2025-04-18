import { FC } from "react";
import { Splash } from "../Splash";
import { CircularProgress } from "@mui/joy";

export const LoadingScreen: FC = () => {
  return (
    <Splash containerMaxWidth="sm" alignContentCenter={true}>
      <CircularProgress />
    </Splash>
  )
}
