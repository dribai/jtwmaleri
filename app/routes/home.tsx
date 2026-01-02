import { useTranslation } from "~/i18n";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          height: "80vh",
          backgroundImage: "url('https://www.simplifypainting.com/wp-content/uploads/2024/06/Interior-Painting-Hero-scaled.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <div
          style={{
            background: "rgba(0,0,0,0.4)",
            padding: "3rem",
            borderRadius: "12px",
            maxWidth: "800px",
          }}
        >
          <h1 style={{ fontSize: "4.5rem", marginBottom: "1rem" }}>
            {t("heroTitle")}
          </h1>
          <p style={{ fontSize: "1.8rem", marginBottom: "3rem" }}>
            {t("heroSubtitle")}
          </p>
          <div style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="/contact"
              style={{
                padding: "1.2rem 3rem",
                background: "#0066cc",
                color: "white",
                textDecoration: "none",
                borderRadius: "8px",
                fontSize: "1.3rem",
                fontWeight: "bold",
              }}
            >
              {t("quoteButton")}
            </a>
            <a
              href="/services"
              style={{
                padding: "1.2rem 3rem",
                background: "white",
                color: "#333",
                textDecoration: "none",
                borderRadius: "8px",
                fontSize: "1.3rem",
                fontWeight: "bold",
              }}
            >
              {t("servicesButton")}
            </a>
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section style={{ padding: "4rem 2rem", background: "#f8f8f8", textAlign: "center" }}>
        <h2 style={{ fontSize: "3rem", marginBottom: "3rem" }}>
          {t("beforeAfter")}
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <img
            src="https://media.istockphoto.com/id/1384317531/photo/before-and-after-of-man-painting-roller-to-reveal-newly-remodeled-room-with-fresh-light-green.jpg?s=170667a&w=is&k=20&c=rl2Hw7VHxJw4RVgLQwm_GwRq-LB-cBi5q10xZmY1CkY="
            alt={t("beforeAfter")}
            style={{ borderRadius: "12px", width: "100%", height: "auto" }}
          />
          <img
            src="https://www.shutterstock.com/shutterstock/photos/797197540/display_1500/stock-photo-outside-residential-house-renovation-painting-exterior-walls-and-window-frames-before-and-after-797197540.jpg"
            alt={t("beforeAfter")}
            style={{ borderRadius: "12px", width: "100%", height: "auto" }}
          />
          <img
            src="https://media.istockphoto.com/id/1691827688/photo/living-room-renovation-before-and-after-home-refurnishment.jpg?s=612x612&w=0&k=20&c=d_aXs4cY4EAxJoFvzxhHNVEZYZDxTZJrQGLopg9wIBA="
            alt={t("beforeAfter")}
            style={{ borderRadius: "12px", width: "100%", height: "auto" }}
          />
          <img
            src="https://www.younghouselove.com/wp-content/uploads//2018/11/Split-Screen-Before-After-Painted-Brick-House-1024x637.jpg"
            alt={t("beforeAfter")}
            style={{ borderRadius: "12px", width: "100%", height: "auto" }}
          />
        </div>
      </section>
    </>
  );
}