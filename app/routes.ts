import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("about", "routes/about.tsx"),
    route("services", "routes/services.tsx"),
    route("contact", "routes/contact.tsx"),

    route("en", "routes/home.tsx", { id: "en-home" }),
    route("en/about", "routes/about.tsx", { id: "en-about" }),
    route("en/services", "routes/services.tsx", { id: "en-services" }),
    route("en/contact", "routes/contact.tsx", { id: "en-contact" }),

    route("es", "routes/home.tsx", { id: "es-home" }),
    route("es/about", "routes/about.tsx", { id: "es-about" }),
    route("es/services", "routes/services.tsx", { id: "es-services" }),
    route("es/contact", "routes/contact.tsx", { id: "es-contact" }),
] satisfies RouteConfig;