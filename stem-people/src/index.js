import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import {
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
} from "./App.js";

/*   I. Initial render
     when my app starts, I need to trigger an initial render
     I do this by calling createRoot with the target DOM node, and then calling its render
     method with my component 
     
     if I don't call the components, they would all disappear! */
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <ListOne />
    <SplitList />
    <NameList />
    <NestedLists />
    <FullList />
    <RecipeList />
    <PoemWithManualLoop />
    <PoemWithFragment />
    <TodoList />
    <MonthList />
    <App />
    <ParentComponent />
    <AppOne />
    <AppTwo />
    <Profile />
    <ProfileOne />
    <ProfileTwo />
    <ProfileFive />
    <Gallery />
    <ProfileSeven />
    <ProfileEight />
    <ProfileNine />
    <ProfileTen />
    <GalleryOne />
    <GalleryTwo />
    <Page />
    <GalleryThree />
    <GalleryFour />
    <Form />
    <FeedbackForm />
    <FeedbackFormOne />
    <AppFour />
    <AppFive />
    <AppSix />
    <AppSeven />
    <AppNine />
    <AppTen />
    <Image />
    <GalleryFive />
    <AppEleven />
    <AppTwelve />
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
