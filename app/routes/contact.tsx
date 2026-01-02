import { useTranslation } from "~/i18n";

export default function Contact() {
    const { t } = useTranslation();

    return (
        <main style={{ padding: "5rem 2rem", maxWidth: "900px", margin: "0 auto" }}>
            <h1 style={{ fontSize: "3.5rem", marginBottom: "3rem", color: "#1a1a1a" }}>
                {t("contactTitle")}
            </h1>
            <p style={{ fontSize: "1.4rem", lineHeight: "1.8", color: "#444", marginBottom: "3rem" }}>
                {t("contactIntro")}
            </p>
            <div style={{ fontSize: "1.3rem", lineHeight: "2", color: "#444" }}>
                <p><strong>{t("phone")}</strong> [ditt telefonnummer, t.ex. 070-123 45 67]</p>
                <p>
                    <strong>{t("email")}</strong>{" "}
                    <a href="mailto:info@jtwmaleri.com" style={{ color: "#0066cc" }}>
                        info@jtwmaleri.com
                    </a>
                </p>
                <p><strong>{t("area")}</strong></p>
            </div>
        </main>
    );
}