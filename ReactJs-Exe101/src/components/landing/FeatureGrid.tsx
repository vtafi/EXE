import React from "react";
import { ArrowRight, Sparkles, Shield, Globe } from "lucide-react";
import FeatureCard from "./FeatureCard";

const FeatureGrid: React.FC = () => {
  const features = [
    {
      icon: Sparkles,
      badge: "AI Powered",
      title: "Trợ lý ảo WorkX",
      description:
        "Tự động hóa các tác vụ lặp lại, phân tích dữ liệu và đưa ra gợi ý thông minh.",
      tags: ["Automation", "Smart"],
      bgColor: "bg-stone-200",
      iconColor: "text-stone-300",
    },
    {
      icon: Shield,
      badge: "Enterprise",
      title: "Bảo mật tuyệt đối",
      description:
        "Mã hóa đầu cuối chuẩn quân đội, đảm bảo dữ liệu doanh nghiệp luôn an toàn.",
      tags: ["Security", "Private"],
      bgColor: "bg-stone-800",
      iconColor: "text-stone-500",
    },
    {
      icon: Globe,
      badge: "Cloud",
      title: "Kết nối toàn cầu",
      description:
        "Làm việc mọi lúc, mọi nơi trên mọi thiết bị với khả năng đồng bộ tức thì.",
      tags: ["Remote", "Sync"],
      bgColor: "bg-orange-100",
      iconColor: "text-orange-200",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-black text-black mb-2">
              Giải pháp của chúng tôi
            </h2>
            <p className="text-stone-500">
              Được thiết kế để phù hợp với mọi quy mô doanh nghiệp
            </p>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 font-bold text-black hover:text-orange-600 transition"
          >
            Xem tất cả <ArrowRight size={18} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <button className="border border-black text-black px-6 py-2 rounded-full text-sm font-bold">
            Xem tất cả
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
