"use client";

import React, { useEffect, useMemo, useRef } from "react";
import dynamic from "next/dynamic";
import Globe from "globe.gl";
import worldGeo from "@/data/globe.json";

type ArcDatum = {
  order?: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt?: number;
  color?: string | [string, string];
};

type Position = { lat: number; lng: number };

type GlobeConfig = {
  pointSize?: number;
  globeColor?: string;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
  emissive?: string;
  emissiveIntensity?: number;
  shininess?: number;
  polygonColor?: string;
  ambientLight?: string;
  directionalLeftLight?: string;
  directionalTopLight?: string;
  pointLight?: string;
  arcTime?: number;
  arcLength?: number;
  rings?: number;
  maxRings?: number;
  initialPosition?: Position;
  autoRotate?: boolean;
  autoRotateSpeed?: number;
};

export function World({
  data,
  globeConfig,
}: {
  data: ArcDatum[];
  globeConfig?: GlobeConfig;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<ReturnType<typeof Globe> | null>(null);
  const merged = useMemo<Required<GlobeConfig>>(
    () => ({
      pointSize: globeConfig?.pointSize ?? 1.5,
      globeColor: globeConfig?.globeColor ?? "#1a1a1a",
      showAtmosphere: globeConfig?.showAtmosphere ?? true,
      atmosphereColor: globeConfig?.atmosphereColor ?? "#ffffff",
      atmosphereAltitude: globeConfig?.atmosphereAltitude ?? 0.1,
      emissive: globeConfig?.emissive ?? "#1a1a1a",
      emissiveIntensity: globeConfig?.emissiveIntensity ?? 0.1,
      shininess: globeConfig?.shininess ?? 0.9,
      polygonColor: globeConfig?.polygonColor ?? "rgba(255,255,255,0.7)",
      ambientLight: globeConfig?.ambientLight ?? "#ffffff",
      directionalLeftLight: globeConfig?.directionalLeftLight ?? "#ffffff",
      directionalTopLight: globeConfig?.directionalTopLight ?? "#ffffff",
      pointLight: globeConfig?.pointLight ?? "#ffffff",
      arcTime: globeConfig?.arcTime ?? 1000,
      arcLength: globeConfig?.arcLength ?? 0.9,
      rings: globeConfig?.rings ?? 1,
      maxRings: globeConfig?.maxRings ?? 3,
      initialPosition: globeConfig?.initialPosition ?? { lat: 0, lng: 0 },
      autoRotate: globeConfig?.autoRotate ?? true,
      autoRotateSpeed: globeConfig?.autoRotateSpeed ?? 0.5,
    }),
    [globeConfig]
  );

  useEffect(() => {
    if (!containerRef.current) return;

    const globe = Globe({ animateIn: true })(containerRef.current);
    globeRef.current = globe;

    // Transparent background to preserve existing page styles
    globe.backgroundColor("rgba(0,0,0,0)");

    // Base globe appearance
    globe
      .showAtmosphere(merged.showAtmosphere)
      .atmosphereColor(merged.atmosphereColor)
      .atmosphereAltitude(merged.atmosphereAltitude);

    // Material tuning
    const mat = globe.globeMaterial();
    // @ts-ignore three types are not exposed by globe.gl here
    mat.color.set(merged.globeColor);
    // @ts-ignore
    mat.emissive.set(merged.emissive);
    // @ts-ignore
    mat.emissiveIntensity = merged.emissiveIntensity;
    // @ts-ignore
    mat.shininess = merged.shininess;

    // Countries polygons
    const features = (worldGeo as any).features ?? [];
    globe
      .polygonsData(features)
      .polygonAltitude(() => 0.005)
      .polygonCapColor(() => merged.polygonColor)
      .polygonSideColor(() => "rgba(0,0,0,0)")
      .polygonStrokeColor(() => "rgba(0,0,0,0)");

    // Arcs
    globe
      .arcsData(data)
      .arcColor((d: ArcDatum) => d.color || ["#3b82f6", "#06b6d4"]) // gradient if tuple
      .arcAltitude((d: ArcDatum) => d.arcAlt ?? 0.3)
      .arcStroke(0.5)
      .arcDashLength(merged.arcLength)
      .arcDashGap(1)
      .arcDashInitialGap(() => Math.random())
      .arcDashAnimateTime(merged.arcTime)
      .arcsTransitionDuration(0);

    // Camera and controls
    globe.pointOfView({ lat: merged.initialPosition.lat, lng: merged.initialPosition.lng, altitude: 1.8 }, 0);
    const controls = globe.controls();
    controls.autoRotate = merged.autoRotate;
    controls.autoRotateSpeed = merged.autoRotateSpeed;

    // Lighting
    const scene = globe.scene();
    const THREE = (globe as any).THREE as typeof import("three");
    const amb = new THREE.AmbientLight(merged.ambientLight, 0.6);
    const dirLeft = new THREE.DirectionalLight(merged.directionalLeftLight, 0.6);
    dirLeft.position.set(-400, 200, 200);
    const dirTop = new THREE.DirectionalLight(merged.directionalTopLight, 0.8);
    dirTop.position.set(0, 500, 200);
    const pLight = new THREE.PointLight(merged.pointLight, 0.4);
    pLight.position.set(200, -200, 200);
    scene.add(amb);
    scene.add(dirLeft);
    scene.add(dirTop);
    scene.add(pLight);

    // Resize handler to fit container
    const resize = () => {
      if (!containerRef.current) return;
      const { clientWidth, clientHeight } = containerRef.current;
      globe.width(clientWidth);
      globe.height(clientHeight);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(containerRef.current);

    return () => {
      try {
        ro.disconnect();
      } catch {}
      try {
        controls.autoRotate = false;
        globe.pauseAnimation && (globe as any).pauseAnimation();
        globeRef.current = null;
        // dispose renderer
        const renderer = globe.renderer?.();
        renderer?.dispose?.();
        // remove canvas
        if (containerRef.current) {
          containerRef.current.replaceChildren();
        }
      } catch {}
    };
  }, [data, merged]);

  return (
    <div className="relative h-full w-full">
      <div ref={containerRef} className="absolute inset-0" />
    </div>
  );
}
