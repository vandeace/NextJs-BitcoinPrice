import Layout from "../components/Layout";
import Fetch from "isomorphic-unfetch";
import Price from '../components/Prices'

const Index = (props) => (
  <Layout>
    <div>
      <h1>Welcome to NextJS</h1>
      <p>Current BitCoin Rate</p>
      <Price bpi={props.bpi}/>  
    </div>
  </Layout>
);

Index.getInitialProps = async function () {
  const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  const data = await res.json();

  return {
    bpi: data.bpi, 
  };
};

export default Index;
