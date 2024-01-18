import type { Meta, StoryObj } from "@storybook/react";
import { LikeHeart } from "@/ui/components/LikeHeart";
import { action } from "@storybook/addon-actions";

const meta = {
  title: "LikeHeart",
  component: LikeHeart,
} satisfies Meta<typeof LikeHeart>;

export default meta;
type Story = StoryObj<typeof LikeHeart>;

export const LikeHeart_: Story = {
  args: {
    step: 0,
    onClick: action("button clicked"),
  },
  argTypes: {
    step: {
      control: {
        type: "range",
        min: 0,
        max: 3,
      },
    },
  },
};
