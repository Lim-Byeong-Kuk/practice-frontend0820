import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../contexts/ProductContext4";
import { ProductType } from "../types";

const ProductPage = () => {
  //상세 제품
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<ProductType | null>(null);

  useEffect(() => {
    fetch(`http://localhost:8080/product/${productId}`)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setProduct(data);
      });
  }, [productId]);

  if (!product) return <h1>상품을 찾을 수 없어요</h1>;

  return (
    <div>
      <h1>{product?.productId}</h1>
      <h1>{product?.name}</h1>
      <h1>{product?.explanation}</h1>
      <h1>{product?.price}</h1>
    </div>
  );
};

export default ProductPage;
