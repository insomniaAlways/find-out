import React from "react";
import "./App.less";
import Navigation from "./navigation";
import "semantic-ui-less/semantic.less";

function App() {
  return <Navigation />;
}

// eslint-disable-next-line no-console
console.log(process.env.TEST_VALUE);
export default App;
