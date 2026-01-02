import "./i18n/config"; // Initializes i18n on load
import { useTranslation } from "~/i18n";
import { Link, useLocation, useParams } from "react-router";

import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  // Detect current language from URL path
  const pathParts = location.pathname.split("/").filter(Boolean);
  const langFromPath = pathParts[0] && ["en", "es"].includes(pathParts[0]) ? pathParts[0] : "sv";

  // Force i18n to use the language from URL
  if (i18n.language !== langFromPath) {
    i18n.changeLanguage(langFromPath);
  }

  const currentLang = i18n.language as "sv" | "en" | "es";

  // Build links with correct prefix
  const prefixedPath = (path: string) => {
    return currentLang === "sv" ? path : `/${currentLang}${path}`;
  };

  // Switch language – keeps current page
  const switchToLang = (lang: "sv" | "en" | "es") => {
    const cleanPath = location.pathname.replace(/^\/(en|es)/, "") || "/";
    return lang === "sv" ? cleanPath : `/${lang}${cleanPath}`;
  };

  return (
    <html lang={currentLang}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google" content="notranslate" />
        <Meta />
        <Links />
      </head>
      <body style={{ margin: 0, fontFamily: "'Inter', system-ui, sans-serif" }}>
        <header
          style={{
            padding: "1.5rem 2rem",
            background: "#ffffff",
            borderBottom: "1px solid #eee",
            position: "sticky",
            top: 0,
            zIndex: 100,
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          }}
        >
          <nav
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Link
              to={currentLang === "sv" ? "/" : `/${currentLang}`}
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                color: "#0066cc",
                textDecoration: "none",
              }}
            >
              {t("brand")}
            </Link>

            <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
              <div style={{ display: "flex", gap: "2.5rem", fontSize: "1.1rem" }}>
                <Link to={prefixedPath("/")} style={{ color: "#333", textDecoration: "none", fontWeight: "500" }}>
                  {t("home")}
                </Link>
                <Link to={prefixedPath("/about")} style={{ color: "#333", textDecoration: "none", fontWeight: "500" }}>
                  {t("about")}
                </Link>
                <Link to={prefixedPath("/services")} style={{ color: "#333", textDecoration: "none", fontWeight: "500" }}>
                  {t("services")}
                </Link>
                <Link to={prefixedPath("/contact")} style={{ color: "#333", textDecoration: "none", fontWeight: "500" }}>
                  {t("contact")}
                </Link>
              </div>

              <div style={{ display: "flex", gap: "0.8rem", fontSize: "1.5rem" }}>
                <Link to={switchToLang("sv")} title="Svenska" style={{ opacity: currentLang === "sv" ? 1 : 0.5 }}>
                  🇸🇪
                </Link>
                <Link to={switchToLang("en")} title="English" style={{ opacity: currentLang === "en" ? 1 : 0.5 }}>
                  🇬🇧
                </Link>
                <Link to={switchToLang("es")} title="Español" style={{ opacity: currentLang === "es" ? 1 : 0.5 }}>
                  🇪🇸
                </Link>
              </div>
            </div>
          </nav>
        </header>

        {children}

        <footer
          style={{
            padding: "3rem 2rem",
            background: "#1a1a1a",
            color: "#fff",
            textAlign: "center",
            marginTop: "4rem",
          }}
        >
          <p>© {new Date().getFullYear()} JTW Måleri – Alla rättigheter förbehållna</p>
          <p style={{ marginTop: "0.5rem", fontSize: "0.9rem", opacity: 0.8 }}>
            Tullinge, Stockholm
          </p>
        </footer>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}