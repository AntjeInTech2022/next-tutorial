import React from "react";
import Link from "next/link";
import Image from "next/image";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav>
      <div className='logo'>
        <Image src='/logo_small.png' alt={""} width={50} height={50} />
        {/* <h1>Art Gallery</h1> */}
      </div>
      <Link href={"/"}>Home</Link>
      <Link href={"/about"}>About</Link>
      <Link href={"/gallery"}>Gallery</Link>
    </nav>
  );
};

export default Navbar;
