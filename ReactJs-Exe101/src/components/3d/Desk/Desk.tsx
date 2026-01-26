const Desk = () => {
  return (
    <group position={[0, 0, -1.5]}>
      {/* Mặt bàn */}
      <mesh position={[0, 1, 0]} castShadow receiveShadow>
        <boxGeometry args={[3, 0.1, 1.5]} />
        <meshStandardMaterial color="#2d3748" />
      </mesh>
      {/* Chân bàn */}
      <mesh position={[-1.4, 0.5, 0.6]} castShadow>
        <boxGeometry args={[0.1, 1, 0.1]} />
        <meshStandardMaterial color="#1a202c" />
      </mesh>
      <mesh position={[1.4, 0.5, 0.6]} castShadow>
        <boxGeometry args={[0.1, 1, 0.1]} />
        <meshStandardMaterial color="#1a202c" />
      </mesh>
      <mesh position={[-1.4, 0.5, -0.6]} castShadow>
        <boxGeometry args={[0.1, 1, 0.1]} />
        <meshStandardMaterial color="#1a202c" />
      </mesh>
      <mesh position={[1.4, 0.5, -0.6]} castShadow>
        <boxGeometry args={[0.1, 1, 0.1]} />
        <meshStandardMaterial color="#1a202c" />
      </mesh>
    </group>
  );
};

export default Desk;
