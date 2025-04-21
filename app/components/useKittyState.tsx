// hooks/useKittyState.ts
import { useState } from "react";

export const useKittyState = () => {
  const [catName, setCatName] = useState<string>("");
  const [storeLocation, setStoreLocation] = useState<string>("");
  const [igUsername, setIgUsername] = useState<string>("");

  const [chonkLevel, setChonkLevel] = useState<number>(0);
  const [hairLength, setHairLength] = useState<number>(0);
  const [colorPattern, setColorPattern] = useState<number>(0);

  return {
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
  };
};
