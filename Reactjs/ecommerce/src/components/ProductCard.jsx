import React from "react";
import { Card, Col, Image } from "antd";
const ProductCard = ({ item }) => (
  <Col sm={24} md={12} lg={8} xl={6}>
    <div className="my-2 border-2 flex flex-col items-center justify-center ">
      <Image src={item.thumbnail} height={200} width={200} />
      <div className="flex justify-between p-3 w-full">
        <h1 className="font-semibold">{item.title}</h1>
        <h1 className="font-semibold">${item.price}</h1>
      </div>
    </div>
  </Col>
);
export default ProductCard;
