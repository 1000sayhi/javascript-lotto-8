import { Console } from "@woowacourse/mission-utils";
import { readAmount } from "./io/ReadAmount.js";
class App {
  async run() {
    const amount = await readAmount();
    const lottoCount = amount;
    Console.print(`구입한 로또 개수: ${lottoCount}개`);
  }
}

export default App;
