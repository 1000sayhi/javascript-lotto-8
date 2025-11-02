export function validateBonusNumb(bonus, winningSet) {
  if (!Number.isInteger(bonus)) {
    throw new Error("[ERROR] 보너스 번호는 정수여야 합니다.");
  }
  if (bonus < 1 || bonus > 45) {
    throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
  }
  if (winningSet.has(bonus)) {
    throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
  }
}