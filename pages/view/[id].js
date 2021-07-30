import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { VscLoading } from "react-icons/vsc";
import Item from "../../src/component/Item";

const Post = ({ item }) => {
  //   const router = useRouter();
  //   const { id } = router.query;

  //   const [loading, setLoading] = useState(true);
  //   const [data, setData] = useState([]);
  //   const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  //   const getData = () => {
  //     axios
  //       .get(API_URL)
  //       .then((res) => setData(res.data))
  //       .then(setLoading(false));
  //   };

  //   useEffect(() => {
  //     if (id && id > 0) {
  //       getData();
  //     }
  //   }, [id]);

  return (
    <>
      {/* {loading ? <VscLoading className="loading-icon" /> : <Item data={data} />} */}
      {item && <Item data={item} />}
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
