import type { Config } from "@react-router/dev/config";

export default {
  ssr: false,
  // The homepage has no dynamic data, so build it as static HTML at build time
  prerender: ["/"],
} satisfies Config;
