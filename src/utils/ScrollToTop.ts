import React from "react";
import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";

interface ScrollToTopProps {
    children: ReactNode;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
};

export default ScrollToTop;
