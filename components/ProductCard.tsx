interface ProductCardProps {
  id: string;
  title: string;
  image: string;
  price: number;
  category: string;
}

export default function ProductCard({
  id,
  title,
  image,
  price,
  category,
}: ProductCardProps): JSX.Element {
  return (
    <div className="terminal-card rounded-sm overflow-hidden group hover:scale-[1.02] hover:-translate-y-1 transition-all duration-500">
      <div className="aspect-square bg-terminal flex items-center justify-center overflow-hidden relative group-hover:scale-105 transition-transform duration-500">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-matrix/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6 bg-void">
        <p className="text-matrix font-mono text-xs tracking-wider mb-2 uppercase">
          {category}
        </p>
        <h3 className="text-chrome font-mono text-lg font-bold mb-4 group-hover:text-matrix transition-colors">
          {title}
        </h3>

        <div className="flex items-center justify-between">
          <span className="text-matrix font-mono font-bold text-lg">${price}</span>
          <button className="btn-matrix text-xs px-4 py-2">
            Access
          </button>
        </div>
      </div>
    </div>
  );
}
