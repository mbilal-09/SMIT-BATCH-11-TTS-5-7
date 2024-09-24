import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router";

const ProductDetail = () => {
  const { id } = useParams();

  const getProductDetail = async () => {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return res;
  };

  const { data: productDetail, isLoading, isError } = useQuery({
    queryKey: ["product", id],
    queryFn: getProductDetail,
    
  });

  console.log("data", data);

  return <div>{data?.title}</div>;
};

export default ProductDetail;
