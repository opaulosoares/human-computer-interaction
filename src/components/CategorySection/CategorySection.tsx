import { CssBaseline, useTheme } from "@mui/material";
import { Skeleton, Stack, Typography } from "@mui/material";
import React from "react";
import { tokens } from "../../theme";

const categories = [
    {
        name: "Plantas",
        img: "https://i.ibb.co/XYW0m1p/9e9a72f9e8d346b4490b16c889b045ac.png",
    },
    {
        name: "Rega",
        img: "https://a-static.mlcdn.com.br/450x450/regador-plastico-5l-metasul-verde-universal/centercoisas/13083423942/1a6153ae3327f76b309fc8c019b4a9ef.jpg",
    },
    {
        name: "Vasos e Recipientes",
        img: "https://i.ibb.co/dP1F3zM/vaso-10-plastico-grande.png",
    },
    {
        name: "Acessórios",
        img: "https://i.ibb.co/0mjS6Yz/tesoura-de-poda-78316501.gif",
    },
];

const CategorySection: React.FC = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <>
            <Stack
                gap={4}
                py={8}
                alignItems={"center"}
                width={"100%"}
                height={"100%"}
            >
                <Typography variant="h4" color={colors.neutral[1]}>
                    Categorias
                </Typography>
                <Stack direction={"row"} gap={2} width={"100%"}>
                    {categories.map((category) => (
                        <Stack
                            width={"100%"}
                            p={2}
                            bgcolor={colors.neutralTransparent[10]}
                            justifyContent={"space-between"}
                            alignItems={"center"}
                            borderRadius={2}
                            gap={2}
                        >
                            <img
                                src={category.img}
                                style={{
                                    width: "100%",
                                    height: 256,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "white",
                                    borderRadius: 4,
                                }}
                            />
                            <Stack>
                                <Typography
                                    variant="h5"
                                    color={colors.grass[1]}
                                >
                                    {category.name}
                                </Typography>
                            </Stack>
                        </Stack>
                    ))}
                </Stack>
            </Stack>
        </>
    );
};

export default CategorySection;
