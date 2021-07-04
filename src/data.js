import featureProduct1 from "../src/images/img10.jpg";
import featureProduct2 from "../src/images/img01.jpg";
import featureProduct3 from "../src/images/img02.jpg";
import featureProduct4 from "../src/images/img03.jpg";
import featureProduct5 from "../src/images/img11.jpg";
import featureProduct6 from "../src/images/img06.jpg";
import featureProduct7 from "../src/images/img13.jpg";
import featureProduct8 from "../src/images/img14.jpg";
import featureProduct9 from "../src/images/img07.jpg";
import slide1 from "../src/images/slide-img1.jpg";
import slide2 from "../src/images/slide-img2.jpg";
import slide3 from "../src/images/slide-img3.jpg";
import collection1 from "../src/images/jtv-banner1.jpg";
import collection2 from "../src/images/jtv-banner2.jpg";
import collection3 from "../src/images/jtv-banner3.jpg";
import bestSeller1 from "../src/images/img12.jpg";
import bestSeller2 from "../src/images/img15.jpg";
import bestSeller3 from "../src/images/img05.jpg";
import blog1 from "../src/images/blog-img1.jpg";
import blog2 from "../src/images/blog-img2.jpg";
import blog3 from "../src/images/blog-img3.jpg";
import brand1 from "../src/images/brand2.png";
import brand2 from "../src/images/brand3.png";
import brand3 from "../src/images/brand4.png";
import brand4 from "../src/images/brand5.png";
import brand5 from "../src/images/brand4.png";
import brand6 from "../src/images/brand6.png";
import payment1 from "../src/images/payment-1.png";
import payment2 from "../src/images/payment-2.png";
import payment3 from "../src/images/payment-3.png";
import payment4 from "../src/images/payment-4.png";
import testimonial1 from "../src/images/testimonials-img1.jpg";
import testimonial2 from "../src/images/testimonials-img2.jpg";
import testimonial3 from "../src/images/testimonials-img3.jpg";

const brandContainer = [brand1, brand2, brand3, brand4, brand5, brand6];
const products = [
  {
    price: "155.00",
    image: bestSeller1,
    id: "1",
    category: "bestSelling",
    type: "Apples",
    code: "#123456723",
    availability: "In stock",
    specialCategory: "new",
    oldPrice: "125.00",
    manufacturer: "Colorido",
    reviews: "3",
    name: "pear",
    color: "pink",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
  },
  {
    price: "225.00",
    image: bestSeller2,
    id: "2",
    category: "bestSelling",
    type: "Vegetables",
    code: "#123456722",
    availability: "In stock",
    specialCategory: "upsell",
    oldPrice: "200.00",
    manufacturer: "Addidas",
    reviews: "1",
    name: "apples",
    color: "grey",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
  },
  {
    price: "99.00",
    image: bestSeller3,
    id: "3",
    category: "bestSelling",
    type: "Fruits",
    code: "#123456721",
    availability: "In stock",
    oldPrice: "90.00",
    manufacturer: "Barisa Epic",
    reviews: "2",
    name: "guava",
    color: "orange",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
  },
  {
    price: "155.00",
    image: featureProduct1,
    id: "4",
    type: "Vegetables",
    category: "featuredProduct",
    code: "#123456720",
    availability: "Out of stock",
    oldPrice: "105.00",
    manufacturer: "Esbeda",
    reviews: "4",
    name: "lime",
    color: "white",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
  },
  {
    price: "225.00",
    image: featureProduct4,
    id: "5",
    type: "Vegetables",
    category: "featuredProduct",
    code: "#123456719",
    availability: "Out of stock",
    oldPrice: "215.00",
    manufacturer: "Addidas",
    reviews: "5",
    name: "corn",
    color: "grey",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
  },
  {
    price: "99.00",
    image: featureProduct2,
    id: "6",
    type: "Vegetables",
    category: "featuredProduct",
    code: "#123456718",
    availability: "In stock",
    oldPrice: "90.00",
    manufacturer: "Barisa Epic",
    reviews: "3",
    name: "onions",
    color: "pink",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
  },
  {
    price: "156.00",
    image: featureProduct3,
    id: "7",
    type: "Vegetables",
    category: "featuredProduct",
    code: "#123456717",
    availability: "In stock",
    oldPrice: "106.00",
    manufacturer: "Colorido",
    reviews: "2",
    name: "orange",
    color: "orange",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
  },
  {
    price: "155.00",
    image: bestSeller1,
    id: "8",
    type: "Apples",
    category: "featuredProduct",
    code: "#123456716",
    availability: "Out of stock",
    specialCategory: "new",
    oldPrice: "150.00",
    manufacturer: "Barisa Epic",
    reviews: "4",
    name: "garlic",
    color: "white",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
  },

  {
    price: "225.00",
    image: featureProduct5,
    id: "9",
    type: "Apples",
    category: "featuredProduct",
  },
  {
    price: "99.00",
    image: bestSeller3,
    id: "10",
    type: "Apples",
    category: "featuredProduct",
  },
  {
    price: "156.00",
    image: featureProduct6,
    id: "11",
    type: "Apples",
    category: "featuredProduct",
  },
  {
    price: "155.00",
    image: featureProduct6,
    id: "12",
    type: "Fruits",
    category: "featuredProduct",
  },
  {
    price: "225.00",
    image: bestSeller1,
    id: "13",
    type: "Fruits",
    category: "featuredProduct",
  },
  {
    price: "99.00",
    image: featureProduct7,
    id: "14",
    type: "Fruits",
    category: "featuredProduct",
  },
  {
    price: "156.00",
    image: featureProduct8,
    id: "15",
    type: "Fruits",
    category: "featuredProduct",
  },
  {
    price: "155.00",
    image: featureProduct1,
    id: "16",
    type: "Hot Drinks",
    category: "featuredProduct",
  },
  {
    price: "225.00",
    image: featureProduct2,
    id: "17",
    type: "Hot Drinks",
    category: "featuredProduct",
  },
  {
    price: "99.00",
    image: featureProduct3,
    id: "18",
    type: "Hot Drinks",
    category: "featuredProduct",
  },
  {
    price: "156.00",
    image: featureProduct4,
    id: "19",
    type: "Hot Drinks",
    category: "featuredProduct",
  },
  {
    price: "155.00",
    image: featureProduct3,
    id: "20",
    type: "Meats",
    category: "featuredProduct",
  },
  {
    price: "225.00",
    image: featureProduct6,
    id: "21",
    type: "Meats",
    category: "featuredProduct",
  },
  {
    price: "99.00",
    image: featureProduct1,
    id: "22",
    type: "Meats",
    category: "featuredProduct",
  },
  {
    price: "156.00",
    image: featureProduct9,
    id: "23",
    type: "Meats",
    category: "featuredProduct",
  },
];

