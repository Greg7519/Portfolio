import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.min.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.min.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.min.js';
import getStarfield from './3dSrc/getStarfield.js'
import spline from './3dSrc/spline.js'
const w=window.innerWidth;
const h = window.innerHeight;
  
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)
const renderer = new THREE.WebGLRenderer({antialias:true})
const fog = new THREE.FogExp2(0x000000,0.3)
renderer.setSize(window.innerWidth,window.innerHeight);
const cont = document.getElementById("bgImg")
cont.appendChild(renderer.domElement)


const controls = new OrbitControls(camera,renderer.domElement)
if(window.innerWidth>768){
    renderer.domElement.style.height = "150vh"
    window.drawWormhole = async function drawWormhole(){
        const hemiLight = new THREE.HemisphereLight(0xffffff,0x444444)
    const points = spline.getPoints(100)
    const geometry = new THREE.BufferGeometry().setFromPoints(points)
    const material = new THREE.LineBasicMaterial({color:0x00ff00})

    scene.add(hemiLight)
    scene.fog = fog
    const tubeGeo = new THREE.TubeGeometry(spline,222,0.65,16,true)

    //create edges geometry
    const edges = new THREE.EdgesGeometry(tubeGeo,0.02)
    const lineMat = new THREE.LineBasicMaterial({color:0x002f94})
    const numBoxes = 55;
    const size = 0.075;
    const boxGeo = new THREE.BoxGeometry(size,size,size);
    const boxMat = new THREE.MeshBasicMaterial({color:0xffffff})
    
    function onWindowResize(){
            camera.aspect =window.innerWidth/window.innerHeight;
            camera.updateProjectionMatrix()
            renderer.setSize(window.innerWidth, window.innerHeight)
            
    }
    window.addEventListener('resize', onWindowResize,false)
    const stars = getStarfield({numStars:2000})
    scene.add(stars)

    for(let i=0; i<=numBoxes;i++){
        const box = new THREE.Mesh(boxGeo,boxMat)
        const p = (i/numBoxes+ Math.random()*0.1)%1
        const pos = tubeGeo.parameters.path.getPointAt(p)
        pos.x += Math.random() -0.4
        pos.y += Math.random()-0.4
        box.position.copy(pos)
        const rote = new THREE.Vector3(
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            Math.random() * Math.PI
        )
        box.rotation.set(rote.x,rote.y,rote.z)
        const edges = new THREE.EdgesGeometry(tubeGeo,0.02)
            const lineMat = new THREE.LineBasicMaterial({color:0x296dff})
            const boxLines = new THREE.LineSegments(edges,lineMat)
            scene.add(box)
            scene.add(boxLines)
    }


    camera.position.z=5;
    function updateCamera(t){
        const time = t *0.05
        const looptime = 20 * 100
        const p = (time%looptime)/looptime
        const pos = tubeGeo.parameters.path.getPointAt(p)
        const lookAt =tubeGeo.parameters.path.getPointAt((p+0.01)%1)
        camera.position.copy(pos)
        camera.lookAt(lookAt)
    }
    function animate(t=0){
        updateCamera(t)
        
        renderer.render(scene,camera)
        document.body.style.overflowY = 'visible';
        document.getElementsByClassName("preloader")[0].classList.add(
                                                            "goUp"
                                                    );
        setTimeout(()=>{
        document.body.style.overflowY = 'visible';
        document.getElementsByClassName("preloader")[0].style.display = "none";
        },1000)                
    
    }
    renderer.setAnimationLoop(animate)
    }
   

    // const bloomPass = new UnrealBloomPass(new THREE.Vector2(w,h),1.5,0.4,100)
    // const renderScene = new RenderPass(scene,camera)
    // bloomPass.threshold = 0.02;
    // bloomPass.strength = 3.5;
    // bloomPass.radius =0;
    // const composer = new EffectComposer(renderer)
    // composer.addPass(renderScene)
    // composer.addPass(bloomPass)



}
