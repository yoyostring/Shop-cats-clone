import React from "react";
import Image from "next/image"; // If using Next.js, otherwise use <img> tag

interface KittyImageProps {
  imageSrc: string;
}

const KittyImage: React.FC<KittyImageProps> = ({ imageSrc }) => {
  return (
    <div style={{ flex: 1, textAlign: "center" }}>
      <h3>Kitty Maker</h3>
      <Image
        src={imageSrc}
        alt="Cat"
        width={200}
        height={200}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default KittyImage;
