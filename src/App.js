import { Console } from "@woowacourse/mission-utils";
import { readAmount } from "./io/ReadAmount.js";
import { generateLottos } from "./model/LottoGenerator.js";
import { lottoTicketPrint } from "./io/lottoTicketPrint.js";
import Lotto from "./Lotto.js";
import { readWinningNumbs } from "./io/readWinningNumbs.js";
import { readBonusNumb } from "./io/readBonusNumb.js";

class App {
  async run() {
    const amount = await readAmount();
    const lottoCount = amount;
    Console.print(`\n${lottoCount}개를 구매했습니다.`);
    const tickets = generateLottos(lottoCount);
    lottoTicketPrint(tickets);

    const winningNumbers = await readWinningNumbs();
    const lotto = new Lotto(winningNumbers);
    const bonusNumber = await readBonusNumb(winningNumbers);

    Console.print("\n입력 결과");
    Console.print(`당첨 번호: [${lotto.getNumbers().join(", ")}]`);
    Console.print(`보너스 번호: ${bonusNumber}`);
  }
}

export default App;
