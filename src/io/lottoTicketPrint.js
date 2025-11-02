import { Console } from "@woowacourse/mission-utils";

export function lottoTicketPrint(tickets) {
  tickets.forEach((ticket) => {
    const numbers = ticket.getNumbers();
    Console.print(`[${numbers.join(", ")}]`);
  });
}