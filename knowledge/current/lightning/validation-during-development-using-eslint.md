---
title: "Validation During Development Using ESLint"
domain: lightning
topic: validation-during-development-using-eslint
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:50.001Z
estimatedTokens: 320
keywords: [Validation, Development, ESLint, scan, improve, code, linting, tool, doesn’t, help, avoid, Lightning, Locker, conflicts, anti-patterns]
---

# Validation During Development Using ESLint

> Use ESLint to scan and improve your code during development. A linting
      tool doesn’t just help you avoid Lightning Locker conflicts and anti-patterns. It’s a terrific
      practice for improving your code quality and consistency, and to uncover subtle bugs before
      you commit them to your codebase.

# Validation During Development Using ESLint

Use ESLint to scan and improve your code during development. A linting tool doesn’t just help you avoid Lightning Locker conflicts and anti-patterns. It’s a terrific practice for improving your code quality and consistency, and to uncover subtle bugs before you commit them to your codebase.

Validations using ESLint are done separately from saving your code to Salesforce. The results are informational only.

Salesforce DX used to include a force:lightning:lint command but the command was removed in February, 2022. Instead, we recommend the Aura plugin for ESLint for linting.

To install the Aura plugin for ESLint, see [this GitHub repo](https://github.com/forcedotcom/eslint-plugin-aura "HTML (New Window)").

Validations performed using the Aura plugin for ESLint are different from validations performed at save time in the following important ways.

-   ESLint uses many more rules to analyze your component code. Save-time validations prevent you from making the most fundamental mistakes only. Validation with ESLint errs on the side of giving you more information.
-   Validation via ESLint ignores the API version of your components. Save-time validations are performed only for components set to API 41.0 and later.
