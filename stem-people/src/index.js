import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import {
  ListOne,
  SplitList,
  NestedLists,
  FullList,
  RecipeList,
  PoemWithManualLoop,
  PoemWithFragment,
} from "./App.js";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <ListOne />
    <SplitList />
    <NestedLists />
    <FullList />
    <RecipeList />
    <PoemWithManualLoop />
    <PoemWithFragment />
  </StrictMode>
);

/* keys must be unique among siblings, it's ok to use the same keys for JSX nodes in different arrays
keys must not change 
a well-chosen key provides more information than the position within the array 

index as a key will lead to subtle and confusing bugs 
use a stable ID based on the data 

my components won't receive key as a prop 
key is only used as a hint by React itself 
if my component needs an id, I have to pass it as a separate prop */
