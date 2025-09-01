import React from "react";
import ProductCard from "../../components/product-card";

const products = [
  {
    id: 1,
    name: "Classic Crewneck T-Shirt",
    description: "A comfortable, pre-shrunk cotton tee perfect for everyday wear.",
    price: 25,
    image: "https://via.placeholder.com/400x400/F3F4F6/9CA3AF?text=T-Shirt",
  },
  {
    id: 2,
    name: "Performance Running Sneakers",
    description: "Lightweight and breathable sneakers with a responsive foam sole.",
    price: 80,
    image: "https://via.placeholder.com/400x400/F3F4F6/9CA3AF?text=Sneakers",
  },
  {
    id: 3,
    name: "Minimalist Leather Wallet",
    description: "Slim and stylish wallet with space for cards and cash. Crafted from full-grain leather.",
    price: 60,
    image: "https://via.placeholder.com/400x400/F3F4F6/9CA3AF?text=Wallet",
  },
  {
    id: 4,
    name: "Stainless Steel Water Bottle",
    description: "Keeps drinks cold for 24 hours and hot for 12. Perfect for your active lifestyle.",
    price: 35,
    image: "https://via.placeholder.com/400x400/F3F4F6/9CA3AF?text=Bottle",
  },
  {
    id: 5,
    name: "Noise-Cancelling Headphones",
    description: "Immerse yourself in your music with powerful sound and active noise cancellation.",
    price: 199,
    image: "https://via.placeholder.com/400x400/F3F4F6/9CA3AF?text=Headphones",
  },
  {
    id: 6,
    name: "Vintage Canvas Backpack",
    description: "A durable and spacious backpack with a timeless design, ideal for daily commutes.",
    price: 75,
    image: "https://via.placeholder.com/400x400/F3F4F6/9CA3AF?text=Backpack",
  },
];

const Shop = () => {
  const handleAddToCart = (product) => {
    console.log("Added to cart:", product.name);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Our Collection
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500">
            Discover our curated selection of high-quality products.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;