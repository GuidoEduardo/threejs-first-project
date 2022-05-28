import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'


const backgroundColor = new THREE.Color(0xebebeb);
const cubeColor = new THREE.Color(0x1b1b1b);

const scene = new THREE.Scene();

scene.background = backgroundColor;

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.z = 2;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

new OrbitControls(camera, renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({
    color: cubeColor,
    wireframe: true
});

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const render = () => {
    renderer.render(scene, camera);
}

const animate = () => {
    requestAnimationFrame(animate);
    render();
}

const onWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();
}

window.addEventListener('resize', onWindowResize, false);

animate();
