<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <main class="main" id=" main">
 
   <Head/>
   <h1 class="geo-header">GEOPOCALYPSE FLAG GAME</h1>
    <section class="c-content">
      
      <Content/>
      <canvas id = 'canvas'>
      </canvas>

    

    </section>
    <RouterLink to="/gamesetting"><button   class="play-bt">PLAY GAME </button></RouterLink>
   
  </main>
</template>

<script>


import Content from '../components/content.vue';
import Head from '../components/Head.vue';

import map from '../img/globe.jpeg';
import * as THREE from  'https://unpkg.com/three@0.154.0/build/three.module.js';
import vertexShader from '../shaders/vertex.glsl';
import fragmentShader from '../shaders/fragment.glsl';

import atmosphereVertexShader from '../shaders/atmosphereVertex.glsl';
import atmosphereFragmentShader from '../shaders/atmosphereFragment.glsl';
import { useRouter } from 'vue-router';

export default{
  mounted(){
    this.$nextTick(()=>{
      var container = document.getElementById('canvas');
      console.log(container);
     const scene = new THREE.Scene();
     const camera = new THREE.PerspectiveCamera(60, container.offsetWidth/container.offsetHeight,0.1,1000);



const renderer = new THREE.WebGLRenderer({
    antialias:true,
    canvas:document.getElementById('canvas')
})
renderer.setSize(container.offsetWidth,container.offsetHeight)
renderer.setPixelRatio(window.devicePixelRatio)

// document.body.appendChild(renderer.domElement)


const sphere = new THREE.Mesh(new THREE.SphereGeometry(5,60,50),
new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms:{
        globeTexture:{
            value: new THREE.TextureLoader().load(map)
        },
    }

    // color:0xFF0000,
    // 
})
)
 

scene.add(sphere)
const atmosphere = new THREE.Mesh(new THREE.SphereGeometry(5,50,50),
new THREE.ShaderMaterial({
    vertexShader:atmosphereVertexShader,
    fragmentShader:atmosphereFragmentShader,
    blending: THREE.AdditiveBlending,
    side: THREE.BackSide
  

    // color:0xFF0000,
    // 
})
)

atmosphere.scale.set(1.1,1.1,1.1)
scene.add(atmosphere)



const starGeometry = new THREE.BufferGeometry()

const starMaterial = new THREE.PointsMaterial({
    color: 0xffffff
})

const starVertices = [ ]
for(let i=0; i<1000; i++){
    const x = (Math.random()-0.5)*2000
    const y = (Math.random()-0.5)*2000
    const z = -Math.random()*2000
    starVertices.push(x,y,z)
}
 
starGeometry.setAttribute('position',
 new THREE.Float32BufferAttribute(starVertices,3)
)

const stars = new THREE.Points(starGeometry,starMaterial)
scene.add(stars)

// group.add(sphere)
// scene.add(group)
const group = new THREE.Group()
group.add(sphere)
scene.add(group)   
camera.position.z = 14

const mouse = {
    x: undefined,
    y: undefined
}
   



function animate(){
    requestAnimationFrame(animate)
    renderer.render(scene,camera)
    sphere.rotation.y += 0.005
    group.rotation.y = mouse.x
    
}

addEventListener('mousemove',()=>{
    mouse.x = (event.clientX/innerWidth) * 2-1
    mouse.y = -(event.clientY/innerHeight)*2-1
})
animate()
     




    })

    

    
  }
}

</script>



<style>
.main{
  /* background-color: green; */
  color: white;
  width: 1800px;
  height: 1200px;
  margin-top: 0px;
}
#canvas{
  margin-left: 300px;
  margin-top: 180px;
}
.c-content{
  display: flex;
 
}
.geo-header{
  margin-left:1000px;
  margin-top: 50px;
  font-size: 44px;
  color: #C69160;
}
.play-bt-con{
 text-align: center;
 margin-top: 60px;

}
.play-bt{
   width: 220px;
   height: 60px;
   border-radius: 12px;
   font-size: 30px;
   box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
   background:rgb(36, 198, 123);
   color: black;
   font-family: 'Raleway', sans-serif;
   margin-left: 1220px;
   margin-bottom: 120px;
   margin-top:10px;


   
}

</style>
