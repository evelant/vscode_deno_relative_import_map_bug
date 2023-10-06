/*
Deno vscode extension fails to resolve relative imports from import_map.json
Deno has no problem running the code

Relative import path "app/index.ts" not prefixed with / or ./ or ../ at file:///Users/imagio/dev/vscode_deno_bug/deno/main.ts:1:21
*/
import { foo } from "app/index.ts";
export function add(a: number, b: number): string {
  return foo;
}

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("Add 2 + 3 =", add(2, 3));
}
