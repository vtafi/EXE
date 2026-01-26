import React from 'react';

interface StatItem {
  label: string;
  value: string;
}

const Statistics: React.FC = () => {
  const stats: StatItem[] = [
    { label: 'Doanh nghiệp', value: '2,000+' },
    { label: 'Người dùng', value: '50k+' },
    { label: 'Quốc gia', value: '15+' },
    { label: 'Hài lòng', value: '99%' },
  ];

  return (
    <section className="py-20 bg-[#1A1A1A] text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-2">
              <div className="text-4xl md:text-5xl font-black text-white">
                {stat.value}
              </div>
              <div className="text-stone-500 text-sm font-medium uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
