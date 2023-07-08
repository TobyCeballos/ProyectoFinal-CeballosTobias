import {useState, useEffect} from "react";
import ItemDetailContainer from "../components/shared/ItemDetailContainer";
import { useParams } from "react-router-dom";
import axios from "axios";

const Item = () => {
  const { itemId } = useParams();
    const [item, setItem] = useState([]);
  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${itemId}`).then((response) => {
      console.log(response.data);
      setItem(response.data);
    });
  },[]);

  console.log(item)
  return <ItemDetailContainer productsData={item} />;
};

export default Item;
