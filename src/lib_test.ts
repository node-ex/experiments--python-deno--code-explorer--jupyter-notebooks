import { assertEquals } from "jsr:@std/assert";
import { add } from "./lib.ts";

Deno.test(function addTest() {
  assertEquals(add(2, 3), 5);
});
