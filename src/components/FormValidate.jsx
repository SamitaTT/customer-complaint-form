export const Validation = (data) => {
  const errors = {};
  const phonePattern = /^\+?[1-9]\d{0,3}\s?\d{1,4}\s?\d{1,4}$/;
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (data.firstname === "") {
    errors.firstname = true;
  }

  if (data.lastname === "") {
    errors.lastname = true;
  }

  if (!data.email && !data.phone) {
    errors.contactInfo = true;
  } else {
    if (data.email && !emailPattern.test(data.email)) {
      errors.email = true;
    }
    if (data.phone && !phonePattern.test(data.phone)) {
      errors.phone = true;
    }
  }

  if (data.details === "") {
    errors.details = true;
  }

  return errors;
};
