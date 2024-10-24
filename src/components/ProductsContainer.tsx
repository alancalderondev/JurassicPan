import { useState } from 'react';
import ProductCard from './ProductCard';
import { type Product } from '../data/products';

interface ProductsContainerProps {
  products: Product[];
  categories: string[];
}

export default function ProductsContainer({ products, categories }: ProductsContainerProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category.toLowerCase() === selectedCategory.toLowerCase())
    : products;

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-2 rounded-full transition-colors ${
            !selectedCategory
              ? 'bg-amber-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Todos los Productos
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full capitalize transition-colors ${
              selectedCategory === category
                ? 'bg-amber-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-screen-xl mx-auto">
  {filteredProducts.map((product) => (
    <ProductCard key={product.id} product={product} />
  ))}
</div>

    </div>
  );
}