import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import ItemList from "../src/component/ItemList";
import { VscLoading } from "react-icons/vsc";

export default function Home() {
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_URL = process.env.NEXT_PUBLIC_API_URL; // browser environment

  const getData = () => {
    axios
      .get(API_URL)
      .then((res) => setDataList(res.data))
      .then(setLoading(false));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Head>
        <title>Leo | Home</title>
      </Head>
      {loading ? (
        <VscLoading className="loading-icon" />
      ) : (
        <ItemList list={dataList} />
      )}
    </div>
  );
}
