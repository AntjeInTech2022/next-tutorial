import React from "react";
import Head from "next/head";
import { User, Users } from "../../additional";
import { GetStaticProps } from "next";
import styles from "../../styles/Gallery.module.css";

export const getStaticProps: GetStaticProps<{ users: Users[] }> = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: Users[] = await res.json();

  return {
    props: {
      users,
    },
  };
};

const Gallery = ({ users }) => {
  // const Gallery = (users: Users) => {
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
          <div key={user.id}>
            <a className={styles.single}>
              <h3>{user.name}</h3>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
