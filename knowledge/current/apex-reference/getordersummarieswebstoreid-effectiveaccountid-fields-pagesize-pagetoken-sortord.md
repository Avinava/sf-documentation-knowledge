---
title: "getOrderSummaries(webstoreId, effectiveAccountId, fields,
      pageSize, pageToken, sortOrder, earliestDate, latestDate, ownerScoped,
      includeAdjustmentDetails)"
domain: apex-reference
topic: getordersummarieswebstoreid-effectiveaccountid-fields-pagesize-pagetoken-sortord
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.604Z
keywords: [getOrderSummaries, webstoreId, effectiveAccountId, fields, pageSize, pageToken, sortOrder, earliestDate, latestDate, ownerScoped, includeAdjustmentDetails, Get, sorted, page, order, summaries, specific, within, date, range]
---

# getOrderSummaries(webstoreId, effectiveAccountId, fields,
      pageSize, pageToken, sortOrder, earliestDate, latestDate, ownerScoped,
      includeAdjustmentDetails)

> Get a sorted page of order summaries with specific fields within a
      specific date range and scoped to orders owned by the context user.

### getOrderSummaries(webstoreId, effectiveAccountId, fields, pageSize, pageToken, sortOrder, earliestDate, latestDate, ownerScoped, includeAdjustmentDetails)

Get a sorted page of order summaries with specific fields within a specific date range and scoped to orders owned by the context user.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderSummaryCollectionRepresentation getOrderSummaries(String webstoreId, String effectiveAccountId, List<String\> fields, Integer pageSize, String pageToken, ConnectApi.OrderSummarySortOrder sortOrder, String earliestDate, String latestDate, Boolean ownerScoped, Boolean includeAdjustmentDetails)

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

sortOrder

Type: [ConnectApi.OrderSummarySortOrder](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#OrderSummarySortEnum)

Sort order for order summaries. Values are:

-   CreatedDateAsc—Sorts by the oldest created date.
-   CreatedDateDesc—Sorts by the most recent created date.
-   OrderedDateAsc—Sorts by the oldest ordered date.
-   OrderedDateDesc—Sorts by the most recent ordered date.

If unspecified, defaults to OrderedDateDesc.

If you’re sorting by ordered date, make sure the ordered date is populated on your order summary records. A null value isn’t supported and results in an error.

earliestDate

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Oldest created or ordered date, depending on the sortOrder value, for order summaries to return. Results include any orders on and after this date..

latestDate

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Most recent created or ordered date, depending on the sortOrder value, for order summaries to return. Results include any orders before this date.

ownerScoped

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether the results are scoped to orders owned by the context user (true) or to orders owned by and shared with the context user (false). If unspecified, defaults to true.

#### Return Value

includeAdjustmentDetails

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to fetch price adjustment details based on their type (true). If unspecified, defaults to false.

Type: [ConnectApi.OrderSummaryCollectionRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_summary_collection.htm "Collection of order summaries.")