import { peopleListOne, recipes, sculptureList } from "./data.js";
import {
  getImageUrl,
  getImageUrlOne,
  getImageUrlTwo,
  getImageUrlThree,
} from "./utils.js";
import { Fragment, useState, useEffect } from "react";

/*
// data gets moved into an array
const people = [
  "Creola Katherine Johnson: mathematician",
  "Mario José Molina-Pasquel Henríquez: chemist",
  "Mohammad Abdus Salam: physicist",
  "Percy Lavon Julian: chemist",
  "Subrahmanyan Chandrasekhar: astrophysicist",
];
*/

/*
function List() {
  // map the people members into a new array of JSX nodes, listItems
  // node vs element - node is any object in the DOM tree; element are in an HTML element
  const listItems = people.map((person) => <li key="person.name">{person}</li>);

  // * each child in a list should have a unique "key" prop

  // return listItems from my component wrapped in a <ul>
  return <ul>{listItems}</ul>;
} 
*/

function ListOne() {
  /* 
  filter takes peopleListOne array, passes through a "test" (that returns true or false)
    and returns a new array of only those items that passed the test (returned true) 
  const chemists = peopleListOne.filter(
    (person) => person.profession === "chemist"
  );
  */

  // arrow function implicitly return the expression right after => so no return statement necessary
  const listItems = peopleListOne.map((person) => (
    /* each array item needs to get a key, a string or number that uniquely identifies it among other
    items in that array 
    keys tell React which array item each component corresponds to, so that it can match them up later 
    this is important if my array items can move due to sorting, get inserted, or deleted 
    a key helps React infer what exactly has happened, and make the correct updates to the DOM tree */
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));
  return <ul>{listItems}</ul>;
}

// splitting a list in two
function SplitList() {
  const chemists = peopleListOne.filter(
    (person) => person.profession === "chemist"
  );
  const chemistsListItems = chemists.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));
  const everyoneElse = peopleListOne.filter(
    (person) => person.profession !== "chemist"
  );
  const everyoneElseListItems = everyoneElse.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));
  return (
    <article>
      <h1>Chemists</h1>
      <ul>{chemistsListItems}</ul>
      <h1>Everyone Else</h1>
      <ul>{everyoneElseListItems}</ul>
    </article>
  );
}

/*
function Person({ person }) {
  return (
    <div>
      <p>Name: {person.name}</p>;<p>Age: {person.age}</p>;
      <p>Skill: {person.skill}</p>;
    </div>
  );
}
*/

/* JSX elements directly inside a map() call always needs keys 
keys tell React which array item each component corresponds to, 
so that it can match them up later */
function NameList() {
  const names = ["Bruce", "Clark", "Diana", "Bruce"];
  /*
  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 30,
      skill: "React",
    },
    {
      id: 2,
      name: "Clark",
      age: 15,
      skill: "Angular",
    },
    {
      id: 3,
      name: "Diana",
      age: 28,
      skill: "Vue",
    },
  ];
  */
  const nameList = names.map((name, index) => (
    <h2 key={index}>
      {index} {name}
    </h2>
  ));
  return <div>{nameList}</div>;
}

/* 
Index as key, only when:
1. items in list do not have unique id
2. list is a static list and will not change
3. list will never be reordered or filtered 
*/

/*
const ToDo = (props) => (
  <tr>
    <td>
      <label>{props.index}</label>
    </td>
    <td>
      <label>{props.id}</label>
    </td>
    <td>
      <input />
    </td>
    <td>
      <label>{props.createdAt.toLocaleTimeString()}</label>
    </td>
  </tr>
);

class ToDoListTwo extends React.Component {
  constructor() {
    super();
    const date = new Date();
    const todoCounter = 1;
    this.state = {
      todoCounter: todoCounter,
      list: [
        {
          id: todoCounter,
          createdAt: date,
        },
      ],
    };
  }

  sortByEarliest() {
    const sortedList = this.state.list.sort((a, b) => {
      return a.createdAt - b.createdAt;
    });
    this.setState({
      list: [...sortedList],
    });
  }

  sortByLatest() {
    const sortedList = this.state.list.sort((a, b) => {
      return b.createdAt - a.createdAt;
    });
    this.setState({
      list: [...sortedList],
    });
  }

  addToEnd() {
    const date = new Date();
    const nextId = this.state.todoCounter + 1;
    const newList = [...this.state.list, { id: nextId, createdAt: date }];
    this.setState({
      list: newList,
      todoCounter: nextId,
    });
  }

  addToStart() {
    const date = new Date();
    const nextId = this.state.todoCounter + 1;
    const newList = [{ id: nextId, createdAt: date }, ...this.state.list];
    this.setState({
      list: newList,
      todoCounter: nextId,
    });
  }

  render() {
    return (
      <div>
        <code>key=index</code>
        <br />
        <button onClick={this.addToStart.bind(this)}>Add New to Start</button>
        <button onClick={this.addToEnd.bind(this)}>Add New to End</button>
        <button onClick={this.sortByEarliest.bind(this)}>
          Sort by Earliest
        </button>
        <button onClick={this.sortByLatest.bind(this)}>Sort by Latest</button>
        <table>
          <tr>
            <th>Index</th>
            <th>ID</th>
            <th>Item</th>
            <th>Created at</th>
          </tr>
          {this.state.list.map((todo, index) => (
            <ToDo key={index} index={index} {...todo} />
          ))}
        </table>
      </div>
    );
  }
}
*/

