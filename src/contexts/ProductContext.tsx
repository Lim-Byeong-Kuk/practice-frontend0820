import { throws } from "assert";
import { createContext, useContext, useState } from "react";
// import { ProductType } from "../types";

interface ProductType {
  id: number;
  name: string;
  explanation: string;
  price: number;
}

const initialValue: ProductType[] = [
  {
    id: 0,
    name: "아이폰",
    explanation: "아이폰이 아주 좋아요",
    price: 1230000,
  },
];

type ProductContextType = [
  ProductType[],
  React.Dispatch<React.SetStateAction<ProductType[]>>
];

//createContext 하기 위해서는 ProductContextType 이 필요하다.(기존 데이터와 디스패처)
const ProductContext = createContext<ProductContextType | undefined>(undefined);

//ProductContext 는 ProductContextType 설계도로 만든 제품을 담고 초기값은 null이다.
//만들어진 context (ProductContext)을 사용하여 제공하는 쪽은 Provider 로 제공하고
//사용하는 곳은 Consumer 로 사용한다.

export function ProductProvider({ children }: { children: React.ReactNode }) {
  //useState 는 튜플을 반환함,
  // 즉 productState 는 state와 set메서드를 가지고 있는 튜플
  const productState = useState<ProductType[]>(initialValue);

  return (
    <ProductContext.Provider value={productState}>
      {children}
    </ProductContext.Provider>
  );
}

//consumer
export function useProductContext() {
  const ctx = useContext(ProductContext);
  if (!ctx)
    throw new Error("useProductContext must be used in <ProductProvide/>");
  return ctx;
}
