"use client";

import { ThemeProvider } from "@mui/material";
import ProductMarketplace from "./product-marketplace";
import theme from "./theme";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <ProductMarketplace />
    </ThemeProvider>
  );
}
