import Link from "next/link";
import { z } from "zod";

const MdxLink = (props: React.ComponentPropsWithoutRef<"a">) => {
  const hrefStr = z.string().parse(props.href);

  if (hrefStr.startsWith("/")) {
    return (
      <Link href={hrefStr} {...props}>
        {props.children}
      </Link>
    );
  }

  if (hrefStr.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" {...props} />;
};

export default MdxLink;
