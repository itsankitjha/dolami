// data/product.js
export const products = [
  {
    productId: 1,
    category: "Avatars",
    subcategory: "Human-like",
    productName: "Aardvark",
    creatorName: "Creator name",
    rating: 4.5,
    price: 9.99,
    description: "This is a description of the product.",
  },
  {
    productId: 2,
    category: "Avatars",
    subcategory: "Anthro & Furry",
    productName: "Bubblegum",
    creatorName: "Creator name",
    rating: 3.7,
    price: 11.99,
    description: "This is a different description of the product.",
  },
  {
    productId: 3,
    category: "Avatars",
    subcategory: "Robot & Cyborgs",
    productName: "Cactus",
    creatorName: "Creator name",
    rating: 2,
    price: 10.99,
    description: "This is a unique description of the product.",
  },
  {
    productId: 4,
    category: "Fashion",
    subcategory: "Clothes",
    productName: "Daffodil",
    creatorName: "Creator name",
    rating: 5,
    price: 12.99,
    description: "This is a different unique description of the product.",
  },
  {
    productId: 5,
    category: "Fashion",
    subcategory: "Accessories",
    productName: "Elegant",
    creatorName: "Creator name",
    rating: 1,
    price: 9.99,
    description: "This is a unique different description of the product.",
  },
  // Repeat the same pattern for remaining items...
].concat(
  Array(10)
    .fill(0)
    .map((_, index) => ({
      productId: 6 + index,
      category: "Avatars",
      subcategory: "Human-like",
      productName: `Product ${index + 1}`, // Dynamically generating product name
      creatorName: "Creator name",
      rating: 1 + (index % 5), // Dynamically generating rating from 1 to 5
      price: 10.99 + index, // Making price dynamic
      description: `This is a unique different description of the product ${index}.`,
    }))
);
