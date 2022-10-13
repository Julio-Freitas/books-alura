import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() =>
  import("../pages").then(({ Home }) => ({ default: Home }))
);

const MyAccount = lazy(() =>
  import("../pages").then(({ MyAccount }) => ({ default: MyAccount }))
);

const Order = lazy(() =>
  import("../pages").then(({ Order }) => ({ default: Order }))
);



export const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/minha-conta" element={<MyAccount />}>
        <Route path="pedidos" element={<Order />} />
        <Route path="trocas" element={<h1>trocas</h1>} />
        <Route path="cupons" element={<h1>cupons</h1>} />
        <Route path="seus-dados" element={<h1>cupons</h1>} />
      </Route>
    </Routes>
  );
};
