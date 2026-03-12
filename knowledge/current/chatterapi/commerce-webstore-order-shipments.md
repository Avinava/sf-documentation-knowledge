---
title: "Commerce Webstore Order Shipments"
domain: chatterapi
topic: commerce-webstore-order-shipments
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.394Z
estimatedTokens: 438
keywords: [Commerce, Webstore, Order, Shipments]
---

# Commerce Webstore Order Shipments

> Get order shipments.

# Commerce Webstore Order Shipments

Get order shipments.

Resource

```

```

Available version

52.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| effective​AccountId | String | ID of the account for which the request is made. If unspecified, defaults to the account ID for the context user. | Optional | 52.0 |
| fields | String[] | List of up to 15 additional shipment and order delivery method fields to display in the UI in each item row. For example, fields=Shipment.Status, OrderDeliveryMethod.Name. | Optional | 52.0 |
| pageSize | Integer | Specifies the number of items per page. Valid values are from 1 through 100. If you don’t specify a value, the default size is 25. | Optional | 52.0 |
| pageToken | String | Specifies the base64 encoded page token. Page tokens are returned as part of the response. If unspecified, the first page is returned. | Optional | 52.0 |
| sortOrder | String | Sort order for shipments. Values are:ExpectedDeliveryDateAsc—Sorts by the oldest expected delivery date.ExpectedDeliveryDateDesc—Sorts by the most recent expected delivery date.ShipmentNumberAsc—Sorts by shipment number in ascending order (0–9).ShipmentNumberDesc—Sorts by shipment number in descending order (9–0).If unspecified, defaults to ShipmentNumberAsc.If you’re sorting by expected delivery date, make sure the expected delivery date is populated on your shipment records. A null value isn’t supported and results in an error. | Optional | 52.0 |

Response body for GET

[Order Shipment Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_shipment_collection.htm "Collection of order shipments.")

## Code Examples

```
/commerce/webstores/webstoreId/order-summaries/orderSummaryId/shipments
```

## Related Topics

- Order Shipment Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_shipment_collection.htm)
