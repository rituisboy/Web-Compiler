import { useState } from "react";
import { ThemeProvider } from "@/components/theme-provider";

import Header from "./components/Header";
import Home from "./pages/Home";
import Compiler from "./pages/Compiler";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Toaster position="bottom-center" theme="dark" />

      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/compiler" element={<Compiler />} />
          <Route path="/compiler/:urlId" element={<Compiler />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
