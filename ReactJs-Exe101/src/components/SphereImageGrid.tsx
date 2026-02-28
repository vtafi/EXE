import { useState, useRef, useEffect, useCallback } from "react";

interface SphereImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
}

interface SphereImageGridProps {
  images: SphereImage[];
  containerSize?: number;
  sphereRadius?: number;
  onImageClick?: (image: SphereImage) => void;
}

const SphereImageGrid = ({
  images,
  containerSize = 400,
  sphereRadius = 180,
  onImageClick,
}: SphereImageGridProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotationX, setRotationX] = useState(-15);
  const [rotationY, setRotationY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [lastMouse, setLastMouse] = useState({ x: 0, y: 0 });
  const [selectedImage, setSelectedImage] = useState<SphereImage | null>(null);
  const autoRotateRef = useRef<number | undefined>(undefined);

  // Auto-rotate
  useEffect(() => {
    if (!isDragging) {
      const animate = () => {
        setRotationY((prev) => prev + 0.15);
        autoRotateRef.current = requestAnimationFrame(animate);
      };
      autoRotateRef.current = requestAnimationFrame(animate);
    }
    return () => {
      if (autoRotateRef.current) cancelAnimationFrame(autoRotateRef.current);
    };
  }, [isDragging]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    setLastMouse({ x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - lastMouse.x;
      const dy = e.clientY - lastMouse.y;
      setRotationY((prev) => prev + dx * 0.4);
      setRotationX((prev) => Math.max(-60, Math.min(60, prev - dy * 0.4)));
      setLastMouse({ x: e.clientX, y: e.clientY });
    },
    [isDragging, lastMouse],
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Touch support
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true);
    setLastMouse({ x: e.touches[0].clientX, y: e.touches[0].clientY });
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging) return;
      const dx = e.touches[0].clientX - lastMouse.x;
      const dy = e.touches[0].clientY - lastMouse.y;
      setRotationY((prev) => prev + dx * 0.4);
      setRotationX((prev) => Math.max(-60, Math.min(60, prev - dy * 0.4)));
      setLastMouse({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    },
    [isDragging, lastMouse],
  );

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Calculate 3D positions using Fibonacci sphere
  const getPositions = (count: number) => {
    const positions: { x: number; y: number; z: number }[] = [];
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const radius = Math.sqrt(1 - y * y);
      const theta = goldenAngle * i;

      positions.push({
        x: Math.cos(theta) * radius * sphereRadius,
        y: y * sphereRadius,
        z: Math.sin(theta) * radius * sphereRadius,
      });
    }
    return positions;
  };

  const positions = getPositions(images.length);

  // Apply rotation matrix
  const rotatePoint = (x: number, y: number, z: number) => {
    const radX = (rotationX * Math.PI) / 180;
    const radY = (rotationY * Math.PI) / 180;

    // Rotate around X
    const y1 = y * Math.cos(radX) - z * Math.sin(radX);
    const z1 = y * Math.sin(radX) + z * Math.cos(radX);

    // Rotate around Y
    const x2 = x * Math.cos(radY) + z1 * Math.sin(radY);
    const z2 = -x * Math.sin(radY) + z1 * Math.cos(radY);

    return { x: x2, y: y1, z: z2 };
  };

  const imageSize = Math.max(48, Math.min(72, containerSize / 6));

  if (!images || images.length === 0) {
    return (
      <div
        className="flex flex-col items-center justify-center text-gray-400"
        style={{ width: containerSize, height: containerSize }}
      >
        <span className="material-symbols-outlined text-4xl mb-2">image</span>
        <p className="text-sm font-medium">No images provided</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        ref={containerRef}
        className="relative select-none"
        style={{
          width: containerSize,
          height: containerSize,
          perspective: "800px",
          cursor: isDragging ? "grabbing" : "grab",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((img, i) => {
          const pos = positions[i];
          if (!pos) return null;
          const rotated = rotatePoint(pos.x, pos.y, pos.z);

          // Depth-based scaling and opacity
          const depthFactor = (rotated.z + sphereRadius) / (2 * sphereRadius);
          const scale = 0.5 + depthFactor * 0.7;
          const opacity = 0.3 + depthFactor * 0.7;

          return (
            <div
              key={img.id}
              className="absolute rounded-full overflow-hidden border-2 border-white shadow-lg hover:border-primary hover:shadow-xl transition-all duration-150"
              style={{
                width: imageSize,
                height: imageSize,
                left: `calc(50% + ${rotated.x}px - ${imageSize / 2}px)`,
                top: `calc(50% + ${rotated.y}px - ${imageSize / 2}px)`,
                transform: `scale(${scale})`,
                opacity,
                zIndex: Math.round(depthFactor * 100),
              }}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(img);
                onImageClick?.(img);
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>
          );
        })}
      </div>

      {/* Selected image info */}
      {selectedImage && (
        <div className="bg-white rounded-2xl shadow-xl p-4 border border-gray-100 flex items-center gap-4 animate-fade-in max-w-sm w-full">
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="w-14 h-14 rounded-full object-cover border-2 border-primary shadow-md"
          />
          <div className="flex-1 min-w-0">
            <h4 className="font-bold text-gray-900 text-sm truncate">
              {selectedImage.title}
            </h4>
            <p className="text-xs text-gray-500 truncate">
              {selectedImage.description}
            </p>
          </div>
          <button
            onClick={() => setSelectedImage(null)}
            className="p-1 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-600 transition-colors"
          >
            <span className="material-symbols-outlined text-sm">close</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default SphereImageGrid;
