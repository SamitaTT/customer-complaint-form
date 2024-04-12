import { useTranslation } from "react-i18next";

function LanguageSelector() {
  const language = [
    { code: "en", lang: "English" },
    { code: "th", lang: "ภาษาไทย" },
  ];
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      {language.map((lng) => {
        return (
          <button
            className={`my-2 flex-row justify-center hover:text-orange-600 ${
              lng.code === i18n.language ? "text-blue-600" : ""
            }`}
            key={lng.code}
            onClick={() => {
              changeLanguage(lng.code);
            }}
          >
            {lng.lang}
            {lng !== language[language.length - 1] && (
              <span className="mx-2 text-black">|</span>
            )}
          </button>
        );
      })}
    </div>
  );
}

export default LanguageSelector;
