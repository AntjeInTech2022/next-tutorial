import React from "react";
import Head from "next/head";

type Props = {};

const About = (props: Props) => {
  return (
    <>
      <Head>
        <title>Gallery | About </title>
        <meta name='keywords' content='gallery' />
      </Head>
      <div>
        <h1>About</h1>
        <p>
          This is a customized rebuilt of the NetNinja's next.js tutorial adding
          Typescript for learning purposes Source:
          https://github.com/iamshaunjp/nextjs-tutorial YouTube:
          https://www.youtube.com/playlist?list=PL4cUxeGkcC9g9gP2onazU5-2M-AzA8eBw
        </p>
        <p>
          Learning goals: - Setup of NextJs + Typescript - Pages & Routes -
          Adding Components - Linking between Pages - Creating a Layout
          Component - Adding styles - Custom 404 Page - Redirecting users -
          Images & Metadata - Fetching data. / getStaticProps - Dynamic routes
          part - Fetching single item
        </p>
      </div>
    </>
  );
};

export default About;
