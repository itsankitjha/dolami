"use client";

import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Rating,
  Divider,
  CircularProgress,
  IconButton,
} from "@mui/material";
import { useRouter } from "next/navigation"; // Import the useRouter hook

import { products } from "@/app/data/product.js"; // Import the products data
import { ArrowBack } from "@mui/icons-material";

const ProductDetails = () => {
  const [productId, setProductId] = useState("");
  const [loading, setLoading] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const router = useRouter(); // Initialize the router

  useEffect(() => {
    const url = window.location.href;
    const id = url.substring(url.lastIndexOf("/") + 1);
    setProductId(id);
  }, [window.location.href]);

  // Find the product based on the productId
  const product = products.find((p) => p.productId == productId);

  if (productId > 15 && !product) {
    return (
      <Container>
        <Typography variant="h4" gutterBottom>
          Product Not Found
        </Typography>
      </Container>
    );
  }

  const handleAddToCart = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setAddedToCart(true);
      alert("Added to cart!");
    }, 1000); // Simulate a network request
  };

  const handleBack = () => {
    router.back(); // Navigate back to the previous page
  };

  return (
    <Container maxWidth="md" sx={{ padding: { xs: 3, sm: 4 } }}>
      {product && (
        <Box
          sx={{
            backgroundColor: "#2c2c2c",
            borderRadius: 2,
            padding: { xs: 2, sm: 3 },
            boxShadow: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
          }}
        >
          <IconButton
            onClick={handleBack} // Add the back button functionality
            aria-label="Back"
            sx={{
              position: "absolute",
              top: 10,
              left: 10,
              zIndex: 1,
              color: "#fff",
            }} // Adjusted to position at the top corner
          >
            <ArrowBack />
          </IconButton>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              color: "#ffffff",
              marginTop: 2,
              fontSize: { xs: "1.5rem", sm: "2rem" },
            }}
          >
            {product.productName}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "rgba(255, 255, 255, 0.7)", textAlign: "center" }}
          >
            Category: {product.category} | Subcategory: {product.subcategory}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "rgba(255, 255, 255, 0.7)" }}
          >
            Creator: {product.creatorName}
          </Typography>
          <Rating value={product.rating} readOnly size="large" sx={{ my: 2 }} />
          <Typography
            variant="body1"
            sx={{ color: "rgba(255, 255, 255, 0.7)" }}
          >
            Rating: {product.rating.toFixed(1)} / 5.0
          </Typography>
          <Typography variant="h6" sx={{ color: "#ffffff", marginTop: 2 }}>
            Price: ${product.price.toFixed(2)}
          </Typography>
          <Button
            variant="contained"
            sx={{
              marginTop: 3,
              backgroundColor: "#ff4040",
              "&:hover": {
                backgroundColor: "#e63939",
              },
            }}
            onClick={handleAddToCart}
            disabled={loading}
            aria-label="Add to cart"
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Add to Cart"
            )}
          </Button>
          {addedToCart && (
            <Typography variant="body2" sx={{ color: "green", marginTop: 1 }}>
              Item added to cart!
            </Typography>
          )}
          <Divider sx={{ my: 2, width: "100%" }} />
          <Typography variant="h6" sx={{ color: "#ffffff" }}>
            Description:
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "rgba(255, 255, 255, 0.7)" }}
          >
            {product.description}
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default ProductDetails;
