import App from "./App.jsx";
import MainLayout from "./layouts/MainLayout.jsx"
import {createBrowserRouter} from 'react-router-dom';

const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true, 
          element: <App />,
        },
      ],
    },
  ]);

export default routes;