// list of recipes from an array, need to nest two different map calls
function NestedLists() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        /* recipes already includes an id field to use as key in the outer loop
        ingredient name will serve a key in the inner loop 
        
        this is an array of <div>s so each of them needs a key */
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

/* JSX from the outer map is turned into a new Recipe component that returns that JSX
 arguments are now props to ExtractListItem */
function Recipe({ name, ingredients }) {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

function FullList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        /* pass all properties of the recipe object as props to the ExtractListItem component 
        <Recipe id={recipe.id} name={recipe.name} ingredients={recipe.ingredients} key={recipe.id} /> 
        key is specified on <ExtractListItem> component itself rather than the root <div> returned from
        <ExtractListItem> 
        before, I had an array of <div>s so each of them need a key
        now, I have an array of <ExtractListItem>s 
        when I extract a component, I need to leave the key outside the JSX I can copy and paste 
        
        this is an array of <ExtractListItem>s */
        <Recipe {...recipe} key={recipe.id} />
      ))}
    </div>
  );
}

// Ingredient component handles rendering of each ingredient
function Ingredient({ ingredient }) {
  return <li>{ingredient}</li>;
}

// IngredientList component handles rendering of the ingredients list  using Ingredient component
function IngredientList({ ingredients }) {
  return (
    <ul>
      {ingredients.map((ingredient) => (
        <Ingredient key={ingredient} ingredient={ingredient} />
      ))}
    </ul>
  );
}

// ExtractListItem component handles rendering of the Recipe using IngredientList component
function ExtractListItem({ name, ingredients }) {
  return (
    <div>
      <h2>{name}</h2>
      <IngredientList ingredients={ingredients} />
    </div>
  );
}

// RecipeList component handles rendering of the entire list of recipes using the ExtractListItem component
function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        <ExtractListItem {...recipe} key={recipe.id} />
      ))}
    </div>
  );
}

const poem = {
  lines: [
    "I write, erase, rewrite",
    "Erase again, and then",
    "A poppy blooms.",
  ],
};

/*
function Poem() {
  return (
    <article>
      {poem.lines.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </article>
  );
}
*/

function PoemWithManualLoop() {
  let output = [];

  // Fill the output array
  poem.lines.forEach((line, i) => {
    output.push(
      /* each separator and paragraph are all now in the same array
      so each of them need to be given a distinct key using a suffix */
      <hr key={i + "-separator"} />
    );
    output.push(<p key={i + "-text"}>{line}</p>);
  });
  // Remove the first ,hr />
  output.shift();

  return <article>{output}</article>;
}

function PoemWithFragment() {
  return (
    <article>
      {poem.lines.map((line, i) => (
        /* <> </> does not support passing keys, so I have to write <Fragment> explicitly 
        if the index is greater than 0, so for every line except the first one, 
        put a horizontal line before the poem line */
        <Fragment key={i}>
          {i > 0 && <hr />}
          <p>{line}</p>
        </Fragment>
      ))}
    </article>
  );
}

/* I can use crypto.randomUUID() function to generate a unique id for each item */
const todos = [
  { task: "now the yard", id: crypto.randomUUID() },
  { task: "work on Odin Project", id: crypto.randomUUID() },
  { task: "feed the cat", id: crypto.randomUUID() },
];

function TodoList() {
  return (
    <ul>
      {todos.map((todo) => (
        /* using the already generated id as the key 
        do not do this:
         <li key={crypto.randomUUID()}>{todo.task}</li> */
        <li key={todo.id}>{todo.task}</li>
      ))}
    </ul>
  );
}

/* if I want the list to remain unchanged through the app's life, 
I can use the array index as a key */
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function MonthList() {
  return (
    <ul>
      {/* here using the index as key */}
      {months.map((month, index) => (
        <li key={index}>{month}</li>
      ))}
    </ul>
  );
}

/* props is a function argument, and the individual properties are then referenced 
within the component via props.propertyName */

/* 
function Button(props) {
  const buttonStyle = {
    color: props.color,
    fontSize: props.fontSize + "px",
  };

  return <button style={buttonStyle}>{props.text}</button>;
} 
*/

// prop destructuring in the component arguments allows for more concise and readable code
/* 
function Button({ text, color, fontSize }) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px",
  };

  return <button style={buttonStyle}>{text}</button>;
}
*/

