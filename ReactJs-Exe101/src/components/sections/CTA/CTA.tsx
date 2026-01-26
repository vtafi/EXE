import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="bg-white rounded-[2rem] border border-stone-200 p-12 md:p-20 text-center shadow-xl shadow-stone-200/50 relative overflow-hidden">
          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-black mb-6 tracking-tight">
              Sẵn sàng trải nghiệm?
            </h2>
            <p className="text-stone-500 text-lg mb-10 max-w-xl mx-auto">
              Tham gia cộng đồng WorkX ngay hôm nay. Dùng thử miễn phí 14 ngày, không cần thẻ tín dụng.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition-all shadow-lg hover:shadow-xl">
                Đăng ký miễn phí
              </button>
              <button className="bg-white border-2 border-stone-200 text-black px-8 py-4 rounded-full font-bold text-lg hover:border-black transition-colors">
                Liên hệ tư vấn
              </button>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-orange-100 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-stone-100 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
