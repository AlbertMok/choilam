// https://github.com/delbaoliveira/website/blob/main/ui/LoadingDots.tsx
export const LoadingDots = () => {
  return (
    <span className="text-xs text-neutral-11">
      <span className="inline-flex animate-[loading_1.4s_ease-in-out_infinite] rounded-full">
        &bull;
      </span>
      <span className="inline-flex animate-[loading_1.4s_ease-in-out_0.2s_infinite] rounded-full">
        &bull;
      </span>
      <span className="inline-flex animate-[loading_1.4s_ease-in-out_0.4s_infinite] rounded-full">
        &bull;
      </span>
    </span>
  );
};
