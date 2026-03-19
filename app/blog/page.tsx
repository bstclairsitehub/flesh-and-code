import PostCard from '@/components/PostCard';

const allPosts = [
  {
    slug: 'body-as-interface',
    title: 'The Body as Interface',
    excerpt:
      'Fashion has always been a form of expression. But what happens when the body becomes a literal interface between the digital and physical worlds? We explore the convergence of biomechanics, data visualization, and wearable technology.',
    date: 'March 15, 2025',
    category: 'Theory',
  },
  {
    slug: 'wearing-algorithm',
    title: 'Wearing the Algorithm',
    excerpt:
      'Your clothes are data. Responsive fabrics, embedded sensors, and networked garments that adapt to your environment. How fashion brands are building the future of wearable intelligence.',
    date: 'March 8, 2025',
    category: 'Technology',
  },
  {
    slug: 'cyberpunk-manifesto',
    title: 'A Cyberpunk Manifesto for Fashion',
    excerpt:
      'The 80s are back—but this time they never left. We examine how cyberpunk aesthetics have become the default visual language of contemporary streetwear and digital fashion.',
    date: 'March 1, 2025',
    category: 'Culture',
  },
  {
    slug: 'material-futures',
    title: 'Material Futures: Beyond Fabric',
    excerpt:
      'What comes after cotton, polyester, and silk? Exploring synthetic biofibers, programmable textiles, and the materials that will define the next generation of wearables.',
    date: 'February 22, 2025',
    category: 'Innovation',
  },
  {
    slug: 'dystopia-style',
    title: 'Dystopia as a Style Language',
    excerpt:
      'In an age of climate anxiety and digital overwhelm, dystopian fashion offers a form of resistance. A deep dive into how darkness becomes decoration.',
    date: 'February 15, 2025',
    category: 'Culture',
  },
  {
    slug: 'neural-fashion',
    title: 'Neural Networks and Fashion Design',
    excerpt:
      'Algorithmically generated designs, computational pattern prediction, and generative textiles. The intersection of neural computation and clothing design.',
    date: 'February 8, 2025',
    category: 'Technology',
  },
];

export default function Blog(): JSX.Element {
  return (
    <>
      {/* Header */}
      <section className="py-20 bg-void border-b border-matrix/30">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-signal font-mono text-sm tracking-widest uppercase mb-2">
            Signal
          </p>
          <h1 className="text-6xl md:text-7xl font-mono font-bold text-chrome tracking-wider">
            Editorial
          </h1>
          <p className="text-static mt-4 max-w-2xl">
            Manifestos, research, and cultural criticism at the intersection of
            fashion and technology.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-void border-b border-matrix/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-4 flex-wrap">
            <button className="px-4 py-2 border border-matrix/50 text-matrix font-mono text-sm rounded-sm hover:bg-matrix hover:text-void transition-all">
              All
            </button>
            <button className="px-4 py-2 border border-static/30 text-static font-mono text-sm rounded-sm hover:border-matrix/50 transition-all">
              Theory
            </button>
            <button className="px-4 py-2 border border-static/30 text-static font-mono text-sm rounded-sm hover:border-matrix/50 transition-all">
              Technology
            </button>
            <button className="px-4 py-2 border border-static/30 text-static font-mono text-sm rounded-sm hover:border-matrix/50 transition-all">
              Culture
            </button>
            <button className="px-4 py-2 border border-static/30 text-static font-mono text-sm rounded-sm hover:border-matrix/50 transition-all">
              Innovation
            </button>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-void border-b border-matrix/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="terminal-card p-8 md:p-12 rounded-sm">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <p className="text-signal font-mono text-xs tracking-wider uppercase mb-2">
                  Featured
                </p>
                <h2 className="text-4xl md:text-5xl font-mono font-bold text-chrome mb-4 tracking-wider">
                  {allPosts[0].title}
                </h2>
                <p className="text-static mb-6 leading-relaxed">
                  {allPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-static font-mono text-sm">
                    {allPosts[0].date}
                  </p>
                  <a
                    href={`/blog/${allPosts[0].slug}`}
                    className="text-matrix font-mono font-bold hover:gap-3 gap-2 flex items-center transition-all"
                  >
                    Read <span>&gt;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="py-20 bg-void">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {allPosts.slice(1).map((post) => (
              <PostCard key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-terminal border-t border-matrix/30">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-mono font-bold text-matrix mb-4 tracking-wider">
            Stay Connected
          </h2>
          <p className="text-static mb-8">
            New manifestos and research delivered to your inbox every two weeks.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="your.signal@address.net"
              className="flex-1 px-4 py-3 bg-void border border-matrix/50 text-chrome placeholder-static/50 font-mono focus:outline-none focus:border-matrix focus:shadow-matrix-sm rounded-sm"
              required
            />
            <button
              type="submit"
              className="btn-matrix px-8 py-3 uppercase text-sm font-bold tracking-widest whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
