import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="px-5 py-3 bg-orange-800 shadow-sm font-work-sans ">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={50} height={30} />
        </Link>

        <div className="flex items-center gap-5 text-white font-bold">
          <>
            <Link href={"/"}>
              {" "}
              <span>Home</span>{" "}
            </Link>
            <Link href={"/about"}>
              {" "}
              <span>Sobre Nós</span>{" "}
            </Link>
            <Link href={"/contact"}>
              {" "}
              <span>Contato</span>{" "}
            </Link>
          </>
        </div>
      </nav>
    </header>
  );
};

export default Header;
