import { useState } from "react";
import { Canvas } from "@react-three/fiber";

import { Scene } from "../../components/3d";
import { Header, Instructions, Modal } from "../../components/ui";

const LandingPage = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  return (
    <div className="w-full h-screen bg-gray-50 relative overflow-hidden font-sans selection:bg-blue-100 selection:text-blue-900">
      <Header />

      {/* 3D Canvas */}
      <div className="absolute inset-0 z-10">
        <Canvas shadows dpr={[1, 2]}>
          <Scene onObjectClick={setActiveModal} />
        </Canvas>
      </div>

      <Instructions />

      {/* Modal Popup */}
      {activeModal && (
        <Modal item={activeModal} onClose={() => setActiveModal(null)} />
      )}
    </div>
  );
};

export default LandingPage;
