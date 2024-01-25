"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { CameraControls, Stage } from "@react-three/drei";
import { useRef } from "react";
import { Mesh } from "three";

const Lights = () => {
  return (
    <>
      <directionalLight position={[20, 10, 0]} />
      <ambientLight intensity={0.8} />
    </>
  );
};

type Props = {
  children: JSX.Element;
  cameraControls?: boolean;
  cameraPosition?: [number, number, number];
};

const ThreeCanvas = ({ children, cameraControls, cameraPosition }: Props) => {
  return (
    <Canvas camera={{ position: cameraPosition }}>
      {cameraControls && <CameraControls />}
      <Lights />
      {children}
    </Canvas>
  );
};

export default ThreeCanvas;
