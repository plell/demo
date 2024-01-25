import ThreeCanvas from "@/app/components/ThreeCanvas";
import Dominos from "./Dominos";

const Wrapper = () => {
  return (
    <ThreeCanvas cameraPosition={[0, 60, 20]}>
      <Dominos />
    </ThreeCanvas>
  );
};

export default Wrapper;
