import { Console } from "@woowacourse/mission-utils";
import { parseInt } from "../utils/ParseInt.js";
import { validateAmount } from "../utils/validateAmount.js";
import { printError } from "./printError.js";

export async function readAmount() {
  while (true) {
    try {
      Console.print("구입금액을 입력해 주세요.");
      const lineAmountInput = await Console.readLineAsync("");
      const amount = parseInt(lineAmountInput);
      validateAmount(amount);
      const lottoCount = amount / 1000;
      return lottoCount;
    } catch (error) {
      printError(error);
    }
  }
}
