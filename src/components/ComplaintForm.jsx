import { useState } from "react";
import { useTranslation } from "react-i18next";

function ComplaintForm() {
  const { t } = useTranslation();
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(JSON.stringify(firstname, lastname, email, phone, details));
  };

  return (
    <div>
      <form className="" onSubmit={handleSubmit}>
        <div className="text-start flex flex-col items-center gap-1">
          <div>
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
          </div>
          {/* <span>{t("firstnameReq")}</span> */}
          <div>
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
            {/* <span>{t("firstnameReq")}</span> */}
          </div>
          <div>
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
          </div>
          <div>
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
          </div>
          <div>
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
            ></textarea>
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
