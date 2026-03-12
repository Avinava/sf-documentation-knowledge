---
title: "SBQQ.Product Search Plugin - Product Search Example Implementation"
domain: cpq-dev-api
topic: sbqqproduct-search-plugin---product-search-example-implementation
apiVersion: 67.0
release: summer-26-v67
docType: example
lastCollected: 2026-03-12T09:34:23.562Z
estimatedTokens: 39
keywords: [SBQQ.Product, Search, Plugin, Product, Implementation, SBQQ.ProductSearchPlugin]
---

# SBQQ.Product Search Plugin - Product Search Example Implementation

> This is an example implementation of the SBQQ.ProductSearchPlugin interface.

# SBQQ.Product Search Plugin - Product Search Example Implementation

This is an example implementation of the SBQQ.ProductSearchPlugin interface.

```

```

## Code Examples

```apex
global class ExampleProductSearchPlugin implements SBQQ.ProductSearchPlugin{

/**Constructor. Not required for implementation**/
global ExampleProductSearchPlugin(){
}

/**Product Search Methods**/
// if isSearchCustom returns True, the plugin uses search(), otherwise it uses getAdditionalSearchFilters()
global Boolean isSearchCustom(SObject quote, Map<String,Object> fieldValuesMap){ return true; }
global Boolean isFilterHidden(SObject quote, String fieldName){ return false; }
global String getFilterDefaultValue(SObject quote, String fieldName){ return NULL; }
global String getAdditionalSearchFilters(SObject quote, Map<String,Object> fieldValuesMap){ return NULL; }
global List<PricebookEntry> search(SObject quote, Map<String,Object> fieldValuesMap){ return NULL; }
```
