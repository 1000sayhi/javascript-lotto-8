import { Console } from "@woowacourse/mission-utils";
import { parseCSVNumbs } from "../utils/parseCSVNumbs.js";
import { printError } from "./printError.js";

export async function readWinningNumbs() {
  while (true) {
    try {
      Console.print("\n당첨 번호를 입력해 주세요.");
      const line = await Console.readLineAsync("");
      const numbers = parseCSVNumbs(line, 6);
      return numbers;
    } catch (error) {
      printError(error);
    }
  }
}