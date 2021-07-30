import axios from "axios";
import { VscLoading } from "react-icons/vsc";
import Item from "../../src/component/Item";
import Head from "next/head";
import { useRouter } from "next/router";

const Post = ({ item, name }) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <>
        <VscLoading className="loading-icon" />
      </>
    );
  }

  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" context={item.description} />
          </Head>
          <Item data={item} />
        </>
      )}
    </>
  );
};

export default Post;

// pre-rendering
export async function getStaticPaths() {
  const apiUrl = process.env.apiUrl;
  const res = await axios.get(apiUrl);
  const data = res.data;
  return {
    // paths: [
    //   { params: { id: "740" } },
    //   { params: { id: "730" } },
    //   { params: { id: "729" } },
    // ],
    paths: data.slice(0, 10).map((item) => ({
      params: {
        id: item.id.toString(),
      },
    })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
      name: process.env.name,
    },
  };
}
