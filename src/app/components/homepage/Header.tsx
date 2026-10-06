import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import NavLinks from "./NavLinks";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="border-t border-black">

  {/* Top Header */}
  <div className="container mx-auto relative flex items-center justify-center pt-6 pb-3">

    {/* Logo + Name - Center */}
    <Link href='#'>
    <div className="flex items-center gap-3">
      <Image
        src={logo}
        alt="Bangla News 24"
        width={60}
        height={60}
        priority
      />

      <div>
        <h1 className="text-4xl font-bold text-red-700">
          Bangla News 24
        </h1>

        <p className="text-sm text-gray-500">
          {date}
        </p>
      </div>
    </div>
    </Link>

    {/* Login - Right */}
    <div className="absolute right-0 flex items-center gap-4">
      <button className="text-gray-700">
        সাইন ইন
      </button>

      <button className="rounded-md bg-red-700 px-5 py-3 text-white">
        সাইন আপ
      </button>
    </div>

  </div>

    <NavLinks />
  

</header>
  );
};

export default Header;