/* default props - I can give a prop a default value, I can do it with destructuring by 
putting = and the default value right after the parameter

function Button({ text = "Click Me!", color = "blue", fontSize = 12 }) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px",
  };

  return <button style={buttonStyle}>{text}</button>;
}

/* the default value is used if the size prop is missing or if I pass size={undefined}
if I pass size={null} or size={0}, the default value will not be used 

function Avatar({ person, size = 100 }) {
  // ...
} */

function Button({ text, color, fontSize }) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px",
  };

  return <button style={buttonStyle}>{text}</button>;
}

// defaultProps was traditionally used to set default values for props in class components
Button.defaultProps = {
  text: "Click Me!",
  color: "blue",
  fontSize: 12,
};

/* variables can be passed to child components as props, and functions can be passed to 
child components as props */

function App() {
  return (
    /* prop values are defined on each of the Button components 
    inline styles are dynamically generated and then applied to button element 
    now I only need to supply prop values to Button when rendering within App if
    they differ from the default values defined in the function parameters */
    <div>
      <Button />
      <Button text="Don't Click Me!" color="red" />
      <Button fontSize={20} />
    </div>
  );
}

function ChildComponent(props) {
  const { title, count, user } = props;

  return (
    <div>
      <h2>Child Component</h2>
      <p>{title}</p>
      <p>Count: {count}</p>
      <p>
        User: {user.name}, Age: {user.age}
      </p>
    </div>
  );
}

function ParentComponent() {
  // variables defined in the parent component
  const title = "Hello from Parent";
  const count = 42;
  const user = { name: "Alice", age: 30 };

  return (
    <div>
      <h1>Parent Component</h1>
      {/* Passing variables to the child component as props */}
      <ChildComponent title={title} count={count} user={user} />
    </div>
  );
}

function ButtonOne({
  text = "Click Me!",
  color = "blue",
  fontSize = 12,
  handleClick,
}) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px",
  };

  return (
    // handleButtonClick is received in Button and is called on a click event
    <button onClick={handleClick} style={buttonStyle}>
      {text}
    </button>
  );
}

function AppOne() {
  // parent component defines handleButtonClick
  const handleButtonClick = () => {
    window.location.href = "https://www.google.com";
  };

  /* reference to handleButtonClick is passed as value for handleClick 
  prop on the Button component 
  passing though a reference to handleButtonClick, not calling the function
  as the button renders 
  
  every Button calling this function will navigate to the same page */
  return (
    <div>
      <ButtonOne handleClick={handleButtonClick} />
    </div>
  );
}

/* I can refactor the handleButtonClick function and supply an argument within
Button to customize the functionality */
function ButtonTwo({
  text = "Click Me!",
  color = "blue",
  fontSize = 12,
  handleClick,
}) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px",
  };

  /* I cannot write onClick={handleClick('www.theodinproject.com')},
  and instead have to attach a reference to an anonymous function 
  which then the function with the argument */
  return (
    <button
      onClick={() => handleClick("https://www.theodinproject.com")}
      style={buttonStyle}
    >
      {text}
    </button>
  );
}

function AppTwo() {
  const handleButtonClick = (url) => {
    window.location.href = url;
  };

  return (
    <div>
      <ButtonTwo handleClick={handleButtonClick} />
    </div>
  );
}

/* React components use props to communicate with each other, transfer data
every parent component can pass data to its child components by giving them props
I can pass any JS value through props, including objects, arrays, and functions 

How to pass props to a component
How to read props from a component
How to specify default values for props
How to pass some JSX to a component
How props change over time 

props are information that I pass to a JSX tag, 
exs. className, src, alt, width, height are props I can pass to <img> 
these props are predefined, ReactDOM conforms to the HTML standard */
function Avatar() {
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/1bX5QH6.jpg"
      alt="Lin Lanying"
      width={100}
      height={100}
    />
  );
}

function Profile() {
  return <Avatar />;
}

/* but I can pass any props to my own components, like <Avatar> to customize them */
function ProfileOne() {
  /* 1. Pass props to the child component 
        pass some props to Avatar: person (an object) and size (a number) */
  return (
    <Avatar person={{ name: "Lin Lanying", imageId: "1bX5Qh6" }} size={100} />
  );
}

/* 2. Read props inside the child component
      read these props by listing their names separated by commas insdie ({ and }) 
      add logic to Avatar that uses the person and size props for rendering 
      
      this configures Avatar to render many different ways with different props */
