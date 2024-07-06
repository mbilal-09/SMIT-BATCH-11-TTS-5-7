import { signup } from "./utils.js"

const signup_email = document.getElementById('floating_email')
const signup_password = document.getElementById('floating_password')
const signup_firstname = document.getElementById('floating_first_name')
const signup_lastname = document.getElementById('floating_last_name')
const signup_btn = document.getElementById('signup_btn')
const profile_img = document.getElementById('profile_img')

signup_btn.addEventListener('click', () => {
    // console.log(signup_email.value, signup_password.value)
    signup(signup_email.value, signup_password.value, profile_img.files[0]);
})