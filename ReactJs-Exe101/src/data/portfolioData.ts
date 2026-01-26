// Portfolio data configuration
export interface PortfolioItem {
  id: string;
  title: string;
  position: [number, number, number];
  rotation: [number, number, number];
  description: string;
  details: string[];
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "portfolio",
    title: "Dự Án",
    position: [0, 1.3, -1.8],
    rotation: [0, 0, 0],
    description: "Khám phá các dự án React & 3D Web của tôi.",
    details: [
      "E-commerce Platform: Next.js + Stripe",
      "3D Dashboard: Three.js + React",
      "AI Chatbot Interface: OpenAI API",
    ],
  },
  {
    id: "about",
    title: "Giới Thiệu",
    position: [-2.4, 2.5, 0],
    rotation: [0, Math.PI / 2, 0],
    description: "Tôi là một Creative Developer đam mê thiết kế.",
    details: [
      "5+ năm kinh nghiệm Frontend",
      "Yêu thích UI/UX tối giản",
      "Đam mê nhiếp ảnh & cà phê",
    ],
  },
  {
    id: "contact",
    title: "Liên Hệ",
    position: [2.2, 0.5, 1.5],
    rotation: [0, -Math.PI / 4, 0],
    description: "Hãy cùng tạo ra những sản phẩm tuyệt vời.",
    details: [
      "Email: hello@example.com",
      "Phone: +84 90 123 4567",
      "Hồ Chí Minh, Việt Nam",
    ],
  },
];

export const CONFIG = {
  colors: {
    wall: "#f0f0f0",
    floor: "#e0d6cc",
    desk: "#2d3748",
    chair: "#e53e3e",
    accent: "#3182ce",
    text: "#1a202c",
  },
};
