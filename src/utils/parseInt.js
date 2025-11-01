export function parseInt(val) {
  const s = String(val ?? "").trim();

  if (s.length === 0) throw new Error("[ERROR] 값이 비어 있습니다.");
  if (!/^-?\d+$/.test(s)) throw new Error("[ERROR] 정수만 입력할 수 있습니다.");
  return Number(s);
}