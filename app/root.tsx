import "./i18n/config";
import { useTranslation } from "~/i18n";
import { Link, useLocation } from "react-router";
import { useState } from "react";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Detect language from URL
  const pathParts = location.pathname.split("/").filter(Boolean);
  const langFromPath = pathParts[0] && ["en", "es"].includes(pathParts[0]) ? pathParts[0] : "sv";

  if (i18n.language !== langFromPath) {
    i18n.changeLanguage(langFromPath);
  }

  const currentLang = i18n.language as "sv" | "en" | "es";

  const prefixedPath = (path: string) => {
    return currentLang === "sv" ? path : `/${currentLang}${path}`;
  };

  const switchToLang = (lang: "sv" | "en" | "es") => {
    const cleanPath = location.pathname.replace(/^\/(en|es)/, "") || "/";
    return lang === "sv" ? cleanPath : `/${lang}${cleanPath}`;
  };

  return (
    <html lang={currentLang} className="light"> {/* Forces light mode */}
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google" content="notranslate" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link
              to={currentLang === "sv" ? "/" : `/${currentLang}`}
              className="text-3xl font-bold text-blue-600"
            >
              {t("brand")}
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-12">
              <div className="flex gap-8 text-lg">
                <Link to={prefixedPath("/")} className="text-gray-700 hover:text-blue-600 font-medium">
                  {t("home")}
                </Link>
                <Link to={prefixedPath("/about")} className="text-gray-700 hover:text-blue-600 font-medium">
                  {t("about")}
                </Link>
                <Link to={prefixedPath("/services")} className="text-gray-700 hover:text-blue-600 font-medium">
                  {t("services")}
                </Link>
                <Link to={prefixedPath("/contact")} className="text-gray-700 hover:text-blue-600 font-medium">
                  {t("contact")}
                </Link>
              </div>

              <div className="flex gap-4 text-3xl">
                <Link to={switchToLang("sv")} className={currentLang === "sv" ? "opacity-100" : "opacity-50"}>
                  🇸🇪
                </Link>
                <Link to={switchToLang("en")} className={currentLang === "en" ? "opacity-100" : "opacity-50"}>
                  🇬🇧
                </Link>
                <Link to={switchToLang("es")} className={currentLang === "es" ? "opacity-100" : "opacity-50"}>
                  🇪🇸
                </Link>
              </div>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-4xl"
            >
              ☰
            </button>
          </nav>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg">
              <div className="flex flex-col items-center py-8 gap-8 text-xl">
                <Link to={prefixedPath("/")} onClick={() => setMobileMenuOpen(false)} className="text-gray-700">
                  {t("home")}
                </Link>
                <Link to={prefixedPath("/about")} onClick={() => setMobileMenuOpen(false)} className="text-gray-700">
                  {t("about")}
                </Link>
                <Link to={prefixedPath("/services")} onClick={() => setMobileMenuOpen(false)} className="text-gray-700">
                  {t("services")}
                </Link>
                <Link to={prefixedPath("/contact")} onClick={() => setMobileMenuOpen(false)} className="text-gray-700">
                  {t("contact")}
                </Link>
                <div className="flex gap-8 text-4xl pt-4">
                  <Link to={switchToLang("sv")} onClick={() => setMobileMenuOpen(false)} className={currentLang === "sv" ? "opacity-100" : "opacity-50"}>
                    🇸🇪
                  </Link>
                  <Link to={switchToLang("en")} onClick={() => setMobileMenuOpen(false)} className={currentLang === "en" ? "opacity-100" : "opacity-50"}>
                    🇬🇧
                  </Link>
                  <Link to={switchToLang("es")} onClick={() => setMobileMenuOpen(false)} className={currentLang === "es" ? "opacity-100" : "opacity-50"}>
                    🇪🇸
                  </Link>
                </div>
              </div>
            </div>
          )}
        </header>

        {/* Main content – grows to push footer down */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer – always at bottom */}
        <footer className="bg-gray-900 text-white text-center py-12">
          <p className="text-lg">© {new Date().getFullYear()} JTW Måleri – Alla rättigheter förbehållna</p>
          <p className="text-sm opacity-80 mt-2">Tullinge, Stockholm</p>
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