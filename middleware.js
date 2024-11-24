// middleware.js
import { NextResponse } from "next/server";

export function middleware(req) {
  const password = req.cookies.get("password");

  // Check if the request is for the password page
  if (req.nextUrl.pathname === "/password") {
    return NextResponse.next(); // Allow access to the password page
  }

  // Check if the password cookie is set and matches the expected password
  if (password?.value !== "fedev2024test") {
    // If not, redirect to the password entry page
    return NextResponse.redirect(new URL("/password", req.url));
  }
  console.log("next", "password");
  return NextResponse.next();
}

// Apply middleware to all routes
export const config = {
  matcher: ["/((?!api|_next|favicon.ico).*)"], // Exclude API routes and static files
};
