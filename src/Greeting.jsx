/* this JS function returns JSX 
React components must be capitalized to function 
JSX - syntax extension that allows me to write HTML-like code in JS
      when JSX is parsed, React uses capitalization to tell the difference between an HTML
      tag and an instance of a React component */
function Greeting() {
  return (
    // &quot; is escape code used to render "
    <h1>&quot;I swear by my pretty floral bonnet, I will end you.&quot;</h1>
  );
}

function MyFavFood() {
  return <img src="../public/fried-chicken.png" alt="fried chicken"></img>;
}

/* 1. JSX must return a single root element
- if I want to return multiple elements in a component, they must be wrapped in a parent tag,
  if I don't want the elements to have a container, I can use a React fragment, <></> */
function AppTwo() {
  // Could replace <></> with <div></div>
  return (
    <>
      <h1>Example h1</h1>
      <h2>Example h2</h2>
    </>
  );
}

/* 2. In JSX, tags must be explicitly closed and wrapped. 
<input> becomes <input />
<li> becomes <li><li> */
function AppThree() {
  return (
    <>
      <input />
      <li></li>
    </>
  );
}

/* 3. camelCase Most things.
- attributes of elements become keys of JS objects, so dashes or reserved words can't be used 
- many HTML attributes are written in camelCase: strokeWidth for stroke-width, className for class */
function AppFour() {
  return (
    <div className="container">
      <svg>
        <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2" />
      </svg>
    </div>
  );
}

function AppFive() {
  return (
    // a single root element needs to be returned
    //input tag needs to be closed
    // attributes need to be camelCased
    <div>
      <h1>Test title</h1>
      <svg>
        <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2" />
      </svg>
      <form>
        <input type="text" />
      </form>
    </div>
  );
}

function TodoList() {
  // fragments let me group things without leaving any trace in the browser HTML tree
  return (
    <>
      <h1>Hedy Lamarr&apos;s Todos</h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        className="photo"
      />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </>
  );
}

function Bio() {
  return (
    <>
      <div className="intro">
        <h1>Welcome to my website!</h1>
      </div>
      <p className="summary">
        You can find my thoughts here.
        <br />
        <br />
        <b>
          And <i>pictures </i>
        </b>
        of scientists!
      </p>
    </>
  );
}

/* sometimes I will want to add a little JS logic or reference a dynamic property inside that markup 
I can use curly braces in my JSX to open a window to JS */
function Avatar() {
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/7vQD0fPs.jpg"
      alt="Gregorio Y. Zara"
    />
  );
}

function OtherAvatar() {
  // dynamically specify the src and alt text by using a value from JS and replacing "" with {}
  const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
  const description = "Gregorio Y. Zara";
  // {avatar} reads the value of the JS variable, avatar
  return <img className="avatar" src={avatar} alt={description} />;
}

function OtherTodoList() {
  // declares a name for the scientist
  const name = "Gregorio Y. Zara";
  // embeds name with curly braces inside the <h1>
  return <h1>{name}&apos;s To Do List</h1>;
}

/* curly braces can only be used in two ways inside JSX
1. as text directly inside a JSX tag, <h1>{name}&apos;s To Do List</h1>
2. as attributes immediately following the = sign, src={avatar} */

const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}

// any JS expression will work between curly braces, including formatDate()
function TodoListThree() {
  return <h1>To Do List for {formatDate(today)}</h1>;
}

/* strings, numbers, and other JS expressions can be passed in JSX, and so can objects 
to pass a JS object in JSX, I must wrap the object in another pair of curly braces
this may be seen with inline CSS styles in JSX, I can pass an object to the style attribute */
function TodoListFour() {
  return (
    <ul
      style={{
        backgroundColor: "black",
        color: "pink",
      }}
    >
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
  );
}

// person object has a name string and a theme object
const person = {
  name: "Gregorio Y. Zara",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};

