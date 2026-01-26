import { useState } from "react";
import {
  OrbitControls,
  PerspectiveCamera,
  useCursor,
  SoftShadows,
} from "@react-three/drei";

import RoomStructure from "../RoomStructure";
import Desk from "../Desk";
import Computer from "../Computer";
import WallArt from "../WallArt";
import MailBox from "../MailBox";
import Chair from "../Chair";
import Carpet from "../Carpet";

interface SceneProps {
  onObjectClick: (id: string) => void;
}

const Scene = ({ onObjectClick }: SceneProps) => {
  const [hovered, setHover] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  useCursor(hovered);

  const handleHover = (isHovering: boolean) => {
    setHover(isHovering);
  };

  const handleClick = (id: string) => {
    setActiveItem(id);
    onObjectClick(id);
  };

  return (
    <>
      <PerspectiveCamera makeDefault position={[5, 4, 8]} fov={45} />
      <OrbitControls
        enablePan={false}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2.2}
        minDistance={5}
        maxDistance={12}
      />

      {/* Lighting */}
      <ambientLight intensity={0.7} />
      <directionalLight
        position={[5, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize={[1024, 1024]}
      >
        <orthographicCamera attach="shadow-camera" args={[-10, 10, 10, -10]} />
      </directionalLight>
      <spotLight position={[-5, 5, 0]} intensity={0.5} angle={0.5} />

      {/* Shadows Softener */}
      <SoftShadows size={10} samples={8} focus={0.5} />

      {/* Room Content */}
      <group position={[0, -1, 0]}>
        <RoomStructure />
        <Desk />

        {/* Interactive Items */}
        <Computer
          active={activeItem === "portfolio"}
          onClick={handleClick}
          onHover={handleHover}
        />

        <WallArt
          active={activeItem === "about"}
          onClick={handleClick}
          onHover={handleHover}
        />

        <MailBox
          active={activeItem === "contact"}
          onClick={handleClick}
          onHover={handleHover}
        />

        {/* Decor (Non-interactive) */}
        <Chair />
        <Carpet />
      </group>
    </>
  );
};

export default Scene;
