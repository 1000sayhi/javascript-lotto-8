import { parseInt } from "./parseInt.js";

export function parseCSVNumbs(text, expected = 6) {
  if (typeof text !== "string") {
    throw new Error("[ERROR] 입력값이 문자열이 아닙니다.");
  }

  
  const parts = text.split(",").map((x) => x.trim());


  if (parts.length !== expected) {
    throw new Error(`[ERROR] 로또 번호는 ${expected}개여야 합니다.`);
  }

  const numbers = parts.map((p) => parseInt(p));

  return numbers;
}