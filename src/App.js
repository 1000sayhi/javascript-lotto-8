import { Console } from "@woowacourse/mission-utils";
import { readAmount } from "./io/ReadAmount.js";
import { generateLottos } from "./model/LottoGenerator.js";
import { lottoTicketPrint } from "./io/lottoTicketPrint.js";

class App {
  async run() {
    const amount = await readAmount();
    const lottoCount = amount;
    Console.print(`\n${lottoCount}개를 구매했습니다.`);
    const tickets = generateLottos(lottoCount);
    lottoTicketPrint(tickets);
  }
}

export default App;
