const body = document.querySelector("body")
const nav = document.createElement("nav");
document.body.appendChild(nav);

const img = document.createElement("img");
img.category = "Imagem da logotipo do Virtual Market de cor preta";
img.src = "./img/brand/logo.svg";
img.alt = "Imagem da logotipo do Virtual Market de cor preta";
img.title = "Imagem da logotipo do Virtual Market de cor preta";
nav.appendChild(img);


const mainContainer = document.createElement("main")
mainContainer.className = "container"
body.appendChild(mainContainer)
//const section = document.querySelector('section');

const products = [
  {
    title: "Uva Crimson",
    price: 8.99,
    category: "Frutas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Banana",
    price: 5.69,
    category: "Frutas",
    image: "./img/products/product_2.svg",
    imageDescription: "",
  },
  {
    title: "Mamão",
    price: 4.99,
    category: "Frutas",
    image: "./img/products/product_3.svg",
    imageDescription: "",
  },
  {
    title: "Maçã",
    price: 9.2,
    category: "Frutas",
    image: "./img/products/product_4.svg",
    imageDescription: "",
  },
  {
    title: "Refrigerante",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Vinho",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_6.svg",
    imageDescription: "",
  },
  {
    title: "Água Tônica",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Água de coco",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_8.svg",
    imageDescription: "",
  },

  {
    title: "Sabonete",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_9.svg",
    imageDescription: "",
  },

  {
    title: "Detergente",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_10.svg",
    imageDescription: "",
  },

  {
    title: "Limpa superfícies",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_11.svg",
    imageDescription: "",
  },

  {
    title: "Lustra Móveis",
    price: 8.99,
    category: "Higiene",
    image: undefined,
    imageDescription: "",
  }
];

//1 Função para criar as seções

function sections(array){
//1 Recuperar informações da seção


let  title = array.title
let price = array.price
let category =  array.category
let image =  array.image
if(image===undefined){
  image="./img/products/no-img.svg"
}
let imageDescription = array.imageDescription

//2 Criar os elementos



//const ul = document.createElement("ul")
//main_pcf.appendChild(ul)

const li = document.createElement("li")
li.className = "product"
//ul.appendChild(li)

const img = document.createElement("img")
img.className = "product-img"
li.appendChild(img)

const main_pm = document.createElement("main")
main_pm.className = "product-main"
li.appendChild(main_pm)

const h1_pt = document.createElement("h1")
h1_pt.className = "product-title"
main_pm.appendChild(h1_pt)

const h5_pc = document.createElement("h5")
h5_pc.className = "product-category"
main_pm.appendChild(h5_pc)

const strong = document.createElement("strong")
strong.className = "product-price"
main_pm.appendChild(strong)

//3 A dicionar as informações nas tags criadas


//h1.innerText = category;

img.src = image;
h1_pt.innerText = title;
h5_pc.innerText = category;
strong.innerText = price;
img.alt = title;
//imageDescription:

//5 Retornar a seção montada

 return li
}
const itens_categoria = sections(products)

function itens(arr){


  const sectionHf = document.createElement("section");
  sectionHf.className = "products-section"
  mainContainer.appendChild(sectionHf)

  const h11= document.createElement("h1")
  sectionHf.appendChild(h11)
  h11.innerText = "Frutas"

  const main_pcf = document.createElement("main")
  main_pcf.className = "products-content fruits"
  sectionHf.appendChild(main_pcf)

  const ulf= document.createElement("ul")
  main_pcf.appendChild(ulf)
  
  const sectionHb = document.createElement("section");
  sectionHb.className = "products-section"
  mainContainer.appendChild(sectionHb)
    
  const h12= document.createElement("h1")
  sectionHb.appendChild(h12)
  h12.innerText = "Bebidas"

  const main_pcd = document.createElement("main")
  main_pcd.className = "products-content drinks"
  sectionHb.appendChild(main_pcd)

  const ulb= document.createElement("ul")
  main_pcd.appendChild(ulb)
  
  
  const sectionHh = document.createElement("section");
  sectionHh.className = "products-section"
  mainContainer.appendChild(sectionHh)
    
  const h13= document.createElement("h1")
  sectionHh.appendChild(h13)
  h13.innerText = "Higiene"

  const main_pch = document.createElement("main")
  main_pch.className = "products-content hygiene"
  sectionHh.appendChild(main_pch)

  const ulh= document.createElement("ul")
  main_pch.appendChild(ulh)
  
  
  for(let i =0 ; i<arr.length; i++){
    let va = sections(arr[i])

//cri uma variavel que receba os containes e de pois faça a comparação para as sect 
    
if(arr[i].category==="Frutas"){
  
  ulf.appendChild(va)
  } 
  if(arr[i].category==="Bebidas"){
       
   
   ulb.appendChild(va)
    }
      if(arr[i].category==="Higiene"){
        
        ulh.appendChild(va)
       }
      }
    
}

itens(products)