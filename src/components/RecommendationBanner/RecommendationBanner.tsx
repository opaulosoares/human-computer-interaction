import { Search } from "@mui/icons-material";
import { Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../../theme";

const RecommendationBanner: React.FC = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Stack
            sx={{
                color: colors.neutral[1],
                px: 2,
                py: 8,
                justifyContent: "center",
                alignItems: "center",
                bgcolor: colors.grass[12],
                mt: 2,
                borderRadius: 2,
            }}
        >
            <Stack direction={"row"}>
                <Search />
                <Typography variant="h5">
                    Descubra qual planta é perfeita pra você!
                </Typography>
            </Stack>
            <Typography variant="body1">
                Um sistema de recomendação para te auxiliar a escolher a planta
                certa.
            </Typography>
        </Stack>
    );
};

export default RecommendationBanner;
