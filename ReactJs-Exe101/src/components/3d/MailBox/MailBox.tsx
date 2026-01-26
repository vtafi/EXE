import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Html } from "@react-three/drei";
import * as THREE from "three";

interface MailBoxProps {
  active: boolean;
  onClick: (id: string) => void;
  onHover: (isHovering: boolean) => void;
}

const MailBox = ({ active, onClick, onHover }: MailBoxProps) => {
  const group = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (active && group.current) {
      group.current.position.y = 0.5 + Math.sin(clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group
        ref={group}
        position={[2, 1, 1]}
        rotation={[0, -Math.PI / 4, 0]}
        onClick={(e) => {
          e.stopPropagation();
          onClick("contact");
        }}
        onPointerOver={() => onHover(true)}
        onPointerOut={() => onHover(false)}
      >
        {/* Thân hộp */}
        <mesh castShadow>
          <boxGeometry args={[0.8, 0.5, 0.5]} />
          <meshStandardMaterial color="#e53e3e" />
        </mesh>

        {/* Biểu tượng phong bì 3D đơn giản */}
        <mesh position={[0, 0, 0.26]}>
          <planeGeometry args={[0.6, 0.3]} />
          <meshStandardMaterial color="#fff" />
        </mesh>

        <Html position={[0, 0.5, 0]} center transform sprite>
          <div
            className={`text-sm font-bold bg-white px-2 rounded shadow ${active ? "text-red-500" : "text-gray-500"}`}
          >
            CONTACT
          </div>
        </Html>
      </group>
    </Float>
  );
};

export default MailBox;
