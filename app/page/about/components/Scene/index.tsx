"use client";
import { useRef } from "react";
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";

const Scene = () => {
  const meshRef = useRef<Mesh | null>(null);
  useFrame(() => {
    if (meshRef?.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });
  return (
    <group>
      <mesh ref={meshRef}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color='red' />
      </mesh>
    </group>
  );
};

export default Scene;
