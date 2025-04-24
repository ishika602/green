const wrapper = document.getElementById("reviewsWrapper");

function slideLeft() {
  wrapper.scrollBy({
    left: -300,
    behavior: 'smooth'
  });
}

function slideRight() {
  wrapper.scrollBy({
    left: 300,
    behavior: 'smooth'
  });
}












// const products = [
//     {
//       title: "Men Formal Tan Peshawari Front Open Leather Slip On",
//       img: "https://via.placeholder.com/200x150?text=Black+Shoes",
//       price: "Rs.1,499",
//       oldPrice: "Rs.1,599",
//       discount: "10%OFF"
//     },
//     {
//       title: "Men Formal Peshawari Brown Leather Slip On",
//       img: "https://via.placeholder.com/200x150?text=Brown+Shoes",
//       price: "Rs.1,499",
//       oldPrice: "Rs.1,599",
//       discount: "10%OFF"
//     },
//     {
//       title: "Men Olive Green Casual Slip-On Shoes",
//       img: "https://via.placeholder.com/200x150?text=Green+Shoes",
//       price: "Rs.1,499",
//       oldPrice: "Rs.1,599",
//       discount: "10%OFF"
//     },
//     {
//       title: "Men Maroon Stitched Block Design Pattern",
//       img: "https://via.placeholder.com/200x150?text=Maroon+Shoes",
//       price: "Rs.1,499",
//       oldPrice: "Rs.1,599",
//       discount: "10%OFF"
//     },
//     {
//       title: "Men Tan Laser Cut Stitch Jutis & Mojaris",
//       img: "https://via.placeholder.com/200x150?text=Tan+Shoes",
//       price: "Rs.1,499",
//       oldPrice: "Rs.1,599",
//       discount: "10%OFF"
//     }
//   ];
  
//   const grid = document.getElementById("productGrid");
  
//   products.forEach(product => {
//     const card = document.createElement("div");
//     card.className = "product-card";
//     card.innerHTML = `
//       <div class="timer">⚡ 9h 5m 42s</div>
//       <div class="wishlist">☆</div>
//       <img src="${product.img}" alt="${product.title}" />
//       <p class="product-title">${product.title}</p>
//       <p class="price">
//         ${product.price}
//         <span class="old-price">${product.oldPrice}</span>
//         <span class="discount">${product.discount}</span>
//       </p>
//     `;
//     grid.appendChild(card);
//   });
  