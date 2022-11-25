//import Template from "./templates/esports";
import React from "react";
import { lazy } from "react";

let Template = null;

let template_dir = './templates/esports/index.js';

if (template_dir) {

  Template  = React.lazy(() => import(`${template_dir}`));

} else {
  Template = require('./templates/error').default;
}


function App() {

  return (
    <>
      <Template />
    </>

  );
}

export default App;
