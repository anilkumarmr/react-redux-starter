import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import Routes from "./routes/Routes";

export default function App() {
   return (
      /* Provide Redux store */
      <Provider store={store}>
         {/* Add high level `Suspense` in case if was not handled inside the React tree. */}
         <React.Suspense fallback={<div></div>}>
            {/* Render routes with provided `Layout`. */}
            <Routes />
         </React.Suspense>
      </Provider>
   );
}
