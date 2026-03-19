import ProductCard from '@/components/ProductCard';

const allProducts = [
  {
    id: '1',
    title: 'Neural Jacket',
    image: 'neural-jacket.jpg',
    price: 280,
    category: 'Outerwear',
  },
  {
    id: '2',
    title: 'Synth Hoodie',
    image: 'synth-hoodie.jpg',
    price: 195,
    category: 'Tops',
  },
  {
    id: '3',
    title: 'Data Cargo Pants',
    image: 'data-cargo.jpg',
    price: 245,
    category: 'Bottoms',
  },
  {
    id: '4',
    title: 'Signal Tank',
    image: 'signal-tank.jpg',
    price: 85,
    category: 'Tops',
  },
  {
    id: '5',
    title: 'Void Boots',
    image: 'void-boots.jpg',
    price: 320,
    category: 'Footwear',
  },
  {
    id: '6',
    title: 'Chrome Gloves',
    image: 'chrome-gloves.jpg',
    price: 120,
    category: 'Accessories',
  },
  {
    id: '7',
    title: 'Terminal Vest',
    image: 'terminal-vest.jpg',
    price: 215,
    category: 'Outerwear',
  },
  {
    id: '8',
    title: 'Matrix Tee',
    image: 'matrix-tee.jpg',
    price: 45,
    category: 'Tops',
  },
  {
    id: '9',
    title: 'Code Beanie',
    image: 'code-beanie.jpg',
    price: 65,
    category: 'Accessories',
  },
];

export default function Shop(): JSX.Element {
  return (
    <>
      {/* Header */}
      <section className="py-20 bg-void border-b border-matrix/30">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-matrix font-mono text-sm tracking-widest uppercase mb-2">
            Inventory
          </p>
          <h1 className="text-6xl md:text-7xl font-mono font-bold text-chrome tracking-wider">
            Shop
          </h1>
          <p className="text-static mt-4 max-w-2xl">
            Curated pieces engineered for the networked body. Each item combines
            precision tailoring with technical innovation.
          </p>
        </div>
      </section>

      {/* Filter/Sort Section */}
      <section className="py-8 bg-void border-b border-matrix/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex gap-4 flex-wrap">
              <button className="px-4 py-2 border border-matrix/50 text-matrix font-mono text-sm rounded-sm hover:bg-matrix hover:text-void transition-all">
                All
              </button>
              <button className="px-4 py-2 border border-static/30 text-static font-mono text-sm rounded-sm hover:border-matrix/50 transition-all">
                Outerwear
              </button>
              <button className="px-4 py-2 border border-static/30 text-static font-mono text-sm rounded-sm hover:border-matrix/50 transition-all">
                Tops
              </button>
              <button className="px-4 py-2 border border-static/30 text-static font-mono text-sm rounded-sm hover:border-matrix/50 transition-all">
                Bottoms
              </button>
            </div>
            <select className="px-4 py-2 bg-terminal border border-matrix/30 text-chrome font-mono text-sm rounded-sm focus:outline-none focus:border-matrix cursor-pointer">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-void">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {allProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-terminal border-t border-matrix/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-matrix font-mono font-bold tracking-wider mb-3">
                Quality
              </h3>
              <p className="text-static text-sm">
                Each piece is tested and verified for durability and comfort.
                Premium materials sourced for optimal performance.
              </p>
            </div>
            <div>
              <h3 className="text-matrix font-mono font-bold tracking-wider mb-3">
                Shipping
              </h3>
              <p className="text-static text-sm">
                Orders ship within 2-3 business days. Free shipping on orders over
                $300. International delivery available.
              </p>
            </div>
            <div>
              <h3 className="text-matrix font-mono font-bold tracking-wider mb-3">
                Returns
              </h3>
              <p className="text-static text-sm">
                30-day return window. Tags must remain attached. Refunds processed
                within 5-7 business days.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
