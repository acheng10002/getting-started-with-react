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
  
What are keys and why does React need them?
  Why does React need keys?
    so that React knows which item to update and re-render when I change a list
      when the list is changed either from a server or a user interaction,  
      React matches the keys of each of the previous list item to the updated list
      if there were any any changes, React will only update the items that have changed 
      as long as key are consistent and unique, React can handle the DOM effectively and efficiently
  How do I use keys? 
    keys are passed into the component or into a DOM element as a prop
What are good and bad examples of keys?
  Where should the key value ideally come from?
    they should be a unique identifier that is unique to each item in the list
  When can I use an array index as the key value?
    if I'm sure the list will remain unchanged through the application's life
  What is an anti-pattern when using keys? 
    keys should never be generated on the key
    if they are, a new key will get created for every render of the list
    key should be inferred from the data itself 
  using keys is not limited to rendering lists


<Component key={keyValue} />
// or
<div key={KeyValue} />


Passing data between components
  How does data flow between React components
    From child to parent?
      it doesn't
    From parent to child?
      data flows from parent components to child components only
    Both?
      just from parent to child, via props
      any changes made to the data only affect child components
  Why are props used in React?
    by using props, I can account for any number of variations with a single component
    How do I define default properties on a React component? What are some of the benefits of doing so?
      in order to stop repeating myself re-defininf common values, and to protect my app from undefined
      values, I can define default parameters to set as default values for props 
    How can I pass functions as props?
      The function is defined in the parent component.
      1. A reference to this function is passed through as the value for a prop on the child component/
         Pass props to the child component
      2. The function is received in the child component and is called on a click event/
         Read props inside the child component 
  Using data to create customizable reusable components

  What is state?
    state - data which is manipulated and reflected in my running program
            a component's memory
  How to use state in React
    What is the useState hook and how would I use it?
      useState hook is a built-in hook in React, and I would use it to define state in a functional
      component
      useState takes an initial value as a parameter, and returns an array with two elements that I can
      destructure to get: the current state value and a function to update the state value
      const [stateValue, setStateValue] = useState(initialValue);
  What happens when the state changes in React?
    What happens to a component when one of its states is changed?
      The component gets destroyed and recreated from scratch
      the entire component is recreated but this time the latest state value will be returned from useState
      rerendering happens - React efficiently updates the user interface in response to changes in the 
        underlying data
    What are some of the rules of hooks? 
      1. hooks can only be called from the top level of a functional component
      2. hooks can't be called from inside loops or conditions
*/
