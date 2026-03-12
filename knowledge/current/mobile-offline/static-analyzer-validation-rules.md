---
title: "Static Analyzer Validation Rules"
domain: mobile-offline
topic: static-analyzer-validation-rules
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:56.622Z
estimatedTokens: 343
keywords: [Analyzer, Validation, Rules, validates, various, code, constructs, references, Lightning, web, components, wire, decorators, server, calls]
---

# Static Analyzer Validation Rules

> The static analyzer validates that various code constructs and references in Lightning
  web components, such as wire decorators and server calls, support offline priming. The majority of
  the rules focus on determining whether all code dependencies, such as imports and modules, can be
  resolved; or on correct usage of offline-compatible wire adapters.

# Static Analyzer Validation Rules

The static analyzer validates that various code constructs and references in Lightning web components, such as wire decorators and server calls, support offline priming. The majority of the rules focus on determining whether all code dependencies, such as imports and modules, can be resolved; or on correct usage of offline-compatible wire adapters.

Using a wire provides an efficient and mostly transparent mechanism to deliver required data for a given set of Lightning web components. Today, not all wire adapters are enabled for offline use, and even those that are must be used correctly to work while offline. Without a properly formatted wire, the number of network requests increases, components render slowly, and performance suffers.

For offline support, mobile apps at Salesforce use these wires to ensure the correct data for each record and its components are always ready to use. A wire that doesn’t align with the validation rules defined in this package can result in features implemented with Lightning web components not working correctly when offline.

For more information on wires and how to use them, see [Use the Wire Service to Get Data](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.data_wire_service "HTML (New Window)") in the Lightning Web Components Developer Guide.
