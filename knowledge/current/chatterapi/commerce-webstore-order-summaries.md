---
title: "Commerce Webstore Order Summaries"
domain: chatterapi
topic: commerce-webstore-order-summaries
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.403Z
estimatedTokens: 811
keywords: [Commerce, Webstore, Order, Summaries]
---

# Commerce Webstore Order Summaries

> Get order summaries.

# Commerce Webstore Order Summaries

Get order summaries. This API is available only to registered users.

Resource

```

```

Resource examples

```

```

```

```

Available version

51.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| earliestDate | String | Oldest created or ordered date, depending on the sortOrder value, for order summaries to return. Results include any orders on and after this date..The supported date format is yyyy-MM-dd'T'HH:mm:ss.SSSZ. For example, 2001-07-04T12:08:56.235-0700 , 2001-07-04T12:08:56.235+0700, or 2001-07-04T12:08:56.235-0000 (UTC). See Valid Date and DateTime Formats. | Optional | 51.0 |
| effectiveAccount​Id | String | ID of the account for which the request is made. If unspecified, defaults to the account ID for the context user. | Optional | 51.0 |
| fields | String[] | List of up to 35 additional order summary fields to display in the UI in each item row. For example, fields=orderNumber, status, orderLifeCycleType.These order summary fields are returned regardless of fields specified.createdDateorderSummaryIdorderNumberorderedDateownerIdstatustotalAmount | Optional | 51.0 |
| includeAdjustment​Details | Boolean | Specifies whether to fetch price adjustment details based on their type (true). If unspecified, defaults to false. | Optional | 56.0 |
| includeProducts | Boolean | Specifies whether to include product media in order summaries (true) or not (false). If unspecified, defaults to false. | Optional | 61.0 |
| latestDate | String | Most recent created or ordered date, depending on the sortOrder value, for order summaries to return. Results include any orders before this date. The supported date format is yyyy-MM-dd'T'HH:mm:ss.SSSZ. For example, 2001-07-04T12:08:56.235-0700 , 2001-07-04T12:08:56.235+0700, or 2001-07-04T12:08:56.235-0000 (UTC). See Valid Date and DateTime Formats. | Optional | 51.0 |
| ownerScoped | Boolean | Specifies whether the results are scoped to orders owned by the context user (true) or to orders owned by and shared with the context user (false). If unspecified, defaults to true. | Optional | 51.0 |
| pageSize | Integer | Specifies the number of items per page. Valid values are from 1 through 100. If you don’t specify a value, the default size is 25. | Optional | 51.0 |
| pageToken | String | Specifies the base64 encoded page token. Page tokens are returned as part of the response. If unspecified, the first page is returned. | Optional | 51.0 |
| sortOrder | String | Sort order for order summaries. Values are:CreatedDateAsc—Sorts by the oldest created date.CreatedDateDesc—Sorts by the most recent created date.OrderedDateAsc—Sorts by the oldest ordered date.OrderedDateDesc—Sorts by the most recent ordered date.If unspecified, defaults to OrderedDateDesc.If you’re sorting by ordered date, make sure the ordered date is populated on your order summary records. A null value isn’t supported and results in an error. | Optional | 51.0 |

Response body for GET

[Order Summary Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_summary_collection.htm "Collection of order summaries.")

## Code Examples

```
/commerce/webstores/webstoreId/order-summaries
```

```
https://yourInstance.salesforce.com/services/data/v66.0/commerce/webstores/0ZExx0000000002GAA/order-summaries
```

```
https://yourInstance.salesforce.com/services/data/v66.0/commerce/webstores/0ZEOK00000008vK4AQ​/order-summaries?effectiveAccountId=001OK000001o5FtYAI&ownerScoped=false&fields=AccountId&includeProducts=true
```

## Related Topics

- Order Summary Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_summary_collection.htm)
