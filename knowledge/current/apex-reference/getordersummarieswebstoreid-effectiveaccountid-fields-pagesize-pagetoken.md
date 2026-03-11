---
title: "getOrderSummaries(webstoreId, effectiveAccountId, fields,
      pageSize, pageToken)"
domain: apex-reference
topic: getordersummarieswebstoreid-effectiveaccountid-fields-pagesize-pagetoken
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.604Z
keywords: [getOrderSummaries, webstoreId, effectiveAccountId, fields, pageSize, pageToken, Get, page, order, summaries, specific, fields., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getOrderSummaries(webstoreId, effectiveAccountId, fields,
      pageSize, pageToken)

> Get a page of order summaries with specific fields.

### getOrderSummaries(webstoreId, effectiveAccountId, fields, pageSize, pageToken)

Get a page of order summaries with specific fields.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderSummaryCollectionRepresentation getOrderSummaries(String webstoreId, String effectiveAccountId, List<String\> fields, Integer pageSize, String pageToken)

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

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

pageToken

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the base64 encoded page token. Page tokens are returned as part of the response. If unspecified, the first page is returned.

#### Return Value

Type: [ConnectApi.OrderSummaryCollectionRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_summary_collection.htm "Collection of order summaries.")