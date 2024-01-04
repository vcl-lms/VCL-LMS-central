"use client";
import React, { FC, useEffect, useState } from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header";
import Hero from "./components/Route/Hero";
import Courses from "./components/Route/Courses";
import Reviews from "./components/Route/Reviews";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer";

interface Props { }

const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Login");

  return (
    <div>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Vishwa Cloud Lab" />
        <meta name="keywords" content="Programming, Cloud Computing, cloud computing, security, vcl, vishwa cloud lab, vishwacloudlab, VCL, AWS, AZURE, github, cloud computing" />

        <meta property="og:title" content="Vishwa Cloud Lab" />
        <meta property="og:description" content="Empowering Minds, Transforming Futures" />
        <meta property="og:image" content="/client/app/favicon.ico" />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />
      <Hero />
      <Courses />
      <Reviews />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Page;
