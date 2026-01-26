import { X, ChevronRight, Monitor, User, Mail } from "lucide-react";
import { PORTFOLIO_ITEMS } from "../../../data/portfolioData";

interface ModalProps {
  item: string | null;
  onClose: () => void;
}

const iconMap: Record<string, React.ReactNode> = {
  portfolio: <Monitor size={20} />,
  about: <User size={20} />,
  contact: <Mail size={20} />,
};

const Modal = ({ item, onClose }: ModalProps) => {
  if (!item) return null;

  const content = PORTFOLIO_ITEMS.find((i) => i.id === item);
  if (!content) return null;

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm transition-all duration-300">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-slideUp">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white flex justify-between items-start">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-md">
              {iconMap[item]}
            </div>
            <h2 className="text-2xl font-bold">{content.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
          >
            <X size={24} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            {content.description}
          </p>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Chi tiết
            </h3>
            {content.details.map((detail, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-default"
              >
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-gray-700 font-medium">{detail}</span>
              </div>
            ))}
          </div>

          <button
            onClick={onClose}
            className="mt-8 w-full py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 group cursor-pointer"
          >
            Đóng
            <ChevronRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
