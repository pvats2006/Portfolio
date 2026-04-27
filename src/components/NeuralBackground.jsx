import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function NeuralNodes() {
  const groupRef = useRef(null);
  const pointsRef = useRef(null);
  const lineRef = useRef(null);

  const { nodePositions, linePositions, alphas } = useMemo(() => {
    const count = 220;
    const points = [];
    const lines = [];
    const lineAlpha = [];

    for (let i = 0; i < count; i += 1) {
      points.push((Math.random() - 0.5) * 20, (Math.random() - 0.5) * 12, (Math.random() - 0.5) * 16);
    }

    for (let i = 0; i < count; i += 1) {
      const ix = i * 3;
      for (let j = i + 1; j < count; j += 1) {
        const jx = j * 3;
        const dx = points[ix] - points[jx];
        const dy = points[ix + 1] - points[jx + 1];
        const dz = points[ix + 2] - points[jx + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < 2.5) {
          lines.push(points[ix], points[ix + 1], points[ix + 2], points[jx], points[jx + 1], points[jx + 2]);
          lineAlpha.push(0.2 + (2.5 - dist) * 0.2);
        }
      }
    }

    return {
      nodePositions: new Float32Array(points),
      linePositions: new Float32Array(lines),
      alphas: lineAlpha
    };
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (groupRef.current) groupRef.current.rotation.y = t * 0.06;
    if (pointsRef.current?.material) {
      pointsRef.current.material.opacity = 0.65 + Math.sin(t * 1.8) * 0.15;
    }
    if (lineRef.current?.material) {
      lineRef.current.material.opacity = 0.15 + Math.sin(t * 1.4) * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={nodePositions.length / 3} array={nodePositions} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial color="#7C3AED" size={0.05} transparent opacity={0.75} />
      </points>
      <lineSegments ref={lineRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={linePositions.length / 3} array={linePositions} itemSize={3} />
        </bufferGeometry>
        <lineBasicMaterial color={new THREE.Color("#06B6D4")} transparent opacity={0.22} />
      </lineSegments>
    </group>
  );
}

export default function NeuralBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 16], fov: 52 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[6, 6, 6]} intensity={1.2} color="#7C3AED" />
        <pointLight position={[-6, -4, 5]} intensity={0.9} color="#06B6D4" />
        <NeuralNodes />
      </Canvas>
    </div>
  );
}
