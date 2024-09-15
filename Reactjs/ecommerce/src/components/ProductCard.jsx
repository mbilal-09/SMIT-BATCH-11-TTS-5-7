import React from "react";
import { Card, Col, Image } from "antd";
const ProductCard = ({ item }) => (
  <Col sm={24} md={12} lg={8} xl={6}>
    <div className="my-2 border-2 hover:opacity-75 cursor-pointer flex flex-col items-center justify-center ">
      <Image preview={false} src={item.thumbnail} height={200}  />
      <div className="flex justify-between p-3 w-full">
        <h1 className="font-semibold">{item.title}</h1>
        <h1 className="font-semibold">${item.price}</h1>
      </div>
    </div>
  </Col>
);
export default ProductCard;
