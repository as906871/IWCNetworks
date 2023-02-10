import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Adding from "./pages/Adding";
import Header from "./pages/Header";
function App() {
  return (
    <BrowserRouter>
    <Header />
      <div>
        <ToastContainer position="top-center" />
        <Routes>
          <Route exact path="/" element={<Adding />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
