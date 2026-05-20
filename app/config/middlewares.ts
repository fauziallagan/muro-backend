import type { Core } from "@strapi/strapi";

const config: Core.Config.Middlewares = [
  "strapi::logger",
  "strapi::errors",

  {
    name: "strapi::cors",
    config: {
      origin: ["http://localhost:3000", "http://localhost:5173"],
      headers: "*",
      credentials: true,
    },
  },

  "strapi::security",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];

export default config;
