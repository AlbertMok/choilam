import type { StaticImageData } from "next/image";
import Image from "next/image";
import { Badge } from "@/ui/components/Badge";

export function ProjectCard({
  image,
  title,
  description,
  link,
  tags,
}: {
  image: StaticImageData;
  title: string;
  description: string;
  link: string;
  tags: string[];
}) {
  return (
    <div className="flex h-fit w-fit flex-col space-y-4">
      <a
        href={link}
        target="_blank"
        className="h-fit w-fit overflow-hidden rounded-3xl shadow-md transition-transform  hover:scale-105"
      >
        <Image
          src={image}
          placeholder="blur"
          alt="cover"
          width={392}
          height={288}
        />
      </a>
      <div className="flex flex-col space-y-2">
        <h2 className="font-serif text-3xl font-bold">{title}</h2>
        <p>{description}</p>
      </div>
      <div className="flex space-x-2">
        {tags.map((tag) => (
          <Badge key={tag} color="accent">
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}
