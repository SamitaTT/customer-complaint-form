import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Validation } from "./FormValidate";

function ComplaintForm() {
  const { t } = useTranslation();
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");
  const limitChars = 1000;
  const remainingChars = limitChars - details.length;
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { firstname, lastname, email, phone, details };
    const validationErrors = Validation(data);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert(`${t("submitted")}
${t("detail")}: ${details}`);
      console.log(JSON.stringify(data));
    }
  };

  return (
    <div>
      <form className="" onSubmit={handleSubmit}>
        <div className="text-start flex flex-col items-center gap-1">
          <div className="relative">
            <label htmlFor="firstname" className="block">
              {t("firstname")}
            </label>
            <input
              type="text"
              id="firstname"
              value={firstname}
              placeholder={t("eqFirstname")}
              onChange={(e) => setFirstName(e.target.value)}
              className="border border-gray-400 rounded my-2 w-[250px] p-2 focus:outline-blue-500
              md:w-[400px]"
            ></input>
            {errors.firstname && (
              <span className="text-red-500 block md:absolute md:top-0 md:right-0">
                {t("firstnameReq")}
              </span>
            )}
          </div>
          <div className="relative">
            <label htmlFor="lastname" className="block">
              {t("lastname")}
            </label>
            <input
              type="text"
              id="lastname"
              value={lastname}
              placeholder={t("eqLastname")}
              onChange={(e) => setLastName(e.target.value)}
              className="border border-gray-400 rounded my-2 w-[250px] p-2 focus:outline-blue-500
              md:w-[400px]"
            ></input>
            {errors.lastname && (
              <span className="text-red-500 block md:absolute md:top-0 md:right-0">
                {t("lastnameReq")}
              </span>
            )}
          </div>
          <div className="relative">
            <label htmlFor="email" className="block">
              {t("email")}
            </label>
            <input
              type="email"
              id="email"
              value={email}
              placeholder="john@example.com"
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-400 rounded my-2 w-[250px] p-2 focus:outline-blue-500
              md:w-[400px]"
            ></input>
            {errors.email && (
              <span className="text-red-500 block md:absolute md:top-0 md:right-0">
                {t("invalidEmail")}
              </span>
            )}
            {errors.contactInfo && (
              <span className="text-red-500 block md:absolute md:top-0 md:right-0">
                {t("contactInfoReq")}
              </span>
            )}
          </div>
          <div className="relative">
            <label htmlFor="phone" className="block">
              {t("phone")}
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              placeholder="+66 1234 5678"
              onChange={(e) => setPhone(e.target.value)}
              className="border border-gray-400 rounded my-2 w-[250px] p-2 focus:outline-blue-500
              md:w-[400px]"
            ></input>
            {errors.phone && (
              <span className="text-red-500 block md:absolute md:top-0 md:right-0">
                {t("invalidPhone")}
              </span>
            )}
            {errors.contactInfo && (
              <span className="text-red-500 block md:absolute md:top-0 md:right-0">
                {t("contactInfoReq")}
              </span>
            )}
          </div>
          <div className="relative">
            <label htmlFor="details" className="block">
              {t("detail")}
            </label>
            <textarea
              type="text"
              id="details"
              value={details}
              placeholder={t("eqDetail")}
              onChange={(e) => setDetails(e.target.value)}
              className="border border-gray-400 rounded my-2 w-[250px] p-2 focus:outline-blue-500
              md:w-[400px]"
              maxLength="1000"
            ></textarea>
            <p
              className={
                remainingChars === 0
                  ? `hidden`
                  : `block text-gray-400 mt-[-10px] text-end`
              }
            >
              {remainingChars} {t("remainingChars")}
            </p>
            <p
              className={
                remainingChars === 0
                  ? `block text-gray-400 mt-[-10px] text-end`
                  : `hidden`
              }
            >
              {t("maxChars")}
            </p>
            {errors.details && (
              <span className="text-red-500 block md:absolute md:top-0 md:right-0">
                {t("detailsReq")}
              </span>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="bg-[#24a0ed] text-white rounded-md w-32 h-10 my-4 hover:bg-blue-600"
        >
          {t("submit")}
        </button>
      </form>
    </div>
  );
}

export default ComplaintForm;
