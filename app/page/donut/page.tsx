import ThreeCanvas from "@/app/components/ThreeCanvas";
import Donut from "./Donut";

const Wrapper = () => {
  return (
    <>
      <ThreeCanvas cameraControls={true} cameraPosition={[0, 0, 20]}>
        <Donut />
      </ThreeCanvas>
    </>
  );
};

export default Wrapper;
