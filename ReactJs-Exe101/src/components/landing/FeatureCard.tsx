import React from "react";

interface FeatureCardProps {
  icon: React.ElementType;
  badge: string;
  title: string;
  description: string;
  tags: string[];
  bgColor: string;
  iconColor?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  badge,
  title,
  description,
  tags,
  bgColor,
  iconColor = "text-stone-300",
}) => {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-[4/3] bg-stone-100 rounded-2xl overflow-hidden mb-4 relative">
        <div
          className={`absolute inset-0 ${bgColor} group-hover:scale-105 transition-transform duration-500`}
        >
          <div
            className={`w-full h-full flex items-center justify-center ${iconColor}`}
          >
            <Icon size={48} />
          </div>
        </div>
        <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
          {badge}
        </div>
      </div>
      <h3 className="text-xl font-bold text-black group-hover:text-orange-600 transition-colors mb-2">
        {title}
      </h3>
      <p className="text-stone-500 text-sm line-clamp-2 mb-3">{description}</p>
      <div className="flex gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-medium text-stone-400 border border-stone-200 px-2 py-0.5 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default FeatureCard;
