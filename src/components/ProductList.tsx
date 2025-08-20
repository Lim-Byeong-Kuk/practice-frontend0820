import React, { useEffect, useState } from "react";
import { ProductType } from "../types";
import ProductItem from "./ProductItem";
const ProductList = () => {
  //전체 목록 조회
  const [products, setProducts] = useState<ProductType[]>([]);

  const handleDelete = (productId: number) => {
    console.log("삭제 버튼이 눌렸어요", productId);
    fetch(`http://localhost:8080/product/delete/${productId}`, {
      method: "DELETE",
    }).then((res) => {
      console.log(res.body);
      if (res.ok) {
        setProducts(products.filter((i) => Number(i.productId) !== productId));
      }
    });
  };
  const handleUpdate = (updateProduct: ProductType) => {
    fetch(`http://localhost:8080/product/modify/${updateProduct.productId}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    }).then((res) => {
      if (res.ok) {
        setProducts(
          products.map((i) =>
            i.productId === updateProduct.productId ? updateProduct : i
          )
        );
      }
    });
  };
  useEffect(() => {
    fetch(`http://localhost:8080/product`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <ul>
      {products &&
        products.map((i) => (
          <ProductItem
            key={i.productId}
            product={i}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))}
    </ul>
  );
};

export default ProductList;
