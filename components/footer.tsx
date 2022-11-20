import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => (
  <footer className="min-h-full flex gap-8 items-center justify-center bg-black text-white p-20 min-w-full lg:min-w-[500px]">
    <Link href="/"><Image src="logo.svg" width={60} height={60} alt="logo" /></Link>
    <Link href="/about">About Us</Link>
    <Link href="/terms">Terms & Conditions</Link>
    <Link href="/privacy">Privacy Policy</Link>
    <Link href="/pricing">Pricing</Link>
  </footer>
);   

export default Footer