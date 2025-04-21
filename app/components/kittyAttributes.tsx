import React from "react";

//assigns integer values to all of these for mapping

interface KittyAttributesProps {
  chonkLevel: number;
  setChonkLevel: (value: number | ((prev: number) => number)) => void;
  hairLength: number;
  setHairLength: (value: number | ((prev: number) => number)) => void;
  colorPattern: number;
  setColorPattern: (value: number | ((prev: number) => number)) => void;
}

const chonkLevels = ["Slim Jim", "Medium", "Chonky"];
const hairLengths = ["Short", "Medium", "Long"];
const colorPatterns = ["White", "Tabby", "Calico"];

const KittyAttributes: React.FC<KittyAttributesProps> = ({
  chonkLevel,
  setChonkLevel,
  hairLength,
  setHairLength,
  colorPattern,
  setColorPattern,
}) => {
  const handleChange = (
    setter: (value: number | ((prev: number) => number)) => void,
    direction: number,
    length: number
  ) => {
    setter((prev: number) => (prev + direction + length) % length);
  };

  return (
    <div style={{ flex: 1, textAlign: "center" }}>
      <div>
        <button
          onClick={() => handleChange(setChonkLevel, -1, chonkLevels.length)}
        >
          ◀
        </button>
        <span>{chonkLevels[chonkLevel]}</span>
        <button
          onClick={() => handleChange(setChonkLevel, 1, chonkLevels.length)}
        >
          ▶
        </button>
      </div>
      <div>
        <button
          onClick={() => handleChange(setHairLength, -1, hairLengths.length)}
        >
          ◀
        </button>
        <span>{hairLengths[hairLength]}</span>
        <button
          onClick={() => handleChange(setHairLength, 1, hairLengths.length)}
        >
          ▶
        </button>
      </div>
      <div>
        <button
          onClick={() =>
            handleChange(setColorPattern, -1, colorPatterns.length)
          }
        >
          ◀
        </button>
        <span>{colorPatterns[colorPattern]}</span>
        <button
          onClick={() => handleChange(setColorPattern, 1, colorPatterns.length)}
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default KittyAttributes;
