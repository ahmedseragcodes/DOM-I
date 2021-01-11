//Header Elements 

const headerNav=document.querySelectorAll(".container nav a");
headerNav[0].textContent="Services";
headerNav[1].textContent="Product";
headerNav[2].textContent="Vision";
headerNav[3].textContent="Features";
headerNav[4].textContent="About";
headerNav[5].textContent="Contact";

//Dark Mode + Light Mode Button 

const darkModeButton=document.createElement("button");
darkModeButton.textContent="Dark Mode";
darkModeButton.style.backgroundColor="white";
darkModeButton.style.border="none";
darkModeButton.style.fontSize="1rem";
darkModeButton.style.position="relative";
darkModeButton.style.bottom=".25rem";

const lightModeButton=document.createElement("button");
lightModeButton.textContent="Light Mode";
lightModeButton.style.backgroundColor="white";
lightModeButton.style.border="none";
lightModeButton.style.fontSize="1rem";
lightModeButton.style.position="relative";
lightModeButton.style.bottom=".25rem";


darkModeButton.addEventListener("click", function(event){
  document.body.style.backgroundColor="black";
  document.body.style.color="#03A062";
})

lightModeButton.addEventListener("click", function(event){
  document.body.style.backgroundColor="white";
  document.body.style.color="black";
})

const frontPageHeaderNav=document.querySelector("nav");
frontPageHeaderNav.append(darkModeButton);
frontPageHeaderNav.append(lightModeButton);

//CTA Section 

const ctaHeading=document.querySelector(".cta h1");
ctaHeading.textContent="DOM IS AWESOME";
ctaHeading.innerHTML="DOM<br />Is<br />Awesome"
ctaHeading.style.textAlign="center";
ctaHeading.style.display="block";
const ctaButton=document.querySelector(".cta button");
ctaButton.textContent="Get Started";

const ctaImg=document.querySelector(".cta img");
ctaImg.src="./img/header-img.png";

// ctaButton.addEventListener("click", function(event){
//   document.body.style.backgroundColor="black";
//   document.body.style.color="#03A062";
// })

//Main Content Section

const mainContent=document.querySelector(".main-content");

const topContent=document.getElementsByClassName("top-content");

const topContentHeadings=document.querySelectorAll(".top-content h4");
topContentHeadings[0].textContent="Features";
topContentHeadings[1].textContent="About";

const topContentParagraphs=document.querySelectorAll(".top-content p");
topContentParagraphs[0].textContent="Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
topContentParagraphs[1].textContent="About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

const topContentImg=document.querySelector("#middle-img");
topContentImg.src="./img/mid-page-accent.jpg";

const bottomContentHeadings=document.querySelectorAll(".bottom-content h4");
bottomContentHeadings[0].textContent="Services";
bottomContentHeadings[1].textContent="Product";
bottomContentHeadings[2].textContent="Vision";

const bottomContentParagraphs=document.querySelectorAll(".bottom-content p");
bottomContentParagraphs[0].textContent="Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
bottomContentParagraphs[1].textContent="Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
bottomContentParagraphs[2].textContent="Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

//Contact Section

const contactHeading=document.querySelector(".contact h4");
contactHeading.textContent="Contact";

const contactParagraphs=document.querySelectorAll(".contact p");
contactParagraphs[0].textContent="123 Way 456 Street Somewhere, USA";
contactParagraphs[1].textContent="1 (888) 888-8888";
contactParagraphs[2].textContent="sales@greatidea.io";

//Footer Content

const footerCopyright=document.querySelector("footer p");
footerCopyright.textContent="Copyright Great Idea! 2018";




const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
