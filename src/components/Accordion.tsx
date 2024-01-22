import { motion, AnimatePresence } from "framer-motion";

type AccordionType = {
  title: string;
  content: string;
  i: number;
  expanded: boolean | number;
  setExpanded: (i: number | boolean) => void;
};

const Accordion: React.FC<AccordionType> = ({
  i,
  title,
  content,
  expanded,
  setExpanded,
}) => {
  const isOpen = i === expanded;

  return (
    <div className="border p-6 max-lg:p-4 rounded-2xl dark:border-gray-400 border-black/20 w-full max-w-3xl flex flex-col">
      <motion.header
        initial={false}
        animate={{}}
        onClick={() => setExpanded(isOpen ? false : i)}
        className="flex justify-between items-center cursor-pointer"
      >
        <h1 className="font-medium sub-header-text text-left">{title}</h1>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <svg
            role="button"
            width="10"
            height="7"
            viewBox="0 0 10 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.235277 1.01457L0.766527 0.483325C0.907178 0.342683 1.09794 0.263672 1.29684 0.263672C1.49574 0.263672 1.6865 0.342683 1.82715 0.483325L5.00028 3.65832L8.17434 0.483949C8.24399 0.414264 8.32669 0.358984 8.41771 0.321269C8.50873 0.283553 8.60629 0.264141 8.70481 0.264141C8.80333 0.264141 8.90089 0.283553 8.99191 0.321269C9.08293 0.358984 9.16563 0.414264 9.23528 0.483949L9.76653 1.0152C9.83645 1.08488 9.89192 1.16767 9.92978 1.25884C9.96763 1.35 9.98712 1.44774 9.98712 1.54645C9.98712 1.64516 9.96763 1.7429 9.92978 1.83406C9.89192 1.92523 9.83645 2.00802 9.76653 2.0777L5.53153 6.30989C5.39088 6.45053 5.20012 6.52954 5.00121 6.52954C4.80231 6.52954 4.61155 6.45053 4.4709 6.30989L0.235277 2.0752C0.0946357 1.93455 0.015625 1.74379 0.015625 1.54489C0.015625 1.34598 0.0946357 1.15523 0.235277 1.01457Z"
              fill="#84cc16"
            />
          </svg>
        </motion.div>
      </motion.header>

      <AnimatePresence initial={false}>
        {isOpen && (
          <>
            <motion.section
              key="content"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: "auto" },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{ duration: 0.8, linear: [0.04, 0.62, 0.23, 0.98] }}
            >
              <hr className=" dark:bg-gray-400/20 bg-[#65656733]/20 w-full my-4" />
              <div className="paragraph-text text-left">{content}</div>
            </motion.section>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
