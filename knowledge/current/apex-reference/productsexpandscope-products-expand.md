---
title: "productsExpand(scope, products, expand)"
domain: apex-reference
topic: productsexpandscope-products-expand
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:18.545Z
estimatedTokens: 395
keywords: [productsExpand, scope, products, expand, Fetches, expanded, details, product, aren’t, found, sObject., variable, fields, such, reasons, added, output., supports, extensibility, framework]
---

# productsExpand(scope, products, expand)

> Fetches expanded details of a product that aren’t found in the sObject. The expanded
    variable fields, such as return reasons, are added as output.
    This
    method supports an extensibility framework that lets the context user override the existing
    implementation so they can fetch the data from third-party apps. The application doesn’t require
    two separate APIs to get return reasons.

# productsExpand(scope, products, expand)

Fetches expanded details of a product that aren’t found in the sObject. The expanded variable fields, such as return reasons, are added as output. This method supports an extensibility framework that lets the context user override the existing implementation so they can fetch the data from third-party apps. The application doesn’t require two separate APIs to get return reasons.

## API Version

59.0

## Requires Chatter

No

## Signature

public static ConnectApi.ProductsListOutputRepresentation productsExpand(String scope, List<String\> products, List<ConnectApi.ProductExpandType> expand)

## Parameters

scope

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The scope for the extensibility framework. Requires a web store ID.

products

Type: List )[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."))

A list of IDs to fetch details for.

expand

Type: List )[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."))

Output representation for expand feature.

## Return Value

Type: [ConnectApi.ProductsListOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_list.htm "Output representation of products with product data along with expand details.")

## Example

```

```

## Code Examples

```
String scope = 'webstoreId eq ' + ws.Id;
        ConnectApi.ProductsListOutputRepresentation output = ConnectApi.OMSAnalytics.productsExpand(scope, productIds, new List <ConnectApi.ProductExpandType> {
        ConnectApi.ProductExpandType.ReturnReasons
        });
```

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.ProductsListOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_list.htm)
