---
title: "Validate Components During Development"
domain: mobile-offline
topic: validate-components-during-development
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:56.624Z
estimatedTokens: 331
keywords: [Validate, Components, Development, ensure, offline, environments, watch, act, recommendations, analyzer]
---

# Validate Components During Development

> To ensure your components can be used in offline environments, watch for and act on the
  recommendations of the static analyzer.

# Validate Components During Development

To ensure your components can be used in offline environments, watch for and act on the recommendations of the static analyzer.

As you develop your Lightning web components, validation indicators, displayed as colored squiggly lines, appear under code to highlight that it violates a validation rule. Red lines indicate an error, and yellow lines indicate a warning.

![Offline LWC validation error in VS Code](/docs/resources/img/en-us/260.0?doc_id=images%2Fdx_validate_vscode_validation_error.png&folder=mobile_offline)

To fix an issue, hover over the problematic code. A pop-up appears near the code, describing what the problem is and how to fix it.

![Offline LWC validation error in VS Code. Advice is displayed when you hover over the validation error.](/docs/resources/img/en-us/260.0?doc_id=images%2Fdx_validate_vscode_validation_error_advice.png&folder=mobile_offline)

-   You’ll see a description of the issue, along with the linting package that found the issue.
-   Click **View Problem** to highlight the code causing the issue, with a box underneath describing the issue and what linting package found the issue.
-   Click **Quick Fix** to show a dropdown of options of how to fix the issue. Then, select an option from the menu to automatically perform that fix.
