import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Select,
  MenuItem,
  IconButton,
  Box,
  styled,
  alpha,
} from "@mui/material";
import {
  Search as SearchIcon,
  Language as LanguageIcon,
  Person as PersonIcon,
  ShoppingCart as CartIcon,
} from "@mui/icons-material";
import Fuse from "fuse.js";
import { products as originalProducts } from "../../data/product";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  backgroundColor: alpha(theme.palette.common.white, 0.1),
  borderRadius: theme.shape.borderRadius,
  marginRight: theme.spacing(2),
  width: "100%",
  maxWidth: "600px",
}));

const SearchIconWrapper = styled(IconButton)(({ theme }) => ({
  height: "100%",
  color: theme.palette.common.white,
  "&:hover": {
    backgroundColor: "transparent",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: theme.spacing(2),
    width: "100%",
  },
}));

const CategorySelect = styled(Select)(({ theme }) => ({
  color: "inherit",
  "& .MuiSelect-select": {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
}));

const categories = [
  { value: "All", label: "All" },
  { value: "Avatars", label: "Avatars" },
  { value: "Fashion", label: "Fashion" },
];

export default function Header({ setFilteredProducts, showSearch = true }) {
  const [category, setCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
    filterProducts(selectedCategory, searchTerm);
  };

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    filterProducts(category, value);
  };

  const filterProducts = (category, searchTerm = "") => {
    let filtered = originalProducts;

    if (category && category !== "All") {
      filtered = filtered.filter((product) => product.category === category);
    }

    if (searchTerm) {
      const fuse = new Fuse(filtered, {
        keys: ["productName", "category", "subcategory"],
        threshold: 0.3,
      });
      const results = fuse.search(searchTerm);
      filtered = results.map((result) => result.item);
    }

    setFilteredProducts(filtered);
  };

  return (
    <AppBar
      position="fixed"
      sx={{ bgcolor: "#1a1a1a", borderBottom: "1px solid #515151" }}
    >
      <Toolbar
        sx={{
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          padding: { xs: "16px", sm: "8px 16px" },
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{ display: "flex", alignItems: "center", mb: { xs: 2, sm: 0 } }}
        >
          <Box component="span" sx={{ color: "#ff4040" }}>
            Logo
          </Box>
        </Typography>

        {showSearch && (
          <Search sx={{ mb: { xs: 2, sm: 0 } }}>
            <StyledInputBase
              placeholder="Search Products"
              inputProps={{ "aria-label": "search" }}
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <CategorySelect
              value={category}
              onChange={handleCategoryChange}
              displayEmpty
              inputProps={{ "aria-label": "category" }}
              sx={{ color: "#ffffff" }}
            >
              {categories.map((cat) => (
                <MenuItem
                  key={cat.value}
                  value={cat.value}
                  sx={{ color: "#ffffff" }}
                >
                  {cat.label}
                </MenuItem>
              ))}
            </CategorySelect>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
          </Search>
        )}

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton color="inherit">
            <LanguageIcon />
          </IconButton>
          <IconButton color="inherit">
            <PersonIcon />
          </IconButton>
          <IconButton color="inherit">
            <CartIcon sx={{ color: "#ff4040" }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
