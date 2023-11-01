import React from "react";
import BasePage from "../../templates/BasePage/BasePage";
import { Stack, Typography } from "@mui/material";
import HeroSectionHome from "../../components/HeroSectionHome/HeroSectionHome";
import CategorySection from "../../components/CategorySection/CategorySection";
import SalesSection from "../../components/SalesSection/SalesSection";

const Homepage: React.FC = () => {
    return (
        <BasePage>
            <Stack>
                <HeroSectionHome />
                <CategorySection />
                <SalesSection />
            </Stack>
        </BasePage>
    );
};

export default Homepage;
