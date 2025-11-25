const PRODUCTS=[
 {name:"Paracetamol 500mg (10)",price:30,desc:"Fever reducer",offer:20},
 {name:"Cough Syrup 100ml",price:90,desc:"Cough relief",offer:10},
 {name:"Vitamin C 500mg (10)",price:120,desc:"Immunity booster",offer:0}
];

function renderProducts(){
 const root=document.getElementById("products");
 PRODUCTS.forEach(p=>{
   const div=document.createElement("div");
   div.className="card";
   div.innerHTML=`<h4>${p.name}</h4>
   <p>${p.desc}</p>
   <strong>₹${p.price}</strong>
   <br><button class="btn">Order</button>`;
   root.appendChild(div);
 });
}
renderProducts();
