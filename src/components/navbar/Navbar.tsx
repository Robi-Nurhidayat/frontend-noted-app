import links from "@/utils/navlinks";
import Link from "next/link";
// import Logo from "public/logo.svg";
// import Image from "next/image";


const Navbar = () => {
  return (
    <header className="bg-[#27374D] flex justify-between items-center px-[100px] py-[25px] ">
      <nav className="flex  gap-x-[14px]">
        {/* <div className="logo">
          <Image src={Logo} alt="Logo" />
        </div> */}
        <ul className="flex items-center gap-x-[30px]">
          {links.map((link) => {
            return (
              <li
                key={link.id}
                style={{ fontWeight: "500" }}
                className="text-[20px] text-white hover:text-[#FF872E] duration-150"
              >
                <Link href={link.path}>{link.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="flex justify-between items-center gap-x-5 text-[18px] text-white">
        <Link href={"/register"} className="p-[6px_51px_7px_52px] border rounded-full hover:bg-white hover:text-[#222] duration-150">
          Daftar
        </Link>
        <Link href={"/login"} className="p-[6px_32px_7px_33px] border rounded-full hover:bg-white hover:text-[#222] duration-150">
          Akun Saya
        </Link>
      </div>

     
    </header>
  );
};
export default Navbar;
