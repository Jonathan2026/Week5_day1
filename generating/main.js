let title = document.getElementById("Title")
let image = document.querySelector("img")
let dob = document.getElementById("dob")
let age = document.getElementById("age")
let locay = document.getElementById("location")
let gender = document.getElementById("gender")
let area = document.getElementById("area")
let cord = document.getElementById("cord")
let email = document.getElementById("email")

image.src = information.results.picture.large

title.innerHTML = information.results.name.title + " " + information.results.name.first + " " + information.results.name.last;

gender.innerHTML = "Gender: " + information.results.gender
dob.innerHTML = "DOB: " + information.results.dob.date
age.innerHTML = "Age: " + information.results.dob.age
area.innerHTML = "Location: " + information.results.location.city + ", " + information.results.location.state + ", " + information.results.location.country + ", " + information.results.location.postcode
locay.innerHTML = information.results.location.street.number + " " + information.results.location.street.name;
cord.innerHTML = "Coordinates: " + information.results.location.coordinates.latitude + ", " + information.results.location.coordinates.longitude
email.innerHTML = "Email: " + information.results.email


