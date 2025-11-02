import { Console } from "@woowacourse/mission-utils";
import { parseCSVNumbs } from "../utils/parseCSVNumbs.js";
import { printError } from "./printError.js";
import Lotto from "../Lotto.js";

export async function readWinningNumbs() {
  while (true) {
    try {
      Console.print("\n당첨 번호를 입력해 주세요.");
      const line = await Console.readLineAsync("");
      const numbers = parseCSVNumbs(line, 6);

      const lotto = new Lotto(numbers);
      return lotto.getNumbers();
    } catch (error) {
      printError(error);
      
    }
  }
}