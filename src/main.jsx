import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// App component can then be rendered within the DOM
// import App from "./App.jsx";
import "./index.css";

/* Vite - frontend build tool that provides a faster, more efficient
          development environment for web apps
          it's a lightweight, highly performant alternative to traditional
          build tools like Webpack
    during development, Vite serves my source files over native ESModules
    during build, Vite bundles my code using Rollup

main.jsx is the entry point of the app 
create a root object by invoking createRoot with an element
from my index.html 
invoke the render method which is attached to my root object */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <p>Hello, World!</p>
  </StrictMode>
);

/* React Developer Tools - helps debug my React app
                           analyzes my app's component tree structure along with 
                           the state and proprs of my components and provides
                           a detailed analysis of each compoment's performance
                           and rendering times 
   - helps debug my React app and verify that a component is receiving the correct 
     props and holding the correct state 
   - IDing the root cause of performance issues when some components are rendering
     slowly
   - inspecting the context values passed to each of my components and checking
     that the global state is being correctly shared between them */
