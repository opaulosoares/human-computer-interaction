import React from "react";
import Stack from "@mui/material/Stack";
import { Button, Divider, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

const heroSectionTitle = "Novidades na loja";
const heroSectionSubtitle = "Novos produtos, novas experiências";
const CTA = "Confira nossas promoções";

const HeroSectionHome: React.FC = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Stack
            my={{ xs: 2, md: 4 }}
            borderRadius={2}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{
                backgroundImage: "url(https://i.ibb.co/m0bHVT3/fundo.png)",
                backgroundSize: "cover",
                boxShadow: "inset 0 0 0 2000px rgba(0,0,0,0.8)",
            }}
        >
            <Stack
                textAlign={"center"}
                justifyContent={"center"}
                alignItems={"center"}
                width={"100%"}
                height={"100%"}
                py={6}
            >
                <Typography variant="h1" color={colors.neutral[12]}>
                    {heroSectionTitle}
                </Typography>
                <Typography variant="body1" color={colors.neutral[12]}>
                    {heroSectionSubtitle}
                </Typography>
            </Stack>
            <Divider sx={{ width: "100%" }} />
            <Stack
                justifyContent={"center"}
                alignContent={"center"}
                height={"100%"}
                p={4}
            >
                <Button variant="contained">{CTA}</Button>
            </Stack>
        </Stack>
    );
};

export default HeroSectionHome;
