import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Color",
};

export default meta;

export const Color: StoryObj = {
  render: () => (
    <>
      <div className="flex flex-col items-end space-y-4">
        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium text-primary-11">primary</span>
          <div className="h-5 w-5 rounded bg-primary-1" />
          <div className="h-5 w-5 rounded bg-primary-2" />
          <div className="h-5 w-5 rounded bg-primary-3" />
          <div className="h-5 w-5 rounded bg-primary-4" />
          <div className="h-5 w-5 rounded bg-primary-5" />
          <div className="h-5 w-5 rounded bg-primary-6" />
          <div className="h-5 w-5 rounded bg-primary-7" />
          <div className="h-5 w-5 rounded bg-primary-8" />
          <div className="h-5 w-5 rounded bg-primary-9" />
          <div className="h-5 w-5 rounded bg-primary-10" />
          <div className="h-5 w-5 rounded bg-primary-11" />
          <div className="h-5 w-5 rounded bg-primary-12" />
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium text-accent-11">accent</span>
          <div className="h-5 w-5 rounded bg-accent-1" />
          <div className="h-5 w-5 rounded bg-accent-2" />
          <div className="h-5 w-5 rounded bg-accent-3" />
          <div className="h-5 w-5 rounded bg-accent-4" />
          <div className="h-5 w-5 rounded bg-accent-5" />
          <div className="h-5 w-5 rounded bg-accent-6" />
          <div className="h-5 w-5 rounded bg-accent-7" />
          <div className="h-5 w-5 rounded bg-accent-8" />
          <div className="h-5 w-5 rounded bg-accent-9" />
          <div className="h-5 w-5 rounded bg-accent-10" />
          <div className="h-5 w-5 rounded bg-accent-11" />
          <div className="h-5 w-5 rounded bg-accent-12" />
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium text-neutral-11">neutral</span>
          <div className="h-5 w-5 rounded bg-neutral-1" />
          <div className="h-5 w-5 rounded bg-neutral-2" />
          <div className="h-5 w-5 rounded bg-neutral-3" />
          <div className="h-5 w-5 rounded bg-neutral-4" />
          <div className="h-5 w-5 rounded bg-neutral-5" />
          <div className="h-5 w-5 rounded bg-neutral-6" />
          <div className="h-5 w-5 rounded bg-neutral-7" />
          <div className="h-5 w-5 rounded bg-neutral-8" />
          <div className="h-5 w-5 rounded bg-neutral-9" />
          <div className="h-5 w-5 rounded bg-neutral-10" />
          <div className="h-5 w-5 rounded bg-neutral-11" />
          <div className="h-5 w-5 rounded bg-neutral-12" />
        </div>
      </div>
      <div className="mt-12 flex flex-col items-center space-y-4 font-serif font-bold">
        <p className="text-xl text-neutral-12">
          This storybook support dark mode.
        </p>
        <p className="text-xl text-neutral-12">
          You can find the dark mode switch in toolbar.
        </p>
        <p className="text-xl text-neutral-12">Press `T` to toggle toolbar.</p>
      </div>
    </>
  ),
};
