---
title: "SBQQ.ProductSearchPlugin - Guided Selling Example Implementation"
domain: cpq-dev-api
topic: sbqqproductsearchplugin---guided-selling-example-implementation
apiVersion: 67.0
release: summer-26-v67
docType: example
lastCollected: 2026-03-12T09:34:23.540Z
estimatedTokens: 43
keywords: [SBQQ.ProductSearchPlugin, Guided, Selling, Implementation]
---

# SBQQ.ProductSearchPlugin - Guided Selling Example Implementation

> This is an example implementation of the System.ProductSearchPlugin_GuidedSelling interface.

# SBQQ.ProductSearchPlugin - Guided Selling Example Implementation

This is an example implementation of the System.ProductSearchPlugin\_GuidedSelling interface.

```

```

## Code Examples

```apex
global class ExampleProductSearchPlugin implements SBQQ.ProductSearchPlugin{

/**Constructor. Not required for implementation**/
global ExampleProductSearchPlugin(){
}

/**Guided Selling Methods**/
// if isSuggestCustom returns True, the plugin uses suggest(), otherwise it uses getAdditionalSuggestFilters()
global Boolean isSuggestCustom(SObject quote, Map<String,Object> inputValuesMap){ return true; }
global Boolean isInputHidden(SObject quote, String input){ return false; }
global String getInputDefaultValue(SObject quote, String input){ return NULL; }
global List<PriceBookEntry> suggest(SObject quote, Map<String,Object> fieldValuesMap){ return null; }
global String getAdditionalSuggestFilters(SObject quote, Map<String,Object> inputValuesMap){ return null; }
```
