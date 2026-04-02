import Link from 'next/link';

interface PostCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

export default function PostCard({
  slug,
  title,
  excerpt,
  date,
  category,
}: PostCardProps): JSX.Element {
  return (
    <Link href={`/blog/${slug}`}>
      <div className="group terminal-card p-8 rounded-sm cursor-pointer h-full hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
        <div className="flex flex-col h-full">
          <div className="mb-4">
            <p className="text-signal font-mono text-xs tracking-wider uppercase mb-2">
              {category}
            </p>
            <p className="text-static font-mono text-xs">{date}</p>
          </div>

          <h3 className="text-chrome font-mono text-2xl font-bold mb-3 group-hover:text-matrix transition-colors line-clamp-2">
            {title}
          </h3>

          <p className="text-static text-sm line-clamp-3 mb-4 flex-grow">
            {excerpt}
          </p>

          <div className="flex items-center text-matrix font-mono text-sm font-semibold group-hover:gap-2 gap-1 transition-all">
            Read <span className="text-lg">&gt;</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
