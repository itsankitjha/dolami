import React, { useState } from "react";
import { Container, useMediaQuery, useTheme } from "@mui/material";
import Header from "./components/Header";
import ProductGrid from "./components/ProductGrid";
import { products } from "./data/product"; // Import original products

const ProductMarketplace = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container maxWidth="xl">
      <div style={{ marginBottom: isMobile ? 170 : 64 }}>
        <Header setFilteredProducts={setFilteredProducts} />
      </div>
      <ProductGrid filteredProducts={filteredProducts} />
    </Container>
  );
};

export default ProductMarketplace;
