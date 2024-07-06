import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";

import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-storage.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBa9jN0eijJAs8vUP0yPm9E2rcbY_xLLiM",
    authDomain: "project-1-415f5.firebaseapp.com",
    projectId: "project-1-415f5",
    storageBucket: "project-1-415f5.appspot.com",
    messagingSenderId: "419371233616",
    appId: "1:419371233616:web:7235fde82b75d5d556bc55",
    measurementId: "G-CCTTPRNMYL"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const storage = getStorage(app);

const userImage = document.getElementById('userImage')
const image = document.getElementById('image')


const uploadImage = () => {
    const imageRef = ref(storage, `images/${userImage.files[0].name}`);

    console.log(userImage.files[0])

    uploadBytes(imageRef, userImage.files[0]).then((snapshot) => {
        console.log('Uploaded a blob or file!');


        getDownloadURL(imageRef)
        .then((url) => {
            console.log('image url', url)
            image.src = url;
        })
        .catch((error) => {
        // Handle any errors
        });

      });

    console.log(userImage.files[0])
}

userImage.addEventListener('change', uploadImage)