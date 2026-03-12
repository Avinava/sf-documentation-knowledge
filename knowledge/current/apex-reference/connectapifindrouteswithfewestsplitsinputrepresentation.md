---
title: "ConnectApi.FindRoutesWithFewestSplitsInputRepresentation"
domain: apex-reference
topic: connectapifindrouteswithfewestsplitsinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:25.185Z
estimatedTokens: 396
keywords: [Data, calculate, order, fulfillment, routes, involving, fewest, number, shipment, splits]
---

# ConnectApi.FindRoutesWithFewestSplitsInputRepresentation

> Data used to calculate order fulfillment routes involving the fewest
      number of shipment splits.

# ConnectApi.FindRoutesWithFewestSplitsInputRepresentation

Data used to calculate order fulfillment routes involving the fewest number of shipment splits.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| locationAvailable​Inventory | List<ConnectApi.​LocationAvailability​InputRepresentation> | Each list element represents the available quantity of a product at an inventory location. | At least one element is required | 51.0 |
| maximumNumber​OfSplits | Integer | The maximum allowable number of shipment splits. Routing options that involve more than this number of splits are not returned.NoteEach split represents an additional shipment. Specifying a maximum of 0 returns only locations that can fulfill the entire order in a single shipment. A maximum of 1 returns combinations of locations that can fulfill the order in one or two shipments, and so on. | Required | 51.0 |
| orderedQuantities | List<ConnectApi.​QuantityWithSku​InputRepresentation> | Each list element represents a quantity of a product to be routed for fulfillment. | At least one element is required | 51.0 |

#### See Also

-   [findRoutesWithFewestSplits(findRoutesWithFewestSplitsInputRepresentation)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Routing_static_methods.htm#apex_ConnectAPI_Routing_findRoutesWithFewestSplits_1 "Returns combinations of inventory locations that can fulfill an order within a specified limit of shipment splits. By default, checks up to 1,000,000 potential routes, returning a maximum of 10,000 results.")

## Related Topics

- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​LocationAvailability​InputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_location_availability.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- ConnectApi.​QuantityWithSku​InputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_quantity_with_sku.htm)
- findRoutesWithFewestSplits(findRoutesWithFewestSplitsInputRepresentation) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Routing_static_methods.htm)
