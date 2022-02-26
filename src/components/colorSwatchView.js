import * as React from "react";
import Grid from "@mui/material/Grid";
import ColorCard from "./colorCard";

export default function ColorSwatchView({ data }) {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={1}
    >
      {data.slice(0, 9).map((item) => (
        <ColorCard itemData={item} key={item.id} />
      ))}
    </Grid>
  );
}
