"use client";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

type ConstraintsRef =
  | React.RefObject<HTMLElement>
  | React.MutableRefObject<HTMLElement | null>;

interface CardProps {
  text?: string;
  style?: React.CSSProperties;
  image?: string | StaticImageData;
  alt?: string;
  containerRef: ConstraintsRef; // <- accept both ref shapes
}

export default function Card({
  style,
  text,
  image,
  alt = "Card image",
  containerRef,
}: CardProps) {
  return image && !text ? (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="absolute z-10 cursor-grab"
      style={style}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    >
      <Image src={image} alt={alt} width={60} height={60} draggable={false} />
    </motion.div>
  ) : (
    <motion.div
      className="absolute z-10 px-1 py-4 text-xl text-center rounded-full ring ring-gray-700 font-extralight bg-storm w-[12rem] cursor-grab"
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    >
      {text}
    </motion.div>
  );
}
