<template>
  <section class="game-setting">
    <div class="story">
    <h1 class="welcome">StoryLine </h1>

    <p class="s-p1">You are the only survivor in a dystopian universe, every continent and its
      people are suffering from a dangerous airborne disease called aidsbola
    </p>

    <p class="s-p2">This disease is known to take you down within 120 seconds. When the disease 
      is contracted it enters your blood vessles, inflating every single part of 
    your body until you explode into pieces </p>

    <p class="s-p3">The disease has caused havoc killing millions of people around the world.
      Researchers and scientists have worked tirelessly trying to find the antidote.
      There hasn't been any success on the quest to find a cure to the disease
    </p>

    <p class="s-p4">You discovered that there are still people alive and quarantined within their 
      respective countries on the globe but the intensity of the disease is growing 
      rapidly. With no cure for the disease people continue to die on a daily basis.
      You came up with a plan, you decided to use the biggest spaceship on your planet
      to rescue survivors on every continent to bring them to your planet. You 
      look up the list of countries on the globe while on your planet, you realize
      there is no time and you must go quickly to rescue people aroud the globe
    </p>

    <p class="s-p5">The pandemic is polluting the air and everywhere is getting affected quickly.
      With no time to do any more research you got on your spaceship with the list of countries
      as your only resources, the only way you can save a particular country on a continent 
      is to match up the name with the flag of the country with x amount of time available before
      everyone dies on the globe you must act fast within the time that you have to save all the 
      survivors
    </p>
  </div>

  <div class="custom">
    <div class="cont">
     <p class="cont-head">Continents</p>


     <div> <button class="asia">Asia</button> </div>
     <div> <button class="africa">Africa</button> </div>
     <div> <button class="europe">Europe</button> </div>
     <div> <button class="north-am">North America</button> </div>
     <div> <button class="south-am">South America</button> </div>
     <div> <button class="oceania">Oceania</button> </div>

    </div>

    <div class="rules">
     <p class="r-p1">1. Save survivor by matching the flag with the country</p>
     <p class="r-p2">2. You have four hours, you must allocate time to 
      rescue survivors in every continent </p>
    <p class="r-p3">3. You can only get a match wrong 3 times for Asia and 
      Africa and 2 times for the other continent
    </p>


    </div>

    <div class="start-bt-cn"><button class="start-game">start</button></div>
    
  </div>
 
  </section>

  
</template>


<script>


</script>



<style>
.game-setting{
  /* background-color:white; */
  /* color: black; */
  width:1790px ;
  height: 1190px;
  display: flex;
}
.story{
  width: 800px;
  color: white;
  margin-left: 40px;
  font-size: 21px;
  margin-top: 40px;
  font-family:'Rubik', sans-serif;
}
.s-p1,.s-p2,
.s-p3, .s-p4,
.s-p5{
  margin-top: 30px;
}
.welcome{
  text-align: center;
  font-weight: bold;
}
.custom{
  color: white;
  margin-top: 100px;
  margin-left: 200px;
  display: grid;
  font-family:'Red Hat Text', sans-serif; 
  font-size: 18px;

}
.cont{
  display: block;
  /* background-color: yellow; */
  text-align: center;
}
.cont-head{
  font-size: 40px;
  color: #487AC3;
  font-weight: bold;
  font-family: 'Tektur', cursive;;
 
}
.asia,.africa,.europe,.north-am,
.south-am,.oceania{
  width: 240px;
  height: 80px;
  background-color: rgb(120, 172, 61);
  color: white;
  font-size: 29px;
  font-family: 'Rubik', sans-serif;
  margin-top: 10px;
}
.rules{
  background-color: #487AC3;
  width: 600px;
  margin-bottom: 180px;
  font-size: 25px;
  border-radius: 30px;
  margin-top: 50px;
}
.r-p1,.r-p2,.r-p3{
  margin-top: 10px;
  margin-left: 10px;
}
.start-game{
  color: rgb(143, 147, 152);
  margin-left: 180px;
  width: 200px;
  height: 60px;
  background-color: white;
  font-size: 38px;
  font-family:'Lato', sans-serif; ;
  font-weight: bold;
  border-radius: 30px;
  margin-top: 2px;
  

}
.start-bt-cn{
  
  height: 70px;
  margin-left: -20x;
  margin-top:-80px;
}

</style>
