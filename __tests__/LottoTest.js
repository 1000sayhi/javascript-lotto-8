import Lotto from "../src/Lotto";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test("에러: 범위 밖(0, 46 등) 있으면 실패", () => {
    expect(() => new Lotto([0, 2, 3, 4, 5, 6])).toThrow("[ERROR]");
    expect(() => new Lotto([1, 2, 3, 4, 5, 46])).toThrow("[ERROR]");
  });

  test("에러: 정수가 아니면 실패", () => {
    expect(() => new Lotto([1, 2, 3, 4, 5, 3.14])).toThrow("[ERROR]");
  });
  
});
