import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import IndexPage from "@/pages/index";
import WipPage from "@/pages/wip";
import { LoadingSpinner } from "@/components/LoadingSpinner";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      const handleLoad = () => setLoading(false);
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingSpinner key="spinner" />}
      </AnimatePresence>
      <Routes>
        <Route element={<IndexPage />} path="/" />
        <Route element={<WipPage />} path="/wip" />
        <Route element={<WipPage />} path="/more" />
      </Routes>
    </>
  );
}

export default App;
