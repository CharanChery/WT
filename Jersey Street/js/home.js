let container;
let mainhead;

document.addEventListener("DOMContentLoaded", () => {
  container = document.querySelector(".container");
  mainhead = document.createElement("h1");
  mainhead.innerHTML =
    "Welcome to <span class='titlehead'>Jersey Street 👕 </span> <br> Your one-stop shop for all your favorite IPL team jerseys";
  container.appendChild(mainhead);
  // mainhead.style.color = "#30ff00";

  let imb = document.createElement("img");
  let banner = document.querySelector(".banner");
  // console.log(banner);
  banner.appendChild(imb);

  var banurl = [
    "../img/India/mainindia.jpg",
    "../img/RCB/RCb-Banner01.png",
    "../img/MI/mi-banner1.png",
    "../img/CSK/csk-banner1.png",
    "../img/SRH/srh-banner1.png",
  ];
  let bannerindex = 0;
  imb.src = banurl[bannerindex];
  imb.alt = "Banner1";
  bannerindex++;
  let bannerchange = () => {
    // console.log(banurl[bannerindex]);

    imb.src = banurl[bannerindex];

    bannerindex = (bannerindex + 1) % banurl.length;
  };
  setInterval(bannerchange, 2000);
});

document.addEventListener("scroll", () => {
  let header = document.querySelector("header");
  let bannerheight = document.querySelector(".banner").offsetHeight;

  // console.log(bannerheight);
  // console.log(window.scrollY);

  if (window.scrollY > bannerheight - 140) {
    header.classList.add("scrolled");
    container.removeChild(mainhead);
  } else {
    header.classList.remove("scrolled");
    container.appendChild(mainhead);
  }
});

document.querySelectorAll(".linkund").forEach((element) => {
  element.style.transition = "text-decoration .5s ease-in-out";
  element.addEventListener("mouseover", () => {
    element.style.textDecoration = "underline";
    element.style.textDecorationColor = "#30ff00";
    // element.style.color = "#30ff00";
  });
  element.style.transition = "text-decoration .5s ease-out";
  element.addEventListener("mouseout", () => {
    setTimeout(() => {
      element.style.textDecoration = "none";
    }, 100);
  });
});



// links nav
document.addEventListener("click", (event) => {
  if (event.target.id === "nav-jersey") {
    console.log(event.target.id);
    event.preventDefault();
    let jerseysection = document.getElementById("Jerseys");
    if (jerseysection) {
      jerseysection.scrollIntoView({ behavior: "smooth" });
    }
  } else if (event.target.id === "nav-foot") {
    console.log(event.target.id);
    event.preventDefault();
    let footsection = document.querySelector("footer");
    if (footsection) {
      footsection.scrollIntoView({ behavior: "smooth" });
    }
  }
});





let arrayprodnames = [{
  name: "RCB Bold Red",
  price: 500,
  count: 0,
  imgurl: "../img/RCB/Jerseys/rcb front concept.jpg",
  descrption: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis molestias numquam nesciunt accusamus consequuntur repellendus cupiditate distinctio laudantium nisi reiciendis, fugit amet ab corporis, dolor alias natus eligendi, et veritatis.",
  alt:"RCB",
},
{
  name: "CSK Smart Yellow",
  price: 500,
  count: 0,
  imgurl: "../img/CSK/Jerseys/CSK Front.jpg",
  descrption: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis molestias numquam nesciunt accusamus consequuntur repellendus cupiditate distinctio laudantium nisi reiciendis, fugit amet ab corporis, dolor alias natus eligendi, et veritatis.",
  alt:"CSK",
},
{
  name: "MI Blue Parrot",
  price: 500,
  count: 0,
  imgurl: "../img/MI/Jerseys/MI front.jpg",
  descrption: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis molestias numquam nesciunt accusamus consequuntur repellendus cupiditate distinctio laudantium nisi reiciendis, fugit amet ab corporis, dolor alias natus eligendi, et veritatis.",
  alt:"MI",
},
{
  name: "SRH's Pulpy Orange",
  price: 500,
  count: 0,
  imgurl: "../img/SRH/Jerseys/SRH front.jpg",
  descrption: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis molestias numquam nesciunt accusamus consequuntur repellendus cupiditate distinctio laudantium nisi reiciendis, fugit amet ab corporis, dolor alias natus eligendi, et veritatis.",
  alt:"SRH",
},
{
  name: "India's Blue Sea",
  price: 1000,
  count: 0,
  imgurl: "../img/India/Jerseys/IND front.png",
  descrption: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis molestias numquam nesciunt accusamus consequuntur repellendus cupiditate distinctio laudantium nisi reiciendis, fugit amet ab corporis, dolor alias natus eligendi, et veritatis.",
  alt:"ind",
},
{
  name:"RCB's Red Sea",
  price: 500,
  count:0,
  imgurl: "../img/RCB/Jerseys/rcb front red.jpg",
  descrption: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis molestias numquam nesciunt accusamus consequuntur repellendus cupiditate distinctio laudantium nisi reiciendis, fugit amet ab corporis, dolor alias natus eligendi, et veritatis.",
  alt:"RCB",
},
];

