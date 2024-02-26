import "./global.css";

export const metadata = {
  title: "Todo app",
  description: "Organize your life with this todo app",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className="">
      <body className="bg-[--very-light-gray] dark:bg-[--very-dark-blue]">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
