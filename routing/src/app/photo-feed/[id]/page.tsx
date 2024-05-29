import Image from "next/image";
import wondersImages, { WonderImage } from "../wonders";

export default function PhotoPage({
  params: { id },
}: {
  params: { id: string };
}) {
  // NOTE: The ! at the end of the find function denotes that it will never return "undefined". But if we use an "id" here(comes from params) that doesn't exist in wonderImages,
  // it throws an error. The way to mitigate this is to make an error.tsx page, which results in that showing instead of showing next's generic error.
  const photo: WonderImage = wondersImages.find((p) => p.id === id)!;
  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto">
        <div>
          <h1 className="text-center text-3xl font-bold my-4">{photo.name}</h1>
        </div>
        <Image
          alt={photo.name}
          src={photo.src}
          className="w-full object-cover aspect-square "
        />

        <div className="bg-white py-4">
          <h3>{photo.photographer}</h3>
          <h3>{photo.location}</h3>
        </div>
      </div>
    </div>
  );
}
