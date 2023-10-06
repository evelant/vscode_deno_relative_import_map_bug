See `deno/main.ts`
Deno vscode extension fails to resolve relative imports from import_map.json

```
Relative import path "app/index.ts" not prefixed with / or ./ or ../ at file:///Users/imagio/dev/vscode_deno_bug/deno/main.ts:1:21
```

Deno has no problem running the code, this is a bug in the vscode_deno extension.
