---
title: "Install the Komaci Static Analyzer"
domain: mobile-offline
topic: install-the-komaci-static-analyzer
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:56.616Z
estimatedTokens: 478
keywords: [Install, Komaci, Analyzer, analyser, ESLint, plugin, package, manager, NPM, Yarn]
---

# Install the Komaci Static Analyzer

> The Komaci static analyser is an ESLint plugin that you install using a package manager,
  such as NPM or Yarn.

# Install the Komaci Static Analyzer

The Komaci static analyser is an ESLint plugin that you install using a package manager, such as NPM or Yarn.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=mobile_offline)

#### Note

Use Terminal (or your command line tool of choice) to run all commands from **the root directory** of your Lightning web components project.

1.  Add the Komaci Static Analyzer plugin and its dependencies to the development dependencies of your project.

    **NPM**

    ```

    ```

    **YARN**

    ```

    ```

2.  Install all project modules and dependencies locally in the project.

    **NPM**

    ```

    ```

    **YARN**

    ```

    ```

3.  Configure your project to use the new plugin.

    Configuration depends on your ESLint version. Add your configuration at the root directory of your LWC "tree", which by default resides at force-app/main/default/lwc/.

    **ESLint 9 and later (Flat Config)**

    Use the recommended config in your eslint.config.js and eslint.config.mjs file.

    **eslint.config.js**

    ```

    ```

    **eslint.config.mjs**

    ```

    ```

    **ESLint 8 and earlier (Legacy Config)**

    The configurations for legacy ESLint are now found in extensions with the \-legacy suffix. An example of this is the following .eslintrc.json file, which sets up the eslint-plugin-lwc-graph-analyzer plugin using the recommended-legacy configuration:

    ```

    ```

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=mobile_offline)

    #### Note

    If you have an .eslintignore configuration in your project, do **not** add an entry to ignore HTML files. This causes the plugin to skip linting on LWC bundles that include HTML templates. There are a number of Komaci-based static analysis rules that apply specifically to the HTML template of a Lightning web component bundle.

## Code Examples

```
npm install --save-dev @salesforce/eslint-plugin-lwc-graph-analyzer
```

```
yarn add --dev @salesforce/eslint-plugin-lwc-graph-analyzer
```

```
npm install
```

```
yarn install
```

```
// eslint.config.js
                        const { defineConfig } = require("eslint/config");
                        const lwcGraphAnalyzerPlugin = require("@salesforce/eslint-plugin-lwc-graph-analyzer");
                        
                        module.exports = defineConfig([
                        {
                        plugins: {
                        "@salesforce/lwc-graph-analyzer": lwcGraphAnalyzerPlugin,
                        },
                        extends: [lwcGraphAnalyzerPlugin.configs.recommended],
                        },
                        ]);
```
