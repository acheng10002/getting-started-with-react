import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// App component can then be rendered within the DOM
// import App from "./App.jsx";
import {
  Greeting,
  MyFavFood,
  AppFive,
  TodoList,
  Bio,
  OtherAvatar,
  OtherTodoList,
  TodoListThree,
  TodoListFour,
  TodoListFive,
  AppSix,
  AppSeven,
  AppEight,
  AppNine,
  AppTen,
  AppEleven,
  AppTwelve,
  AppThirteen,
  AppFourteen,
  PackingList,
  PackingListOne,
  PackingListTwo,
  PackingListThree,
  PackingListFour,
  PackingListFive,
  PackingListSix,
} from "./Greeting.jsx";
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
    <Greeting />
    <MyFavFood />
    <AppFive />
    <TodoList />
    <Bio />
    <OtherAvatar />
    <OtherTodoList />
    <TodoListThree />
    <TodoListFour />
    <TodoListFive />
    <AppSix />
    <AppSeven />
    <AppEight />
    <AppNine />
    <AppTen />
    <AppEleven />
    <AppTwelve />
    <AppThirteen />
    <AppFourteen />
    <PackingList />
    <PackingListOne />
    <PackingListTwo />
    <PackingListThree />
    <PackingListFour />
    <PackingListFive />
    <PackingListSix />
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
     that the global state is being correctly shared between them 

props - properties, a way to pass data from a parent component to a child component
        they are read-only, immutable, and used to configure child components
     
What is JSX?
  syntax extension that lets me write HTML markup inside a JS file
  it's syntactic sugar for the React createElement function
  React element is a plain object, so JSX compiles down to plain objects
  Why do we use JSX?
    JSX outsources the separation of logic and markup to React
    a component has both rendering logic and content 
    JSX allows React to show more useful errors and warning messages
    Why React mixes markup with rendering logic?
      keeping an element's rendering logic and markup together means they stay in sync
        with each other on every edit
      unrelated details like a button and the sidebar are isolated from each other,
        making it safer to change either of them on their own
  What are the three rules of JSX?
    1. a single root element must be returned
    2. tags must be closed and wrapped
    3. camelCase Most things 
  How do I reference a dynamic value inside of my JSX?
    with curly braces

Difference between JSX and HTML
  JSX is a syntax extension of JavaScript

render a list of elements/components in JSX
  How do I render a list of elements/components in JSX?
    function App() {
      const animals = ["Lion", "Cow", "Snake", "Lizard"];
      return (
        <div>
          <h1>Animals: </h1>
          <ul>
            {animals.map((animal) => {
              return <li key={animal}>{animal}</li>;
            })}
          </ul>
        </div>
      );
    }

    function ListItem(props) {
      return <li>{props.animal}</li>
    }

    function List(props) {
      return (
        <ul>
          {props.animals.map((animal) => {
            return <ListItem key={animal} animal={animal} />;
          })}
        </ul>
      );
    }

function App() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <div>
      <h1>Animals: </h1>
      <List animals={animals} />
    </div>
  );
}

conditionally render UI
  What are the ways I could render UI conditionally?
  How would I conditionally return JSX?
    1. use the ternary operator 
    2. use the && operator
    3. use if, if/else, and switch statements
  
*/
