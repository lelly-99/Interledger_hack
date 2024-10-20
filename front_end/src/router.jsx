import { createBrowserRouter } from "react-router-dom";
// import App from "./App.jsx";
// import Login from "./routes/Login.jsx";
import App from "./App.jsx";
import SendPayment from "./SendPayment.jsx";
import Dashboard from "./components/DashBoard.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>404: page could not be found</div>,
    children:[
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/send",
        element: <SendPayment />,
      },

    ]
  },
  // {
  //   path: "/send",
  //   element: <SignUp />,
  // },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
]);
