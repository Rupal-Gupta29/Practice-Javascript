const products = [
  {
    name: "iPhone 15",
    category: "electronics",
    brand: "apple",
    status: "active",
  },
  {
    name: "Samsung TV",
    category: "electronics",
    brand: "samsung",
    status: "active",
  },
  {
    name: "Zara Shoes",
    category: "fashion",
    brand: "zara",
    status: "active",
  },
  {
    name: "T-Shirt",
    category: "fashion",
    brand: "zara",
    status: "inactive",
  },
  {
    name: "MacBook Pro",
    category: "electronics",
    brand: "apple",
    status: "active",
  },
];
function filterBy(key) {
  return function (value) {
    return products.filter((item) => item[key] === value);
  };
}

let electronics = filterBy("category")("electronics");
console.log(electronics);

let activeProducts = filterBy("status")("active");
console.log(activeProducts);
