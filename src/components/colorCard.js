import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import { getColorByBackgroundColor } from "../utils/helpers";
import Typography from "@mui/material/Typography";

export default function ColorCard({ itemData }) {
  const [selected, setSelected] = useState(false);
  const [cardHeight, setCardHeight] = useState(`100px`);
  const [cardWidth, setCardWidth] = useState(`100px`);

  const handleCardFlip = () => {
    setSelected(!selected);
    setCardHeight(selected ? `100px` : `400px`);
    setCardWidth(selected ? `100px` : `400px`);
  };

  return (
    <Grid item>
      <Card
        data-testid="color-card"
        key={itemData.id}
        sx={{
          ":hover": {
            boxShadow: 20,
          },
        }}
        style={{
          backgroundColor: `${itemData.color}`,
          color: `${getColorByBackgroundColor(itemData.color)}`,
          height: `${cardHeight}`,
          width: `${cardWidth}`,
          cursor: "pointer",
        }}
        onClick={handleCardFlip}
      >
        <CardActionArea>
          {selected ? (
            <div>
              <CardHeader
                title={itemData.color}
                subheader={
                  <Typography
                    color={`${getColorByBackgroundColor(itemData.color)}`}
                  >
                    {`Photo by ${itemData.user.name} on Unsplash`}
                  </Typography>
                }
              ></CardHeader>
              <CardMedia
                component="img"
                height={`${cardHeight}`}
                image={`${itemData.urls.small}`}
                alt="color image"
              />
            </div>
          ) : (
            ""
          )}
        </CardActionArea>
      </Card>
    </Grid>
  );
}
