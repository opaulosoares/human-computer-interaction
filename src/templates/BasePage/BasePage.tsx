import { Box, Container, CssBaseline, Stack, useTheme } from "@mui/material";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { tokens } from "../../theme";

interface BasePageProps {
    children: React.ReactNode;
}

// Template para a página principal (não inclui pagamentos e fluxos isolados)
const BasePage: React.FC<BasePageProps> = ({ children }: BasePageProps) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <>
            <CssBaseline />
            <Box
                sx={{
                    bgcolor: colors.neutral[12],
                }}
            >
                <Navbar />
                <Box
                    sx={{
                        overflowY: "auto",
                        overflowX: "none",
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        // Manter footer na parte de baixo da página
                        justifyContent: "space-between",
                        height: "100dvh",
                    }}
                >
                    <Container>{children}</Container>
                    <Footer />
                </Box>
            </Box>
        </>
    );
};

export default BasePage;
