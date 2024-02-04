<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <section class="head-item">
  <ul class="geo-head">
  <li>Ge</li> 
  
  </ul>
 <div>
  <img class= "globe-img" src="./images/c-globe.avif"> 
 
 </div>
 <div>
  <p class = "para-head">Verse</p>
 </div>

 <ul class="head-about">
 <RouterLink to="/about"><li>About</li></RouterLink> 
 </ul>


  </section>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;400&family=Lexend+Deca:wght@600&family=Orbitron&family=Raleway:ital,wght@0,300;0,400;1,200&display=swap');

.head-item{

  display: flex;
  color: #2E5FAC;
  /* background-color: yellow; */
  
 
}
ul{
  list-style-type: none;
  font-family: 'Inter', sans-serif;
  font-size: 20px;
}
.geo-head{
  font-family:'Lexend Deca', sans-serif; 
  font-size: 50px;
  margin-right: 100px;
  margin-left:300px;
  width: 0px;
  height: 0px;
  
}
.head-about{
  margin-top: 30px;
 /* margin-right: 400px; */
 margin-left: 200px;
}
.globe-img{
  width: 100px;
  margin-right: 400px;
  margin-left: -33px;
  margin-top: 15px;

}
.para-head{
  font-family:'Raleway', sans-serif;
  font-size: 50px;
  margin-left: -423px;
  

}

@media (max-width: 1024px) {
  .head-about{
  margin-top: 26px;
 margin-left: -155px;
}

.geo-head{
  font-family:'Lexend Deca', sans-serif; ;
  font-size: 35px;
  margin-left: -70px;
  width: 0px;
  height: 0px;
  
}
.para-head{
  font-family:'Raleway', sans-serif;
  font-size: 35px;
  margin-left: -408px;
  

}
.globe-img{
  width: 40px;
  margin-right: 400px;
  margin-left: -56px;
  margin-top: 10px;

}
.head-about{
  margin-top: 15px;
 margin-right: 200px;
}


}  

@media (min-width: 1024px){

.geo-head{
  font-family:'Lexend Deca', sans-serif;
  font-size: 50px;
  margin-right: 100px;
  margin-left: 180px;
  width: 0px;
  height: 0px;
  
}


}
</style>