class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (!Array.isArray(numbers)) {
      throw new Error("[ERROR] 로또 번호는 배열이어야 합니다.");
    }

    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    const unique = new Set(numbers);
    if (unique.size !== 6) {
      throw new Error("[ERROR] 로또 번호에는 중복이 없어야 합니다.");
    }

    if (!numbers.every((n) => Number.isInteger(n) && n >= 1 && n <= 45)) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 정수여야 합니다.");
    }
  }

  getNumbers() {
    return [...this.#numbers]; // 외부에서 배열을 직접 수정하지 못하도록 복사본 반환
  }
}

export default Lotto;
