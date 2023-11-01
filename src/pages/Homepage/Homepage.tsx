import React from "react";
import BasePage from "../../templates/BasePage/BasePage";
import { Stack, Typography } from "@mui/material";
import HeroSectionHome from "../../components/HeroSectionHome/HeroSectionHome";
import CategorySection from "../../components/CategorySection/CategorySection";
import RecommendationBanner from "../../components/RecommendationBanner/RecommendationBanner";

const Homepage: React.FC = () => {
    return (
        <BasePage>
            <Stack>
                <HeroSectionHome />
                <RecommendationBanner />
                <CategorySection />
            </Stack>
        </BasePage>
    );
};

export default Homepage;
