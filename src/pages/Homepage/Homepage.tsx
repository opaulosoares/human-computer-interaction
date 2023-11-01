import { Stack } from "@mui/material";
import React from "react";
import CategorySection from "../../components/CategorySection/CategorySection";
import HeroSectionHome from "../../components/HeroSectionHome/HeroSectionHome";
import RecommendationBanner from "../../components/RecommendationBanner/RecommendationBanner";
import SalesSection from "../../components/SalesSection/SalesSection";
import BasePage from "../../templates/BasePage/BasePage";

const Homepage: React.FC = () => {
    return (
        <BasePage>
            <Stack>
                <HeroSectionHome />
                <RecommendationBanner />
                <CategorySection />
                <SalesSection />
            </Stack>
        </BasePage>
    );
};

export default Homepage;
