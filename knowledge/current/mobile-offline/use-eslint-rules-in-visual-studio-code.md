---
title: "Use ESLint Rules in Visual Studio Code"
domain: mobile-offline
topic: use-eslint-rules-in-visual-studio-code
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:56.470Z
estimatedTokens: 429
keywords: [ESLint, Rules, Visual, Studio, Code, warnings, against, Lightning, web, components, violates, map, distortions, affect, popup]
---

# Use ESLint Rules in Visual Studio Code

> The ESLint rules for warnings against Lightning web components are displayed in Visual
  Studio (VS) Code where your code violates them. The rules map to distortions that affect your
  code. The popup for a rule violation includes a link to documentation for the rule.

# Use ESLint Rules in Visual Studio Code

The ESLint rules for warnings against Lightning web components are displayed in Visual Studio (VS) Code where your code violates them. The rules map to distortions that affect your code. The popup for a rule violation includes a link to documentation for the rule.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=mobile_offline)

#### Note

Salesforce recommends using Visual Studio Code with the [Salesforce Extensions for Visual Studio Code](https://developer.salesforce.com/tools/vscode "HTML (New Window)") to develop offline Lightning web components.

The ESLint rules are documented in the [ESLint Plugin LWC Mobile GitHub repository.](https://github.com/salesforce/eslint-plugin-lwc-mobile/tree/main/src/rules "HTML (New Window)")

-   [Apex usage rules](https://github.com/salesforce/eslint-plugin-lwc-mobile/tree/main/src/rules/apex "HTML (New Window)")
-   [Offline GraphQL rules](https://github.com/salesforce/eslint-plugin-lwc-mobile/tree/main/src/rules/graphql "HTML (New Window)")

Here you can see the popup for a lint rule violation.

![ESlint rule](/docs/resources/img/en-us/260.0?doc_id=images%2Fdx_eslint_rule_use.png&folder=mobile_offline)

This popup shows a lint warning, not an error.

For more information on how to use Apex and GraphQL while mobile and offline, see [Use Apex While Mobile and Offline](https://developer.salesforce.com/docs/atlas.en-us.260.0.mobile_offline.meta/mobile_offline/apex.htm "HTML (New Window)") and [Use GraphQL While Mobile and Offline](https://developer.salesforce.com/docs/atlas.en-us.260.0.mobile_offline.meta/mobile_offline/use_graphql.htm) in the Mobile and Offline Developer Guide.