/* several expressions can be put into one object, and they can be referenced in my JSX 
inside curly braces */
function TodoListFive() {
  return (
    // component is using values from person
    <div style={person.theme}>
      <h1>{person.name}&apos; Todos</h1>
      <img src="https://i.imgur.com/7vQD0fPs.jpg" alt="Gregorio Y. Zara" />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}

function AppSix() {
  return (
    <div>
      <h1>Animals:</h1>
      <ul>
        <li>Lion</li>
        <li>Cow</li>
        <li>Snakes</li>
        <li>Lizard</li>
      </ul>
    </div>
  );
}

/* most of the time I will be dealing with a data structure */
function AppSeven() {
  /* use map to return a new array of li elements, adding animal as its text 
  JSX has the ability to automatically render arrays */
  const animals = ["Lion", "Cow", "Snake", "Lizard"];
  // key lets React know the identify of each element in the list
  const animalsList = animals.map((animal) => <li key={animal}>{animal}</li>);

  return (
    <div>
      <h1>Animals: </h1>
      <ul>{animalsList}</ul>
    </div>
  );
}

/* ListItem returns the li element, it accepts props and uses 
props.animal to render the text */
function ListItem(props) {
  return <li>{props.animal}</li>;
}

/* List returns the ul element
props is an object containing the animals that I defined as a property 
when I write <List animals={animals} />
it could instead be <List animalList={animals} />
animals still need to be passed to the property, but now as 
props.animalList */
function List(props) {
  return (
    <ul>
      {props.animals.map((animal) => {
        return <ListItem key={animal} animal={animal} />;
      })}
    </ul>
  );
}

// props - arguments that are passed into components

function AppEight() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <div>
      <h1>Animals: </h1>
      <List animals={animals} />
    </div>
  );
}

/* my components will often need to display different things depending on different 
conditions */

// if I want to render an animal that starts with the letter L
function ListOne(props) {
  /* conditionally render an element with a ternary operator, using a boolean value
  startsWith returns true or false, then either return the li element or null if
  no element will be rendered */
  return (
    <ul>
      {props.animals.map((animal) => {
        return animal.startsWith("L") ? <li key={animal}>{animal}</li> : null;
      })}
    </ul>
  );
}

function AppNine() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <div>
      <h1>Animals: </h1>
      <ListOne animals={animals} />
    </div>
  );
}

// if I want to render an animal that starts with the letter C
function ListTwo(props) {
  /* if the result of startsWith is true, it returns the second operand, which is li 
  if the result is false, it gets ignored */
  return (
    <ul>
      {props.animals.map((animal) => {
        return animal.startsWith("C") && <li key={animal}>{animal}</li>;
      })}
    </ul>
  );
}

function AppTen() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <div>
      <h1>Animals: </h1>
      <ListTwo animals={animals} />
    </div>
  );
}

/* do not put numbers of the left side of a logical AND operator (&&) 

if, if/else, and switch can also be used to conditionally render something 

1. check if the animals property is provided
2. check if the animals length is greater than 0 

also consider what to render if the list is empty or does not exist at all */
function ListThree(props) {
  /* 2 if statements act as a guard that immediately returns an element based
    on the condition */
  if (!props.animals) {
    return <div>Loading...</div>;
  }

  if (props.animals.length === 0) {
    return <div>There are no animals in the list!</div>;
  }

  return (
    <ul>
      {props.animals.map((animal) => {
        return <li key={animal}>{animal}</li>;
      })}
    </ul>
  );
}

function AppEleven() {
  const animals = [];

  return (
    <div>
      <h1>Animals: </h1>
      <ListThree animals={animals} />
    </div>
  );
}

function AppTwelve() {
  // const animals = [];

  /* if animals property is removed, div with test "Loading.." is returned 
  this happens when fetching from an API, since it takes time to actually retrieve the data,
  so I should show an indicator for that */
  return (
    <div>
      <h1>Animals: </h1>
      <ListThree />
    </div>
  );
}

function ListFour(props) {
  // using ternary operator
  return (
    <>
      {!props.animals ? (
        <div>Loading...</div>
      ) : props.animals.length > 0 ? (
        <ul>
          {props.animals.map((animal) => {
            return <li key={animal}>{animal}</li>;
          })}
        </ul>
      ) : (
        <div>There are no animals in the list!</div>
      )}
    </>
  );
}

function ListFive(props) {
  // using && operator
  return (
    <>
      {!props.animals && <div>Loading...</div>}
      {props.animals && props.animals.length > 0 && (
        <ul>
          {props.animals.map((animal) => {
            return <li key={animal}>{animal}</li>;
          })}
        </ul>
      )}
      {props.animals && props.animals.length === 0 && (
        <div>There are no animals in the list!</div>
      )}
    </>
  );
}

