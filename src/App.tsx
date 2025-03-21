import "./App.css";

import Header from "./components/Header";

function App() {
  return (
    <div className="bg-gradient-light text-neutral-700 min-h-screen">
      <div className="max-w-[1440px] px-32 pt-10">
        <Header />
        <section>filtros</section>
        <main>cards</main>
      </div>
    </div>
  );
}

export default App;
