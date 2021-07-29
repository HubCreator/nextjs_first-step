import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import ItemList from "../src/component/ItemList";

export default function Home() {
  const [dataList, setDataList] = useState([]);
  const API_URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  const getData = () => {
    axios.get(API_URL).then((res) => setDataList(res.data));
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Head>
        <title>Leo | Home</title>
      </Head>
      <ItemList list={dataList} />
    </div>
  );
}
