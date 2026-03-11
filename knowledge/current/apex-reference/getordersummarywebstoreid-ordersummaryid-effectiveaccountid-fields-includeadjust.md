---
title: "getOrderSummary(webstoreId, orderSummaryId, effectiveAccountId, fields, includeAdjustmentDetails)"
domain: apex-reference
topic: getordersummarywebstoreid-ordersummaryid-effectiveaccountid-fields-includeadjust
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.604Z
keywords: [getOrderSummary, webstoreId, orderSummaryId, effectiveAccountId, fields, includeAdjustmentDetails, Get, order, summary, include, adjustment, details., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getOrderSummary(webstoreId, orderSummaryId, effectiveAccountId, fields, includeAdjustmentDetails)

> Get an order summary with fields and include adjustment details.

### getOrderSummary(webstoreId, orderSummaryId, effectiveAccountId, fields, includeAdjustmentDetails)

Get an order summary with fields and include adjustment details.

#### API Version

55.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderSummaryRepresentation getOrderSummary(String webstoreId, String orderSummaryId, String effectiveAccountId, List<String\> fields, Boolean includeAdjustmentDetails)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

orderSummaryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the order summary.

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

includeAdjustmentDetails

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to return adjustment details (true) or not (false). If unspecified, the default value is false.

#### Return Value

Type: [ConnectApi.OrderSummaryRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_summary.htm "Order summary.")