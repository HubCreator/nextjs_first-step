import axios from "axios";
import Head from "next/head";
import { useEffect } from "react";
import Navbar from "../src/component/Navbar";

export default function Home() {
  const API_URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  const getData = () => {
    axios.get(API_URL).then((res) => console.log(res));
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Head>
        <title>Leo | Home</title>
      </Head>
      <Navbar />
    </div>
  );
}
