import { Extension } from "../vite-env";
import FilterButtons from "./FilterButtons";

const Filters = ({ data, setExtensions }: { data: Extension[]; setExtensions: (extensions: Extension[]) => void }) => {
  return (
    <section className="flex justify-between items-center pt-12">
      <div>
        <h1 className="text-3xl font-bold">Extensions List</h1>
      </div>

      <FilterButtons data={data} setExtensions={setExtensions} />
    </section>
  );
};

export default Filters;
