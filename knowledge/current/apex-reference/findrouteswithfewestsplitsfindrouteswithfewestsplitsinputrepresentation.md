---
title: "findRoutesWithFewestSplits(findRoutesWithFewestSplitsInputRepresentation)"
domain: apex-reference
topic: findrouteswithfewestsplitsfindrouteswithfewestsplitsinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.745Z
keywords: [findRoutesWithFewestSplits, findRoutesWithFewestSplitsInputRepresentation, Returns, combinations, inventory, locations, fulfill, order, within, specified, limit, shipment, splits., default, checks, 000, potential, routes, returning, maximum]
---

# findRoutesWithFewestSplits(findRoutesWithFewestSplitsInputRepresentation)

> Returns combinations of inventory locations that can fulfill an
      order within a specified limit of shipment splits. By default, checks up to 1,000,000
      potential routes, returning a maximum of 10,000 results.

### findRoutesWithFewestSplits(findRoutesWithFewestSplitsInputRepresentation)

Returns combinations of inventory locations that can fulfill an order within a specified limit of shipment splits. By default, checks up to 1,000,000 potential routes, returning a maximum of 10,000 results.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.FindRoutesWithFewestSplitsOutputRepresentation findRoutesWithFewestSplits(ConnectApi.FindRoutesWithFewestSplitsInputRepresentation findRoutesWithFewestSplitsInputRepresentation)

#### Parameters

findRoutesWithFewestSplitsInputRepresentation

Type: [ConnectApi.FindRoutesWithFewestSplitsInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_find_routes_with_fewest_splits.htm "Data used to calculate order fulfillment routes involving the fewest number of shipment splits.")

The input includes the ordered item quantities, data about available inventory, and, optionally, a maximum allowable number of shipment splits.

#### Return Value

Type: [ConnectApi.FindRoutesWithFewestSplitsOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_find_routes_with_fewest_splits_output.htm "A list of inventory location combinations that can fulfill an order without exceeding the maximum number of shipments.")