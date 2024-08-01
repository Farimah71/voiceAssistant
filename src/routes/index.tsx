import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// Import elements lazily::begin
const MainLayout = lazy(() => import("../layout/main_layout"));
const Home = lazy(() => import("../pages/home"));
// Import elements lazily::end

const AppRoutes = () => {
  return (
    <Suspense fallback={<div className="text-white">Loading...</div>}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
