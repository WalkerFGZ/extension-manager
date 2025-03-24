const ToggleExtensionStatus = ({ status }: { status: boolean }) => {
  return (
    <label className="inline-flex items-center me-5 cursor-pointer">
      <input type="checkbox" value="" className="sr-only peer" checked={status} />
      <div className="relative w-9 h-5 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-neutral-400 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-red-600 dark:peer-checked:bg-red-600"></div>
    </label>
  );
};

export default ToggleExtensionStatus;
