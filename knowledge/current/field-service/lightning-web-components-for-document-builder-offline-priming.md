---
title: "Lightning Web Components for Document Builder: Offline Priming"
domain: field-service
topic: lightning-web-components-for-document-builder-offline-priming
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:55.499Z
estimatedTokens: 624
keywords: [Lightning, Web, Components, Document, Builder, Offline, Priming, Ensure, custom, web, components, LWCs, work, mobile, workers, offline., Install, Komaci, ESLint, Visual]
---

# Lightning Web Components for Document Builder: Offline Priming

> Ensure that your custom Lightning web components (LWCs) for Document Builder work when
  your mobile workers are offline.

# Lightning Web Components for Document Builder: Offline Priming

Ensure that your custom Lightning web components (LWCs) for Document Builder work when your mobile workers are offline.

To ensure that your custom components have offline support, install the Komaci VS Code Plug-in. With the plug-in, you can analyze and identify which of your custom LWC components mobile workers can use offline. Without the plug-in, you can’t tell whether a component works while a mobile device is offline. When a component can be used offline, mobile workers can still capture data, even when they don’t have access to a network. Before the user goes offline, we cache the data required to make the component functional. Then, when the user has wireless access again, we sync the data that’s captured while mobile devices are offline.

## Install the Komaci ESLint Visual Studio Code (VS Code) Plug-in

We suggest that you use VS Code. If you’re using VS Code, install the ESLint VS Code plug-in, and then press CTRL+SHIFT+P to open the command palette to ESLint: Restart ESLint Server. Then, in the bottom output tab (with ESLint) selected, you can debug it.

You can also run yarn lint:lwc inside VS Code’s terminal.

If you’re not using VS Code, check out the [public repository](https://github.com/salesforce/eslint-plugin-lwc-graph-analyzer) of the ESLint Komaci Plug-in that can configure your tool.

If you want a deep dive, check out [npm](https://www.npmjs.com/package/@salesforce/eslint-plugin-lwc-graph-analyzer) for information about the plug-in, including code. But if you’re ready to implement the code you can use either of these commands.

-   Command 1: yarn add --dev @salesforce/eslint-plugin-lwc-graph-analyzer
-   Command 2: npm install —save-dev @salesforce/eslint-plugin-lwc-graph-analyzer

After you input the code, check your project directory and update the .eslintrc file to reference our recommended configuration.

The Komaci engine is fully portable to any JavaScript runtime environment and has no dependencies on web-based technologies or APIs, such as the DOM. You can use Komaci as an independent data fetching service for LWC applications. The engine can analyze LWC modules and prefetch their respective data dependencies in a host environment outside of a runtime window, such as a [Web Worker](https://developer.mozilla.org/en-US/docs/Web/API/Worker), [JavaScriptCore](https://developer.apple.com/documentation/javascriptcore), or [V8](https://v8.dev/) host environment.
