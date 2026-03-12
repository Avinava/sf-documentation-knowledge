---
title: "Product Search Plugin - Product Search Interface"
domain: cpq-plugins
topic: product-search-plugin---product-search-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.877Z
estimatedTokens: 572
namespace: SBQQ
keywords: [Product, Search, Plugin, implemented, SBQQ.ProductSearchPlugin, further, filter, users, enter, their, own, queries, Usage, Order, Execution]
---

# Product Search Plugin - Product Search Interface

> Use implemented SBQQ.ProductSearchPlugin methods to further filter a
      product search on the Product Search page after users enter their own search
    queries.

**Namespace:** `SBQQ`

# Product Search Plugin - Product Search Interface

Use implemented SBQQ.ProductSearchPlugin methods to further filter a product search on the Product Search page after users enter their own search queries.

## Namespace

SBQQ

## Usage

For example, in Product Search, you could configure the plugin to return all search results in descending order from the most recent Last Ordered Date. If a sales rep enters "Tablets," the search results show tablets starting from the most recent Last Ordered Date field value. Users can then further filter through the Product Search filter panel, if necessary.

Product search plugins can use only a subset of CPQ quote fields by default. If you can't pass a field to your product search, or if it passes as null, you must instead pull it with a SOQL query using the ID passed with the quote model.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=cpq_plugins)

#### Note

Date fields are returned as strings in the yyyy-mm-dd format.

## Method Order of Execution

Salesforce CPQ uses the following order to execute the SBQQ.ProductSearchPlugin implemented methods for a Product Search.

```

```

1.  The Constructor can be called first, but it’s not required for implementation.
2.  Salesforce CPQ calls the following two methods for each search input.
    -   isFilterHidden: Determines whether to hide the search input from the quote line editor
    -   getFilterDefaultValue: Sets the field value for the initial search
3.  Salesforce CPQ calls isSearchCustom to determine whether you’re using Custom or Enhanced searching.
4.  If isSearchCustom returned True, Salesforce CPQ calls search(). This method gives you full control of the search query - you’ll build the Select Clause and Where Clause manually, then build and perform the query.
5.  If isSearchCustom returned False, Salesforce CPQ calls getAdditionalSearchFilters. This method appends a WHERE clause to the existing SOQL query.

-   **[SBQQ.ProductSearchPlugin Product Search Methods](atlas.en-us.cpq_plugins.meta/cpq_plugins/cpq_ProductSearchPlugin_ProductSearch_methods.htm)**

-   **[SBQQ.Product Search Plugin - Product Search Example Implementation](atlas.en-us.cpq_plugins.meta/cpq_plugins/cpq_ProductSearchPlugin_ProductSearch_Example.htm)**

## Code Examples

```
//**The constructor is optional**//
* 1.0 Constructor()
 * 2.0 FOREACH(Search Field){
 * 		2.1 isFilterHidden()
 * 		2.1 getFilterDefaultValue()
 * }
 * 3.0 isSearchCustom (CUSTOM vs ENHANCED)
 * IF(isCustom){
 *		4.0 search()
 * }
 * ELSE{
 * 		4.0 getAdditionalSearchFilters()
 * }
```

## Related Topics

- SBQQ.ProductSearchPlugin Product Search Methods (atlas.en-us.cpq_plugins.meta/cpq_plugins/cpq_ProductSearchPlugin_ProductSearch_methods.htm)
- SBQQ.Product Search Plugin - Product Search Example Implementation (atlas.en-us.cpq_plugins.meta/cpq_plugins/cpq_ProductSearchPlugin_ProductSearch_Example.htm)
