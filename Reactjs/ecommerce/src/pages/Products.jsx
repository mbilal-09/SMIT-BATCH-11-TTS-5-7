import { Button, Input, Pagination, Row, Select } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { SearchOutlined } from "@ant-design/icons";

function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(20);
  const [total, setTotal] = useState(20);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => setCategories(res.data));
  }, []);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products?limit=20&skip=${skip}`)
      .then((res) => {
        console.log("res.data==>", res.data);
        setProducts(res.data.products);
        setTotal(res.data.total);
      });
  }, [skip]);

  return (
    <div className="container mx-auto">
      <div className="flex gap-2 justify-between my-10">
        <Input type="search" placeholder="Search" />
        <Select
          showSearch
          className="h-12 w-1/2"
          placeholder="Select Category"
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          options={categories.map((data) => {
            return { label: data.name, value: data.slug };
          })}
        />
        <Button icon={<SearchOutlined />} className="h-12">
          Search
        </Button>
      </div>
      <Row gutter={16} justify={"center"}>
        {products.map((data) => (
          <ProductCard key={data.id} item={data} />
        ))}
      </Row>
      <div className="flex justify-center my-8">
        <Pagination
          onChange={(num) => {
            setSkip((num - 1) * 20);
          }}
          defaultCurrent={1}
          pageSize={20}
          total={total}
        />
        ;
      </div>
    </div>
  );
}

export default Products;
