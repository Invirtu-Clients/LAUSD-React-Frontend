//import Template from "./templates/esports";
import React from "react";
import ReactGA from 'react-ga';
import { lazy } from "react";

let Template = null;

let template_dir = process.env.REACT_APP_TEMPLATE_DIRECTORY;

if (template_dir) {

  Template  = React.lazy(() => import(`${template_dir}`));

} else {
  Template = require('./templates/error').default;
}

if(process.env.REACT_APP_GA_TRACKING_ID) {
    ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);
}

function App() {

  return (
    <>
      <Template />
    </>

  );
}

export default App;
