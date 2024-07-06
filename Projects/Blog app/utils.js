import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
import { getStorage, uploadBytes, getDownloadURL, ref } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-storage.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBsyYQmf4-BzLdyJN6HSMV4HwErEYAqOEk",
    authDomain: "devathon-43292.firebaseapp.com",
    projectId: "devathon-43292",
    storageBucket: "devathon-43292.appspot.com",
    messagingSenderId: "320509870485",
    appId: "1:320509870485:web:ddf36caae62635a9e5369c",
    measurementId: "G-9J5FZCB2F7"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const storage = getStorage(app);

function checkUser(){
    onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
        } else {
            location.href = '/login.html'
        }
      });
};

const signup = (email, password, file) => {
    createUserWithEmailAndPassword(auth, email, password)
  .then(async (userCredential) => {
    const user = userCredential.user;

    console.log('user', user)

    const imageRef = await ref(storage, `user/${user.uid}`);

    const url = await uploadImage(imageRef, file)

    console.log('url', url)
    // location.href ='./index.html'
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage)
  });
}

const uploadImage = async (imgRef, file) => {

    try {

        await uploadBytes(imgRef, file)
        const url = await getDownloadURL(imgRef)
        return url;
        
    } catch (error) {
        console.log(error)
        
    }
}

export {
    checkUser,
    signup,
}