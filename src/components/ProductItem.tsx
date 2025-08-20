import React, { useState } from "react";
import { ProductType } from "../types";
import { Link } from "react-router-dom";

interface productItemProps {
  product: ProductType;
  onDelete: (id: number) => void;
  onUpdate: (product: ProductType) => void;
}

const ProductItem = ({ product, onDelete, onUpdate }: productItemProps) => {
  const { productId, name, price, explanation } = product;
  const [isEditMode, setIsEditMode] = useState(false);
  //p148
  const [editName, setEditName] = useState(product.name);
  const [editExplanation, setEditExplanation] = useState(product.explanation);
  const [editPrice, setEditPrice] = useState(product.price);

  return (
    <div style={{ border: "1px solid #ddd", padding: 12, marginTop: 8 }}>
      <div>{productId}</div>
      <div>
        <Link to={`${productId}`}>{name}</Link>
      </div>
      <div>{price}</div>
      <div>{explanation}</div>

      <button onClick={() => onDelete(productId)}>
        삭제하기
        {/* console.log 대신 setProducts(products.filter( 채우기 )) */}
      </button>
      <button
        type="button"
        onClick={() => setIsEditMode((prev) => !prev)}
        style={{ marginTop: 8 }}
      >
        수정하기
      </button>
      {/* isEditMode 는 short circuit 기능으로서 true 일 때에만 && 다음 내용을 실행 rendering
        false이면 그 다음은 뭐가 되어도 false 이므로 실행하지 않음 */}
      {/* a && b   a와 b가 모두 참이어야  참
            a 가 false 이면 b를 안봐, 쳐다도 안봐, 아에 읽지를 않아
            
        */}
      {isEditMode && (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            onUpdate({
              productId,
              name: editName,
              price: editPrice,
              explanation: editExplanation,
            });
          }}
        >
          <input
            type="text"
            placeholder="상품 이름"
            value={editName}
            onChange={(event) => setEditName(event.target.value)}
          />
          <input
            type="text"
            placeholder="상품 설명"
            value={editExplanation}
            onChange={(event) => setEditExplanation(event.target.value)}
          />
          <input
            type="number"
            placeholder="상품 가격"
            value={editPrice}
            onChange={(event) => setEditPrice(parseInt(event.target.value, 10))}
          />
          <input type="submit" value="상품 수정하기" />
        </form>
      )}
    </div>
  );
};

export default ProductItem;
