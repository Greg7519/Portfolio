import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js'
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import getStarfield from './3dSrc/getStarfield.js'
import {getFresnelMat} from './3dSrc/getFresnelMat.js'
function drawEarth(){
    const bgSelector = document.getElementById("startOfPage");
    const w = window.innerWidth;
    const h = window.innerHeight + window.innerHeight/100;
    const renderer =  new THREE.WebGLRenderer({antialias:true})
    renderer.setSize(w,h);
    bgSelector.appendChild(renderer.domElement);
    
    const fov = 75;
    const aspect = w/h
    const near = 0.1;
    const far = 1000;
    const camera = new THREE.PerspectiveCamera(fov,aspect,near,far);
    camera.position.z = 2;
    const detail =100;
    const loader = new THREE.TextureLoader();
    const geo = new THREE.IcosahedronGeometry(1.0,detail);
    
    const mat = new THREE.MeshStandardMaterial({map: loader.load("/assets/images/earthmap1k.jpg")})
    const mesh = new THREE.Mesh(geo,mat);
    const scene = new THREE.Scene();
    // scene.background = spaceTexture
    const light = new THREE.MeshBasicMaterial({
        opacity:0.2,
        map:loader.load("/assets/images/earthlights1k.jpg"),
        blending: THREE.AdditiveBlending
    })
    const clouds = new THREE.MeshStandardMaterial({
        opacity:0.2,
        alphaMap:loader.load("/assets/images/earthcloudmaptrans.jpg"),
        blending:THREE.AdditiveBlending,
        // alphaMap: loader.load("/assets/images/earthcloudmaptrans.jpg")
    })
    const cloudsMesh = new THREE.Mesh(geo,clouds)
    // const clouds = new THREE.MeshBasicMaterial({
    //     opacity:0.8,
    //     map:loader.load("earthcloudmaptrans.jpg"),
    //     blending: THREE.AdditiveBlending
    // })
    // const cloudMesh = new THREE.Mesh(geo,clouds)
    // cloudMesh.scale.setScalar(0)
    const lightsMesh = new THREE.Mesh(geo,light)
    
    const controls = new OrbitControls(camera, renderer.domElement)
    if(window.innerWidth<1024){
        controls.enableZoom = false
    }
    
    controls.enableDamping = true;
    controls.dampingFactor = 0.03;
    const sunLight = new THREE.DirectionalLight(0xffffff);
    sunLight.position.set(-2,0.5,1);
    mesh.scale.setScalar(0,0,0)
    scene.add(mesh);
    scene.add(sunLight);
    const fresnelMat = getFresnelMat()
    
    const glowMesh = new THREE.Mesh(geo,fresnelMat)
    
    const earthGroup = new THREE.Group();
    const fontLoader = new FontLoader();
    
    // fontLoader.load( 'assets/scripts/SairaExtraCondensed-Regular.ttf', function ( font ) {
    
    // 	const geometry = new TextGeometry( 'Hello three.js!', {
    // 		font: font,
    // 		size: 80,
    // 		depth: 5,
    // 		curveSegments: 12,
    // 		bevelEnabled: true,
    // 		bevelThickness: 10,
    // 		bevelSize: 8,
    // 		bevelOffset: 0,
    // 		bevelSegments: 5
    // 	} );
    //     const textMesh = new THREE.Mesh(geometry,[
    //         new THREE.Mesh(geometry,{color:0xad4000})
    //     ])
    //     scene.add(textMesh)
    // } );
    earthGroup.rotation.y = -23.4 * Math.PI/180
    earthGroup.add(mesh);
    earthGroup.add(cloudsMesh)
    earthGroup.add(lightsMesh)
    earthGroup.add(glowMesh)
    scene.add(earthGroup);
    
    lightsMesh.scale.setScalar(0);
    cloudsMesh.scale.setScalar(0);
    glowMesh.scale.setScalar(0);
    const stars = getStarfield({numStars:2000})
    scene.add(stars)
    // function addStar(){
    //     const geometry = new THREE.SphereGeometry(0.15,10,10)
    //     const material = new THREE.MeshStandardMaterial({color:0xffffff})
    //     const star = new THREE.Mesh(geometry,material)
    //     // missing {}
    //     const [x,y,z] = Array(3).fill().map(()=>THREE.MathUtils.randFloatSpread(-200))
    //     star.position.set(x,y,z)
    //     scene.add(star);
    // }
    // Array(400).fill().forEach(()=>addStar())
    // const gridHelper = new THREE.GridHelper(200,50)
    // const pointLight = new THREE.PointLight(0xffffff)
    // pointLight.position.set(5,5,5)
    // const pointLightHelper = new THREE.PointLightHelper(pointLight)
    // scene.add(gridHelper)
    // scene.add(pointLight)
    
    function animate(t=0){
        requestAnimationFrame(animate)
        mesh.rotation.y += -0.002
        lightsMesh.rotation.y += -0.002
        cloudsMesh.rotation.y+=-0.002
        glowMesh.rotation.y+=-0.002
        if(mesh.scale.x <0.55){
            if(mesh.scale.x == 0.54){
                cloudsMesh.scale.addScalar(0.02)
                
            }
            mesh.scale.addScalar(0.01)
            glowMesh.scale.addScalar(0.01)
            lightsMesh.scale.addScalar(0.01)
            cloudsMesh.scale.addScalar(0.01)
        }
      
        
        
        renderer.render(scene,camera);
        controls.update()
    }
    renderer.domElement.onload =( () =>{
      
    
    })()
    window.animate = animate()
   
    animate()
   
    
    
    bgSelector.addEventListener('resize', onWindowResize,false)
    function onWindowResize(){
        camera.aspect =bgSelector.innerWidth/bgSelector.innerHeight;
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.render(scene,camera);
        bgSelector.appendChild(renderer.domElement);
    }

}

setTimeout(()=>{
    drawEarth()
},900)