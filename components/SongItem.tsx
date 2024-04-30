"use client";

import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types";
import Image from "next/image";
import PlayButton from "./PlayButton";

interface SongItemProps {
  data: Song;
  onClick: (id: string) => void;
}

const SongItem: React.FC<SongItemProps> = ({ data, onClick }) => {
  const imagePath = useLoadImage(data);
  return (
    <div
      className="relative group flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3 "
      onClick={() => onClick(data.id)}
    >
      <div className="relative aspect-square w-full h-full rounded-md overflow-hidden ">
        <Image
          className="object-cover"
          src={imagePath || "/images/songdef.png"}
          alt="songImage"
          fill
        />
      </div>

      <div className="flex flex-col text-start w-4 pt-4 gap-y-1">
        <p className="font-semibold truncate">{data.title}</p>
        <p className="text-neutral-400 text-sm pb-4 truncate">
          By {data.author}
        </p>
      </div>

      <div className="absolute bottom-24 right-5 ">
        <PlayButton />
      </div>
    </div>
  );
};

export default SongItem;
