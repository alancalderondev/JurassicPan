import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  ingredients: string[];
  image: string;
}

export default function ProductCard({ product }: { product: Product }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative h-[400px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`
        bg-white rounded-lg shadow-md p-4
        transition-all duration-300 ease-in-out
        ${isHovered ? 'scale-110 h-full' : 'h-full'}
        absolute w-full
      `}>
        <div className={`
          transition-all duration-300 ease-in-out
          ${isHovered ? 'h-1/3' : 'h-3/4'}
          relative overflow-hidden
        `}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
          <p className="text-lg font-bold text-amber-600">${product.price.toFixed(2)} MXN</p>
          
          <div className={`
            transition-all duration-300 ease-in-out
            overflow-hidden
            ${isHovered ? 'max-h-48 opacity-100 mt-2' : 'max-h-0 opacity-0'}
          `}>
            <div className="text-sm">
              <h5 className="font-semibold text-gray-700 mb-1">Variantes:</h5>
              <ul className="list-disc list-inside text-gray-600">
                {product.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}