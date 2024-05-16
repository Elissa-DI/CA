import { Fragment } from "react";
import AppLayout from "@layout/app";
import Head from "next/head";
import Landing from "@components/home";

export default function Home() {
  return (
    <AppLayout>
      <Fragment>
        <Head>
          <title>CreativeAminu</title>
          <meta name="title" content="CreativeAminu" />
          <link rel="icon" href="/favicon.png" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="description"
            content="My personal portfolio as a graphic designer"
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.creativeaminu.com/" />
          <meta property="og:title" content="Creative Aminu" />
          <meta
            property="og:description"
            content="My personal portfolio as a graphic designer"
          />
        </Head>
        <Landing />
      </Fragment>
    </AppLayout>
  );
}
