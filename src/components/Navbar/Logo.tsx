"use client";
import { useTheme } from "next-themes";
import Image from "next/image";

const Logo = () => {
  const { theme } = useTheme();
  console.log(theme);

  return (
    <div>
      {/* <Image
        src="/assets/logo.png"
        className=" rounded-sm "
        width={120}
        height={50}
        alt="TechBazr logo"
      /> */}
      <Image
        src={`/assets/logo-${theme === "dark" ? "black" : "white"}.jpg`}
        alt="TechBazr logo"
        className={`rounded-sm object-contain
        ${theme === "dark" ? "" : "  "} `}
        width={120}
        height={50}
      />
    </div>
  );
};

export default Logo;
