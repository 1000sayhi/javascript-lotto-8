import { Console } from "@woowacourse/mission-utils";
import { readAmount } from "./io/ReadAmount.js";
import { generateLottos } from "./model/LottoGenerator.js";
import { lottoTicketPrint } from "./io/lottoTicketPrint.js";
import { readWinningNumbs } from "./io/readWinningNumbs.js";
import { readBonusNumb } from "./io/readBonusNumb.js";
import { printResults } from "./io/printResults.js";
import { calculateProfitRate, calculateResults } from "./model/LottoResultsCal.js";

class App {
  async run() {
    const amount = await readAmount();
    const lottoCount = amount / 1000;
    Console.print(`\n${lottoCount}개를 구매했습니다.`);
    const tickets = generateLottos(lottoCount);
    lottoTicketPrint(tickets);

    const winningNumbers = await readWinningNumbs();
    const bonusNumber = await readBonusNumb(winningNumbers);

    const resultCount = calculateResults(tickets, winningNumbers, bonusNumber);
    const profitRate = calculateProfitRate(resultCount, amount);

    printResults(resultCount, profitRate);
    
  }
}

export default App;
