export const metadata = {
  title: "Todo app",
  description: "Organize your life with this todo app",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
