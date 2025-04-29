// KittyMaker.tsx
"use client";
import React from "react";
import KittyForm from "../components/kittyForm";
import KittyImage from "../components/kittyImage";
import KittyAttributes from "../components/kittyAttributes";
import { useKittyState } from "../components/useKittyState";
import { imageMap } from "../components/imageMap";
// import HighlightButton from "../components/HighlightButton";
import Link from "next/link";
import "../styles/cat.css";
import Image from "next/image";

const chonkLevels = ["Slim Jim", "Medium", "Chonky"];
const hairLengths = ["Short", "Medium", "Long"];
const colorPatterns = ["White", "Tabby", "Calico"];

const KittyMaker: React.FC = () => {
  const {
    catName,
    setCatName,
    storeLocation,
    setStoreLocation,
    igUsername,
    setIgUsername,
    chonkLevel,
    setChonkLevel,
    hairLength,
    setHairLength,
    colorPattern,
    setColorPattern,
  } = useKittyState();

  const imageKey = `${chonkLevels[chonkLevel]}_${hairLengths[hairLength]}_${colorPatterns[colorPattern]}`;
  const currentImage = imageMap[imageKey] || "/cute cat.jpeg";

  return (
    <div className="kitty-page">
      <Link href="/">
        <Image
          src="/shop-cats-logo.png"
          width={100}
          height={70}
          alt="Shop Cats Logo"
        />
      </Link>

      <h1 className="title">Nominate a Shop Cat</h1>

      <div className="main-content">
        <div className="form-section">
          <KittyForm
            catName={catName}
            setCatName={setCatName}
            storeLocation={storeLocation}
            setStoreLocation={setStoreLocation}
            igUsername={igUsername}
            setIgUsername={setIgUsername}
          />
        </div>

        <div className="image-section">
          {/* <h2>Kitty Maker</h2> */}
          <KittyImage imageSrc={currentImage} />
        </div>

        <div className="attributes-section">
          <KittyAttributes
            chonkLevel={chonkLevel}
            setChonkLevel={setChonkLevel}
            hairLength={hairLength}
            setHairLength={setHairLength}
            colorPattern={colorPattern}
            setColorPattern={setColorPattern}
          />
        </div>
      </div>

      <button className="submit-button">SUBMIT</button>
    </div>
  );
};

export default KittyMaker;
