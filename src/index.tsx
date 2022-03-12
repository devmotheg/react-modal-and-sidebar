/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

import "./index.css";

import React from "react";
import ReactDOM from "react-dom";

import AppProvider from "./components/AppProvider";
import App from "./App";

ReactDOM.render(
	<React.StrictMode>
		<AppProvider>
			<App />
		</AppProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
