import "./App.css";

import Filters from "./components/Filters";
import Header from "./components/Header";
import ListExtensions from "./components/ListExtensions";

function App() {
  return (
    <div className="flex justify-center bg-gradient-light text-neutral-700 min-h-screen">
      <div className="max-w-[1440px] w-full px-32 pt-10">
        <Header />
        <Filters />
        <ListExtensions />
      </div>
    </div>
  );
}

export default App;
