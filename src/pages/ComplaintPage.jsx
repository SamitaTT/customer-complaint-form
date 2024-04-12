import ComplaintForm from "../components/ComplaintForm";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../components/LanguageSelector";

function ComplaintPage() {
  const { t } = useTranslation();
  return (
    <div className="bg-circles w-screen h-screen flex justify-center items-center">
      <div className="bg-white flex-col w-9/12 h-fit pt-4 pb-10 md:py-10 rounded-lg ">
        <div className="text-center pt-4 pb-6">
          <h1 className="text-2xl md:text-4xl">{t("header")}</h1>
          <p className="md:text-lg my-1 text-balance">{t("info")}</p>
          <LanguageSelector />
        </div>
        <div className="text-center flex justify-center items-center md:flex-col lg:flex-row lg:justify-evenly">
          <img
            src="/customer-complaint.jpg"
            className="hidden md:block md:w-4/12"
          ></img>
          <ComplaintForm />
        </div>
        <div className="flex flex-row justify-center md:my-4">
          <span>Coded by</span>
          <a href="https://github.com/SamitaTT" className="flex items-center">
            <img
              src="/github-mark.svg"
              alt="github-logo"
              className="w-6 h-6 mx-1"
            ></img>
            <span>SamitaTT</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ComplaintPage;
