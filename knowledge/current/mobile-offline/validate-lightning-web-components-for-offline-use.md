---
title: "Validate Lightning Web Components for Offline Use"
domain: mobile-offline
topic: validate-lightning-web-components-for-offline-use
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:56.611Z
estimatedTokens: 547
keywords: [Validate, Lightning, Web, Components, Offline, Komaci, Analyzer, short, component, development, helps, ensure, code, dependencies, data]
---

# Validate Lightning Web Components for Offline Use

> Use the Komaci Static Analyzer (or static analyzer for short) during component
  development to validate your Lightning web components for offline use. Using the static analyzer
  helps you ensure that code dependencies and data your component depends on can be primed when a
  network connection is available, making the component and its data available offline when the
  network has limited or no connectivity.

# Validate Lightning Web Components for Offline Use

Use the Komaci Static Analyzer (or static analyzer for short) during component development to validate your Lightning web components for offline use. Using the static analyzer helps you ensure that code dependencies and data your component depends on can be primed when a network connection is available, making the component and its data available offline when the network has limited or no connectivity.

-   **[Install the Komaci Static Analyzer](atlas.en-us.mobile_offline.meta/mobile_offline/dx_validate_lwc_offline_installation.htm)**
    The Komaci static analyser is an ESLint plugin that you install using a package manager, such as NPM or Yarn.
-   **[Troubleshoot Installation Problems](atlas.en-us.mobile_offline.meta/mobile_offline/dx_validate_lwc_offline_installation_troubleshooting.htm)**
    The Komaci Static Analyzer is implemented as a plugin for ESLint, a well-known JavaScript validation tool. ESLint plugins can be finicky in their installation and configuration, requiring that all pieces are perfectly aligned for success.
-   **[Validate Components During Development](atlas.en-us.mobile_offline.meta/mobile_offline/dx_validate_lwc_offline_usage.htm)**
    To ensure your components can be used in offline environments, watch for and act on the recommendations of the static analyzer.
-   **[Static Analyzer Validation Rules](atlas.en-us.mobile_offline.meta/mobile_offline/dx_validate_lwc_offline_rules.htm)**
    The static analyzer validates that various code constructs and references in Lightning web components, such as wire decorators and server calls, support offline priming. The majority of the rules focus on determining whether all code dependencies, such as imports and modules, can be resolved; or on correct usage of offline-compatible wire adapters.
-   **[Install ESLint Rules for Mobile Lightning Web Components](atlas.en-us.mobile_offline.meta/mobile_offline/dx_eslint_rules_install.htm)**
    We’ve created ESLint rules to help you develop code that works with mobile and offline Lightning web components. You can install them on your development machine and run them on your source code.

## Related Topics

- Install the Komaci Static Analyzer (atlas.en-us.mobile_offline.meta/mobile_offline/dx_validate_lwc_offline_installation.htm)
- Troubleshoot Installation Problems (atlas.en-us.mobile_offline.meta/mobile_offline/dx_validate_lwc_offline_installation_troubleshooting.htm)
- Validate Components During Development (atlas.en-us.mobile_offline.meta/mobile_offline/dx_validate_lwc_offline_usage.htm)
- Static Analyzer Validation Rules (atlas.en-us.mobile_offline.meta/mobile_offline/dx_validate_lwc_offline_rules.htm)
- Install ESLint Rules for Mobile Lightning Web Components (atlas.en-us.mobile_offline.meta/mobile_offline/dx_eslint_rules_install.htm)
