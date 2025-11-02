import "./globals.css";

export const metadata = {
  title: "DishFuse — AI Menu Pricing & Profit Forecasting",
  description:
    "AI that increases restaurant margins by forecasting demand, optimizing pricing, and reducing waste automatically.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