let footarrayprod = [{
  name: "Argentina",
  price: 500,
  count: 0,
  imgurl: "../img/Football/argentina/argentina front.png=z-800,800_f-webp",
  descrption: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis molestias numquam nesciunt accusamus consequuntur repellendus cupiditate distinctio laudantium nisi reiciendis, fugit amet ab corporis, dolor alias natus eligendi, et veritatis.",
  alt:"f1",
},
{
  name: "Arsenal",
  price: 500,
  count: 0,
  imgurl: "../img/Football/aresnal/arsenal.png",
  descrption: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis molestias numquam nesciunt accusamus consequuntur repellendus cupiditate distinctio laudantium nisi reiciendis, fugit amet ab corporis, dolor alias natus eligendi, et veritatis.",
  alt:"f2",
},
{
  name: "Barcelona",
  price: 500,
  count: 0,
  imgurl: "../img/Football/Barcelona/Barcelone.png",
  descrption: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis molestias numquam nesciunt accusamus consequuntur repellendus cupiditate distinctio laudantium nisi reiciendis, fugit amet ab corporis, dolor alias natus eligendi, et veritatis.",
  alt:"f3",
},
{
  name: "Brazil",
  price: 500,
  count: 0,
  imgurl: "../img/Football/Brazil/Brazil Front.png",
  descrption: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis molestias numquam nesciunt accusamus consequuntur repellendus cupiditate distinctio laudantium nisi reiciendis, fugit amet ab corporis, dolor alias natus eligendi, et veritatis.",
  alt:"f4",
},
{
  name: "Intermilan",
  price: 1000,
  count: 0,
  imgurl: "../img/Football/intermilan/intermilan.png",
  descrption: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis molestias numquam nesciunt accusamus consequuntur repellendus cupiditate distinctio laudantium nisi reiciendis, fugit amet ab corporis, dolor alias natus eligendi, et veritatis.",
  alt:"f5",
},
{
  name:"Liverpool",
  price: 500,
  count:0,
  imgurl: "../img/Football/liverpool/liverpool.png",
  descrption: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis molestias numquam nesciunt accusamus consequuntur repellendus cupiditate distinctio laudantium nisi reiciendis, fugit amet ab corporis, dolor alias natus eligendi, et veritatis.",
  alt:"f6",
},
];




let jerseyscontainer = document.querySelectorAll(".jerseyscontainer")[0];


arrayprodnames.forEach((element, index) => {
  let c = 0;
  let separatejersey = document.createElement("div")
  separatejersey.classList.add("jersey1")
  
  let prodimgcont = document.createElement("div");
  prodimgcont.classList.add("jimg");

  let img = document.createElement("img");
  img.src = element.imgurl;
  img.alt = element.alt

  let prodtextareadiv = document.createElement("div")
  prodtextareadiv.classList.add("jtextarea")

  let h3 = document.createElement("h3");
  h3.innerHTML = element.name;

  let prodprice = document.createElement("p");
  prodprice.id = "price";
  prodprice.innerHTML = `Price: &#8377; ${element.price}`
  prodprice.style.color = "goldenrod"
  

  let proddesc = document.createElement("p");
  proddesc.id = "jdesc";
  proddesc.innerHTML = element.descrption;

  let cartbutton = document.createElement("button");
  cartbutton.innerHTML = "Add to card <i class='bi bi-cart'></i>"
  cartbutton.addEventListener("click", ()=>{
    
    cart(element, ++c);
  })



  
  // console.log(`${element.name} card added`);
  prodtextareadiv.appendChild(h3);
  prodtextareadiv.appendChild(prodprice);
  prodtextareadiv.appendChild(proddesc);
  prodtextareadiv.appendChild(cartbutton)
  
  
  prodimgcont.appendChild(img);
  prodimgcont.appendChild(prodtextareadiv)

  separatejersey.appendChild(prodimgcont)

  jerseyscontainer.appendChild(separatejersey)
});


let fjerseyscontainer = document.querySelectorAll(".jerseyscontainer")[1]

footarrayprod.forEach((element, index) => {
  let c=0;
  let separatejersey = document.createElement("div")
  separatejersey.classList.add("jersey1")
  
  let prodimgcont = document.createElement("div");
  prodimgcont.classList.add("fjimg");
  prodimgcont.id = `foj${index+1}`

  let img = document.createElement("img");
  img.src = element.imgurl;
  img.alt = element.alt

  let prodtextareadiv = document.createElement("div")
  prodtextareadiv.classList.add("jtextarea")

  let h3 = document.createElement("h3");
  h3.innerHTML = element.name;

  let prodprice = document.createElement("p");
  prodprice.id = "price";
  prodprice.innerHTML = `Price: &#8377; ${element.price}`
  prodprice.style.color = "goldenrod"


  let proddesc = document.createElement("p");
  proddesc.id = "jdesc";
  proddesc.innerHTML = element.descrption;

  let cartbutton = document.createElement("button");
  cartbutton.innerHTML = "Add to card <i class='bi bi-cart'></i>";
  cartbutton.addEventListener("click", ()=>{
    cart(element, ++c);
  })



  
  // console.log(`${element.name} card added`);
  prodtextareadiv.appendChild(h3);
  prodtextareadiv.appendChild(prodprice);
  prodtextareadiv.appendChild(proddesc);
  prodtextareadiv.appendChild(cartbutton)
  
  
  prodimgcont.appendChild(img);
  prodimgcont.appendChild(prodtextareadiv)

  separatejersey.appendChild(prodimgcont)

  fjerseyscontainer.appendChild(separatejersey)
});


let carray = []
let countjerseys = document.querySelectorAll(".countjersey");
countjerseys[0].innerHTML = 0

function cart(element, count){
  
  carray.push(element)
  console.log(carray.length,count);
  
  // console.log(countjerseys)
  countjerseys[0].innerHTML = carray.length;
  
}