function AvatarTwo({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrlOne(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

/* I can think about parent and child components independently
- I can change the person or the size props inside Profile without having to think
  about how Avatar uses them 
- I can change how Avatar uses these props without looking at the Profile */

function ProfileTwo() {
  return (
    <div>
      <AvatarTwo
        size={100}
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
        }}
      />
      <AvatarTwo
        size={80}
        person={{
          name: "Aklilu Lemma",
          imageId: "OKS67lh",
        }}
      />
      <AvatarTwo
        size={50}
        person={{
          name: "Lin Lanying",
          imageId: "1bX5QH6",
        }}
      />
    </div>
  );
}

/* props serve the same role as arguments serve for functions
props ARE the only argument to my component 
React component function only take one argument, a props object
function AvatarThree(props) {
  let person = props.person;
  let size = props.size;
} */

/* I usually won't need the whole props object, so destructure it into 
individual props 
this destructuring syntax is equivalent to reading properies from a 
function parameter 
function AvatarFour({ person, size }) {
  //
} */

/* when passing props gets very repetitive...
function ProfileThree({ person, size, isSepia, thickBorder }) {
  return (
    <div className="card">
      <Avatar
        person={person}
        size={size}
        isSepia={isSepia}
        thickBorder={thickBorder}
      />
    </div>
  );
} */

/* components can forward all their props to their children, with the JSX spread syntax 
spread syntax should be used with restraint
if I'm using it in every other component, it indicates I should split my components
and pass children as JSX 
function ProfileFour(props) {
  return (
    <div className="card">
      <Avatar {...props} />
    </div>
  );
} */

/* passing JSX as children
it is common to nest built-in browser tags
sometimes, I'll want to nest my own components the same way
<Card>
  <Avatar />
</Card>

when I nest content inside a JSX tag, the parent component will receive that content 
in a prop called children */
function AvatarFive({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrlOne(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

/* Card component will receive a children prop set to <Avatar /> and render it in wrapper div 
a component with a children prop has a "hole" that can be "filled in" by its parent component
with arbitrary JSX 
the children prop will often be used for visual wrappers: panels, grids, etc. */
function Card({ children }) {
  return <div className="card">{children}</div>;
}

function ProfileFive() {
  return (
    <Card>
      <AvatarFive
        size={100}
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
        }}
      />
    </Card>
  );
}

/* Clock component receives two proprs from its parent, color and time 
a component may receive different props over time 
props are not always static:
- the time prop changes every second
- the color prop changes when I select another color 
props reflect a component's data at any point in time */

/*
function Clock({ color, time }) {
  return <h1 style={{ color: color }}>{time}</h1>;
}
*/

/* props are immutable
when a component needs to change its props, exs. in response to 
a user interaction or new data, it will have to "ask" its parent component
to pass it different props- a new object

props are read-only snapshots in time: every render receives a new version of props 

the parent component's old props will be cast aside, and the JS engine will 
reclaim the memory taken by them 

Don't try to "change props"
When I need to respond to the user input, I will need to "set state" */

/* ProfileSix accepts multiple props: 
imageId (a string), name (a string), profession (a string), awards (an array of strings), 
discovery (a string), and imageSize (a number) 

imageSize prop has a default value, so it doesn't get passed to the component */
function ProfileSix({
  imageId,
  name,
  profession,
  awards,
  discovery,
  imageSize = 70,
}) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrlTwo(imageId)}
        alt={name}
        width={imageSize}
        height={imageSize}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: {awards.length}</b>({awards.join(", ")})
        </li>
        <li>
          <b>Discovered: </b>
          {discovery}
        </li>
      </ul>
    </section>
  );
}

function Gallery() {
  return (
    /* awards is an array, so a separate awardCount isn't needed */
    <div>
      <h1>Notable Scientists</h1>
      <ProfileSix
        imageId="szV5sdG"
        name="Maria Skłodowska-Curie"
        profession="physicist and chemist"
        discovery="polonium (chemical element)"
        awards={[
          "Nobel Prize in Physics",
          "Nobel Prize in Chemistry",
          "Davy Medal",
          "Matteucci Medal",
        ]}
      />
      <ProfileSix
        imageId="YfeOqp2"
        name="Katsuko Saruhashi"
        profession="geochemist"
        discovery="method for measuring carbon dioxide in seawater"
        awards={["Miyake Prize for geochemistry", "Tanaka Prize"]}
      />
    </div>
  );
}

/* 
function getImageUrl(imageId, size = 's') {
  return (
    'https://i.imgur.com/' +
    imageId +
    size +
    '.jpg'
  );
}

function Profile({ person, imageId, size = 70 }) {
  return (
    <section className="profile">
      <h2>{person.name}</h2>
      <img
        className="avatar"
        src={getImageUrl(imageId)}
        alt={person.name}
        width={size}
        height={size}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {person.profession}
        </li>
        <li>
          <b>Awards: {person.awardsNumber} </b>
          ({person.awards})
        </li>
        <li>
          <b>Discovered: </b>
          {person.discovery}
        </li>
      </ul>
    </section>
  );
}

// this solution groups all information about a person in a single object, and that object is passed as one prop
function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        person={{
          name: "Maria Skłodowska-Curie",
          profession: "physicist and chemist",
          awardsNumber: 4,
          awards: "Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal", 
          discovery: "polonium (chemical element)",
        }}
        imageId="szV5sdG"
      />
      <Profile
        person={{
          name: "Katsuko Saruhashi",
          profession: "geochemist",
          awardsNumber: 2,
          awards: "Miyake Prize for geochemistry, Tanaka Prize", 
          discovery: " a method for measuring carbon dioxide in seawater",
        }}
        imageId="YfeOqp2"
       />
    </div>
  );
}
*/

