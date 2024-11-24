"use client";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Rating,
  Link,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/navigation";

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#2c2c2c",
  color: theme.palette.common.white,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  borderRadius: theme.spacing(1),
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.3)",
  },
}));

const StyledCardMedia = styled(CardMedia)({
  aspectRatio: "1",
  backgroundColor: "#424242",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#ffffff",
  borderTopLeftRadius: "8px",
  borderTopRightRadius: "8px",
});

const CategoryText = styled(Typography)({
  textAlign: "center",
  whiteSpace: "pre-line",
  fontWeight: "bold",
  fontSize: "0.9rem",
});

const ProductName = styled(Typography)({
  fontWeight: "600",
  fontSize: "1.1rem",
  marginBottom: "0.5rem",
});

const CreatorName = styled(Typography)({
  color: "rgba(255, 255, 255, 0.7)",
  fontSize: "0.9rem",
  marginBottom: "0.5rem",
});

const PriceText = styled(Typography)({
  fontWeight: "bold",
  fontSize: "1.2rem",
  marginTop: "auto",
});

export default function ProductCard({
  category,
  subcategory,
  productName,
  creatorName,
  rating,
  price,
  productId,
}) {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/${productId}`); // Navigate to the product details page directly
  };

  return (
    <StyledCard elevation={0} sx={{ cursor: "pointer" }}>
      <StyledCardMedia>
        <CategoryText variant="body2">
          {category}
          {"\n"}
          {">" + subcategory}
        </CategoryText>
      </StyledCardMedia>
      <CardContent
        sx={{ display: "flex", flexDirection: "column", height: "100%" }}
      >
        <ProductName variant="subtitle1" component="h2">
          {productName}
        </ProductName>
        <CreatorName variant="body2">{creatorName}</CreatorName>
        <Box display="flex" alignItems="center" gap={0.5} mb={0.5}>
          <Rating value={rating} readOnly size="small" />
          <Typography variant="body2">{rating.toFixed(1)}</Typography>
        </Box>
        <PriceText variant="subtitle1">$ {price.toFixed(2)}</PriceText>
        <Box display="flex" justifyContent="flex-end" width="100%">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#f5f5f5",
              color: "#333",
              fontSize: "0.8rem",
              padding: "0.5rem 1rem",
            }}
            onClick={handleCardClick}
          >
            View Details
          </Button>
        </Box>
      </CardContent>
    </StyledCard>
  );
}
