import Link from 'next/link';
import { notFound } from 'next/navigation';

interface Post {
  slug: string;
  title: string;
  date: string;
  category: string;
  author: string;
  content: React.ReactNode;
  relatedPosts: Array<{
    slug: string;
    title: string;
  }>;
}

const posts: Record<string, Post> = {
  'body-as-interface': {
    slug: 'body-as-interface',
    title: 'The Body as Interface',
    date: 'March 15, 2025',
    category: 'Theory',
    author: 'System Admin',
    content: (
      <>
        <p>
          Fashion has always served as a medium for identity, rebellion, and
          expression. Yet in the networked age, the relationship between body and
          garment has fundamentally transformed. The body is no longer simply a
          surface to adorn—it has become an interface.
        </p>

        <p>
          Wearable technology, biometric sensors, and smart fabrics have
          eroded the boundary between clothing and infrastructure. What was once
          purely aesthetic now carries functional weight. A jacket doesn't just
          look like it belongs in a dystopian future; it actively processes data,
          responds to environmental stimuli, and transmits information.
        </p>

        <div className="code-block">
          <p>
            body.interface.activate()
            <br />
            &gt; Connected to network
            <br />
            &gt; Biometric data streaming
            <br />
            &gt; Aesthetic parameters: OPTIMIZED
          </p>
        </div>

        <p>
          This represents a critical juncture in fashion's evolution. We are
          designing not just for appearance, but for integration. The body becomes
          a node in a larger system—a point of input/output in a vast network of
          data streams.
        </p>

        <p>
          Brands like FLESH & CODE are pushing this frontier, creating garments
          that blur the line between fashion object and computational device. The
          question is no longer "what does this say about me?" but rather "what
          does this do with me?"
        </p>

        <p>
          The implications are profound. Fashion enters the realm of technology
          policy, health data, surveillance, and autonomy. When your clothes are
          connected, when they collect data, when they respond to algorithms—the
          stakes rise dramatically.
        </p>
      </>
    ),
    relatedPosts: [
      { slug: 'wearing-algorithm', title: 'Wearing the Algorithm' },
      { slug: 'material-futures', title: 'Material Futures: Beyond Fabric' },
    ],
  },

  'wearing-algorithm': {
    slug: 'wearing-algorithm',
    title: 'Wearing the Algorithm',
    date: 'March 8, 2025',
    category: 'Technology',
    author: 'System Admin',
    content: (
      <>
        <p>
          Your wardrobe has become a dataset. Each garment is a collection point
          for information about your body, your environment, your movement, your
          temperature, your heart rate. The clothes you wear are constantly
          feeding information into recommendation systems, predictive models, and
          optimization algorithms.
        </p>

        <p>
          This is not conspiracy theory—it's the architecture of contemporary
          fashion technology. Smart textiles, embedded sensors, and networked
          garments are becoming the default. What once seemed futuristic is now
          standard issue.
        </p>

        <div className="code-block">
          <p>
            &gt; Analyzing behavioral patterns
            <br />
            &gt; Temperature: 98.4°F
            <br />
            &gt; Movement: 8,342 steps
            <br />
            &gt; Recommending: Neural Jacket
            <br />
            &gt; Confidence: 94%
          </p>
        </div>

        <p>
          The algorithm doesn't just observe—it shapes. Algorithmic fashion curation
          influences what you consider wearable, attractive, and desirable. The
          feedback loop is closed: your body generates data, the algorithm
          predicts your preferences, new garments are designed to match those
          predictions, and the cycle continues.
        </p>

        <p>
          FLESH & CODE embraces this reality without illusion. Rather than hiding
          the computational substrate, their designs celebrate it. The aesthetic
          of the algorithm becomes visible in glitch patterns, matrix-green
          accents, and the raw visibility of technological infrastructure.
        </p>

        <p>
          The question for designers is: if we cannot escape the algorithm, how do
          we design within it? How do we create spaces of agency and expression
          within systems designed to predict and control?
        </p>
      </>
    ),
    relatedPosts: [
      { slug: 'body-as-interface', title: 'The Body as Interface' },
      { slug: 'neural-fashion', title: 'Neural Networks and Fashion Design' },
    ],
  },

  'cyberpunk-manifesto': {
    slug: 'cyberpunk-manifesto',
    title: 'A Cyberpunk Manifesto for Fashion',
    date: 'March 1, 2025',
    category: 'Culture',
    author: 'System Admin',
    content: (
      <>
        <p>
          The 1980s never ended. They just got darker, faster, and more wired.
          Cyberpunk was supposed to be science fiction—a warning about corporate
          dominance, surveillance capitalism, and the rise of networked systems.
          Instead, it became documentary.
        </p>

        <p>
          The aesthetic that defined cyberpunk—neon against darkness, technology
          as both liberation and control, the body as a site of technological
          modification—is now the default visual language of contemporary fashion.
        </p>

        <div className="code-block">
          <p>
            CYBERPUNK.AESTHETIC v3.2
            <br />
            &gt; Darkness: ABSOLUTE
            <br />
            &gt; Neon: MAXIMUM
            <br />
            &gt; Dystopia: NORMALIZED
          </p>
        </div>

        <p>
          FLESH & CODE is a cyberpunk label for a cyberpunk age. The brand
          embodies the aesthetic precisely because it's no longer fiction. We
          live in the future cyberpunk warned us about. The corporate networks,
          the surveillance infrastructure, the networked bodies—it's all here.
        </p>

        <p>
          But cyberpunk has always been about more than just looks. It's about
          hacking, resistance, and finding spaces of agency within systems of
          control. The fashion is the medium; rebellion is the message.
        </p>
      </>
    ),
    relatedPosts: [
      { slug: 'dystopia-style', title: 'Dystopia as a Style Language' },
      { slug: 'body-as-interface', title: 'The Body as Interface' },
    ],
  },
};

