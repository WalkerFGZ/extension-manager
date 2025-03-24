import { Extension } from "../vite-env";
import ExtensionCard from "./ExtensionCard";
import { motion, AnimatePresence } from "framer-motion";

const ListExtensions = ({ data }: { data: Extension[] }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-7">
      <AnimatePresence mode="popLayout" initial={false}>
        {data?.map((extension, index) => (
          <motion.div
            key={extension.name}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            layout
            transition={{
              duration: 0.3,
              delay: index * 0.03,
              ease: "easeOut",
              layout: { duration: 0.3 }
            }}
          >
            <ExtensionCard {...extension} />
          </motion.div>
        ))}
      </AnimatePresence>
    </section>
  );
};

export default ListExtensions;
