import dayjs from "dayjs";
import { isInteger } from "lodash/fp";

export const getRemainingDraws = async () => {
  return 3;
};

export const validateYearInput = (year: string) => {
  if (!year) {
    return { valid: false, error: "Birth Year must be an number. eg: 1984" };
  }

  const isValidInteger = isInteger(+year);
  if (!isValidInteger) {
    return { valid: false, error: "Birth Year must be an number. eg: 1984" };
  }

  if (+year > dayjs().year() || +year < 0) {
    return {
      valid: false,
      error: "Birth Year shouldn't negative or in the future",
    };
  }
  return { valid: true, error: "" };
};