function AppThirteen() {
  const animals = [];
  return (
    <div>
      <h1>Animals: </h1>
      <ListFour animals={animals} />
    </div>
  );
}

function AppFourteen() {
  const animals = [];
  return (
    <div>
      <h1>Animals: </h1>
      <ListFive animals={animals} />
    </div>
  );
}

function Item({ name, isPacked }) {
  /* branching logic is created with if and return 
  in React, control flow is handled by JS */
  if (isPacked) {
    // if isPacked prop is true, this code returns a different JSX tree
    return <li className="item">{name} ✅</li>;
  }
  return <li className="item">{name}</li>;
}

function PackingList() {
  return (
    <section>
      <h1>Sally Ride&apos;s Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}

function ItemOne({ name, isPacked }) {
  if (isPacked) {
    // return null when I don't want to render anything at all
    return null;
  }
  return <li className="item">{name}</li>;
}

function PackingListOne() {
  return (
    <section>
      <h1>Sally Ride&apos;s Packing List</h1>
      <ul>
        <ItemOne isPacked={true} name="Space suit" />
        <ItemOne isPacked={true} name="Helmet with a golden leaf" />
        <ItemOne isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}

// if isPacked is true, render name and checkmark, otherwise render just name
function ItemTwo({ name, isPacked }) {
  return <li className="item">{isPacked ? name + " ✅" : name}</li>;
}

function PackingListTwo() {
  return (
    <section>
      <h1>Sally Ride&apos;s Packing List</h1>
      <ul>
        <ItemTwo isPacked={true} name="Space suit" />
        <ItemTwo isPacked={true} name="Helmet with a golden leaf" />
        <ItemTwo isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}

/* completed item's text are wrapped into another HTML tag to strike it out 
careful with all this nesting,
if my components get messy with too much nested conditional markup, I should extract
child components to clean things up */
function ItemThree({ name, isPacked }) {
  return (
    <li className="item">{isPacked ? <del>{name + " ✅"}</del> : name}</li>
  );
}

function PackingListThree() {
  return (
    <section>
      <h1>Sally Ride&apos;s Packing List</h1>
      <ul>
        <ItemThree isPacked={true} name="Space suit" />
        <ItemThree isPacked={true} name="Helmet with a golden leaf" />
        <ItemThree isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}

// often I will want to render some JSX when the condition is true, or render nothing otherwise
function ItemFour({ name, isPacked }) {
  return (
    /* if isPacked, then and render the checkmark, otherwise render nothing 
    React considers false a hole in the JSX tree, like null or undefined, and doesn't render anything 
    numbers shouldn't be put on the left side of && */
    <li className="item">
      {name}
      {isPacked && " ✅"}
    </li>
  );
}

function PackingListFour() {
  return (
    <section>
      <h1>Sally Ride&apos;s Packing List</h1>
      <ul>
        <ItemFour isPacked={true} name="Space suit" />
        <ItemFour isPacked={true} name="Helmet with a golden leaf" />
        <ItemFour isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}

// I can also conditionally assign JSX to a variable
function ItemFive({ name, isPacked }) {
  let itemContent = name;
  if (isPacked) {
    itemContent = name + " ✅";
  }
  return <li className="item">{itemContent}</li>;
}

function PackingListFive() {
  return (
    <section>
      <h1>Sally Ride&apos;s Packing List</h1>
      <ul>
        <ItemFive isPacked={true} name="Space suit" />
        <ItemFive isPacked={true} name="Helmet with a golden leaf" />
        <ItemFive isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}

function ItemSix({ name, isPacked }) {
  let itemContent = name;
  if (isPacked) {
    itemContent = <del>{name + " ✅"}</del>;
    return <li className="item">{itemContent}</li>;
  }
}

function PackingListSix() {
  return (
    <section>
      <h1>Sally Ride&apos;s Packing List</h1>
      <ul>
        <ItemSix isPacked={true} name="Space suit" />
        <ItemSix isPacked={true} name="Helmet with a golden leaf" />
        <ItemSix isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}

/* how to render components from an array using map() 
how to render only specific components using filter()
when and why to use React keys */

/* export the component so that parent components can use as a child throughout my project */
export {
  Greeting,
  MyFavFood,
  AppTwo,
  AppThree,
  AppFour,
  AppFive,
  TodoList,
  Bio,
  Avatar,
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
};