function AvatarSeven({ person, size }) {
  return (
    <img
      className="avatar"
      src={
        size < 90
          ? getImageUrlThree(person, "s")
          : getImageUrlThree(person, "b")
      }
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

function ProfileSeven() {
  return (
    <>
      <AvatarSeven
        size={40}
        person={{
          name: "Gregorio Y. Zara",
          imageId: "7vQD0fP",
        }}
      />
      <AvatarSeven
        size={70}
        person={{
          name: "Gregorio Y. Zara",
          imageId: "7vQD0fP",
        }}
      />
    </>
  );
}

function AvatarEight({ person, size }) {
  let thumbnailSize = "s";
  if (size > 90) {
    thumbnailSize = "b";
  }
  return (
    <img
      className="avatar"
      src={getImageUrlThree(person, thumbnailSize)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

function ProfileEight() {
  return (
    <AvatarEight
      size={100}
      person={{
        name: "Gregorio Y. Zara",
        imageId: "7vQD0fP",
      }}
    />
  );
}

/* shows a sharper image for high DPI screens by taking 
window.devicePixelRatio into account 

props encapsulate logic, so that everyone can use the Avatar component
without thinking about how the images are requested and resized */

const ratio = window.devicePixelRatio;

function AvatarNine({ person, size }) {
  let thumbnailSize = "s";
  if (size * ratio > 90) {
    thumbnailSize = "b";
  }
  return (
    <img
      className="avatar"
      src={getImageUrlThree(person, thumbnailSize)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

function ProfileNine() {
  return (
    <>
      <AvatarNine
        size={40}
        person={{
          name: "Gregorio Y. Zara",
          imageId: "7vQD0fP",
        }}
      />
      <AvatarNine
        size={70}
        person={{
          name: "Gregorio Y. Zara",
          imageId: "7vQD0fP",
        }}
      />
      <AvatarNine
        size={120}
        person={{
          name: "Gregorio Y. Zara",
          imageId: "7vQD0fP",
        }}
      />
    </>
  );
}

/* when I nest content inside a JSX tag, the parent component will receive 
that content in a prop called children
title can be made a separate prop if I want every Card to always have a title */
function CardOne({ children, title }) {
  return (
    <div className="card">
      <div className="card-content">
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  );
}

function ProfileTen() {
  return (
    <div>
      <CardOne title="Photo">
        <img
          className="avatar"
          src="https://i.imgur.com/OKS67lhm.jpg"
          alt="Aklilu Lemma"
          width={70}
          height={70}
        />
      </CardOne>
      <CardOne title="About">
        <p>
          Aklilu Lemma was a distinguished Ethiopian scientist who discovered a
          natural treatment to schistosomiasis.
        </p>
      </CardOne>
    </div>
  );
}

/* Dashboard component uses the useState hook to manage whether an authentication modal, 
AuthModal, is open or not
use this code to open and close modals - 
  initial state, authModalIsOpen is false, Dashboard component renders the MainPage component
  when a user needs to authenticate, setAuthModalIsOpen(true) gets called, causes Dashboard 
    component to render the AuthModal component 
use this code for dynamic content displays - 
  manage whether AuthModal or MainPage component is displayed based on state (whether AuthModalIsOpen
  is true or false)
  thus creating a dynamic user experience where different content is shown based on user interactions
  or application state

function Dashboard() {
  const [authModalIsOpen, setAuthModalIsOpen] = useState(false);

  return authModalIsOpen ? <AuthModal /> : <MainPage /> 
}

state - current snapshot of my program, or a part of it, a combination of all the individual states
        (e.g. "modal is open" and "user is not authenticated" that makes up the overall program state )
        state is the "data that controls what the program is doing"
        state is data which has an effect on the result and output of a program
        state is a component's memory 
        state is the data which is manipulated and reflected by my running program

useState - tells React that a component, a part of the UI, should be re-evaluated and possibly updated,
           if the data changes (the data might change when some function is fired after a user click
           a button)
           useState is a built-in hook that allows me to define state in a component
           useState takes an initial value as a parameter, and returns an array with two elements I can
           destructure to get: the current state value and a function to update the state value
*/

/* // How to add a state variable with the useState Hook
   // and what pair of values the useState Hook returns
// pattern of state definition with useState
const [stateValue, setStateValue] = useState(initialValue);

// the backgroundColor state is defined with the hook
// on every button, I set up a click event handler that calls the setBackgroundColor function with the 
// corresponding value
// then a new color is applied to the background 
const [backgroundColor, setBackgroundColor] = useState(initialColor);

// How to add more than one state variable
adding more state variables is as easy as adding more useState calls 
*/

/* 
when a component's state or props change, the component is destroyed and rerendered
  the component, including variables, function, and React nodes are destroyed, and the component
  is rerendered using the latest state value from useState 
  rerendering is a React feature that efficiently updates the user interface in response to changes in the
  underlying data

  React reconcilation algorithim - calculation of the minimal set of changes needed to update the
                                   actual DOM when it's compared to a new virtual DOM tree generated
                                   during rerendering 
  hooks - functions that let me use React features
          all hooks have the use prefix 
          hooks are special functions only available while React is rendering
          hooks let me hook into different React features, and State is just one of these features
*/

/*
function AppThree() {
  /* whenever setBackgroundColor is called, App component is rerendered, then 
  React takes the responsibility of keeping track of the latest state and
  providing it to the component 
  initial state value is only used for the component's first render and is
  ignored on subsequent renders 
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);

  // onButtonClick is recreated from scratch
  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
  };

  return (
    // and the div and button are recreated from scratch as well
    <div
      className="App"
      style={{
        backgroundColor,
      }}
    >
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? "selected" : ""}
        >
          {color}
        </button>
      ))}
    </div>
  );
}
*/

/* 
why is state called local

To update a component with new data, two things need to happen:
1. retain the data between renders
2. trigger React to render the component with new data (re-rendering)

useState Hook provides those two things:
1. a state variable to retain the data between renders
2. state setter function to update the variable and trigger React to render the component again
*/
function GalleryOne() {
  // let index = 0; // instead of that, this...
  // index is a state variable and setIndex is the setter function
  // [] array destructuring lets me read values from an array
  // useState always returns an array with exactly these two items
  /* when I call useState, I am telling React I want this component to remember something, 
  in this case, index 
  the convention is, const [something, setSomething] 
  the ony argument to useState is the initial value of my state variable, in this case, 0 
  
  every time my component renders, useState gives me an array containing two values, 
  the state variable with the value stored and the state setter function which can update
  the state variable and trigger React to render the component again 
  
  this is how it happens:
  1. my component renders the first time
     I passed 0 to useState, it will return [0, setIndex] and React remembers 0 is the latest state value */
  const [index, setIndex] = useState(0);

  /* 
  2. I update the state
     when a user clicks the button, the button calls setIndex(1) and tells React to remember index is 1 now 
     and triggers another render 
  */
  function handleClick() {
    // index = index + 1; // instead of that, this...
    setIndex(index + 1);
  }

  /* 
  3. my component's second render
     React still sees useState(0) but React remembers that I set index to 1, it returns [1, setIndex] instead
  4. and so on! 
  */

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleClick}>Next</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <p>{sculpture.description}</p>
    </>
  );
}

function GalleryTwo() {
  /* I can have as many state variables of as many types as I like
  in one component
  this Gallery has two state variables:
  a number index
  and a boolean showMore that's toggled when I click "Show details" 
  
  it's a good idea to have multiple state variables if their state is unrelated */
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    if (index === 11) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleNextClick}>Next</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  );
}

/* 
let componentHooks = [];
let currentHookIndex = 0;

// How useState works inside React (simplified).
function useState(initialState) {
  let pair = componentHooks[currentHookIndex];
  if (pair) {
    // This is not the first render,
    // so the state pair already exists.
    // Return it and prepare for next Hook call.
    currentHookIndex++;
    return pair;
  }

  // This is the first time we're rendering,
  // so create a state pair and store it.
  pair = [initialState, setState];

  function setState(nextState) {
    // When the user requests a state change,
    // put the new value into the pair.
    pair[0] = nextState;
    updateDOM();
  }

  // Store the pair for future renders
  // and prepare for the next Hook call.
  componentHooks[currentHookIndex] = pair;
  currentHookIndex++;
  return pair;
}

function Gallery() {
  // Each useState() call will get the next pair.
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  // This example doesn't use React, so
  // return an output object instead of JSX.
  return {
    onNextClick: handleNextClick,
    onMoreClick: handleMoreClick,
    header: `${sculpture.name} by ${sculpture.artist}`,
    counter: `${index + 1} of ${sculptureList.length}`,
    more: `${showMore ? 'Hide' : 'Show'} details`,
    description: showMore ? sculpture.description : null,
    imageSrc: sculpture.url,
    imageAlt: sculpture.alt
  };
}

function updateDOM() {
  // Reset the current Hook index
  // before rendering the component.
  currentHookIndex = 0;
  let output = Gallery();

  // Update the DOM to match the output.
  // This is the part React does for you.
  nextButton.onclick = output.onNextClick;
  header.textContent = output.header;
  moreButton.onclick = output.onMoreClick;
  moreButton.textContent = output.more;
  image.src = output.imageSrc;
  image.alt = output.imageAlt;
  if (output.description !== null) {
    description.textContent = output.description;
    description.style.display = '';
  } else {
    description.style.display = 'none';
  }
}
*/

/* state is local to a component instance on the screen
if I render the same component twice, each copy will have completed isolated state 
changing one of them will not affect the other 

state is not tied to a particular function call or a place in the code,
but it's local to the specific place on the screen
here, I rendered two <GalleryTwo /> components, so their state is stored separately

unlike props, state is fully private to the component declaring it
What if I wanted both galleries to keep their states in sync?
  right way to do it in React is to remove state from child components and add it to 
  their closet shared parent 
*/
function Page() {
  return (
    <div className="Page">
      <GalleryTwo />
      <GalleryTwo />
    </div>
  );
}

function GalleryThree() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    if (index === 11) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function handlePreviousClick() {
    if (index === 0) {
      setIndex(11);
    } else {
      setIndex(index - 1);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleNextClick}>Next</button>
      <button onClick={handlePreviousClick}>Previous</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  );
}

function GalleryFour() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  /* like index and showMore, hasPrev and hasNext are closure variables 
  the handler functions have access too */
  let hasPrev = index > 0;
  let hasNext = index < sculptureList.length - 1;

  /* handlePrevClick closes over index, hasPrev, and hasNext, accesses the
  current value of index and check the condition, hasPrev, before calling 
  setIndex */
  // adds a guarding condition inside both event handlers
  function handlePrevClick() {
    /* if hasPrev (index > 0), then handle previous click, otherwise
    previous button will be disabled */
    if (hasPrev) {
      setIndex(index - 1);
    }
  }

  /* handleNextClick closes over index, hasPrev, and hasNext, accesses the
  current value of index and check the condition, hasNext, before calling 
  setIndex */
  function handleNextClick() {
    /* if hasNext (index < scultureList.length - 1), then handle next click,
    otherwise next button will be disabled */
    if (hasNext) {
      setIndex(index + 1);
    }
  }

  /* handleMoreClick closes over showMore, accesses the current value of showMore and 
   toggles it by calling setIndex */
  function handleMoreClick() {
    // toggles the showMore state by setting it to the opposite of its current value
    setShowMore(!showMore);
  }

  /* handlePrevClick, handleNextClick, and handleMoreClick "close over" (closure functions)
  the index, showMore, hasPrev, hasNext, variables that are declared during rendering 
  
  these event handler functions access the index, showMore, hasPrev, hasNext, variables 
  from the most recent render
  
  the handler functions reflect the latest state managed by React */

  let sculpture = sculptureList[index];

  /* JSX returned by the component renders the UI and utilizes the state and handler functions
  disables the buttons when needed
  // counter display
  ({index + 1} of {sculptureList.length})
  */
  return (
    <>
      <button onClick={handlePrevClick} disabled={!hasPrev}>
        Previous
      </button>
      <button onClick={handleNextClick} disabled={!hasNext}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  );
}

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handleReset() {
    setFirstName("");
    setLastName("");
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        placeholder="First name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>
        Hi, {firstName} {lastName}
      </h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}

function FeedbackForm() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState("");
  if (isSent) {
    return <h1>Thank you!</h1>;
  } else {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert(`Sending: "${message}"`);
          setIsSent(true);
        }}
      >
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <br />
        <button type="submit">Send</button>
      </form>
    );
  }
}

