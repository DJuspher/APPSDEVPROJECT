import { useState } from "react";
import ProductCard from "./components/ProductCard";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const productData = [
    {
      imgSrc: "/lumpia.webp",
      name: "Name : Lumpia",
      price: "Price : 15",
      description:
        "Lumpia are a popular Filipino spring roll dish, known for their thin, crispy wrappers and savory fillings, often served as an appetizer or snack at gatherings.",
    },

    {
      imgSrc: "/ngohiong.webp",
      name: "Name : Ngohiong",
      price: "Price : 20",
      description:
        "Ngohiong is a Filipino appetizer originating from Cebu City, consisting of julienned or cubed vegetables like jicama or heart of palm, combined with ground meat or shrimp seasoned with five-spice powder, all wrapped in a thin egg crêpe or lumpia wrapper and deep-fried.",
    },

    {
      imgSrc: "/Shumai.webp",
      name: "Name : Shumai",
      price: "Price : 10",
      description:
        "Shumai is a type of traditional Chinese dumpling made of ground pork. In Cantonese cuisine, it is usually served as a dim sum snack.",
    },

    {
      imgSrc: "/puso.webp",
      name: "Name : Puso/Hangging Rice",
      price: "Price : 5",
      description:
        "Puso, also known as hanging rice, is a traditional Filipino dish originating from Cebu, where steamed rice is carefully wrapped and cooked inside intricately handwoven coconut leaves.",
    },
    
    {
      imgSrc: "/chicharonbulakbulak.webp",
      name: "Name : Chicharon Bulaklak",
      price: "Price : 30",
      description:
        "Chicharon Bulaklak is a popular Filipino snack made from the deep-fried peritoneum tissue of the pig, known as ruffle fat or mesentery, which connects the intestines to the abdominal wall.",
    },
    
    {
      imgSrc: "/bolabola.webp",
      name: "Name : Bola-bola",
      price: "Price : 12",
      description:
        "Bola-bola refers to a versatile Filipino meatball dish, often made with ground pork or chicken, seasoned with soy sauce, garlic, onions, and eggs, and typically served fried or in soup",
      orderLink: "Order.jsx",
    },

  ];



  const filteredProducts = productData.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div style={{ textAlign: "center", margin: "20px" }}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "10px",
            width: "550px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      {filteredProducts.length > 0 ? (
        filteredProducts.map((product, index) => (
          <ProductCard key={index} productData={product} />
        ))
      ) : (
        <p style={{ textAlign: "center" }}>No products found.</p>
      )}
    </>
  );
}
