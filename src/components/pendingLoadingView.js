import * as React from "react";
import Card from "@mui/material/Card";
import { grey } from "@mui/material/colors";
import Grid from "@mui/material/Grid";

export default function PendingLoadingView() {
  const n = 9;

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={1}
    >
      {[...Array(n)].map((e, i) => (
        <Grid item key={i}>
          <Card
            style={{
              textAlign: "center",
              backgroundColor: grey,
              height: 100,
              width: 100,
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
}
