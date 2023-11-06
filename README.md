# eslint-config-optisol-typescript

Optisol's typescript ESLint config.

## Installation


``` json
"postinstall": "cp node_modules/eslint-config-optisol-typescript/tsconfig.eslint.json $INIT_CWD"
```

Before installing this package, you need to add this postinstall script to add the tsconfig.eslint.json file to the root of your project:


```sh
npm install eslint-config-optisol-typescript eslint prettier --D
```

## Usage

After installing, update your project's `.eslintrc<.js|json>` file to import the rule sets you want:

```js
{
  "extends" : [
    "eslint-config-optisol-typescript"
  ]
}
```

---

Read the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.
