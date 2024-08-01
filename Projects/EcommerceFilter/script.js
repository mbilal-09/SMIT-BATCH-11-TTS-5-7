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
  startAt,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

// Firebase configuration
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

const saleCollectionRef = collection(db, "saleitems");
const filter_btn = document.getElementById("filter_btn");

let chosenCategory = "All";
let chosenCountry = "USA";
let chosenPrice = 100000;
let chosenRating = 1;
let chosenStartAt = 1;

const products = [
  // Array of 30 products
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
  {
    name: "Portable Charger",
    price: 59,
    availableInCountries: ["USA", "UK", "Australia"],
    category: "Accessories",
    image: "portable_charger.jpg",
    rating: 4.3,
  },
  {
    name: "Electric Kettle",
    price: 49,
    availableInCountries: ["USA", "Canada", "UK"],
    category: "Home Appliances",
    image: "electric_kettle.jpg",
    rating: 4.5,
  },
  {
    name: "Instant Camera",
    price: 99,
    availableInCountries: ["USA", "Japan", "France"],
    category: "Photography",
    image: "instant_camera.jpg",
    rating: 4.4,
  },
  {
    name: "Smart Door Lock",
    price: 179,
    availableInCountries: ["USA", "Canada", "Germany"],
    category: "Home Appliances",
    image: "smart_door_lock.jpg",
    rating: 4.6,
  },
  {
    name: "Home Security Camera",
    price: 129,
    availableInCountries: ["USA", "UK", "Australia"],
    category: "Home Appliances",
    image: "home_security_camera.jpg",
    rating: 4.5,
  },
  {
    name: "Portable Projector",
    price: 299,
    availableInCountries: ["USA", "Canada", "UK"],
    category: "Electronics",
    image: "portable_projector.jpg",
    rating: 4.3,
  },
  {
    name: "Electric Scooter",
    price: 499,
    availableInCountries: ["USA", "Germany", "France"],
    category: "Transportation",
    image: "electric_scooter.jpg",
    rating: 4.4,
  },
  {
    name: "Smart Oven",
    price: 399,
    availableInCountries: ["USA", "Canada", "UK"],
    category: "Home Appliances",
    image: "smart_oven.jpg",
    rating: 4.5,
  },
  {
    name: "Gaming Chair",
    price: 199,
    availableInCountries: ["USA", "UK", "Australia"],
    category: "Gaming",
    image: "gaming_chair.jpg",
    rating: 4.6,
  },
  {
    name: "Noise Machine",
    price: 59,
    availableInCountries: ["USA", "Canada", "UK"],
    category: "Health",
    image: "noise_machine.jpg",
    rating: 4.3,
  },
];

document.addEventListener("DOMContentLoaded", () => {
  populateFilters();
  //   displayProducts(products);
  getRealTimeDataFromFirestore();
});

filter_btn.addEventListener("click", applyFilters);

function getRealTimeDataFromFirestore() {
  const q = query(
    saleCollectionRef,
    chosenCategory === "All"
      ? where("category", "!=", "")
      : where("category", "==", chosenCategory),
    where("availableInCountries", "array-contains", chosenCountry),
    orderBy("price"),
    startAt(chosenStartAt),
    where("price", "<=", chosenPrice),
    where("rating", ">=", chosenRating),
    limit(10)
  );

  const unsub = onSnapshot(q, (snapshots) => {
    console.log("check if there is data in collection: ", snapshots.empty);
    const productsDiv = document.getElementById("products");
    productsDiv.innerHTML = "";
    if (!snapshots.empty) {
      snapshots.forEach((doc) => {
        console.log("Doc Id=>", doc.id, "doc=>", doc.data());

        let product = doc.data();
        const productDiv = document.createElement("div");
        productDiv.className = "border p-4 rounded shadow";

        productDiv.innerHTML = `
            <h3 class="font-bold primary">${product.name}</h3>
            <p>Price: $${product.price}</p>
            <p>Available in: ${product.availableInCountries.join(", ")}</p>
            <p>Category: ${product.category}</p>
            <p>Rating: ${product.rating}</p>
          `;

        productsDiv.appendChild(productDiv);
      });
    } else {
      console.log("No Data");
      productsDiv.innerHTML = "No Data";
    }
  });
}

function populateFilters() {
  const categoryFilter = document.getElementById("categoryFilter");
  const countryFilter = document.getElementById("countryFilter");

  const categories = [...new Set(products.map((product) => product.category))];
  const countries = [
    ...new Set(products.flatMap((product) => product.availableInCountries)),
  ];

  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });

  countries.forEach((country) => {
    const option = document.createElement("option");
    option.value = country;
    option.textContent = country;
    countryFilter.appendChild(option);
  });
}

function displayProducts(productsToDisplay) {
  const productsDiv = document.getElementById("products");
  productsDiv.innerHTML = "";

  productsToDisplay.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "border p-4 rounded shadow";

    productDiv.innerHTML = `
        <h3 class="font-bold primary">${product.name}</h3>
        <p>Price: $${product.price}</p>
        <p>Available in: ${product.availableInCountries.join(", ")}</p>
        <p>Category: ${product.category}</p>
        <p>Rating: ${product.rating}</p>
      `;

    productsDiv.appendChild(productDiv);
  });
}

function applyFilters() {
  const categoryFilter = document.getElementById("categoryFilter").value;
  const countryFilter = document.getElementById("countryFilter").value;
  const priceFilter = parseFloat(document.getElementById("priceFilter").value);
  const ratingFilter = parseFloat(
    document.getElementById("ratingFilter").value
  );
  const startAtFilter = parseFloat(
    document.getElementById("startAtFilter").value
  );

  chosenCategory = categoryFilter;
  chosenCountry = countryFilter;
  chosenPrice = priceFilter;
  chosenRating = ratingFilter;
  chosenStartAt = startAtFilter;

  getRealTimeDataFromFirestore();
}
