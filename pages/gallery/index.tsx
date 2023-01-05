import React from "react";
import Head from "next/head";

type Props = {};

const Gallery = (props: Props) => {
  return (
    <>
      <Head>
        <title>Gallery View </title>
        <meta name='keywords' content='gallery' />
      </Head>
      <div>
        <h1>Art Gallery</h1>
      </div>
    </>
  );
};

export default Gallery;
