import "./globals.css";
import React from "react";

export const metadata = {
  title: "DishFuse — AI Menu Pricing & Profit Forecasting",
  description:
    "AI that increases restaurant margins by forecasting demand, optimizing pricing, and reducing waste automatically.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        style={{
          backgroundColor: "#0B1222",
          color: "white",
          margin: 0,
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
