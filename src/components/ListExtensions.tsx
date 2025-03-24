import { Extension } from "../vite-env";
import ExtensionCard from "./ExtensionCard";
import data from "../utils/data.json";
import { useState } from "react";

const ListExtensions = () => {
  const [extensions, setExtensions] = useState<Extension[]>(data);
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-7">
      {extensions?.map((extension) => (
        <ExtensionCard key={extension.name} {...extension} />
      ))}
    </section>
  );
};

export default ListExtensions;
