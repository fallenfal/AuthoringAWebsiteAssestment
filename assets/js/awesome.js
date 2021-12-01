/*
    Name: B&B Hotel
    Owner: Alex Lapos
    Date: 23.0.2021
    my own classes are with the prefix awsm   ex: awsm-heading
 */

const burgerMenu = () => {
    const burger = document.querySelector(".burger");
    const navbar = document.querySelector(".awsm-navigation")

    burger.addEventListener("click",() => {
        navbar.classList.toggle("awsm-active-nav");
        burger.classList.toggle("burger-closed")
    })
}

burgerMenu()