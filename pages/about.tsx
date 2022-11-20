import React from "react";
import Image from "next/image";
import Footer from "../components/footer";

function About() {
  return (
    <div className="text-white px-10 py-5">
      <Image src="logo.svg" width={120} height={60} alt="logo" />
      <Footer />
    </div>
  );
}

export default About;
