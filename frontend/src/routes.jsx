import App from "./App.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import Team from "./pages/Team.jsx"; // Import the Team page component
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
      // Add more routes as needed
    ],
  },
]);

export default routes;