let container;
let mainhead;

document.addEventListener("DOMContentLoaded", () => {
  container = document.querySelector(".container");
  mainhead = document.createElement("h1");
  mainhead.innerText = "Welcome to Jersey Street";
  container.appendChild(mainhead);
  // mainhead.style.color = "#30ff00";

  let imb = document.createElement("img");
  let banner = document.querySelector(".banner");
  // console.log(banner);
  banner.appendChild(imb);

  let banurl = [
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

document.querySelectorAll("#price").forEach((element) => {
  element.style.color = "goldenrod";
});
