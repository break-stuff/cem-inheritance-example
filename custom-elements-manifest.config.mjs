import { cemInheritancePlugin } from "custom-elements-manifest-inheritance";
import cem from "@shoelace-style/shoelace/dist/custom-elements.json" assert { type: "json" };

export default {
  /** Globs to analyze */
  globs: ["src/**/*.ts"],
  /** Enable special handling for litelement */
  litelement: true,
  /** Provide custom plugins */
  plugins: [cemInheritancePlugin({ externalManifests: [cem] })],
};
