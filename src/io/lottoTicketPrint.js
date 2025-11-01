export function lottoTicketPrint(tickets) {
  tickets.forEach((ticket) => {
    const numbers = ticket.getNumbers();
    console.log(`[${numbers.join(", ")}]`);
  });
  console.log('\n');
}