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

// return [bronze, silver]
export const getChestAirdrop = (luckScore: number): [number, number] => {
  if (luckScore >= 8) {
    return [0, 1];
  } else if (luckScore >= 4) {
    return [1, 0];
  }
  return [0, 0];
};
