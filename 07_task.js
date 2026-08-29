const products = [
      { name: "Laptop",  price: 1200 },
      { name: "Phone",   price: 800  },
      { name: "Tablet",  price: 450  },
      { name: "Monitor", price: 350  },
      { name: "Headset", price: 150  },
];


const expensive = products.filter(product => product.price > 500)

console.log(expensive)

const mapped = products.map(product => product.name + " - $" + product.price)

console.log(mapped)

const reduced = products.reduce((acc, elem) => acc + elem.price, 0)

console.log(reduced)
