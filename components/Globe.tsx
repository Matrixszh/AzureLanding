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
      return () => {
        if (container && rendererRef.current) {
          container.removeChild(rendererRef.current.domElement);
        }
        renderer.dispose();
        sphereGeometry.dispose();
      };
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
        [-170, 71],
        [-169, 70],
        [-168, 69],
        [-161, 68],
        [-156, 71],
        [-154, 70],
        [-152, 69],\n        [-150, 68],
        [-140, 69],
        [-135, 68],
        [-130, 70],
        [-125, 69],
        [-123, 70],
        [-120, 69],
        [-115, 70],
        [-110, 73],
        [-105, 73],
        [-100, 72],
        [-95, 71],
        [-90, 70],
        [-85, 69],
        [-80, 68],
        [-75, 70],
        [-73, 68],
        [-70, 62],
        [-68, 58],
        [-65, 55],
        [-62, 53],
        [-60, 50],
        [-58, 48],
        [-56, 50],
        [-60, 47],
        [-65, 45],
        [-70, 48],
        [-75, 45],
        [-78, 42],
        [-80, 40],
        [-84, 38],
        [-87, 35],
        [-90, 33],
        [-93, 30],
        [-96, 28],
        [-100, 25],
        [-103, 22],
        [-105, 20],
        [-108, 18],
        [-110, 15],
        [-112, 14],
        [-114, 16],
        [-116, 18],
        [-118, 20],
        [-120, 24],
        [-122, 27],
        [-124, 30],
        [-125, 33],
        [-126, 36],
        [-124, 39],
        [-122, 42],
        [-120, 45],
        [-117, 47],
        [-115, 48],
        [-110, 48],
        [-105, 49],
        [-100, 48],
        [-95, 48],
        [-90, 47],
        [-85, 45],
        [-80, 43],
        [-75, 40],
        [-70, 38],
        [-65, 40],
        [-60, 42],
        [-55, 45],
        [-52, 47],
        [-50, 48],
        [-55, 50],
        [-60, 52],
        [-65, 56],
        [-68, 60],
        [-70, 65],
        [-75, 68],
        [-80, 70],
        [-90, 72],
        [-100, 73],
        [-110, 74],
        [-120, 73],
        [-130, 72],
        [-140, 71],
        [-150, 70],
        [-160, 71],
        [-170, 71]
      ],
      [
        [-82, 10],
        [-80, 9],
        [-78, 8],
        [-76, 7],
        [-74, 5],
        [-72, 3],
        [-70, 0],
        [-69, -3],
        [-68, -7],
        [-67, -10],
        [-66, -13],
        [-65, -16],
        [-64, -19],
        [-63, -22],
        [-62, -25],
        [-61, -28],
        [-60, -31],
        [-59, -34],
        [-58, -37],
        [-57, -40],
        [-56, -43],
        [-55, -46],
        [-54, -49],
        [-53, -52],
        [-52, -54],
        [-54, -53],
        [-56, -51],
        [-58, -49],
        [-60, -47],
        [-62, -45],
        [-65, -43],
        [-68, -41],
        [-70, -38],
        [-72, -35],
        [-73, -32],
        [-74, -29],
        [-75, -26],
        [-76, -23],
        [-77, -20],
        [-78, -17],
        [-79, -14],
        [-80, -11],
        [-81, -8],
        [-82, -5],
        [-83, -2],
        [-84, 1],
        [-85, 4],
        [-85, 7],
        [-84, 9],
        [-82, 10]
      ],
      [
        [-35, 5],
        [-30, 8],
        [-25, 10],
        [-20, 12],
        [-15, 15],
        [-10, 18],
        [-8, 20],
        [-6, 25],
        [-5, 30],
        [-3, 33],
        [0, 35],
        [3, 37],
        [5, 38],
        [8, 37],
        [10, 35],
        [12, 33],
        [15, 30],
        [18, 28],
        [20, 26],
        [23, 24],
        [25, 22],
        [28, 20],
        [30, 18],
        [33, 16],
        [35, 14],
        [37, 12],
        [39, 10],
        [41, 8],
        [43, 6],
        [45, 5],
        [47, 3],
        [49, 2],
        [51, 3],
        [50, 5],
        [48, 7],
        [46, 9],
        [44, 11],
        [42, 13],
        [40, 15],
        [38, 17],
        [36, 20],
        [34, 23],
        [32, 26],
        [30, 28],
        [28, 30],
        [26, 32],
        [24, 34],
        [22, 35],
        [20, 36],
        [18, 35],
        [16, 33],
        [14, 31],
        [12, 28],
        [10, 26],
        [8, 24],
        [6, 22],
        [4, 20],
        [2, 18],
        [0, 16],
        [-3, 14],
        [-6, 12],
        [-9, 10],
        [-12, 8],
        [-15, 7],
        [-18, 6],
        [-20, 5],
        [-23, 4],
        [-26, 4],
        [-29, 4],
        [-32, 4],
        [-35, 5]
      ],
      [
        [-10, 36],
        [-8, 38],
        [-5, 40],
        [-2, 43],
        [0, 45],
        [3, 47],
        [5, 48],
        [8, 49],
        [10, 50],
        [15, 48],
        [20, 47],
        [25, 45],
        [28, 43],
        [30, 41],
        [32, 43],
        [35, 48],
        [38, 52],
        [42, 55],
        [48, 58],
        [55, 62],
        [62, 65],
        [70, 68],
        [78, 70],
        [85, 72],
        [92, 73],
        [98, 72],
        [105, 70],
        [112, 67],
        [118, 64],
        [125, 60],
        [130, 56],
        [135, 52],
        [140, 48],
        [145, 44],
        [148, 40],
        [150, 36],
        [148, 32],
        [145, 28],
        [142, 25],
        [138, 23],
        [135, 22],
        [130, 21],
        [125, 20],
        [120, 20],
        [115, 20],
        [110, 21],
        [105, 22],
        [100, 23],
        [95, 25],
        [90, 27],
        [85, 29],
        [80, 30],
        [75, 31],
        [70, 32],
        [65, 33],
        [60, 33],
        [55, 33],
        [50, 32],
        [45, 31],
        [40, 30],
        [35, 29],
        [30, 28],
        [25, 28],
        [20, 29],
        [15, 30],
        [10, 31],
        [5, 33],
        [0, 34],
        [-5, 35],
        [-10, 36]
      ],
      [
        [10, -35],
        [12, -32],
        [14, -29],
        [16, -26],
        [18, -23],
        [20, -20],
        [22, -17],
        [24, -14],
        [26, -11],
        [28, -8],
        [30, -5],
        [32, -2],
        [34, 1],
        [36, 4],
        [38, 7],
        [40, 10],
        [42, 13],
        [43, 15],
        [44, 17],
        [45, 18],
        [46, 19],
        [47, 20],
        [48, 21],
        [49, 22],
        [50, 23],
        [51, 23],
        [52, 22],
        [53, 20],
        [54, 18],
        [55, 15],
        [56, 12],
        [56, 9],
        [55, 6],
        [54, 3],
        [52, 1],
        [50, 0],
        [48, -1],
        [46, -3],
        [44, -5],
        [42, -7],
        [40, -9],
        [38, -11],
        [36, -13],
        [34, -15],
        [32, -17],
        [30, -19],
        [28, -21],
        [26, -23],
        [24, -25],
        [22, -27],
        [20, -29],
        [18, -31],
        [16, -32],
        [14, -33],
        [12, -34],
        [10, -35]
      ],
      [
        [110, -10],
        [112, -11],
        [115, -12],
        [118, -13],
        [121, -15],
        [124, -17],
        [127, -19],
        [130, -21],
        [133, -23],
        [136, -25],
        [139, -27],
        [142, -29],
        [145, -31],
        [148, -33],
        [150, -35],
        [152, -37],
        [153, -39],
        [153, -41],
        [152, -42],
        [150, -42],
        [148, -41],
        [146, -40],
        [144, -39],
        [142, -38],
        [140, -37],
        [138, -36],
        [136, -35],
        [134, -34],
        [132, -33],
        [130, -32],
        [128, -31],
        [126, -29],
        [124, -28],
        [122, -26],
        [120, -24],
        [118, -22],
        [116, -20],
        [115, -18],
        [114, -16],
        [113, -14],
        [112, -12],
        [110, -10]
      ],
      [
        [112, -43],
        [115, -42],
        [118, -41],
        [122, -40],
        [126, -39],
        [130, -38],
        [134, -37],
        [138, -36],
        [142, -35],
        [146, -34],
        [150, -33],
        [153, -32],
        [154, -30],
        [153, -28],
        [151, -26],
        [148, -25],
        [145, -26],
        [142, -28],
        [140, -30],
        [138, -32],
        [136, -35],
        [134, -37],
        [132, -39],
        [130, -41],
        [128, -42],
        [126, -43],
        [124, -44],
        [122, -44],
        [120, -44],
        [118, -44],
        [116, -44],
        [114, -43],
        [112, -43]
      ],
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
    const particlesCount = 1500;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 1.05 + Math.random() * 0.15;

      posArray[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      posArray[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      posArray[i * 3 + 2] = radius * Math.cos(phi);
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.008,
      color: 0xffffff,
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
      }

      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }

      renderer.dispose();
      sphereGeometry.dispose();
      wireframeGeometry.dispose();
      wireframeMaterial.dispose();
      material.dispose();
      texture.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, []);

  return <div ref={containerRef} className="globe-display w-full h-full" />;
}