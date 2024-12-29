import * as os from "node:os";
import * as emoji from "npm:node-emoji";

export function add(a: number, b: number): number {
  return a + b;
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("Add 2 + 3 =", add(2, 3));
  console.log("Number of CPUs:", os.cpus().length);
  console.log(emoji.emojify(`:sauropod: :heart:  npm`));
}
