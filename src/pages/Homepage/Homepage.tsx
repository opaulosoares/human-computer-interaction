import React from "react";
import BasePage from "../../templates/BasePage/BasePage";
import { Stack, Typography } from "@mui/material";
import HeroSectionHome from "../../components/HeroSectionHome/HeroSectionHome";
import CategorySection from "../../components/CategorySection/CategorySection";

const Homepage: React.FC = () => {
    return (
        <BasePage>
            <Stack>
                <HeroSectionHome />
                <CategorySection />
            </Stack>
        </BasePage>
    );
};

export default Homepage;
