// app/password/page.js
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Grid,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ArrowForward, Visibility, VisibilityOff } from "@mui/icons-material";

const PasswordPage = () => {
  const [inputPassword, setInputPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const theme = useTheme();

  const handleSubmit = (e) => {
    e?.preventDefault();

    if (inputPassword === "fedev2024test") {
      console.log("pass");
      document.cookie = "password=fedev2024test; path=/";
      router.push("/");
    } else {
      alert("Incorrect password");
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        mt: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          maxWidth: 300,
          padding: 4,
          borderRadius: 2,
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <form
          autoComplete="off"
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextField
            color="primary"
            type={showPassword ? "text" : "password"}
            fullWidth
            variant="outlined"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
            required
            placeholder="Enter password"
            sx={{
              mb: 2,
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "none",
                  borderColor: "white",
                  borderWidth: "1px",
                },
                "&:hover fieldset": {
                  borderColor: "white",
                  borderWidth: "1px",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "white",
                  borderWidth: "1px",
                },
              },
              "& .MuiInputBase-input": {
                color: "white",
                textAlign: "center", // Center aligned placeholder
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    sx={{
                      color: "white",
                      display: inputPassword ? "block" : "none",
                    }}
                    edge="end"
                    onClick={() => setShowPassword((prevState) => !prevState)}
                    aria-label="toggle password visibility"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
              ...(inputPassword && {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      sx={{ color: "white" }}
                      edge="end"
                      onClick={() => setShowPassword((prevState) => !prevState)}
                      aria-label="toggle password visibility"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }),
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubmit();
              }
            }}
          />
          <IconButton
            type="submit"
            sx={{
              mt: 2,
              height: "auto",
              backgroundColor: "white",
              color: "black",
              "&:hover": {
                backgroundColor: "white",
                color: "black",
              },
              "&:active": {
                backgroundColor: "white",
                color: "black",
              },
              "&:focus": {
                backgroundColor: "white",
                color: "black",
              },
            }}
          >
            <ArrowForward />
          </IconButton>
        </form>
      </Box>
    </Container>
  );
};

export default PasswordPage;