function FeedbackFormOne() {
  /* a state variable is only necessary to keep information between 
  re-renders of a component
  within a single event handler, a regular variable will do fine
  I should not introduce state variables when a regular variable 
  works well */
  // const [name, setName] = useState('');

  function handleClick() {
    const name = prompt("What is your name?");
    alert(`Hello, ${name}!`);
  }

  return <button onClick={handleClick}>Greet</button>;
}

/* state - data that a component needs to keep in memory 
           ex. User component needs to store list of user info
           ex. Country component needs to store selected country 
  *changes to state variables cause the component to re-render so that the UI
  *React state variables persist between re-renders
  *state variables are local to the component
    if a component is created multiple times, each component will have its own
    state management
   changes to regular JS variables do not cause components to re-render
    can be in-sync with the new state 
   local variables do not persist between re-renders */
function AppFour() {
  /* React state variables are not re-initialized during re-rendering
  unlike local variables which are */
  const [count, setCount] = useState(0);
  let regularVar = 0;
  console.log("Count is: " + count); // state variables are managed by React
  console.log("Regular Count is: " + regularVar); // local variable always reset to 0

  function increment() {
    setCount(count + 1);
  }
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>Click</button>
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>Click</button>
    </>
  );
}

function AppFive() {
  return (
    <>
      <Counter />
      <Counter />
    </>
  );
}

