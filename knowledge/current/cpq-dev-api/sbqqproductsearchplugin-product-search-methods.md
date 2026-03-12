---
title: "SBQQ.ProductSearchPlugin Product Search Methods"
domain: cpq-dev-api
topic: sbqqproductsearchplugin-product-search-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.576Z
estimatedTokens: 419
keywords: [SBQQ.ProductSearchPlugin, Product, Search, implementation]
---

# SBQQ.ProductSearchPlugin Product Search Methods

> The following are methods for a Product Search implementation of SBQQ.ProductSearchPlugin.

# SBQQ.ProductSearchPlugin Product Search Methods

The following are methods for a Product Search implementation of SBQQ.ProductSearchPlugin.

-   **[getAdditionalSearchFilters(quote, fieldValuesMap)](atlas.en-us.cpq_dev_api.meta/cpq_dev_api/cpq_ProductSearchPlugin_ProductSearch_getAdditionalSearchFilters.htm)**
    Appends a WHERE clause to the SOQL query used for the product search, so that you can further refine a user's search input. Salesforce CPQ calls this method only when isSearchCustom returns FALSE.
-   **[getFilterDefaultValue(quote, fieldName)](atlas.en-us.cpq_dev_api.meta/cpq_dev_api/cpq_ProductSearchPlugin_ProductSearch_getFilterDefaultValue.htm)**
    Determines the value for the initial search. Salesforce CPQ calls this implemented method for each input field.
-   **[isFilterHidden(quote, fieldName)](atlas.en-us.cpq_dev_api.meta/cpq_dev_api/cpq_ProductSearchPlugin_ProductSearch_isFilterHidden.htm)**
    Determines the visibility of a filter in the UI. Return True to hide the filter and False to let users see the filter. Salesforce CPQ calls this implemented method for each search input field.
-   **[isSearchCustom(quote, fieldValuesMap)](atlas.en-us.cpq_dev_api.meta/cpq_dev_api/cpq_ProductSearchPlugin_ProductSearch_isSearchCustom.htm)**
    Called after isFilterHidden and getFilterDefaulValue. Returns True if the plugin uses custom searching or False if the plugin uses enhanced searching.
-   **[search(quote, fieldValuesMap)](atlas.en-us.cpq_dev_api.meta/cpq_dev_api/cpq_ProductSearchPlugin_ProductSearch_search.htm)**
    Overrides the entire user search input. Salesforce CPQ calls this method only when isSearchCustom returns TRUE.

## Related Topics

- getAdditionalSearchFilters(quote, fieldValuesMap) (atlas.en-us.cpq_dev_api.meta/cpq_dev_api/cpq_ProductSearchPlugin_ProductSearch_getAdditionalSearchFilters.htm)
- getFilterDefaultValue(quote, fieldName) (atlas.en-us.cpq_dev_api.meta/cpq_dev_api/cpq_ProductSearchPlugin_ProductSearch_getFilterDefaultValue.htm)
- isFilterHidden(quote, fieldName) (atlas.en-us.cpq_dev_api.meta/cpq_dev_api/cpq_ProductSearchPlugin_ProductSearch_isFilterHidden.htm)
- isSearchCustom(quote, fieldValuesMap) (atlas.en-us.cpq_dev_api.meta/cpq_dev_api/cpq_ProductSearchPlugin_ProductSearch_isSearchCustom.htm)
- search(quote, fieldValuesMap) (atlas.en-us.cpq_dev_api.meta/cpq_dev_api/cpq_ProductSearchPlugin_ProductSearch_search.htm)
