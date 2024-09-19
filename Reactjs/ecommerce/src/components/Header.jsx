import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Badge, Button, Image } from "antd";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Header() {
  const { cartItems } = useContext(CartContext);
  console.log("cartItems=>", cartItems);
  const navigate = useNavigate();

  const isLogin = true;
  return (
    <header className="text-gray-600 shadow body-font">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <Link to={"/"}>
          <Image
            height={50}
            width={50}
            className="rounded-full"
            preview={false}
            src="https://images.unsplash.com/photo-1664688708942-c77a6b5e6abc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWNvbW1lcmNlJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D"
          />
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link to={"/products"} className="mr-5 hover:text-gray-900">
            Products
          </Link>
          <Link to={"/orders"} className="mr-5 hover:text-gray-900">
            Orders
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          {isLogin ? (
            <Avatar size={50} icon={<UserOutlined />} />
          ) : (
            <Button onClick={() => navigate("/auth")}>Login</Button>
          )}
          <Link to={"/cart"}>
            <Badge count={cartItems.length}>
              <ShoppingCartOutlined
                style={{
                  fontSize: 30,
                  color: "blue",
                }}
              />
            </Badge>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
