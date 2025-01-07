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
import Contact from "./components/Contact.jsx";
import { createBrowserRouter } from "react-router-dom";
import ComingSoon from "./components/Comingsoon.jsx";
import DataHackonRulebook from "./event/DataHackon.jsx";
import Gatestudy from "./blogs/Gatestudy.jsx";
import Subjectrelated from "./blogs/Subject-related.jsx";
import Senioradvice from "./blogs/Senioradvice.jsx";
import Funevent from "./blogs/Funevent.jsx";
import PlacementExperience from "./blogs/PlacementExperience.jsx";
import ChainZenithRulebook from "./event/ChainZenith.jsx";
import MetalMasterpieceRulebook from "./event/MetalMasterpiece.jsx";
import TalkathonRulebook from "./event/Talkathon.jsx";
import MachinaMystiqueRulebook from "./event/MachinaMystique.jsx";
import SingingRulebook from "./event/Singing.jsx";
import DancingRulebook from "./event/Dancing.jsx";
import StandupRulebook from "./event/Standup.jsx";

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
      {
        path: "/contact",  // Route for sign-in page
        element: <Contact />,  
      },
      {
        path: "/Student-activity",  // Route for sign-in page
        element: <ComingSoon/>,  
      },
      {
        path: "/placement-experience",  // Route for sign-in page
        element: <PlacementExperience/>,  
      },
      {
        path: "/fun-events-experiences",  // Route for sign-in page
        element: <Funevent/>,  
      },
      {
        path: "/seniors-advice",  // Route for sign-in page
        element: <Senioradvice/>,  
      },
      {
        path: "/subject-related",  // Route for sign-in page
        element: <Subjectrelated/>,  
      },
      {
        path: "/gate-study-materials",  // Route for sign-in page
        element: <Gatestudy/>,  
      },
      {
        path: "/datahackon",
        element: <DataHackonRulebook />,
      },
      {
        path: "/chainzenith",
        element: <ChainZenithRulebook/>,
      },
      {
        path: "/metalmasterpiece",
        element: <MetalMasterpieceRulebook/>,
      },
      {
        path: "/talkathon",
        element: <TalkathonRulebook/>,
      }
      ,
      {
        path: "/machinamystique",
        element: <MachinaMystiqueRulebook/>,
      } ,
      {
        path: "/singing",
        element: <SingingRulebook/>,
      } ,
      {
        path: "/dancing",
        element: <DancingRulebook/>,
      } ,
      {
        path: "/standup",
        element: <StandupRulebook/>,
      }
      
    ],
  },
]);

export default routes;
