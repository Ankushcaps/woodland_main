import "@/styles/globals.css";
import { Provider } from "react-redux";
import { persistor, store } from "../store";
import { PersistGate } from "redux-persist/integration/react";
import "swiper/css";

export default function App({ Component, pageProps }) {
  return (
    <div
      className="app-container"
      style={{ maxWidth: "1440px", margin: "0 auto" }}
    >
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </div>
  );
}
