import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductType } from "../types";

const ProductCreatePage = () => {
  //상세 제품
  const [form, setForm] = useState({
    name: "",
    explanation: "",
    price: "",
  });

  const navigate = useNavigate();

  const handleCreate = (e: any) => {
    e.preventDefault();

    fetch("http://localhost:8080/product/add", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((res) => {
      if (res.status === 200) {
        navigate("/");
      }
    });
  };

  const changeHandler = (e: any) => {
    const { value, name } = e.target;
    console.log(value, name);
    setForm((i) => ({ ...i, [name]: value }));
  };

  return (
    <div>
      <form onSubmit={(e) => handleCreate(e)}>
        <div>
          <label>상품이름</label>
          <input type="text" name="name" onChange={(e) => changeHandler(e)} />
        </div>
        <div>
          <label>상품설명</label>
          <input
            type="text"
            name="explanation"
            onChange={(e) => changeHandler(e)}
          />
        </div>
        <div>
          <label>가격</label>
          <input type="text" name="price" onChange={(e) => changeHandler(e)} />
        </div>
        <input type="submit" value="추가" />
      </form>
    </div>
  );
};

export default ProductCreatePage;
