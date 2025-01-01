import { add } from "./lib.ts";

export class Adder {
  add(a: number, b: number): number {
    return add(a, b);
  }
}

export function add2(a: number, b: number): number {
  const adder = new Adder();
  return adder.add(a, b);
}
