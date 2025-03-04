import React, { useContext, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { Router } from "./Router";
import { ACTION } from "./Utility/action.type";
import { DataContext } from "./Components/DataProvider/Dateprovider";
// import { auth } from "./Utility/firebase";

const App = () => {
  const context = useContext(DataContext);

  if (!context) {
    console.error("DataContext is not available. Ensure DataProvider wraps the app.");
    return <h1>Loading...</h1>; // Prevent crash if context is missing
  }

  const [state, dispatch] = context; // Now safely using context

  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
};

export default App;
