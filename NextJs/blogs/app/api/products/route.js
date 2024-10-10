const products = [
  {
    title: "Laptop",
    price: 40000,
  },
  {
    title: "Laptop",
    price: 40000,
  },
  {
    title: "Laptop",
    price: 40000,
  },
  {
    title: "Laptop",
    price: 40000,
  },
  {
    title: "Laptop",
    price: 40000,
  },
  {
    title: "Laptop",
    price: 40000,
  },
];

export async function GET(req) {
  return Response.json({
    data: products,
  });
}

export async function POST(req) {
  const userProduct = await req.json();
  products.push(userProduct);
  return Response.json({
    data: products,
    msg: "Product Added Successfully",
  });
}
