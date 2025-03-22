import FilterButtons from "./FilterButtons";

const Filters = () => {
  return (
    <section className="flex justify-between items-center pt-12">
      <div>
        <h1 className="text-3xl font-bold">Extensions List</h1>
      </div>

      <FilterButtons />
    </section>
  );
};

export default Filters;
