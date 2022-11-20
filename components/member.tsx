import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  id: string;
  name: string;
  description: string;
  width: number
  height: number
}

const Member: React.FC<Props> = ({ id, name, description, width, height }) => (
  <div>
    <Image src={`/features/${id}.png`} alt={name} width={width} height={height} />
    <div className="text-2xl xl:text-3xl">{name}</div>
    <div className="text-xl pt-6">{description}</div>
  </div>
);

export default Member;
