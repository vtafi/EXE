const Chair = () => {
  return (
    <group position={[0, 0.6, 0.8]} rotation={[0, Math.PI - 0.5, 0]}>
      {/* Đệm ghế */}
      <mesh castShadow position={[0, 0, 0]}>
        <boxGeometry args={[0.8, 0.1, 0.8]} />
        <meshStandardMaterial color="#e53e3e" />
      </mesh>
      {/* Lưng ghế */}
      <mesh castShadow position={[0, 0.5, 0.35]}>
        <boxGeometry args={[0.8, 1, 0.1]} />
        <meshStandardMaterial color="#e53e3e" />
      </mesh>
      {/* Chân ghế */}
      <mesh position={[0, -0.3, 0]}>
        <cylinderGeometry args={[0.1, 0.4, 0.6]} />
        <meshStandardMaterial color="#4a5568" />
      </mesh>
    </group>
  );
};

export default Chair;
