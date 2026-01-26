const Carpet = () => {
  return (
    <mesh
      position={[0, -0.09, 1]}
      rotation={[-Math.PI / 2, 0, 0]}
      receiveShadow
    >
      <circleGeometry args={[1.5, 32]} />
      <meshStandardMaterial color="#4299e1" transparent opacity={0.8} />
    </mesh>
  );
};

export default Carpet;
