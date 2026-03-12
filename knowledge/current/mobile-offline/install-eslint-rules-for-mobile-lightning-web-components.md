---
title: "Install ESLint Rules for Mobile Lightning Web Components"
domain: mobile-offline
topic: install-eslint-rules-for-mobile-lightning-web-components
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:56.467Z
estimatedTokens: 538
keywords: [Install, ESLint, Rules, Mobile, Lightning, Web, Components, We’ve, created, help, develop, code, works, offline, development]
---

# Install ESLint Rules for Mobile Lightning Web Components

> We’ve created ESLint rules to help you develop code that works with mobile and offline
    Lightning web components. You can install them on your development machine and run them on your
    source code.

# Install ESLint Rules for Mobile Lightning Web Components

We’ve created ESLint rules to help you develop code that works with mobile and offline Lightning web components. You can install them on your development machine and run them on your source code.

The ESLint rules flag violations for:

-   Apex usage
-   Offline GraphQL feature limitations
-   Offline GraphQL hard limits

The ESLint rules are documented in the [ESLint Plugin LWC Mobile GitHub repository](https://github.com/salesforce/eslint-plugin-lwc-mobile/tree/main/src/rules "HTML (New Window)").

The ESLint rules are a plugin that you install using a package manager, such as NPM or Yarn.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=mobile_offline)

#### Note

Use Terminal (or your command line tool of choice) to run all commands from **the root directory** of your Lightning web components project.

1.  Install the node project dependencies.

    **NPM**

    ```

    ```

    **YARN**

    ```

    ```

2.  The default configurations use the flat config format, which is compatible with ESLint 9 and later. To integrate recommendedConfigs into your flat configuration, you should spread this collection of preset configurations into your configuration array.

    **eslint.config.js**

    ```

    ```

    **eslint.config.mjs**

    ```

    ```

    **ESLint 8 and earlier (Legacy Config)**

    Configurations for legacy ESLint now use extensions with the \-legacy suffix. For instance, to enable static analysis on all .js files within your Lightning Web Components using the eslint-plugin-lwc-mobile plugin, extend the plugin:@salesforce/lwc-mobile/recommended-legacy ESLint configuration within your .eslintrc.json file.

    ```

    ```


-   **[Use ESLint Rules in Visual Studio Code](atlas.en-us.mobile_offline.meta/mobile_offline/dx_eslint_rules_vscode.htm)**
    The ESLint rules for warnings against Lightning web components are displayed in Visual Studio (VS) Code where your code violates them. The rules map to distortions that affect your code. The popup for a rule violation includes a link to documentation for the rule.

## Code Examples

```
npm install --save-dev @salesforce/eslint-plugin-lwc-mobile
```

```
yarn add --dev @salesforce/eslint-plugin-lwc-mobile
```

```
// eslint.config.js
const { defineConfig } = require("eslint/config");
const lwcMobilePlugin = require("@salesforce/eslint-plugin-lwc-mobile");

module.exports = defineConfig([
    {
        plugins: {
            "@salesforce/lwc-mobile": lwcMobilePlugin,
        },
        extends: [...lwcMobilePlugin.recommendedConfigs],
    },
]);
```

```
// eslint.config.mjs
import js from '@eslint/js';
import lwcMobilePlugin from "@salesforce/eslint-plugin-lwc-mobile";

export default [
    { plugins: { "@salesforce/lwc-mobile": lwcMobilePlugin } },
    js.configs.recommended,
    ...lwcMobilePlugin.recommendedConfigs,
];
```

```
{
    "extends": ["eslint:recommended", "plugin:@salesforce/lwc-mobile/recommended-legacy"]
}
```

## Related Topics

- Use ESLint Rules in Visual Studio Code (atlas.en-us.mobile_offline.meta/mobile_offline/dx_eslint_rules_vscode.htm)
