import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        header: "Customer Complaint Form",
        info: "Please fill out the following form with your complaint.",
        firstname: "First Name",
        lastname: "Last Name",
        email: "Email Address",
        phone: "Phone Number",
        detail: "Complaint Details",
        submit: "Submit",
        firstnameReq: "Please enter your first name",
        lastnameReq: "Please enter your last name",
        contactInfoReq: "Please enter email or phone number",
        detailsReq: "Please enter you complaint detail",
        invalidEmail: "Invalid email address",
        invalidPhone: "Invalid phone number",
        eqDetail: "Please provide any details...",
        eqFirstname: "John",
        eqLastname: "Doe",
        remainingChars: "characters remaining",
        maxChars: "Max characters limit",
        submitted: "Your complaint has been submitted.",
      },
    },
    th: {
      translation: {
        header: "แบบฟอร์มรับเรื่องร้องเรียน",
        info: "กรุณากรอกข้อมูลลงในแบบฟอร์มพร้อมข้อร้องเรียนของคุณ",
        firstname: "ชื่อ",
        lastname: "นามสกุล",
        email: "อีเมล",
        phone: "เบอร์โทรศัพท์",
        detail: "รายละเอียดการร้องเรียน",
        submit: "ส่ง",
        firstnameReq: "กรุณาใส่ชื่อ",
        lastnameReq: "กรุณาใส่นามสกุล",
        contactInfoReq: "กรุณาใส่อีเมลหรือเบอร์โทรศัพท์",
        detailsReq: "กรุณาใส่รายละเอียดเรื่องร้องเรียน",
        invalidEmail: "อีเมลไม่ถูกต้อง",
        invalidPhone: "เบอร์โทรศัพท์ไม่ถูกต้อง",
        eqDetail: "กรุณาให้ข้อมูลเพิ่มเติม...",
        eqFirstname: "สมชาย",
        eqLastname: "รักษา",
        remainingChars: "จำนวนอักขระที่เหลือ",
        maxChars: "ขีดจำกัดตัวอักษรสูงสุด",
        submitted: "คำร้องเรียนของคุณถูกส่งแล้ว",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
