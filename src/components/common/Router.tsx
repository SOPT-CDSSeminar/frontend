import { BrowserRouter, Route, Routes } from "react-router-dom";

import Error404 from "../../pages/Error404";
import MyPage from "../../pages/MyPage";
import Review from "../../pages/Review";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyPage />} />
        <Route path="/" element={<Review />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
