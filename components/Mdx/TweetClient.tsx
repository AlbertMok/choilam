"use client";

// FIXME: RSC not working

import { Tweet } from "react-tweet";

const TweetContainer = ({
  ...props
}: React.ComponentPropsWithoutRef<typeof Tweet>) => (
  <div className="not-prose flex flex-col items-center">
    <Tweet {...props} />
  </div>
);

export default TweetContainer;
