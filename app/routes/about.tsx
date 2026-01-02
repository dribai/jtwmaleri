import { useTranslation } from "~/i18n";

export default function About() {
    const { t } = useTranslation();

    return (
        <main style={{ padding: "5rem 2rem", maxWidth: "900px", margin: "0 auto" }}>
            <h1 style={{ fontSize: "3.5rem", marginBottom: "2rem", color: "#1a1a1a" }}>
                {t("aboutTitle")}
            </h1>
            <p style={{ fontSize: "1.3rem", lineHeight: "1.8", color: "#444", marginBottom: "2rem" }}>
                {t("aboutText1")}<br /><br />
                {t("aboutText2")}<br /><br />
                {t("aboutText3")}
            </p>
            <p style={{ fontSize: "1.3rem", lineHeight: "1.8", color: "#444" }}>
                {t("aboutText4")}
            </p>
        </main>
    );
}