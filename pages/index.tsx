import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import AboutUs from "../components/aboutus";
import ContactUs from "../components/contactus";
import Footer from "../components/footer";
import Header from "../components/header";
import Masthead from "../components/masthead";
import Skills from "../components/skills";
import TrustedBy from "../components/trustedby";
import Works from "../components/works";
import Modal from "../components/signupmodal";

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Modal/>
      {/* <div className="flex min-h-screen flex-col items-center justify-center py-2"> */}
      <Header />
      <Head>
        <title>Crush in My Backyard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Masthead />
      <AboutUs />
      <Skills />
      <Works />
      <TrustedBy />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
