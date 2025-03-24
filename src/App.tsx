import { useState } from "react"; import "./App.css";

import Filters from "./components/Filters";
import Header from "./components/Header";
import ListExtensions from "./components/ListExtensions";
import { Extension } from "./vite-env";
import data from "./utils/data.json";

function App() {
  const initialData = data;
  const [extensions, setExtensions] = useState<Extension[]>(initialData);
  return (
    <div className="flex justify-center bg-gradient-light text-neutral-700 min-h-screen">
      <div className="max-w-[1440px] w-full px-32 pt-10">
        <Header />
        <Filters data={initialData} setExtensions={setExtensions} />
        <ListExtensions data={extensions} />
      </div>
    </div>
  );
}

export default App;