function CounterOne(props) {
  function increment() {
    props.setCount(props.count + 1);
  }

  return (
    <>
      <h1>{props.count}</h1>
      <button onClick={increment}>Click</button>
    </>
  );
}

function AppSix() {
  /* to have a state variable be in-sync between two component instances 
  the state variable needs to passed into the parent component as a prop */
  const [count, setCount] = useState(0);
  return (
    <>
      <CounterOne count={count} setCount={setCount} />
      <CounterOne count={count} setCount={setCount} />
    </>
  );
}

/* 1. hooks only work inside functional components 
   2. every time a component runs, hooks must execute at the top level
      in the exact same order 
*/
function AppSeven() {
  /* how useState hook compares to the class version of state 
  setCount or the setter function works the same way as the setState
  inside a class component */
  const [count, setCount] = useState(4);

  function decrementCount() {
    /* prevCount is the most up-to-date state at the moment React processes
    the state update, prevCount makes clear that this value represents the 
    state before the update */
    setCount((prevCount) => prevCount - 1);
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

/*
function AppEight() {
  /* useState hook can also take in function version of state variable 
  and that function gets run only the first time my component renders.
  it must be a function passed in, that then call something 
  useState(() => {}) NOT useState(function()) 
  
  if the initial state is a slow, computationally complex value, use
  the function version of the state variable so that it only gets run once 
  const [count, setCount] = useState(() => {});

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}
*/

function AppNine() {
  /* useState hook can also take in function version of state variable 
  and that function gets run only the first time my component renders.
  it must be a function passed in, that then call something 
  useState(() => {}) NOT useState(function()) 
  
  if the initial state is a slow, computationally complex value, use
  the function version of the state variable so that it only gets run once */
  const [state, setState] = useState({ count: 4, theme: "blue" });
  const count = state.count;
  const theme = state.theme;

  function decrementCount() {
    // setState always overrides previous state, so I need to make sure
    // I am updating with all the old values
    setState((prevState) => {
      return { ...prevState, count: prevState.count - 1 };
    });
  }

  function incrementCount() {
    setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

function AppTen() {
  const [count, setCount] = useState(4);
  const [theme, setTheme] = useState("blue");

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
    setTheme("red");
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

/*
What rendering means in React
  it means React calling my components
When and why React renders a component
The steps involved in displaying a component on screen, steps in request and serving UI:
1. Triggering a render
2. Rendering the component
3. Committing to the DOM 
Why rendering does not always produce a DOM update

1. Triggering a render
a component would render for two reasons:
  i. it's the component's initial render
  ii. the component's (or one of its ancestors') state has been updated

  II. I can trigger re-renders when state updates
  I update the component's state with the set function
  this automatically queues a render
  So, state update triggers render
*/

function Image() {
  return (
    <img
      src="https://i.imgur.com/ZF6s192.jpg"
      alt="'Floralis Genérica' by Eduardo Catalano: a gigantic metallic flower sculpture with reflective petals"
    />
  );
}

/* 
2. React renders my components
 on initial render, React calls the root component
 on subsequent renders, React calls functional components whose state updates trigger the renders

 this process is recursive, continuing until there are no more nested components and React knows exactly what 
 should be displayed on the screen
*/
function GalleryFive() {
  /* during the initial render, React creates the DOM nodes for section, h1, and 3 img tags 
  during a re-render, React calculates which of these properties have changed since the previous render */
  return (
    <section>
      <h1>Inspiring Sculptures</h1>
      <Image />
      <Image />
      <Image />
    </section>
  );
}

/* 
3. React commits changes to the DOM
 after rendering/calling my components/React will modify the DOM
 for the initial render, React uses the appendChild DOM API to put all the DOM nodes it has created on screen
 for re-renders, React will apply the minimal necessary operations (calculated while rendering!) to make the DOM
  match the latest rendering output

  React only changes the DOM nodes if there's a difference between renders
*/

function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

function Clock({ time }) {
  /* React only updates the content of <h1> with the new time
  it sees the <input> appear in the JSX in the same place as last time, so
  React doesn't touch the <input> or its value */
  return (
    <>
      <h1>{time}</h1>
      <input />
    </>
  );
}

function AppEleven() {
  const time = useTime();
  return <Clock time={time.toLocaleTimeString()} />;
}

/* 
after the three steps, the browser repaints the screen

the reconciler updates the virtual DOM after the reconcilation process 
- to keep it accurate, in sync with the state of the components
- optimize updates to the real DOM
- ensure the UI remains in sync with the state of the components  
*/

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

function AppTwelve() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  const [changeCounter, setChangeCounter] = useState(0);

  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
    setChangeCounter(changeCounter + 1);
  };

  return (
    <>
      <h2>{changeCounter}</h2>
      <div
        className="App"
        style={{
          backgroundColor,
        }}
      >
        {COLORS.map((color) => (
          <button
            type="button"
            key={color}
            onClick={onButtonClick(color)}
            className={backgroundColor === color ? "selected" : ""}
          >
            {color}
          </button>
        ))}
      </div>
    </>
  );
}

export {
  ListOne,
  SplitList,
  NameList,
  NestedLists,
  FullList,
  RecipeList,
  PoemWithManualLoop,
  PoemWithFragment,
  TodoList,
  MonthList,
  App,
  ParentComponent,
  AppOne,
  AppTwo,
  Profile,
  ProfileOne,
  ProfileTwo,
  ProfileFive,
  Gallery,
  ProfileSeven,
  ProfileEight,
  ProfileNine,
  ProfileTen,
  GalleryOne,
  GalleryTwo,
  Page,
  GalleryThree,
  GalleryFour,
  Form,
  FeedbackForm,
  FeedbackFormOne,
  AppFour,
  AppFive,
  AppSix,
  AppSeven,
  AppNine,
  AppTen,
  Image,
  GalleryFive,
  AppEleven,
  AppTwelve,
};
