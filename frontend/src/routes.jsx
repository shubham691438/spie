import App from "./App.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import Team from "./pages/Team.jsx"; // Import the Team page component
import Events from "./pages/Events.jsx";
import Home from "./pages/Home.jsx"
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
      
    ],
  },
]);

export default routes;