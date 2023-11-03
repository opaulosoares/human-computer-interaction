import { useTheme } from "@emotion/react";
import { Button, Card, CardMedia, Typography } from "@mui/material";
import { Product } from "../../../models/product";
import { tokens } from "../../../theme";
import useCart from "../../../resources/cart/use-cart";

interface Props {
  data: Product;
}

const SalesItem: React.FC<Props> = (props) => {
  const { nome, imagem } = props.data;
  const theme = useTheme();
  const { cart, addToCard } = useCart();
  const colors = tokens(theme.palette.mode);

  console.log(cart)

  return (
    <Card
      sx={{
        width: "220px",
        color: colors.neutral[1],
        bgcolor: "#fff",
        padding: "16px",
      }}
      onClick={() => addToCard(props.data)}
    >
      <CardMedia
        sx={{ height: 180 }}
        component="img"
        image={imagem}
        alt={nome}
      />
      <Typography py={"12px"}>{nome}</Typography>
      <Button
        sx={{
          background: "#0d1912",
          width: "100%",
        }}
      >
        Saiba mais
      </Button>
    </Card>
  );
};

export default SalesItem;
