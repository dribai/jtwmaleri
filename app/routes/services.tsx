import { useTranslation } from "~/i18n";

export default function Services() {
    const { t } = useTranslation();

    return (
        <main style={{ padding: "5rem 2rem", maxWidth: "900px", margin: "0 auto" }}>
            <h1 style={{ fontSize: "3.5rem", marginBottom: "3rem", color: "#1a1a1a" }}>
                {t("servicesTitle")}
            </h1>
            <ul style={{ fontSize: "1.3rem", lineHeight: "2.2", color: "#444", listStyle: "none", padding: 0 }}>
                <li style={{ marginBottom: "1.5rem" }}>{t("service1")}</li>
                <li style={{ marginBottom: "1.5rem" }}>{t("service2")}</li>
                <li style={{ marginBottom: "1.5rem" }}>{t("service3")}</li>
                <li style={{ marginBottom: "1.5rem" }}>{t("service4")}</li>
                <li style={{ marginBottom: "1.5rem" }}>{t("service5")}</li>
                <li style={{ marginBottom: "1.5rem" }}>{t("service6")}</li>
                <li style={{ marginBottom: "1.5rem" }}>{t("service7")}</li>
            </ul>
            <p style={{ fontSize: "1.3rem", marginTop: "3rem", color: "#0066cc", fontWeight: "bold" }}>
                {t("servicesIntro")}
            </p>
        </main>
    );
}