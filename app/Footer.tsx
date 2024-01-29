import { sns } from "@/config/sns";
import { withToolTipLogoIcon } from "@/components/LogoIcons/withToolTipLogoIcon";
import { cn } from "@/lib/utils";

const Link = ({ href, children }: { href: string; children: string }) => (
  <a href={href} target="_blank" className="underline">
    {children}
  </a>
);

export const Footer = ({ className }: { className?: string }) => {
  return (
    <footer className={cn("flex flex-col items-center justify-between space-y-2 py-6 text-sm text-neutral-11 sm:flex-row sm:space-y-0", className)}>
      <p>
        © 2023 AlbertM —— Built with <Link href="https://beta.nextjs.org/">Next.js</Link>, <Link href="https://mdxjs.com/">MDX</Link>,{" "}
        <Link href="https://tailwindcss.com/">Tailwind</Link> and <Link href="https://vercel.com/">Vercel</Link>
      </p>
      <div className="flex space-x-4">
        {sns.map((item) => {
          const Icon = withToolTipLogoIcon(item);
          return <Icon key={item.content} className="h-6 w-6 text-neutral-9 hover:text-neutral-11" />;
        })}
      </div>
    </footer>
  );
};
