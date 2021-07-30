import axios from "axios";
// import { VscLoading } from "react-icons/vsc";
import Item from "../../src/component/Item";
import Head from "next/head";

const Post = ({ item }) => {
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

// 서버에서 데이터를 가져와서 주입
export async function getServerSideProps(context) {
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
    },
  };
}
