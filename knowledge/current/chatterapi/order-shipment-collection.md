---
title: "Order Shipment Collection"
domain: chatterapi
topic: order-shipment-collection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.104Z
estimatedTokens: 333
keywords: [Order, Shipment, Collection, shipments]
---

# Order Shipment Collection

> Collection of order shipments.

# Order Shipment Collection

Collection of order shipments.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| count | Integer | Total number of records returned in the collection. | Small, 52.0 | 52.0 |
| currentPageToken | String | Token identifying the current page of order shipments. | Small, 52.0 | 52.0 |
| currentPageUrl | String | URL to the current page of order shipments. | Small, 52.0 | 52.0 |
| nextPageToken | String | Token identifying the next page of order shipments. | Small, 52.0 | 52.0 |
| nextPageUrl | String | URL to the next page of order shipments. | Small, 52.0 | 52.0 |
| previousPageToken | String | Token identifying the previous page of order shipments. | Small, 52.0 | 52.0 |
| previousPageUrl | String | URL to the previous page of order shipments. | Small, 52.0 | 52.0 |
| shipments | Order Shipment[] | Collection of order shipments. | Small, 52.0 | 52.0 |
| sortOrder | String | Sort order for order shipments. Values are:ExpectedDeliveryDateAsc—Sorts by the oldest expected delivery date.ExpectedDeliveryDateDesc—Sorts by the most recent expected delivery date.ShipmentNumberAsc—Sorts by shipment number in ascending order (0–9).ShipmentNumberDesc—Sorts by shipment number in descending order (9–0). | Small, 52.0 | 52.0 |

## Related Topics

- Order Shipment (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_shipment.htm)
