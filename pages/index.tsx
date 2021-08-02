import axios from "axios";
import { GetStaticProps } from "next";
import Head from "next/head";
import ItemList from "../src/component/ItemList";

interface dataProps {
  list: object;
  name: string;
}

const Home = (props: dataProps) => {
  return (
    <div>
      <Head>
        <title>Leo | Home</title>
      </Head>

      {props.list && <ItemList list={props.list} />}
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  // const apiUrl = process.env.apiUrl; // can't use this in typescript
  const apiUrl =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      list: data,
      name: process.env.name,
    },
  };
};
