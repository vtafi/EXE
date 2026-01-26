import { Text } from "@react-three/drei";

interface WallArtProps {
  active: boolean;
  onClick: (id: string) => void;
  onHover: (isHovering: boolean) => void;
}

const WallArt = ({ active, onClick, onHover }: WallArtProps) => {
  return (
    <group
      position={[-2.48, 2.5, 0]}
      rotation={[0, Math.PI / 2, 0]}
      onClick={(e) => {
        e.stopPropagation();
        onClick("about");
      }}
      onPointerOver={() => onHover(true)}
      onPointerOut={() => onHover(false)}
    >
      {/* Khung tranh */}
      <mesh castShadow>
        <boxGeometry args={[2, 3, 0.1]} />
        <meshStandardMaterial color="#2d3748" />
      </mesh>
      {/* Nội dung tranh (Canvas art) */}
      <mesh position={[0, 0, 0.06]}>
        <planeGeometry args={[1.8, 2.8]} />
        <meshStandardMaterial color={active ? "#feb2b2" : "#f6e05e"} />
      </mesh>

      {/* Text trong tranh */}
      <Text
        position={[0, 0, 0.07]}
        fontSize={0.2}
        color="#000"
        anchorX="center"
        anchorY="middle"
      >
        ABOUT ME
      </Text>
    </group>
  );
};

export default WallArt;
