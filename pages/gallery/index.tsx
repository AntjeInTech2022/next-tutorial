import React from "react";
import Head from "next/head";
import { User, Users } from "../../additional";
import { GetStaticProps } from "next";
import styles from "../../styles/Gallery.module.css";
import Link from "next/link";

export const getStaticProps: GetStaticProps<{ users: Users[] }> = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: Users[] = await res.json();

  return {
    props: {
      users,
    },
  };
};

interface GalleryProps {
  users: Users;
}

const Gallery = ({ users }: GalleryProps) => {
  // const Gallery = ({ users }: {users:Users}) => {

  console.log("fetched users", users);
  // const Gallery = ({users}) => {
  return (
    <>
      <Head>
        <title>Gallery View </title>
        <meta name='keywords' content='gallery' />
      </Head>
      <div>
        <h1>Art Gallery</h1>
        {users.map((user: User) => (
          <Link key={user.id} href={"/gallery/" + user.id}>
            <div className={styles.single}>
              <h3>{user.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Gallery;
