---
title: "SBQQ.ProductSearchPlugin GuidedSelling Methods"
domain: cpq-plugins
topic: sbqqproductsearchplugin-guidedselling-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.870Z
estimatedTokens: 394
keywords: [SBQQ.ProductSearchPlugin, GuidedSelling, guided, selling, implementation]
---

# SBQQ.ProductSearchPlugin GuidedSelling Methods

> The following are methods for a guided selling implementation of SBQQ.ProductSearchPlugin.

# SBQQ.ProductSearchPlugin GuidedSelling Methods

The following are methods for a guided selling implementation of SBQQ.ProductSearchPlugin.

-   **[getAdditionalSuggestFilters(quote, fieldValuesMap)](atlas.en-us.cpq_plugins.meta/cpq_plugins/cpq_ProductSearchPlugin_GuidedSelling_getAdditionalSuggestFilters.htm)**
    Appends a WHERE clause to the SOQL query used for a guided selling prompt. Salesforce CPQ Calls this method only when isSuggestCustom returns FALSE.
-   **[getInputDefaultValue(quote, fieldName)](atlas.en-us.cpq_plugins.meta/cpq_plugins/cpq_ProductSearchPlugin_GuidedSelling_getInputDefaultValue.htm)**
    Determines the input for the initial guided selling prompt.
-   **[isInputHidden(quote, fieldName)](atlas.en-us.cpq_plugins.meta/cpq_plugins/cpq_ProductSearchPlugin_GuidedSelling_isInputHidden.htm)**
    Determines the visibility of an input in the Guided Selling UI. Return True to hide the input and False to let users see the input. Salesforce CPQ calls this method for each input.
-   **[isSuggestCustom(quote, fieldValuesMap)](atlas.en-us.cpq_plugins.meta/cpq_plugins/cpq_ProductSearchPlugin_GuidedSelling_isSuggestCustom.htm)**
    Called after isInputHidden and getInputDefaulValue. Returns True for Salesforce CPQ to use Custom searching or False for Salesforce CPQ to use Enhanced searching.
-   **[suggest(quote, fieldValuesMap)](atlas.en-us.cpq_plugins.meta/cpq_plugins/cpq_ProductSearchPlugin_GuidedSelling_suggest.htm)**
    Overrides the user suggestion input. Salesforce CPQ calls this method only when isSuggestCustom returns TRUE.

## Related Topics

- getAdditionalSuggestFilters(quote, fieldValuesMap) (atlas.en-us.cpq_plugins.meta/cpq_plugins/cpq_ProductSearchPlugin_GuidedSelling_getAdditionalSuggestFilters.htm)
- getInputDefaultValue(quote, fieldName) (atlas.en-us.cpq_plugins.meta/cpq_plugins/cpq_ProductSearchPlugin_GuidedSelling_getInputDefaultValue.htm)
- isInputHidden(quote, fieldName) (atlas.en-us.cpq_plugins.meta/cpq_plugins/cpq_ProductSearchPlugin_GuidedSelling_isInputHidden.htm)
- isSuggestCustom(quote, fieldValuesMap) (atlas.en-us.cpq_plugins.meta/cpq_plugins/cpq_ProductSearchPlugin_GuidedSelling_isSuggestCustom.htm)
- suggest(quote, fieldValuesMap) (atlas.en-us.cpq_plugins.meta/cpq_plugins/cpq_ProductSearchPlugin_GuidedSelling_suggest.htm)
