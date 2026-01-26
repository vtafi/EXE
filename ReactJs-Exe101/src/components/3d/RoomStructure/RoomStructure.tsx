const CONFIG = {
  colors: {
    wall: "#f0f0f0",
    floor: "#e0d6cc",
    desk: "#2d3748",
    chair: "#e53e3e",
    accent: "#3182ce",
    text: "#1a202c",
  },
};

const RoomStructure = () => {
  return (
    <group>
      {/* Sàn nhà */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.1, 0]}
        receiveShadow
      >
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color={CONFIG.colors.floor} />
      </mesh>

      {/* Tường sau */}
      <mesh position={[0, 2.5, -2.5]} receiveShadow>
        <boxGeometry args={[10, 5, 0.2]} />
        <meshStandardMaterial color={CONFIG.colors.wall} />
      </mesh>

      {/* Tường trái */}
      <mesh
        position={[-2.6, 2.5, 0]}
        rotation={[0, Math.PI / 2, 0]}
        receiveShadow
      >
        <boxGeometry args={[10, 5, 0.2]} />
        <meshStandardMaterial color={CONFIG.colors.wall} />
      </mesh>
    </group>
  );
};

export default RoomStructure;
