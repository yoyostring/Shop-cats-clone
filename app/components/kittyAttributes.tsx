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
    <div className="attributes-section">
      {/* Chonk Level */}
      <div className="attribute-group">
        <div className="attribute-label">CHONK LEVEL</div>
        <div className="attribute-row">
          <button
            onClick={() => handleChange(setChonkLevel, -1, chonkLevels.length)}
          >
            ◀
          </button>
          <span className="attribute-text">{chonkLevels[chonkLevel]}</span>
          <button
            onClick={() => handleChange(setChonkLevel, 1, chonkLevels.length)}
          >
            ▶
          </button>
        </div>
      </div>

      {/* Hair Length */}
      <div className="attribute-group">
        <div className="attribute-label">HAIR LENGTH</div>
        <div className="attribute-row">
          <button
            onClick={() => handleChange(setHairLength, -1, hairLengths.length)}
          >
            ◀
          </button>
          <span className="attribute-text">{hairLengths[hairLength]}</span>
          <button
            onClick={() => handleChange(setHairLength, 1, hairLengths.length)}
          >
            ▶
          </button>
        </div>
      </div>

      {/* Color Pattern */}
      <div className="attribute-group">
        <div className="attribute-label">COLOR/PATTERN</div>
        <div className="attribute-row">
          <button
            onClick={() =>
              handleChange(setColorPattern, -1, colorPatterns.length)
            }
          >
            ◀
          </button>
          <span className="attribute-text">{colorPatterns[colorPattern]}</span>
          <button
            onClick={() =>
              handleChange(setColorPattern, 1, colorPatterns.length)
            }
          >
            ▶
          </button>
        </div>
      </div>
    </div>
  );
};

export default KittyAttributes;
