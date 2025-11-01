export function validateAmount(amount) {
  if (!Number.isInteger(amount)) throw new Error("[ERROR] 구입 금액은 정수여야 합니다.");
  if (amount <= 0) throw new Error("[ERROR] 구입 금액은 양의 정수여야 합니다.");
  
  if (amount % 1000 !== 0) {
    throw new Error("[ERROR] 구입 금액은 1,000원 단위여야 합니다.");
  }
}
