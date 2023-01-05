import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

type Props = {};

const NotFound = (props: Props) => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
    // console.log("use effect ran");
  }, []);

  return (
    <div className='not-found'>
      <h1>Oooops</h1>
      <h2>Page not found</h2>
      <p>
        Go back to the <Link href={"/"}>homepage</Link>
      </p>
    </div>
  );
};

export default NotFound;
