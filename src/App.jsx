import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import './index.css';
import { Toaster } from "./components/ui/toaster";

function App() {

  return (
    <>
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route index element={<Home />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
