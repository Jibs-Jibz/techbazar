import React, { ReactNode } from "react";

const Layout = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={`max-w-[1440px] w-full mx-auto px-6 lg:px-8 ${className} `}>
      {children}
    </div>
  );
};

export default Layout;
