import { Random } from "@woowacourse/mission-utils";
import Lotto from "../Lotto.js";

export function generateLottos(lottoCount) {
  const tickets = [];

  for (let i = 0; i < lottoCount; i++) {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    const sorted = numbers.sort((a, b) => a - b);
    tickets.push(new Lotto(sorted));
  }

  return tickets;
}
