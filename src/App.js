import { Route, Routes } from "react-router-dom";
import AppBar from "./Components/AppBar";
import FeaturePage from "./Components/FeaturePage";
import PricingPage from "./Components/PricingPage";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div>
      <AppBar />
      <Routes>
        <Route path="/" element={<FeaturePage />}></Route>
        <Route path="/pricing" element={<PricingPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
