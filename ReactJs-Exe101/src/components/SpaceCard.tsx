import { useNavigate } from "react-router-dom";
import type { Space } from "../data/spaces";

interface SpaceCardProps {
  space: Space;
}

const SpaceCard = ({ space }: SpaceCardProps) => {
  const navigate = useNavigate();
  const { id, name, image, imageAlt, features, price, popular, featured } =
    space;

  const widthClass = featured
    ? "w-[320px] md:w-[450px]"
    : "w-[320px] md:w-[400px]";

  const handleBookNow = () => {
    navigate(`/space/${id}`);
  };

  return (
    <div
      className={`snap-center shrink-0 ${widthClass} h-[280px] md:h-[320px] rounded-2xl overflow-hidden relative group cursor-pointer shadow-xl ${
        featured ? "shadow-2xl ring-2 ring-primary" : ""
      }`}
      onClick={handleBookNow}
    >
      <img
        alt={imageAlt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        src={image}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Popular badge */}
      {popular && (
        <div className="absolute top-4 right-4">
          <span className="bg-primary text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
            Popular
          </span>
        </div>
      )}

      {/* Card Content */}
      <div className="absolute bottom-0 left-0 w-full p-6 text-left">
        <h3
          className={`text-white font-display uppercase mb-2 ${
            featured ? "text-3xl" : "text-2xl"
          }`}
        >
          {name}
        </h3>

        {/* Features */}
        <div
          className={`flex gap-4 text-gray-300 text-xs font-medium ${featured ? "mb-6" : "mb-3"}`}
        >
          {features.map((f, i) => (
            <span
              key={i}
              className={`flex items-center gap-1 ${f.highlight ? "text-primary" : ""}`}
            >
              <span className="material-symbols-outlined text-[14px]">
                {f.icon}
              </span>
              {f.label}
            </span>
          ))}
        </div>

        {/* CTA */}
        {featured ? (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleBookNow();
            }}
            className="bg-primary hover:bg-orange-600 text-white font-bold text-xs uppercase px-6 py-3 rounded-lg w-full transition-colors flex items-center justify-center gap-2"
          >
            Book Now{" "}
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </button>
        ) : (
          <div className="flex items-center justify-between">
            <span className="text-primary font-bold text-lg">
              {price}
              <span className="text-xs text-gray-300 font-normal">/hr</span>
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleBookNow();
              }}
              className="bg-white/20 hover:bg-white text-white hover:text-black backdrop-blur-sm text-[10px] font-bold uppercase px-3 py-1.5 rounded-full transition-colors"
            >
              Book Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SpaceCard;
