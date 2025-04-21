// KittyForm.tsx
import React from "react";

interface KittyFormProps {
  catName: string;
  setCatName: (name: string) => void;
  storeLocation: string;
  setStoreLocation: (location: string) => void;
  igUsername: string;
  setIgUsername: (username: string) => void;
}

const KittyForm: React.FC<KittyFormProps> = ({
  catName,
  setCatName,
  storeLocation,
  setStoreLocation,
  igUsername,
  setIgUsername,
}) => {
  return (
    <form className="kitty-form">
      <div className="form-field">
        <label htmlFor="catName">CAT NAME *</label>
        <input
          id="catName"
          type="text"
          value={catName}
          onChange={(e) => setCatName(e.target.value)}
        />
      </div>

      <div className="form-field">
        <label htmlFor="storeLocation">STORE LOCATION *</label>
        <input
          id="storeLocation"
          type="text"
          value={storeLocation}
          onChange={(e) => setStoreLocation(e.target.value)}
        />
      </div>

      <div className="form-field">
        <label htmlFor="igUsername">YOUR IG USERNAME</label>
        <input
          id="igUsername"
          type="text"
          value={igUsername}
          onChange={(e) => setIgUsername(e.target.value)}
        />
      </div>
    </form>
  );
};

export default KittyForm;
