import App from "./App.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import Team from "./pages/Team.jsx"; // Import the Team page component
import Events from "./pages/Events.jsx";
import About from "./pages/About.jsx"; // Import the About page component
import Gallery from "./pages/Gallery.jsx";
import Home from "./pages/Home.jsx"
import Blog from "./pages/Blog.jsx";
import Register from "./components/Register.jsx";
import SignIn from "./components/SignIn.jsx";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/", // Base route
    element: <MainLayout />,
    children: [
      {
        index: true, // Default page
        element: <App />,
      },
      {
        path: "/Team", // Route for the Team page
        element: <Team />,
      },
      {
        path:"/events",  //Route for events page
        element:<Events/>
      },
      {
        path:"/about",  //Route for About page
        element:<About/>
      },
      {
        path:"/blog",  //Route for Blog page
        element:<Blog/>
      },
      {
        path:"/gallery",  //Route for Gallery page
        element:<Gallery/>
      },
      {
        path:"/Register",  //Route for blog page
        element:<Register/>
      },
      {
        path: "/signin",  // Route for sign-in page
        element: <SignIn />,  
      },
    ],
  },
]);

export default routes;
