import { motion } from "framer-motion";
import "@/styles/spinner.css";

export const LoadingSpinner = () => (
  <motion.div
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    style={{
      position: "fixed",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#f5f5f5",
      zIndex: 9999,
    }}
  >
    <div className="loadingio-spinner-bean-eater-2by998twmg8">
      <div className="ldio-yzaezf3dcmj">
        <div>
          <div /><div /><div />
        </div>
        <div>
          <div /><div /><div />
        </div>
      </div>
    </div>
  </motion.div>
);
