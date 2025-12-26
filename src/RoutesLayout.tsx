import { Route, Routes } from "react-router-dom";
import { AuthLayout } from "./layouts/AuthLayout";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { AppLayout } from "./layouts/AppLayout";
import { Products } from "./pages/app/Products";

export function RoutesLayout() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
      </Route>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Products />} />
      </Route>
    </Routes>
  );
}
