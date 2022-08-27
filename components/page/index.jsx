import Head from "next/head";
import React from "react";

const Page = ({ title, children }) => {
  return (
    <div>
      <Head>
        <title>Trello Clone - {title}</title>
      </Head>
      {children}
    </div>
  );
};

export default Page;
