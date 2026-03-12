---
title: "ConnectApi.OrderShipmentItemCollection"
domain: apex-reference
topic: connectapiordershipmentitemcollection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:28.264Z
estimatedTokens: 278
keywords: [ConnectApi.OrderShipmentItemCollection, Collection, order, shipment, items.]
---

# ConnectApi.OrderShipmentItemCollection

> Collection of order shipment items.

# ConnectApi.OrderShipmentItemCollection

Collection of order shipment items.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| count | Integer | Total number of records returned in a page. | 52.0 |
| currentPageToken | String | Token identifying the current page of order shipment items. | 52.0 |
| currentPageUrl | String | URL to the current page of order shipment items. | 52.0 |
| items | List<ConnectApi.​OrderShipmentItem> | Collection of order shipment items. | 52.0 |
| nextPageToken | String | Token identifying the next page of order shipment items. | 52.0 |
| nextPageUrl | String | URL to the next page of order shipment items. | 52.0 |
| previousPageToken | String | Token identifying the previous page of order shipment items. | 52.0 |
| previousPageUrl | String | URL to the previous page of order shipment items. | 52.0 |
| sortOrder | ConnectApi.​OrderShipment​ItemSort | Sort order for order shipment items. Values are:IdAsc—Sorts by ID in ascending alphanumeric order (A–Z, 0–9).IdDesc—Sorts by ID in descending alphanumeric order (Z–A, 9–0). | 52.0 |

## Related Topics

- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​OrderShipmentItem (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_shipment_item.htm)
- ConnectApi.​OrderShipment​ItemSort (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
