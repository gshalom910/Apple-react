import "./CommonResource/css/bootstrap.css";
import "./CommonResource/css/styles.css";
import Main from "./components/Main/Main";
import SharedLayouts from "./components/SharedLayouts/SharedLayouts";
import { Routes, Route } from "react-router-dom";
import TemplatePage from "./components/Pages/TemplatePage/TemplatePage";
import SingleAppleProduct from "./components/Pages/SingleAppleProduct/SingleAppleProduct";
import IphonePage from "./components/Pages/IphonePage/IphonePages";
import Four04 from "./components/Pages/Four04/Four04";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayouts />}>
        <Route index element={<Main />} />
        <Route path="mac" element={<TemplatePage title="Mac" />} />
        <Route path="iphone" element={<SingleAppleProduct />} />
        <Route path="iphone/:productID" element={<IphonePage />} />
        <Route path="ipad" element={<TemplatePage title="Ipad" />} />
        <Route path="watch" element={<TemplatePage title="Watch" />} />
        <Route path="tv" element={<TemplatePage title="Tv" />} />
        <Route path="music" element={<TemplatePage title="Music" />} />
        <Route path="support" element={<TemplatePage title="Support" />} />
        <Route path="cart" element={<TemplatePage title="cart" />} />
        <Route path="*" element={<Four04 />} />
      </Route>
    </Routes>
  );
}

export default App;
