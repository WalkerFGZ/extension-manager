import ToggleExtensionStatus from "./ToggleExtensionStatus";
import icon from "../assets/images/logo-link-checker.svg";

const ExtensionCard = () => {
  return (
    <article className="bg-neutral-0 rounded-xl p-4">
      <div className="flex gap-4">
        <div>
          <img src={icon} />
        </div>
        <div className="max-w-[250px] pb-4">
          <h2 className="text-lg font-bold text-neutral-800">DevLens</h2>
          <p className="text-neutral-500">
            Quickly inspect page layouts and visualize element boundaries
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <button className="button-primary">Remove</button>
        <ToggleExtensionStatus />
      </div>
    </article>
  );
};

export default ExtensionCard;
