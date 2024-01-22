"use client";
import { useTheme } from "next-themes";
import Image from "next/image";

const Logo = () => {
  const { theme } = useTheme();
  console.log(theme);

  console.log(theme === "system");

  return (
    <div>
      <Image
        src={`/assets/new-logo-blueblack-removebg.png`}
        alt="TechBazr logo"
        className={`rounded-sm  object-contain
        ${theme === "dark" ? "" : "  "} `}
        width={120}
        height={50}
      />
      {/* <Image
        src={`/assets/new-logo-white.png`}
        alt="TechBazr logo"
        className={`rounded-sm dark:hidden block object-contain
        ${theme === "dark" ? "" : "  "} `}
        width={200}
        height={50}
      /> */}
    </div>
  );
};

export default Logo;
