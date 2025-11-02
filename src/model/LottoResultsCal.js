export function calculateResults(tickets, winningNumbers, bonusNumber) {
  const resultCount = {
    3: 0,
    4: 0,
    5: 0,
    "5b": 0,
    6: 0,
  };

  const winSet = new Set(winningNumbers);

  tickets.forEach((ticket) => {
    const nums = ticket.getNumbers();
    const matchCount = nums.filter((n) => winSet.has(n)).length;
    const hasBonus = nums.includes(bonusNumber);

    if (matchCount === 6) resultCount[6]++;
    else if (matchCount === 5 && hasBonus) resultCount["5b"]++;
    else if (matchCount === 5) resultCount[5]++;
    else if (matchCount === 4) resultCount[4]++;
    else if (matchCount === 3) resultCount[3]++;
  });

  return resultCount;
}

export function calculateProfitRate(resultCount, totalSpent) {
  let totalReward = 0;

  totalReward += resultCount[3] * 5000;
  totalReward += resultCount[4] * 50000;
  totalReward += resultCount[5] * 1500000;
  totalReward += resultCount["5b"] * 30000000;
  totalReward += resultCount[6] * 2000000000;

  const rate = (totalReward / totalSpent) * 100;
  return rate;
}
