import "./global.css";

export const metadata = {
  title: "Todo app",
  description: "Organize your life with this todo app",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-[--very-light-gray]">{children}</body>
    </html>
  );
};

export default RootLayout;
