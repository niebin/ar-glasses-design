// Setup Three.js scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 800 / 600, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(800, 600);
document.getElementById('3d-container').appendChild(renderer.domElement);

// Create a simple AR glasses frame as a 3D object
const frameGeometry = new THREE.BoxGeometry(2, 0.1, 0.1);
const frameMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
const frame = new THREE.Mesh(frameGeometry, frameMaterial);
scene.add(frame);

// Position camera and frame
camera.position.z = 5;

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

// Change frame color based on user input
document.getElementById('frame-color').addEventListener('input', (event) => {
    frame.material.color.set(event.target.value);
});
