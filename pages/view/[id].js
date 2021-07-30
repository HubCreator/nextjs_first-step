import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  const [data, setData] = useState([]);
  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  const getData = () => {
    axios.get(API_URL).then((res) => setData(res.data));
  };

  useEffect(() => {
    if (id && id > 0) {
      getData();
    }
  }, [id]);

  return (
    <div className="single-item">
      <div className="single-item-name">{data.name}</div>
      <img className="single-item-img" src={data.image_link} />
      <div className="single-item-price">{data.price} $</div>
      <div className="single-item-description">{data.description}</div>
    </div>
  );
};

export default Post;
