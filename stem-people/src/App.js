import { peopleListOne, recipes } from "./data.js";
import { getImageUrl } from "./utils.js";
import { Fragment } from "react";

// data gets moved into an array
const people = [
  "Creola Katherine Johnson: mathematician",
  "Mario José Molina-Pasquel Henríquez: chemist",
  "Mohammad Abdus Salam: physicist",
  "Percy Lavon Julian: chemist",
  "Subrahmanyan Chandrasekhar: astrophysicist",
];

function List() {
  // map the people members into a new array of JSX nodes, listItems
  // node vs element - node is any object in the DOM tree; element are in an HTML element
  const listItems = people.map((person) => <li key="person.name">{person}</li>);

  // * each child in a list should have a unique "key" prop

  // return listItems from my component wrapped in a <ul>
  return <ul>{listItems}</ul>;
}

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
function Recipe({ id, name, ingredients }) {
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

function Poem() {
  return (
    <article>
      {poem.lines.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </article>
  );
}

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

export {
  ListOne,
  SplitList,
  NestedLists,
  FullList,
  RecipeList,
  PoemWithManualLoop,
  PoemWithFragment,
};
