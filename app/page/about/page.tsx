import ThreeCanvas from "../../components/ThreeCanvas";
import Scene from "./components/Scene";

const About = () => {
  return (
    <>
      <ThreeCanvas cameraControls={true}>
        <Scene />
      </ThreeCanvas>
    </>
  );
};

export default About;
