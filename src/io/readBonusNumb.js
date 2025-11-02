import { Console } from "@woowacourse/mission-utils";
import { validateBonusNumb } from "../utils/validateBonusNumb.js";
import { parseInt } from "../utils/parseInt.js";
import { printError } from "./printError.js";

export async function readBonusNumb(winningNumbers) {
  const winSet = new Set(winningNumbers);

  while (true) {
    try {
      Console.print("\n보너스 번호를 입력해 주세요.");
      const line = await Console.readLineAsync("");
      const bonus = parseInt(line);
      validateBonusNumb(bonus, winSet);
      return bonus;
    } catch (error) {
      printError(error);
    }
  }
}