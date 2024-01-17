import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" max-w-[1440px] w-full mx-auto px-6 lg:px-8 ">
      {children}
    </div>
  );
};

export default Layout;
