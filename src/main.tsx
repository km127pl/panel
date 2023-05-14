import React from 'react'
import ReactDOM from 'react-dom/client'
import { Console } from './pages/Console.tsx'
import './assets/main.scss';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Error} from "./pages/Error.tsx";
import {Redirect} from "./pages/Redirect.tsx";
import {ServerList} from "./pages/ServerList.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Redirect to={"/server"} />,
		errorElement: <Error title={"Not found"} code={404} message={"This page does not exist."} />,
	},
	{
		path: "/server",
		element: <ServerList servers={[
			{
				name: "Test server",
				description: "This is a test server.",
				icon: "",
				status: "Online",
			}]}/>,
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
