import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Router from "next/router"
import withGA from "next-ga"

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default withGA("UA-145060279-2", Router)(MyApp);
