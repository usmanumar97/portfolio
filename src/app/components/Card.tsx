interface CardProps {
  text: string;
  style?: React.CSSProperties;
}

export default function Card({ style, text }: CardProps) {
  return (
    <div
      className="absolute px-1 py-4 text-xl text-center rounded-full ring ring-gray-700 font-extralight bg-storm w-[12rem] cursor-grab"
      style={style}
    >
      {text}
    </div>
  );
}
