import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { Card, CardBody } from "@material-tailwind/react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    };
    fetchData();
  });
  return (
    <div>
      <Card>
        <CardBody>Hello</CardBody>
      </Card>
    </div>
  );
}
