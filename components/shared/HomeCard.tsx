import Link from "next/link";

interface HomeCardProps {
  name: string;
  url: string;
  text: string;
  src: {
    src: string;
  };
}

const HomeCard: React.FC<HomeCardProps> = ({ name, url, text, src }) => (
  <Link href={url}>
    <a>
      <div className="hover:scale-105 duration-300">
        <p className="text-xs md:text-sm text-gray-300 mb-2">{text}</p>
        <figure className="flex items-center gap-5 cursor-pointer h-full w-full bg-darkCharcoal rounded-md backdrop-filter backdrop-blur-lg bg-opacity-50 border border-gray-400 p-8">
          <img
            width={64}
            height={64}
            className="h-16 object-contain"
            src={src.src}
            alt={name}
          />
          <h2 className="flex-1 text-3xl">{name}</h2>
        </figure>
      </div>
    </a>
  </Link>
);

export default HomeCard;
