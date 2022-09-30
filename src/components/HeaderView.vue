<template>
<div class="header-container">
    <div class="logo-sect">
        <img src="../assets/logo.png" alt="logo" class="logo">
        <h3>EliteEdgeWriters.com</h3>
    </div>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <a href="#">About us</a>
        <a href="#">Reviews</a>
        <router-link to="/contact">Contact us</router-link>
        <a href="#">Login</a>
        <a href="#">Order Now</a>
    </div>
</div>


</template>

<script>

    export default{
    name: "HeaderView",
 
}
</script>

<style>
.header-container{
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 50;
    width: 100%;
    background-color: aliceblue;
    height: 100px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.logo{
    widows: 70px;
    height: 80px;
    /* border: 1px solid lightgreen; */
    border-radius: 40%;
  }
.logo-sect{
    display: flex;
    align-items: center;
}
.logo-sect h3{
    font-weight: 500;
    position: absolute;
    top: 25px;
    left: 280px;
}
.nav a{
    padding: 20px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
}
</style>