import { Suspense } from "react";
import {  Header } from "./components";
import { BrowserRouter as Router } from "react-router-dom";
import { Root } from "./router";

function App() {
  return (
    <Suspense fallback="loading....">
      <Router>
        <Header />
        <Root />
      </Router>
    </Suspense>
  );
}

export default App;
