import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image
        src="/assets/logo.png"
        className=" rounded-sm "
        width={120}
        height={50}
        alt="TechBazr logo"
      />
    </div>
  );
};

export default Logo;
