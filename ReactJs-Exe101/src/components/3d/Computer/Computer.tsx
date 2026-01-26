import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";

interface ComputerProps {
  active: boolean;
  onClick: (id: string) => void;
  onHover: (isHovering: boolean) => void;
}

const Computer = ({ active, onClick, onHover }: ComputerProps) => {
  const mesh = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (active && mesh.current) {
      mesh.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group
      position={[0, 1.05, -1.5]}
      onClick={(e) => {
        e.stopPropagation();
        onClick("portfolio");
      }}
      onPointerOver={() => onHover(true)}
      onPointerOut={() => onHover(false)}
      ref={mesh}
    >
      {/* Màn hình */}
      <mesh position={[0, 0.3, 0]} castShadow>
        <boxGeometry args={[1.2, 0.8, 0.05]} />
        <meshStandardMaterial color="#000" />
      </mesh>
      {/* Hiển thị màn hình sáng */}
      <mesh position={[0, 0.3, 0.03]}>
        <planeGeometry args={[1.1, 0.7]} />
        <meshBasicMaterial color={active ? "#63b3ed" : "#3182ce"} />
      </mesh>
      {/* Chân đế */}
      <mesh position={[0, -0.1, 0]}>
        <boxGeometry args={[0.2, 0.2, 0.2]} />
        <meshStandardMaterial color="#4a5568" />
      </mesh>

      {/* Label nổi */}
      <Html
        position={[0, 0.8, 0]}
        center
        distanceFactor={10}
        className={active ? "" : "opacity-0 transition-opacity"}
      >
        <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold shadow-lg">
          Click Me
        </div>
      </Html>
    </group>
  );
};

export default Computer;
