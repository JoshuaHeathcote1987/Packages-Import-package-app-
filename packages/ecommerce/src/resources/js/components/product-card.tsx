import React from "react";

const ProductCard = ({ product, onAddToCart }) => {
    return (
        <div className="max-w-sm rounded-lg shadow-lg overflow-hidden bg-white hover:shadow-2xl transition-shadow duration-300">
            <img
                className="w-full h-64 object-cover"
                src={product.image}
                alt={product.name}
            />
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
                <p className="text-gray-600 mt-2">{product.description}</p>
                <div className="flex items-center justify-between mt-4">
                    <span className="text-xl font-bold text-gray-900">${product.price}</span>
                    <button
                        onClick={() => onAddToCart(product)}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
