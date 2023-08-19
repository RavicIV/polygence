export const addNewValidator = (values) => {
  const errors = {};
console.log(values)
  if (!values.description) {
    errors.description = "Required";
  }

  if (!values.amount) {
    errors.amount = "Required";
  }

  if (!values.currency) {
    errors.currency = "Required";
  }

  return errors;
};
