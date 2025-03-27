import { Extension } from "../vite-env";
import ToggleExtensionStatus from "./ToggleExtensionStatus";

const ExtensionCard = ({ logo, name, description, isActive }: Extension) => {
  return (
    <article className=" bg-neutral-0 dark:bg-neutral-800 dark:border-neutral-600 border-1 rounded-2xl p-4 border-neutral-200 border">
      <div className="flex gap-4">
        <div>
          <img
            src={`../../public/images/${logo}`}
            className="w-[60px] min-w-[60px]"
            alt={name}
          />
        </div>
        <div className="max-w-[270px] pb-5 md:pb-10">
          <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-300 text-balance">
            {name}
          </h2>
          <p className="text-neutral-500 dark:text-neutral-300">
            {description}
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center pb-2">
        <button className="button-primary">Remove</button>
        <ToggleExtensionStatus status={isActive} />
      </div>
    </article>
  );
};

export default ExtensionCard;
