import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
const bgSelector = document.getElementById("startOfPage");
const w = window.innerWidth;
const h = window.innerHeight;
const renderer =  new THREE.WebGLRenderer({antialias:true})
renderer.setSize(w,h);
bgSelector.appendChild(renderer.domElement);

const fov = 75;
const aspect = w/h
const near = 0.1;
const far = 1000;
const spaceTexture = new THREE.TextureLoader().load("/assets/images/space.jpg")
const camera = new THREE.PerspectiveCamera(fov,aspect,near,far);
camera.position.z = 2;
const detail =12;
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
// const clouds = new THREE.MeshBasicMaterial({
//     opacity:0.8,
//     map:loader.load("earthcloudmaptrans.jpg"),
//     blending: THREE.AdditiveBlending
// })
// const cloudMesh = new THREE.Mesh(geo,clouds)
// cloudMesh.scale.setScalar(0)
const lightsMesh = new THREE.Mesh(geo,light)

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true;
controls.dampingFactor = 0.03;
const sunLight = new THREE.DirectionalLight(0xffffff);
sunLight.position.set(-2,0.5,1);
mesh.scale.setScalar(0,0,0)
scene.add(mesh);
scene.add(sunLight);

const earthGroup = new THREE.Group();
earthGroup.rotation.y = -23.4 * Math.PI/180
earthGroup.add(mesh);
earthGroup.add(lightsMesh)
scene.add(earthGroup);
lightsMesh.scale.setScalar(0);
function addStar(){
    const geometry = new THREE.SphereGeometry(0.15,10,10)
    const material = new THREE.MeshStandardMaterial({color:0xffffff})
    const star = new THREE.Mesh(geometry,material)
    // missing {}
    const [x,y,z] = Array(3).fill().map(()=>THREE.MathUtils.randFloatSpread(-200))
    star.position.set(x,y,z)
    scene.add(star);
}
Array(400).fill().forEach(()=>addStar())
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
    if(mesh.scale.x <0.85){
        mesh.scale.addScalar(0.01)
        lightsMesh.scale.addScalar(0.01)
    }
  
    
    
    renderer.render(scene,camera);
    controls.update()
}
animate()