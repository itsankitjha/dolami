import {
  Box,
  Typography,
  Grid,
  Link,
  Breadcrumbs,
  useMediaQuery,
} from "@mui/material";
import ProductCard from "../ProductCard";
import { products } from "../../data/product";

export default function ProductGrid({ filteredProducts }) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Box sx={{ p: 3, bgcolor: "#1a1a1a", minHeight: "100vh" }}>
      <Breadcrumbs
        separator="›"
        sx={{
          width: "fit-content",
          mb: 3,
          color: "white",
          justifyContent: isMobile ? "center" : "flex-start",
          alignItems: "center",
        }}
      >
        <Link
          underline="hover"
          color="inherit"
          href="/?category=Parent category"
        >
          Parent category
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/?category=Child category"
        >
          Child category
        </Link>
      </Breadcrumbs>
      <Grid container spacing={2}>
        {filteredProducts.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <ProductCard {...product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
