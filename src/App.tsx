import "./App.css";

import { useEffect, useState } from "react";

import { Extension } from "./vite-env";
import Filters from "./components/Filters";
import Header from "./components/Header";
import ListExtensions from "./components/ListExtensions";
import data from "./utils/data.json";

function App() {
  const [isDarkTheme, setIsDarkThem] = useState(true);
  const initialData = data;
  const [extensions, setExtensions] = useState<Extension[]>(initialData);

  useEffect(() => {
    const body = document.documentElement;
    if (isDarkTheme) {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  }, [isDarkTheme]);
  return (
    <div className="flex justify-center bg-gradient-light dark:bg-gradient-dark text-neutral-700 dark:text-neutral-0 min-h-screen">
      <div className="max-w-[1440px] md:px-32 px-4 w-full pt-4 md:pt-9">
        <Header isDarkTheme={isDarkTheme} setIsDarkThem={setIsDarkThem} />
        <Filters data={initialData} setExtensions={setExtensions} />
        <ListExtensions data={extensions} />
      </div>
    </div>
  );
}

export default App;
