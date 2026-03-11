---
title: "getOrderSummaries(webstoreId, effectiveAccountId,
      fields)"
domain: apex-reference
topic: getordersummarieswebstoreid-effectiveaccountid-fields
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.604Z
keywords: [getOrderSummaries, webstoreId, effectiveAccountId, fields, Get, order, summaries, specific, fields., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getOrderSummaries(webstoreId, effectiveAccountId,
      fields)

> Get order summaries with specific fields.

### getOrderSummaries(webstoreId, effectiveAccountId, fields)

Get order summaries with specific fields.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderSummaryCollectionRepresentation getOrderSummaries(String webstoreId, String effectiveAccountId, List<String\> fields)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made. If null, defaults to the account ID for the context user.

fields

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

List of up to 35 additional order summary fields to display in the UI in each item row.

These order summary fields are returned regardless of fields specified.

-   createdDate
-   orderSummaryId
-   orderNumber
-   orderedDate
-   ownerId
-   status
-   totalAmount

#### Return Value

Type: [ConnectApi.OrderSummaryCollectionRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_summary_collection.htm "Collection of order summaries.")