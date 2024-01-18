"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const LikeHeart = ({
  step,
  onClick,
}: {
  step: number;
  onClick?: () => void;
}) => {
  const [active, setActive] = useState(false);

  return (
    <>
      <div
        className={cn("heart relative", active && "is-active")}
        onClick={onClick}
      >
        <motion.div
          initial={"0"}
          animate={step.toString()}
          variants={{
            0: {
              clipPath: "polygon(0 100%, 100% 100%, 100% 65%, 0 65%)",
            },
            1: {
              clipPath: "polygon(0 100%, 100% 100%, 100% 55%, 0 55%)",
            },
            2: {
              clipPath: "polygon(0 100%, 100% 100%, 100% 45%, 0 45%)",
            },
            3: {
              clipPath: "polygon(0 100%, 100% 100%, 100% 35%, 0 35%)",
            },
          }}
          onAnimationComplete={() => {
            if (step === 3) {
              setActive(true);
            } else setActive(false);
          }}
          className={cn("heart-full absolute inset-0", active && "hidden")}
        ></motion.div>
      </div>
    </>
  );
};
