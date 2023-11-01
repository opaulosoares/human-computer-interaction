import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    IconButton,
    Stack,
    Typography,
    useTheme,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import PlantadoLogo from "../PlantadoLogo/PlantadoLogo";
import { tokens } from "../../theme";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import {
    ExpandMore as ExpandMoreIcon,
    Spa as EcoIcon,
} from "@mui/icons-material";

const hierarchy = [
    {
        categoria: "Plantas",
        subcategorias: [
            "Plantas de Interior",
            "Suculentas",
            "Plantas de Folhas Grandes",
            "Plantas de Pendurar",
            "Cactos",
            "Plantas de Exterior",
            "Árvores",
            "Arbustos",
            "Flores",
            "Plantas de Jardim",
            "Orquídeas",
        ],
    },
    {
        categoria: "Vasos e Recipientes",
        subcategorias: [
            "Vasos de Cerâmica",
            "Vasos de Plástico",
            "Vasos de Madeira",
            "Sementes de Plantas",
        ],
    },
    {
        categoria: "Acessórios",
        subcategorias: [
            "Suportes para Plantas",
            "Pratos para Vasos",
            "Estacas de Jardim",
            "Termômetros para Plantas",
        ],
    },
    {
        categoria: "Rega",
        subcategorias: ["Regadores", "Mangueiras", "Borrifadores"],
    },
    {
        categoria: "Proteção",
        subcategorias: [
            "Repelentes de Pragas",
            "Tesouras de Podar",
            "Tesouras de Jardim",
            "Fitas de Enxertia",
            "Tratamentos",
            "Fertilizantes",
            "Inseticidas",
            "Fungicidas",
        ],
    },
];

const Footer: React.FC = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Stack
            bgcolor={colors.grass[1]}
            color={colors.neutral[12]}
            paddingX={16}
            paddingY={4}
            direction={"column"}
            alignItems={"center"}
            gap={4}
        >
            <Stack
                id="plantado-and-social-media"
                direction={"row"}
                width={"100%"}
                justifyContent={"space-between"}
            >
                <Stack>
                    <NavLink to={"/"}>
                        <PlantadoLogo
                            colorText={colors.neutral[12]}
                            style={{ width: 128 }}
                        />
                    </NavLink>
                </Stack>

                <Stack direction={"row"} id="social-media-list">
                    <IconButton>
                        <Instagram />
                    </IconButton>
                    <IconButton>
                        <Facebook />
                    </IconButton>
                    <IconButton>
                        <Twitter />
                    </IconButton>
                    <IconButton>
                        <YouTube />
                    </IconButton>
                </Stack>
            </Stack>
            <Stack direction={"row"} gap={8}>
                <Stack direction={"row"} width={"100%"} gap={4}>
                    {hierarchy.map((categoria) => (
                        <Stack gap={1}>
                            <Typography variant="h5">
                                {categoria.categoria}
                            </Typography>
                            <Stack>
                                {categoria.subcategorias.map((subcategoria) => (
                                    <Typography variant="body2">
                                        {subcategoria}
                                    </Typography>
                                ))}
                            </Stack>
                        </Stack>
                    ))}
                </Stack>
                <Stack id="ecology-text" spacing={2} width={"60%"}>
                    <Typography variant="h4">
                        A Plantado está comprometida com medidas para combate ao
                        desmatamento
                    </Typography>
                    <Typography>
                        O desmatamento é uma questão crítica que afeta nosso
                        planeta. Na Plantado, estamos empenhados em tomar
                        medidas proativas para combater esse problema. Nós nos
                        comprometemos a promover práticas sustentáveis,
                        preservar habitats naturais e apoiar iniciativas de
                        reflorestamento.
                    </Typography>
                    <Typography>
                        Além disso, estamos em parceria com organizações
                        ambientais e dedicamos parte dos nossos lucros para
                        programas de conservação florestal. Acreditamos que cada
                        pequena ação faz a diferença para um futuro mais verde e
                        sustentável.
                    </Typography>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6">
                                Saiba mais sobre nossas iniciativas ambientais
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Aqui, na Plantado, trabalhamos ativamente para
                                reduzir nossa pegada de carbono e promover
                                práticas de negócios sustentáveis. Colaboramos
                                com especialistas e ativistas ambientais para
                                garantir que nossas operações sejam o mais
                                eco-friendly possível.
                            </Typography>
                            <Typography>
                                Nossos esforços se estendem desde a fonte de
                                nossos produtos até o modo como são entregues,
                                sempre priorizando o menor impacto ambiental.
                                Junte-se a nós nessa jornada para um planeta
                                mais saudável e próspero para todos.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default Footer;
