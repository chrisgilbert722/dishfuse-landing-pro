import "./globals.css";

export const metadata = {
  title: "DishFuse — AI Menu Pricing & Profit Forecasting",
  description:
    "DishFuse helps restaurants increase profits by forecasting demand, pricing smarter, and reducing waste automatically.",
  openGraph: {
    title: "DishFuse — AI Menu Pricing & Profit Forecasting",
    description:
      "Boost restaurant margins with AI-powered forecasting and menu optimization.",
    url: "https://dishfuse.com",
    siteName: "DishFuse",
    images: [
      {
        url: "/logo-header.png",
        width: 1200,
        height: 630,
        alt: "DishFuse AI for Restaurants",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DishFuse — AI for Restaurants",
    description:
      "Increase margins, reduce waste, and automate pricing decisions with DishFuse AI.",
    images: ["/logo-header.png"],
  },
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
