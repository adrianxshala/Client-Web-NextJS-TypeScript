import React from "react";
// Adjust the path based on your project structure
import "../src/styles/styles";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">{children}</main> {/* Main content area */}
    </div>
  );
};

export default Layout;
