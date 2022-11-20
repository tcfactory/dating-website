import React from "react";
import SliderContainer, { SliderItem } from "./slider";
import Image from "next/image";

const Clients: React.FC = () => (
  <>
    <SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
      <SliderItem width={125}>
        <Image
          src="people/WhatsApp Image 2022-06-29 at 1.08.21 PM.jpeg"
          width={150}
          height={200}
          alt="person1"
          objectFit="contain"
        ></Image>
      </SliderItem>
      <SliderItem width={125}>
        <Image
          src="people/WhatsApp Image 2022-06-29 at 1.38.50 PM (1).jpeg"
          width={150}
          height={200}
          alt="person1"
          objectFit="contain"
        ></Image>
      </SliderItem>
      <SliderItem width={125}>
        <Image
          src="people/WhatsApp Image 2022-06-29 at 1.38.50 PM (2).jpeg"
          width={150}
          height={200}
          alt="person1"
          objectFit="contain"
        ></Image>
      </SliderItem>
      <SliderItem width={125}>
        <Image
          src="people/WhatsApp Image 2022-06-29 at 1.44.22 PM.jpeg"
          width={150}
          height={200}
          alt="person1"
          objectFit="contain"
        ></Image>
      </SliderItem>
      <SliderItem width={125}>
        <Image
          src="people/WhatsApp Image 2022-06-29 at 1.50.34 PM.jpeg"
          width={150}
          height={200}
          alt="person1"
          objectFit="contain"
        ></Image>
      </SliderItem>
      <SliderItem width={125}>
        <Image
          src="people/WhatsApp Image 2022-06-29 at 12.20.12 PM.jpeg"
          width={150}
          height={200}
          alt="person1"
          objectFit="contain"
        ></Image>
      </SliderItem>
      <SliderItem width={125}>
        <Image
          src="people/WhatsApp Image 2022-06-29 at 12.31.35 PM.jpeg"
          width={150}
          height={200}
          alt="person1"
          objectFit="contain"
        ></Image>
      </SliderItem>
    </SliderContainer>
    <SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
      <SliderItem width={125}>
        <Image
          src="people/WhatsApp Image 2022-06-29 at 2.17.02 AM.jpeg"
          width={150}
          height={200}
          alt="person1"
          objectFit="contain"
        ></Image>
      </SliderItem>
      <SliderItem width={125}>
        <Image
          src="people/WhatsApp Image 2022-06-29 at 11.02.56 AM.jpeg"
          width={150}
          height={200}
          alt="person1"
          objectFit="contain"
        ></Image>
      </SliderItem>
      <SliderItem width={125}>
        <Image
          src="people/WhatsApp Image 2022-06-29 at 11.31.24 AM.jpeg"
          width={150}
          height={200}
          alt="person1"
          objectFit="contain"
        ></Image>
      </SliderItem>
      <SliderItem width={125}>
        <Image
          src="people/WhatsApp Image 2022-06-29 at 11.37.05 AM.jpeg"
          width={150}
          height={200}
          alt="person1"
          objectFit="contain"
        ></Image>
      </SliderItem>
      <SliderItem width={125}>
        <Image
          src="people/WhatsApp Image 2022-06-29 at 12.01.00 PM.jpeg"
          width={150}
          height={200}
          alt="person1"
          objectFit="contain"
        ></Image>
      </SliderItem>
      <SliderItem width={125}>
        <Image
          src="people/WhatsApp Image 2022-06-29 at 12.14.39 PM.jpeg"
          width={150}
          height={200}
          alt="person1"
          objectFit="contain"
        ></Image>
      </SliderItem>
    </SliderContainer>
  </>
);

export default Clients;
