import axios from "axios";
import Head from "next/head";
import ItemList from "../src/component/ItemList";

export default function Home({ list }) {
  return (
    <div>
      <Head>
        <title>Leo | Home</title>
      </Head>

      {list && <ItemList list={list} />}
    </div>
  );
}

export async function getStaticProps() {
  const apiUrl = process.env.apiUrl;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      list: data,
      name: process.env.name,
    },
  };
}
