import dayjs from "dayjs";
import { isInteger } from "lodash/fp";
import { promises as fs } from "fs";
import utc from "dayjs/plugin/utc";

export const getRemainingDraws = async (wallet?: string) => {
  if (!wallet) {
    return 0;
  }

  const content = await fs.readFile("wallet-usage.json");
  const usages = JSON.parse(content.toString());
  dayjs.extend(utc);
  const today = dayjs.utc().startOf("day").unix();
  let remaining = 3;
  if (usages[wallet] && usages[wallet][today]) {
    remaining = 3 - usages[wallet][today];
    usages[wallet][today] += 1;
  } else {
    usages[wallet] = {};
    usages[wallet][today] = 1;
  }
  await fs.writeFile("wallet-usage.json", JSON.stringify(usages));
  return remaining;
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
