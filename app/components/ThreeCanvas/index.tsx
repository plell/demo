"use client";

import { Canvas } from "@react-three/fiber";
import { CameraControls } from "@react-three/drei";
import { Suspense } from "react";

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
    <Suspense fallback={<CanvasLoader />}>
      <Canvas camera={{ position: cameraPosition }}>
        {cameraControls && <CameraControls />}
        <Lights />
        {children}
      </Canvas>
    </Suspense>
  );
};

const CanvasLoader = () => {
  return <div></div>;
};

export default ThreeCanvas;
