import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ProductType } from "../types";

const ProductModifyPage = () => {
  const { productId } = useParams<{ productId: string }>();

  const navigate = useNavigate();
  //상세 제품
  const [form, setForm] = useState({
    name: "",
    explanation: "",
    price: "",
  });

  useEffect(() => {
    fetch(`http://localhost:8080/product/${productId}`)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setForm({
          name: data.name,
          explanation: data.explanation,
          price: data.price,
        });
      });
  }, []);

  const changeHandler = (e: any) => {
    const { value, name } = e.target;
    console.log(value, name);
    setForm((i) => ({ ...i, [name]: value }));
  };

  const handleModify = (e: any) => {
    e.preventDefault();

    fetch(`http://localhost:8080/product/modify/${productId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((res) => {
      if (res.status === 200) {
        navigate("/");
      }
    });
  };

  return (
    <div>
      <form onSubmit={(e) => handleModify(e)}>
        <div>
          <label>상품이름</label>
          <input
            type="text"
            placeholder={form.name}
            name="name"
            onChange={(e) => changeHandler(e)}
          />
        </div>
        <div>
          <label>상품설명</label>
          <input
            type="text"
            name="explanation"
            placeholder={form.explanation}
            onChange={(e) => changeHandler(e)}
          />
        </div>
        <div>
          <label>가격</label>
          <input
            type="text"
            name="price"
            placeholder={form.price}
            onChange={(e) => changeHandler(e)}
          />
        </div>
        <input type="submit" value="수정" />
      </form>
    </div>
  );
};

export default ProductModifyPage;
