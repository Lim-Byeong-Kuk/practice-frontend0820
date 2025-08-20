import { createContext, useContext, useState } from "react";

//타입 스크립트는 javascript 의 up version
//js는 type을 알수가 없다. 그래서 문제가 많다.
//코드가 간결하면 문제가 없지만 리액트는 코드(Component)가 분리되어 있고
//방대한 코드라서 compiler 가 오류를 표시하지 않으면
//실행중에 오류가 발생한다, 문법적 오류보다는 논리적오류의 소지가 많다
//그래서 type을 지정하고 그 타입에 맞지 않으면 미리 오류를 알려주고 싶다.
interface ProductType {
  id: number;
  name: string;
  explanation: string;
  price: number;
}

//Type 붙은 애들은 일종의 설계도, 설계도에 쓸 도면을 미리 정해주는 것
//ProductType 인터페이스 선언(타입을 지정하고) 그 타입이 어긋날때 미리 알려주고자 함
// id , name, explanation, price 를 각각으로 가지는 객체이고
// 그 객체의 data는 위에서 정의한 ProductType과 일치해야 한다.
// initialValue 는 ProductType 의 배열형태만 저장가능한데
//각각의 데이터는 객체(ProductType)이다.
const initialValue: ProductType[] = [
  {
    id: 0,
    name: "아이폰",
    explanation: "아이폰이 아주 좋아요 가성비가 짱이에요",
    price: 1230000,
  },
]; // initialValue 는 ProductType 인터페이스 초기값을 구현하는 객체 배열이다.

// ProductContextType 은 기존 데이터와 디스패처를 가지고 있다.
//action 은 dispatch 를 통해서 전달가능
//reducer 는 store에 저장되어 있는 state를 읽고 action의 요구사항을 반영하여
//store에 저장되어 있는 state를 변경,
//그런데 dispatch는 setter역할을 하는데 값을 받을 수도 있고, 함수를 받을수 있도록 되어있다.
//state 안에는 ProductType[] 형태의 객체 배열이 저장되어 있고
//action을 전달하는 것은 dispatch이고
//여기서 말하는 context는 통로의 역할을 한다.
//action, store, state, dispatch, reducer 의 기능을 총괄하는 하는 것이다.
type ProductContextType = [
  ProductType[], //저장하려는 데이터의 타입
  React.Dispatch<React.SetStateAction<ProductType[]>>
];
const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({ children }: { children: React.ReactNode }) {
  const productState = useState<ProductType[]>(initialValue); //위에서 설명한
  //하나의 컴포넌트에서 사용한 useState를 여기에서 context를 만든후 Provider로 제공하면
  //다른 곳에서 공유가능하다.
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
