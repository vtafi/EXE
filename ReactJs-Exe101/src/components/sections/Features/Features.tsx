import React from 'react';
import { ArrowRight, Sparkles, Shield, Globe } from 'lucide-react';
import { FeatureCard } from '../../ui';

export interface FeatureItem {
  icon: React.ReactNode;
  badge: string;
  bgColor: string;
  iconColor: string;
  title: string;
  description: string;
  tags: string[];
}

const Features: React.FC = () => {
  const features: FeatureItem[] = [
    {
      icon: <Sparkles size={48} />,
      badge: 'AI Powered',
      bgColor: 'bg-stone-200',
      iconColor: 'text-stone-300',
      title: 'Trợ lý ảo WorkX',
      description: 'Tự động hóa các tác vụ lặp lại, phân tích dữ liệu và đưa ra gợi ý thông minh.',
      tags: ['Automation', 'Smart']
    },
    {
      icon: <Shield size={48} className="text-stone-500" />,
      badge: 'Enterprise',
      bgColor: 'bg-stone-800',
      iconColor: 'text-stone-600',
      title: 'Bảo mật tuyệt đối',
      description: 'Mã hóa đầu cuối chuẩn quân đội, đảm bảo dữ liệu doanh nghiệp luôn an toàn.',
      tags: ['Security', 'Private']
    },
    {
      icon: <Globe size={48} />,
      badge: 'Cloud',
      bgColor: 'bg-orange-100',
      iconColor: 'text-orange-200',
      title: 'Kết nối toàn cầu',
      description: 'Làm việc mọi lúc, mọi nơi trên mọi thiết bị với khả năng đồng bộ tức thì.',
      tags: ['Remote', 'Sync']
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-black text-black mb-2">Giải pháp của chúng tôi</h2>
            <p className="text-stone-500">Được thiết kế để phù hợp với mọi quy mô doanh nghiệp</p>
          </div>
          <a 
            href="#" 
            className="hidden md:flex items-center gap-2 font-bold text-black hover:text-orange-600 transition"
          >
            Xem tất cả <ArrowRight size={18} />
          </a>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 text-center md:hidden">
          <button className="border border-black text-black px-6 py-2 rounded-full text-sm font-bold">
            Xem tất cả
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