interface BlogPostParams {
  slug: string;
}

export async function generateStaticParams(): Promise<BlogPostParams[]> {
  return Object.keys(posts).map((slug) => ({
    slug,
  }));
}

export default function BlogPost({
  params,
}: {
  params: BlogPostParams;
}): JSX.Element {
  const post = posts[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Header */}
      <section className="py-16 bg-void border-b border-matrix/30">
        <div className="max-w-3xl mx-auto px-6">
          <Link href="/blog" className="text-matrix font-mono text-sm mb-6 inline-block hover:gap-2 gap-1 flex items-center transition-all">
            &lt; Back
          </Link>

          <div className="mb-8">
            <p className="text-signal font-mono text-xs tracking-wider uppercase mb-3">
              {post.category}
            </p>
            <h1 className="text-5xl md:text-6xl font-mono font-bold text-chrome tracking-wider leading-tight mb-6">
              {post.title}
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-static font-mono text-sm border-t border-matrix/20 pt-6">
            <div>
              <p className="text-chrome font-semibold">{post.author}</p>
              <p className="text-static">{post.date}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-void">
        <article className="max-w-3xl mx-auto px-6 prose prose-invert">
          <div className="space-y-6 text-static leading-relaxed">
            {post.content}
          </div>
        </article>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-terminal border-t border-matrix/30">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-matrix font-mono font-bold text-2xl tracking-wider mb-8">
            Related Articles
          </h2>

          <div className="space-y-4">
            {post.relatedPosts.map((relatedPost) => (
              <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`}>
                <div className="terminal-card p-6 rounded-sm cursor-pointer group">
                  <h3 className="text-chrome font-mono font-bold text-lg group-hover:text-matrix transition-colors flex items-center justify-between">
                    {relatedPost.title}
                    <span className="text-matrix group-hover:gap-2 gap-1 flex items-center transition-all">
                      &gt;
                    </span>
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-void border-b border-matrix/30">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-mono font-bold text-matrix mb-4 tracking-wider">
            Receive New Articles
          </h2>
          <p className="text-static mb-6">
            Join the network. Get notified when new manifestos and research are published.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
            <input
              type="email"
              placeholder="your.signal@address.net"
              className="flex-1 px-4 py-3 bg-terminal border border-matrix/50 text-chrome placeholder-static/50 font-mono focus:outline-none focus:border-matrix focus:shadow-matrix-sm rounded-sm"
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
