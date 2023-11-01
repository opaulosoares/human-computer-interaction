import { useTheme } from "@emotion/react";
import { Image } from "@mui/icons-material";
import { Button, Card, CardMedia, Stack, Typography } from "@mui/material";
import { tokens } from "../../../theme";

interface Props {
  data: {
    nome: string;
    categoria: string;
    preco: number;
    imagem: string;
  };
}

const SalesItem: React.FC<Props> = (props) => {
  const { nome, imagem, preco, categoria } = props.data;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Card
      sx={{
        width: "220px",
        color: colors.neutral[1],
        bgcolor: "#fff",
        padding: "16px",
      }}
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
          width: "100%"
        }}
      >
        Saiba mais
      </Button>
    </Card>
  );
};

export default SalesItem;
