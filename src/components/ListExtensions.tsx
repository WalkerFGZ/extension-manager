import { Extension } from "../vite-env";
import ExtensionCard from "./ExtensionCard";
import data from "../utils/data.json";
import { useState } from "react";

const ListExtensions = () => {
  const [extensions, setExtensions] = useState<Extension[]>(data);

  console.log(data);

  return (
    <section>
      <ExtensionCard />
      {/* {extensions?.map((extension) => (
        <div key={extension.name}>
          <h2>{extension.name}</h2>
          <p>{extension.description}</p>
        </div>
      ))} */}
    </section>
  );
};

export default ListExtensions;
