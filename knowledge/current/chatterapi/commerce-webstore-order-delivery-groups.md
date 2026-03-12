---
title: "Commerce Webstore Order Delivery Groups"
domain: chatterapi
topic: commerce-webstore-order-delivery-groups
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.437Z
estimatedTokens: 537
keywords: [Commerce, Webstore, Order, Delivery, Groups]
---

# Commerce Webstore Order Delivery Groups

> Get order delivery groups.

# Commerce Webstore Order Delivery Groups

Get order delivery groups. This API is available only to registered users.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

We recommend using the enhanced [Commerce Webstore Order Summary Lookup](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_order_summary_lookup.htm "Look up details about an order summary, including its line items and relevant order amount fields. This API is available to both registered and guest users.") API, which is accessible to both registered and guest users.

Resource

```

```

Available version

51.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| effective​AccountId | String | ID of the account for which the request is made. If unspecified, defaults to the account ID for the context user. | Optional | 51.0 |
| fields | String[] | List of up to 15 order delivery group summary or order delivery method fields to display in the UI in each item row. For example, fields=OrderDelivery​GroupSummary.DeliveryAddress, OrderDeliveryMethod.Name. | Optional | 51.0 |
| page | String | Specifies the page token to use to view a page of information. Page tokens are returned as part of the response, such as currentPageToken or nextPageToken. If you don’t specify a value, the first page is returned. | Optional | 51.0 |
| pageSize | Integer | Specifies the number of items per page. Valid values are from 1 through 100. If you don’t specify a value, the default size is 25. | Optional | 51.0 |
| sort | String | Sort order for order delivery group summaries. Values are:IdAsc—Sorts by ID in ascending alphanumeric order (A–Z, 0–9).IdDesc—Sorts by ID in descending alphanumeric order (Z–A, 9–0).If unspecified, IdAsc is the default sort order. | Optional | 51.0 |

Response body for GET

[Order Delivery Group Summary Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_delivery_group_summary_collection.htm "Collection of order delivery group summaries.")

## Code Examples

```
/commerce/webstores/webstoreId/order-summaries/orderSummaryId/delivery-groups
```

## Related Topics

- Commerce Webstore Order Summary Lookup (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_order_summary_lookup.htm)
- Order Delivery Group Summary Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_delivery_group_summary_collection.htm)
