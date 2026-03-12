---
title: "Find Routes With Fewest Splits Input"
domain: chatterapi
topic: find-routes-with-fewest-splits-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.735Z
estimatedTokens: 282
keywords: [Routes, Fewest, Splits, Input, Data, calculate, order, fulfillment, involving, number, shipment]
---

# Find Routes With Fewest Splits Input

> Data used to calculate order fulfillment routes involving the fewest
      number of shipment splits.

# Find Routes With Fewest Splits Input

Data used to calculate order fulfillment routes involving the fewest number of shipment splits.

Root XML tag

<findRoutesWithFewestSplits>

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| locationAvailable​Inventory | Location Availability Input[] | Each list element represents the available quantity of a product at an inventory location. | At least one element is required | 51.0 |
| maximumNumberOf​Splits | Integer | The maximum allowable number of shipment splits. Routing options that involve more than this number of splits are not returned.NoteEach split represents an additional shipment. Specifying a maximum of 0 returns only locations that can fulfill the entire order in a single shipment. A maximum of 1 returns combinations of locations that can fulfill the order in one or two shipments, and so on. | Optional | 51.0 |
| ordered​Quantities | Quantity With SKU Input[] | Each list element represents a quantity of a product to be routed for fulfillment. | At least one element is required | 51.0 |

## Related Topics

- Location Availability Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_location_availability_input.htm)
- Quantity With SKU Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_quantity_with_sku_input.htm)
