import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import {
  getFirestore,
  getDocs,
  addDoc,
  doc,
  onSnapshot,
  collection,
  query,
  where,
  orderBy,
  limit,
  startAt
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyAr2R1sryYvVbSNdplyeKYrIHHZ6D0uZyc",
  authDomain: "calcium-pod-256305.firebaseapp.com",
  projectId: "calcium-pod-256305",
  storageBucket: "calcium-pod-256305.appspot.com",
  messagingSenderId: "182256618793",
  appId: "1:182256618793:web:c3c627824b1c28feea3b38",
  measurementId: "G-3R2S7KYERZ",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log("db==>", db);

const productCollection = collection(db, "products");
const products = [
  {
    name: "Smartphone X",
    price: 799,
    availableInCountries: ["USA", "Canada", "UK"],
    category: "Electronics",
    image: "smartphone_x.jpg",
    rating: 4.5,
  },
  {
    name: "Laptop Pro",
    price: 1299,
    availableInCountries: ["USA", "Germany", "France"],
    category: "Computers",
    image: "laptop_pro.jpg",
    rating: 4.7,
  },
  {
    name: "Wireless Headphones",
    price: 199,
    availableInCountries: ["USA", "Australia", "Japan"],
    category: "Accessories",
    image: "wireless_headphones.jpg",
    rating: 4.3,
  },
  {
    name: "Gaming Console",
    price: 499,
    availableInCountries: ["UK", "Canada", "Italy"],
    category: "Gaming",
    image: "gaming_console.jpg",
    rating: 4.8,
  },
  {
    name: "4K TV",
    price: 999,
    availableInCountries: ["USA", "Canada", "Mexico"],
    category: "Home Appliances",
    image: "4k_tv.jpg",
    rating: 4.6,
  },
  {
    name: "Fitness Tracker",
    price: 149,
    availableInCountries: ["USA", "UK", "Germany"],
    category: "Health",
    image: "fitness_tracker.jpg",
    rating: 4.2,
  },
  {
    name: "Smart Watch",
    price: 299,
    availableInCountries: ["USA", "Canada", "Australia"],
    category: "Wearables",
    image: "smart_watch.jpg",
    rating: 4.4,
  },
  {
    name: "Bluetooth Speaker",
    price: 99,
    availableInCountries: ["USA", "UK", "France"],
    category: "Audio",
    image: "bluetooth_speaker.jpg",
    rating: 4.1,
  },
  {
    name: "Digital Camera",
    price: 499,
    availableInCountries: ["USA", "Japan", "Germany"],
    category: "Photography",
    image: "digital_camera.jpg",
    rating: 4.5,
  },
  {
    name: "Tablet",
    price: 399,
    availableInCountries: ["USA", "Canada", "UK"],
    category: "Computers",
    image: "tablet.jpg",
    rating: 4.3,
  },
  {
    name: "Smart Home Hub",
    price: 199,
    availableInCountries: ["USA", "UK", "Australia"],
    category: "Home Appliances",
    image: "smart_home_hub.jpg",
    rating: 4.4,
  },
  {
    name: "Electric Toothbrush",
    price: 79,
    availableInCountries: ["USA", "Canada", "Germany"],
    category: "Health",
    image: "electric_toothbrush.jpg",
    rating: 4.2,
  },
  {
    name: "VR Headset",
    price: 299,
    availableInCountries: ["USA", "UK", "Japan"],
    category: "Gaming",
    image: "vr_headset.jpg",
    rating: 4.6,
  },
  {
    name: "Action Camera",
    price: 249,
    availableInCountries: ["USA", "Canada", "Australia"],
    category: "Photography",
    image: "action_camera.jpg",
    rating: 4.5,
  },
  {
    name: "Robot Vacuum",
    price: 399,
    availableInCountries: ["USA", "UK", "France"],
    category: "Home Appliances",
    image: "robot_vacuum.jpg",
    rating: 4.7,
  },
  {
    name: "Air Purifier",
    price: 199,
    availableInCountries: ["USA", "Germany", "Japan"],
    category: "Home Appliances",
    image: "air_purifier.jpg",
    rating: 4.3,
  },
  {
    name: "Smart Light Bulbs",
    price: 49,
    availableInCountries: ["USA", "Canada", "UK"],
    category: "Home Appliances",
    image: "smart_light_bulbs.jpg",
    rating: 4.4,
  },
  {
    name: "Noise Cancelling Earbuds",
    price: 149,
    availableInCountries: ["USA", "Australia", "Japan"],
    category: "Audio",
    image: "noise_cancelling_earbuds.jpg",
    rating: 4.5,
  },
  {
    name: "E-Reader",
    price: 129,
    availableInCountries: ["USA", "UK", "Canada"],
    category: "Computers",
    image: "e_reader.jpg",
    rating: 4.6,
  },
  {
    name: "Smart Thermostat",
    price: 199,
    availableInCountries: ["USA", "Canada", "Germany"],
    category: "Home Appliances",
    image: "smart_thermostat.jpg",
    rating: 4.4,
  },
];

const category_selector = document.getElementById("category_selector");
const countries_selector = document.getElementById("countries_selector");
const prices_selector = document.getElementById("prices_selector");
const rating_selector = document.getElementById("rating_selector");

let chosenCategory = "";
let chosenCountry = "USA";
let chosenPrice = 100000000;
let chosenRating = 1;

getRealtimeProducts();

category_selector.addEventListener("change", (e) => {
  console.log(e.target.value);
  chosenCategory = e.target.value;
  getRealtimeProducts();
});
countries_selector.addEventListener("change", (e) => {
  chosenCountry = e.target.value;
  getRealtimeProducts();
});

prices_selector.addEventListener("change", (e) => {
  chosenPrice = +e.target.value;
  getRealtimeProducts();
});

rating_selector.addEventListener("change", (e) => {
  chosenRating = +e.target.value;
  getRealtimeProducts();
});

// const allProducts = products.map(async (data) =>
//   addDoc(productCollection, data)
// );

// // console.log(allProducts);

// Promise.all(allProducts).then(() => console.log("ALL products uploaded"));

function getRealtimeProducts() {
  const q = query(
    productCollection,
    orderBy('price'),
    startAt(200),
    limit(10),
    chosenCategory
      ? where("category", "==", chosenCategory)
      : where("category", "!=", ""),
    where("availableInCountries", "array-contains", chosenCountry),
    // where("price", "<=", chosenPrice),
    where("rating", ">", chosenRating)
  );
  const unsub = onSnapshot(q, (snapshot) => {
    console.log("snapshot: ", snapshot);
    if (!snapshot.empty) {
      container.innerHTML = "";
      snapshot.forEach((doc) => {
        console.log(doc.id, doc.data());
        const { name, image, price, category, availableInCountries, rating } =
          doc.data();
        const li = `<li> ${name} , ${price}  , <b> ${category} </b> , ${rating} , ${availableInCountries}  </li>`;
        container.innerHTML += li;
      });
    }else{
      container.innerHTML = "No Data";

    }
  });
}
