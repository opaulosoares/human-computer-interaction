import {
    Button,
    Divider,
    IconButton,
    Stack,
    Typography,
    useTheme,
} from "@mui/material";
import React from "react";
import { tokens } from "../../theme";
import PlantadoLogo from "../PlantadoLogo/PlantadoLogo";
import SearchBar from "../SearchBar/SearchBar";
import { ShoppingCart } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const routes = [
    //Plantas, Acessórios, Vasos e Recipientes, Rega
    {
        name: "Plantas",
        path: "/plantas",
    },
    {
        name: "Rega",
        path: "/rega",
    },
    {
        name: "Vasos e Recipientes",
        path: "/vasos-e-recipientes",
    },
    {
        name: "Acessórios",
        path: "/acessorios",
    },
];

const Navbar: React.FC = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Stack
            bgcolor={colors.grass[1]}
            color={colors.neutral[12]}
            paddingX={16}
            paddingY={2}
            position={"sticky"}
            top={0}
            zIndex={999}
            gap={4}
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
        >
            <Stack>
                <NavLink to={"/"}>
                    <PlantadoLogo
                        colorText={colors.neutral[12]}
                        style={{ width: 128 }}
                    />
                </NavLink>
            </Stack>

            <Divider orientation="vertical" sx={{ height: "100%" }} />

            <Stack
                id="nav-links"
                direction={"row"}
                gap={2}
                alignItems={"center"}
                width={"100%"}
            >
                {routes.map((route) => (
                    <NavLink
                        to={route.path}
                        style={({ isActive }) => ({
                            color: isActive ? colors.grass[9] : "inherit",
                        })}
                    >
                        <Typography
                            key={route.name}
                            variant={"body2"}
                            sx={{
                                fontWeight: 500,
                                cursor: "pointer",
                                transition: "0.2s",
                                "&:hover": {
                                    color: colors.neutral[10],
                                },
                            }}
                        >
                            {route.name}
                        </Typography>
                    </NavLink>
                ))}
            </Stack>
            <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"flex-end"}
                gap={4}
                width={"50%"}
            >
                <Stack>
                    <SearchBar
                        placeholder="Vaso para orquídeas, mangueira para sprinkler, tesoura para poda..."
                        value={""}
                        onChange={() => {
                            console.log("search");
                        }}
                    />
                </Stack>

                <Stack>
                    <Button variant="contained">Entrar</Button>
                </Stack>
                <Stack>
                    <IconButton>
                        <ShoppingCart />
                    </IconButton>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default Navbar;
