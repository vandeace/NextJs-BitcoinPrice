import NavBar from "./NavBar";
import Head from "next/head";

const Layout = (props) => (
  <div>
    <Head>
      <title>BitPrices</title>
      <link
        rel="stylesheet"
        href="https://bootswatch.com/4/darkly/bootstrap.css"
      />
    </Head>
    <NavBar />
    <div className="container">{props.children}</div>
  </div>
);

export default Layout;
