import { Extension } from "../vite-env";
import { useState } from "react";

const FilterButtons = ({
  data,
  setExtensions,
}: {
  data: Extension[];
  setExtensions: (extensions: Extension[]) => void;
}) => {
  const [type, setType] = useState("All");

  const handleFilter = (type: string) => {
    setType(type);
    if (type === "All") {
      setExtensions(data);
    } else {
      setExtensions(
        data.filter((extension) => extension.isActive === (type === "Active"))
      );
    }
  };
  return (
    <div className="flex gap-2">
      <button
        className={`button-primary ${type === "All" ? "active" : ""}`}
        onClick={() => handleFilter("All")}
      >
        All
      </button>
      <button
        className={`button-primary ${type === "Active" ? "active" : ""}`}
        onClick={() => handleFilter("Active")}
      >
        Active
      </button>
      <button
        className={`button-primary ${type === "Inactive" ? "active" : ""}`}
        onClick={() => handleFilter("Inactive")}
      >
        Inactive
      </button>
    </div>
  );
};

export default FilterButtons;