// const list = [slide1, slide2, slide3];
const sliderInformation = [
  {
    title: "Growing organic together",
    info: "100% Natural",
    semiInfo: "Quality and Freshness guaranteed!Good Health.",
    buttonText: "Shop Now",
    id: "1",
    image: slide1,
  },
  {
    title: "daily fresh organic food",
    info: "fresh vegetables",
    semiInfo: "Forn the Greatest Health Benefits! Refreshing & Tasty!",
    buttonText: "Find Out More",
    id: "2",
    image: slide2,
  },
  {
    title: "save up to 35% off",
    info: "fruit flavoured",
    semiInfo: "Most Popular Ecommerce HTML Template.",
    buttonText: "Order now",
    id: "3",
    image: slide3,
  },
];
const collectionsInformation = [
  {
    title: "Natural 100% Organic",
    info: "Oragnic food",
    image: collection1,
    id: "1",
  },
  {
    title: "New arrivals",
    info: "Garlic Cloves",
    image: collection2,
    id: "2",
  },
  {
    title: "Discount - 45% Off",
    info: "strawberry",
    image: collection3,
    id: "3",
  },
];

const bannerInformation = [
  {
    id: "1",
    title1: "100% ",
    title2: "Natural",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  },
  {
    id: "2",
    title1: "Always",
    title2: "Fresh",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  },
  {
    id: "3",
    title1: "Healthy",
    title2: "Cooking",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  },
];
const blogInformation = [
  {
    image: blog1,
    title: "winter morning organic ",
    id: "1",
    date: "2017-02-25",
    count: "12",
  },
  {
    image: blog2,
    title: "perfect for promoting",
    id: "2",
    date: "2017-04-05",
    count: "45",
  },
  {
    image: blog3,
    title: "sed do eiusmod sit amet",
    id: "3",
    date: "2017-05-05",
    count: "85",
  },
];
const footerTopInfo = [
  {
    class: "fas fa-map-marker-alt",
    id: "1",
    text: "Company, 12/34 - West 21st Street, New York, USA",
  },
  {
    class: "fas fa-mobile-alt",
    id: "2",
    text: "+ (800) 0123 456 789",
  },
  {
    class: "fas fa-envelope",
    id: "3",
    text: "support@themes.com",
  },
];
const footerNavLinks = [
  {
    title: "Useful Links",
    links: [
      "Product Recall",
      "Help & FAQs",
      "Order History",
    ],
  },
  {
    title: "Service",
    links: [
      "Account",
      "Wishlist",
      "Shopping Cart",
      "Return Policy",
    ],
  },
  {
    title: "Information",
    links: [
      "About us",
      "Contact us",
      "My Orders",
    ],
  },
];
const footerSocialIcons = [
  "fab fa-facebook-f",
  "fab fa-google-plus-g",
  "fab fa-twitter",
  "fab fa-linkedin-in",
  "fas fa-rss",
  "fab fa-instagram",
];
const footerPaymentIcons = [payment1, payment2, payment3, payment4];
const testimonialInformation = [
  {
    name: "Vince Roy",
    title: "CEO, ABC Softwear",
    img: testimonial1,
    id: "1",
    heading: "It was a great experience!",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velitesse cillum dolore eu fugiat nulla pariatur. .",
    "sub-description":
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velitesse cillum dolore eu fugiat nulla pariatur. .",
  },
  {
    name: "John Doe",
    title: "CEO, ABC Softwear",
    img: testimonial2,
    id: "2",
    heading: "Nice customer service",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velitesse cillum dolore eu fugiat nulla pariatur. .",
    "sub-description":
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velitesse cillum dolore eu fugiat nulla pariatur. .",
  },
  {
    name: "John Doe",
    title: "CEO, ABC Softwear",
    img: testimonial3,
    id: "3",
    heading: "Prompt delivery",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velitesse cillum dolore eu fugiat nulla pariatur. .",
    "sub-description":
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velitesse cillum dolore eu fugiat nulla pariatur. .",
  },
];

export {
  collectionsInformation,
  sliderInformation,
  products,
  bannerInformation,
  blogInformation,
  brandContainer,
  footerTopInfo,
  footerNavLinks,
  footerSocialIcons,
  footerPaymentIcons,
  testimonialInformation,
};
