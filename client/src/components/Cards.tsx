import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
type CardProps = {
  text: string | number;
  price: string | number;
  image: string;
};

export default function ActionAreaCard(props: CardProps) {
  return (
    <Card sx={{ maxWidth: 286 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{ width: 286, height: 186 }}
          image={props.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {props.text}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
