import * as crypto from "crypto";

const input = "yzbqklnj";

const calculate = (input: string, n: number) => {
  let i = 0;
  const target = Array.from<string>({length: n}).reduce(acc => `${acc}0`, "");

  while (true) {
    let hash = crypto.createHash('md5').update(`${input}${i}`).digest('hex');

    if (hash.startsWith(target)) {
      break;
    }

    i++;
  }

  return i;
};

console.log(calculate(input, 5));
console.log(calculate(input, 6));