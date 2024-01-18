import "@/styles/globals.css";
import type { Preview } from "@storybook/react";
import { RootDecorator } from "@/ui/StorybookDecorator";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    darkMode: {
      darkClass: "dark",
      lightClass: "light",
      stylePreview: true,
    },
    nextjs: {
      appDirectory: true,
    },
    layout: "centered",
  },
  decorators: [RootDecorator],
};

export default preview;
