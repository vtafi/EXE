import React from "react";
import { MessageSquare } from "lucide-react";

const Testimonial: React.FC = () => {
  return (
    <section className="py-24 bg-[#FDFBF7]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 flex justify-center text-orange-600">
            <MessageSquare size={40} />
          </div>
          <h3 className="text-2xl md:text-4xl font-serif italic text-black leading-relaxed mb-8">
            "WorkX mang lại sự tinh gọn mà chúng tôi tìm kiếm bấy lâu nay. Giao
            diện đẹp, dễ sử dụng và cực kỳ hiệu quả. Nó giống như một tách
            Espresso đậm đà cho quy trình làm việc."
          </h3>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-stone-300 rounded-full overflow-hidden">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                alt="User"
              />
            </div>
            <div className="text-left">
              <div className="font-bold text-black">Nguyễn Văn A</div>
              <div className="text-sm text-stone-500">CEO, TechStart Inc.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
