'use client';

'use client';

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function GlobeDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    const sphereGeometry = new THREE.SphereGeometry(1, 64, 64);

    const canvas = document.createElement("canvas");
    canvas.width = 2048;
    canvas.height = 1024;
    const context = canvas.getContext("2d");

    if (!context) {
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      sphereGeometry.dispose();
      return;
    }

    context.fillStyle = "#000000";
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.strokeStyle = "#ffffff";
    context.lineWidth = 2;
    context.fillStyle = "#ffffff";

    const drawLandmass = (coordinates: number[][]) => {
      if (coordinates.length === 0) {
        return;
      }

      context.beginPath();
      const [startLon, startLat] = coordinates[0];
      const startX = ((startLon + 180) / 360) * canvas.width;
      const startY = ((90 - startLat) / 180) * canvas.height;
      context.moveTo(startX, startY);

      for (let i = 1; i < coordinates.length; i++) {
        const [lon, lat] = coordinates[i];
        const x = ((lon + 180) / 360) * canvas.width;
        const y = ((90 - lat) / 180) * canvas.height;
        context.lineTo(x, y);
      }

      context.closePath();
      context.fill();
      context.stroke();
    };

    const continents: number[][][] = [
      [
        
      
        [-180, -85],
        [-170, -84],
        [-160, -83],
        [-150, -82],
        [-140, -81],
        [-130, -80],
        [-120, -79],
        [-110, -78],
        [-100, -77],
        [-90, -76],
        [-80, -75],
        [-70, -74],
        [-60, -73],
        [-50, -72],
        [-40, -71],
        [-30, -70],
        [-20, -69],
        [-10, -68],
        [0, -67],
        [10, -68],
        [20, -69],
        [30, -70],
        [40, -71],
        [50, -72],
        [60, -73],
        [70, -74],
        [80, -75],
        [90, -76],
        [100, -77],
        [110, -78],
        [120, -79],
        [130, -80],
        [140, -81],
        [150, -82],
        [160, -83],
        [170, -84],
        [180, -85],
        [170, -86],
        [160, -87],
        [150, -88],
        [140, -88],
        [130, -88],
        [120, -88],
        [110, -88],
        [100, -88],
        [90, -88],
        [80, -88],
        [70, -88],
        [60, -88],
        [50, -88],
        [40, -88],
        [30, -88],
        [20, -88],
        [10, -88],
        [0, -88],
        [-10, -88],
        [-20, -88],
        [-30, -88],
        [-40, -88],
        [-50, -88],
        [-60, -88],
        [-70, -88],
        [-80, -88],
        [-90, -88],
        [-100, -88],
        [-110, -88],
        [-120, -88],
        [-130, -88],
        [-140, -88],
        [-150, -88],
        [-160, -87],
        [-170, -86],
        [-180, -85]
      ]
    ];

    continents.forEach((continent) => drawLandmass(continent));

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;

    const material = new THREE.MeshBasicMaterial({ map: texture, transparent: false });

    const sphere = new THREE.Mesh(sphereGeometry, material);
    scene.add(sphere);

    const wireframeGeometry = new THREE.SphereGeometry(1.01, 32, 32);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.1,
    });
    const wireframe = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
    scene.add(wireframe);

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 15000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 1.35 + Math.random() * 0.15;

      posArray[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      posArray[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      posArray[i * 3 + 2] = radius * Math.cos(phi);
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.008,
      color: 0x1589FF,
      transparent: true,
      opacity: 0.4,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      targetX = mouseX * 0.3;
      targetY = mouseY * 0.3;

      sphere.rotation.y += 0.003;
      sphere.rotation.x += (targetY - sphere.rotation.x) * 0.05;

      wireframe.rotation.y = sphere.rotation.y;
      wireframe.rotation.x = sphere.rotation.x;

      particlesMesh.rotation.y += 0.002;
      particlesMesh.rotation.x = sphere.rotation.x;

      renderer.render(scene, camera);
      frameRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      const activeContainer = containerRef.current;
      if (!activeContainer) {
        return;
      }

      camera.aspect = activeContainer.clientWidth / activeContainer.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(activeContainer.clientWidth, activeContainer.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }

      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }

      renderer.dispose();
      rendererRef.current = null;
      sphereGeometry.dispose();
      wireframeGeometry.dispose();
      wireframeMaterial.dispose();
      material.dispose();
      texture.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, []);

  return <div ref={containerRef} className="globe-container w-full h-full" />;
}
