export interface Product {
    id: number;
    name: string;
    price: number;
    ingredients: string[];
    image: string;
    category: string;
  }
  
  export const products: Product[] = [
    {
      id: 1,
      name: "Concha",
      price: 10,
      ingredients: ["Chocolate", "Fresa", "Vainilla"],
      image: "https://mmmole.com/wp-content/uploads/2021/08/concha-20.jpg",
      category: "pan"
    },
    {
      id: 2,
      name: "Donas",
      price: 10,
      ingredients: ["Chocolate", "Azucar", "Moka", "Chispas de colores","Fresa"],
      image: "https://i0.wp.com/www.culinariamexicana.com.mx/wp-content/uploads/2020/06/Variedad-de-donas-Rod-Long-Unsplash-scaled.jpg?fit=2560%2C1707&ssl=1",
      category: "pan"
    },
    {
      id: 3,
      name: "Pan de Muerto",
      price: 15,
      ingredients: ["Azucar","Chocolate"],
      image: "https://www.elglobo.com.mx/cdn/shop/products/pandemuerto_naranja_1200x.jpg?v=1664824051",
      category: "pan"
    },
    {
      id: 4,
      name: "Orejas",
      price: 9,
      ingredients: ["Azucar","Chocolate"],
      image: "https://inmamamaggieskitchen.com/wp-content/uploads/2021/01/Orejas-Elephant-Ears-Recipe.jpg",
      category: "pan"
    },
    {
      id: 5,
      name: "Leche Evaporada (Carnation)",
      price: 15,
      ingredients: ["339ml"],
      image: "https://chedrauimx.vtexassets.com/arquivos/ids/37749396/7501058611062_00.jpg?v=638648922023000000",
      category: "leche"
    },
    {
      id: 6,
      name: "Sabro Leche",
      price: 13,
      ingredients: ["bolsa"],
      image: "https://sumerlabs.com/sumer-app-90b8f.appspot.com/product_photos%2Fe093dc2be6438c8d6255e7eb026aab10%2Fac29c400-8493-11ec-a102-ddaef7a0d5f6?alt=media&token=73eee7cb-cd4a-4dac-a1be-fd24c5af3852",
      category: "leche"
    },
    
  ];