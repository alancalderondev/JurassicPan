import { type MouseEvent } from 'react';

interface CategoryFilterProps {
  currentCategory: string | null;
  categories: string[];
}

export default function CategoryFilter({ currentCategory, categories }: CategoryFilterProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>, category: string | null) => {
    e.preventDefault();
    const url = new URL(window.location.href);
    if (category) {
      url.searchParams.set('category', category.toLowerCase());
    } else {
      url.searchParams.delete('category');
    }
    window.location.href = url.toString();
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8 ">
      <a
        href="/products"
        onClick={(e) => handleClick(e, null)}
        className={`px-4 py-2 rounded-full transition-colors ${
          !currentCategory
            ? 'bg-amber-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        All
      </a>
      {categories.map((category) => (
        <a
          key={category}
          href={`/products?category=${category.toLowerCase()}`}
          onClick={(e) => handleClick(e, category)}
          className={`px-4 py-2 rounded-full capitalize transition-colors ${
            currentCategory === category.toLowerCase()
              ? 'bg-amber-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {category}
        </a>
      ))}
    </div>
  );
}