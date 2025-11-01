import { Console } from "@woowacourse/mission-utils";

export function printError(error) {
  const msg = error?.message ?? "[ERROR] 알 수 없는 오류가 발생했습니다.";
  if (String(msg).startsWith("[ERROR]")) {
    Console.print(msg);
    return;
  }
  Console.print(`[ERROR] ${msg}`);
}
