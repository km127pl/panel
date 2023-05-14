import React from 'react'
import ReactDOM from 'react-dom/client'
import { Console } from './pages/Console.tsx'
import './assets/main.scss';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Error} from "./pages/Error.tsx";
import {Redirect} from "./pages/Redirect.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Redirect to={"/server/console"} />,
		errorElement: <Error title={"Not found"} code={404} message={"This page does not exist."} />,
	},
	{
		path: "/server/console",
		element: <Console />,
	}
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
