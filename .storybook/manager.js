import { addons } from "@storybook/addons";
import { themes } from "@storybook/theming";
import CustomTheme from "./CustomTheme";

addons.setConfig({
  theme: CustomTheme,
  // isFullscreen: true,
  // showNav: false,
  // showPanel: false,
  panelPosition: "right",
  // enableShortcuts: true,
  // showToolbar: true,
  // theme: undefined,
  // selectedPanel: undefined,
  // initialActive: "sidebar",
  // sidebar: {
  //   showRoots: false,
  //   collapsedRoots: ["other"],
  // },
  // toolbar: {
  //   title: { hidden: false },
  //   zoom: { hidden: false },
  //   eject: { hidden: false },
  //   copy: { hidden: false },
  //   fullscreen: { hidden: false },
  // },
});