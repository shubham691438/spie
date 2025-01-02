import App from "./App.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import Team from "./pages/Team.jsx"; // Import the Team page component
import Events from "./pages/Events.jsx";
import About from "./pages/About.jsx"; // Import the About page component
import Home from "./pages/Home.jsx"
import Blog from "./pages/Blog.jsx";
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
        path:"/Blog",  //Route for blog page
        element:<Blog/>
      },
    ],
  },
]);

export default routes;
