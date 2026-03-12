---
title: "Commerce Webstore Shipment Items"
domain: chatterapi
topic: commerce-webstore-shipment-items
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.390Z
estimatedTokens: 367
keywords: [Commerce, Webstore, Shipment, Items]
---

# Commerce Webstore Shipment Items

> Get shipment items.

# Commerce Webstore Shipment Items

Get shipment items.

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
| fields | String[] | List of up to 15 additional shipment items, order item summary, and product fields to display in the UI in each item row. For example, fields=ShipmentItems.Status, Product2.Name, OrderItemSummary.UnitPrice. | Optional | 52.0 |
| pageSize | Integer | Specifies the number of items per page. Valid values are from 1 through 100. If you don’t specify a value, the default size is 25. | Optional | 52.0 |
| pageToken | String | Specifies the base64 encoded page token. Page tokens are returned as part of the response. If unspecified, the first page is returned. | Optional | 52.0 |
| sortOrder | String | Sort order for the shipment items. Values are:IdAsc—Sorts by ID in ascending alphanumeric order (A–Z, 0–9).IdDesc—Sorts by ID in descending alphanumeric order (Z–A, 9–0).If unspecified, defaults to IdAsc. | Optional | 52.0 |

Response body for GET

[Order Shipment Item Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_shipment_item_collection.htm "Collection of order shipment items.")

## Code Examples

```
/commerce/webstores/webstoreId/shipments/shipmentId/items
```

## Related Topics

- Order Shipment Item Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_shipment_item_collection.htm)
