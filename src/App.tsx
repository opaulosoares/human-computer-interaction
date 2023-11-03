import { ColorModeContext, useMode } from "./theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import Homepage from "./pages/Homepage/Homepage";
import CartProvider from "./resources/cart/CartProvider";

function App() {
  const [theme, colorMode] = useMode();
  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Homepage />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
