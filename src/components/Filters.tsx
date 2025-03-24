import { Extension } from "../vite-env";
import FilterButtons from "./FilterButtons";

const Filters = ({ data, setExtensions }: { data: Extension[]; setExtensions: (extensions: Extension[]) => void }) => {
  return (
    <section className="flex justify-between items-center pt-7 pb-2 md:pb-0 gap-3 md:gap-0 md:pt-12 flex-col md:flex-row">
      <div>
        <h1 className="text-3xl font-bold">Extensions List</h1>
      </div>

      <FilterButtons data={data} setExtensions={setExtensions} />
    </section>
  );
};

export default Filters;
