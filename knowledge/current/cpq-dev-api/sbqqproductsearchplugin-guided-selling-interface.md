---
title: "SBQQ.ProductSearchPlugin - Guided Selling Interface"
domain: cpq-dev-api
topic: sbqqproductsearchplugin---guided-selling-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.535Z
estimatedTokens: 567
namespace: SBQQ
keywords: [SBQQ.ProductSearchPlugin, Guided, Selling, implemented, further, filter, prompt, Usage, Order, Execution]
---

# SBQQ.ProductSearchPlugin - Guided Selling Interface

> Use implemented SBQQ.ProductSearchPlugin methods to further filter a
      prompt on the Guided Selling UI.

**Namespace:** `SBQQ`

# SBQQ.ProductSearchPlugin - Guided Selling Interface

Use implemented SBQQ.ProductSearchPlugin methods to further filter a prompt on the Guided Selling UI.

## Namespace

SBQQ

## Usage

You can configure the Product Search plugin to filter a guided selling prompt based on certain parameters when users enter a value. For example, in a guided selling prompt, you could configure the plugin to return all search results in descending order from the most recent Last Ordered Date. When the user chooses their input, the products returned in the search results are shown starting from the most recent Last Ordered Date field value.

Product search plugins can use only a subset of CPQ quote fields by default. If you can't pass a field to your guided selling input, or if it passes as null, you must retrieve it with a SOQL query.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=cpq_dev_api)

#### Note

Date fields are returned as strings in the format yyyy-mm-dd.

## Order of Execution

For a Guided Selling prompt, Salesforce CPQ executes the implemented SBQQ.ProductSearchPlugin methods in the following order.

```

```

1.  The constructor can be called first, but it’s not required.
2.  Salesforce CPQ calls the following two methods for each guided selling input.
    -   isInputHidden: Determines whether to hide the guided selling input from the guided selling prompt
    -   getInputDefaultValue: Sets the field value for the initial input
3.  Salesforce CPQ calls isSuggestCustom to determine whether you’re using custom or enhanced searching.
4.  If isInputCustom returned TRUE, Salesforce CPQ calls suggest. This method gives you full control of the search query - you’ll build the SELECT Clause and WHERE Clause manually, then build and perform the query.
5.  If isInputCustom returned FALSE, Salesforce CPQ calls getAdditionalSuggestFilters. This method appends a WHERE clause to the existing SOQL query.

-   **[SBQQ.ProductSearchPlugin GuidedSelling Methods](atlas.en-us.cpq_dev_api.meta/cpq_dev_api/cpq_ProductSearchPlugin_GuidedSelling_methods.htm)**

-   **[SBQQ.ProductSearchPlugin - Guided Selling Example Implementation](atlas.en-us.cpq_dev_api.meta/cpq_dev_api/cpq_ProductSearchPlugin_GuidedSelling_Example.htm)**

## Code Examples

```
//**The constructor is optional**//
* 1.0 Constructor()
 * 2.0 FOREACH(Search Field){
 * 		2.1 isInputHidden()
 * 		2.1 getInputDefaultValue()
 * }
 * 3.0 isSuggestCustom (CUSTOM vs ENHANCED)
 * IF(isCustom){
 *		4.0 suggest()
 * }
 * ELSE{
 * 		4.0 getAdditionalSuggestFilters()
 * }
```

## Related Topics

- SBQQ.ProductSearchPlugin GuidedSelling Methods (atlas.en-us.cpq_dev_api.meta/cpq_dev_api/cpq_ProductSearchPlugin_GuidedSelling_methods.htm)
- SBQQ.ProductSearchPlugin - Guided Selling Example Implementation (atlas.en-us.cpq_dev_api.meta/cpq_dev_api/cpq_ProductSearchPlugin_GuidedSelling_Example.htm)
