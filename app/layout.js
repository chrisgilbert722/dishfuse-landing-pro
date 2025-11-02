export const metadata = {
  title: "DishFuse — AI Menu Pricing & Profit Forecasting",
  description:
    "AI that increases restaurant margins by forecasting demand, optimizing pricing, and reducing waste — instantly.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "Inter, system-ui, sans-serif",
          background: "#0B1222",
          color: "white",
        }}
      >
        {children}
      </body>
    </html>
  );
}
