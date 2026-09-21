import { BrowserRouter, Routes, Route } from "react-router";
import CenteredLayout from "./layouts/CenteredLayout";
import HomePage from "./pages/HomePage";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<CenteredLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}