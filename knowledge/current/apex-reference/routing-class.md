---
title: "Routing Class"
domain: apex-reference
topic: routing-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:19.570Z
estimatedTokens: 3234
namespace: ConnectApi
keywords: [Routing, Confirm, held, fulfillment, order, capacity, locations, call, decreases, location’s, increases, assigned, count, assign, location]
---

# Routing Class

> Confirm held fulfillment order capacity at one or more locations.
      This call decreases a location’s held capacity and increases its assigned fulfillment order
      count. Confirm held capacity when you assign a fulfillment order to a
    location.

**Namespace:** `ConnectApi`

# Routing Class

Route orders to inventory locations in Order Management.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## Routing Methods

These methods are for Routing. All methods are static.

-   **[confirmHeldFOCapacity(confirmHeldFOCapacityInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Routing_static_methods.htm#apex_ConnectAPI_Routing_confirmHeldFOCapacity_1)**
    Confirm held fulfillment order capacity at one or more locations. This call decreases a location’s held capacity and increases its assigned fulfillment order count. Confirm held capacity when you assign a fulfillment order to a location.
-   **[findRoutesWithFewestSplits(findRoutesWithFewestSplitsInputRepresentation)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Routing_static_methods.htm#apex_ConnectAPI_Routing_findRoutesWithFewestSplits_1)**
    Returns combinations of inventory locations that can fulfill an order within a specified limit of shipment splits. By default, checks up to 1,000,000 potential routes, returning a maximum of 10,000 results.
-   **[findRoutesWithFewestSplitsUsingOCI(findRoutesWithFewestSplitsUsingOCIInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Routing_static_methods.htm#apex_ConnectAPI_Routing_findRoutesWithFewestSplitsUsingOCI_1)**
    For one or more order summaries, find inventory availability using Omnichannel Inventory and identify the fulfillment routes with fewest splits. By default, checks up to 1,000,000 potential routes, returning a maximum of 10,000 results. This method combines the functionality of the getInventoryAvailability() and findRoutesWithFewestSplits() methods.
-   **[getFOCapacityValues(getFOCapacityValuesInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Routing_static_methods.htm#apex_ConnectAPI_Routing_getFOCapacityValues_1)**
    Get information about the current fulfillment order capacity of one or more locations.
-   **[holdFOCapacity(holdFOCapacityInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Routing_static_methods.htm#apex_ConnectAPI_Routing_holdFOCapacity_1)**
    Hold fulfillment order capacity at a location. Holding capacity at a location reserves a space for a fulfillment order that you’ll assign to it.
-   **[rankAverageDistance(rankAverageDistanceInputRepresentation)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Routing_static_methods.htm#apex_ConnectAPI_Routing_rankAverageDistance_1)**
    Calculates the average distance from sets of inventory locations to an order recipient, and ranks them. Use this method to compare the average shipping distances for different sets of locations that can fulfill an order. While this method is executing, you can’t invoke another Apex callout.
-   **[releaseHeldFOCapacity(releaseHeldFOCapacityInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Routing_static_methods.htm#apex_ConnectAPI_Routing_releaseHeldFOCapacity_1)**
    Release held fulfillment order capacity at one or more locations. This call decreases a location’s held capacity without changing its assigned fulfillment order count. Release held capacity when you cancel the assignment of a fulfillment order to a location.

### confirmHeldFOCapacity(confirmHeldFOCapacityInput)

Confirm held fulfillment order capacity at one or more locations. This call decreases a location’s held capacity and increases its assigned fulfillment order count. Confirm held capacity when you assign a fulfillment order to a location.

#### API Version

55.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ConfirmHeldFOCapacityOutputRepresentation confirmHeldFOCapacity(ConnectApi.ConfirmHeldFOCapacityInputRepresentation confirmHeldFOCapacityInput)

#### Parameters

confirmHeldFOCapacityInput

Type: [ConnectApi.ConfirmHeldFOCapacityInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_confirm_held_f_o_capacity.htm "Request to confirm held fulfillment order capacity at one or more locations. Can correspond to one action call.")

The input includes, for each fulfillment order, the location where capacity is held for it.

#### Return Value

Type: [ConnectApi.ConfirmHeldFOCapacityOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_confirm_held_f_o_capacity_output.htm "Response to a request to confirm held fulfillment order capacity at one or more locations. Can correspond to one action call.")

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

### findRoutesWithFewestSplitsUsingOCI(findRoutesWithFewestSplitsUsingOCIInput)

For one or more order summaries, find inventory availability using Omnichannel Inventory and identify the fulfillment routes with fewest splits. By default, checks up to 1,000,000 potential routes, returning a maximum of 10,000 results. This method combines the functionality of the getInventoryAvailability() and findRoutesWithFewestSplits() methods.

#### API Version

54.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.FindRoutesWithFewestSplitsUsingOCIOutputRepresentation findRoutesWithFewestSplitsUsingOCI(ConnectApi.FindRoutesWithFewestSplitsUsingOCIInputRepresentation findRoutesWithFewestSplitsUsingOCIInput)

#### Parameters

findRoutesWithFewestSplitsUsingOCIInput

Type: [ConnectApi.FindRoutesWithFewestSplitsUsingOCIInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_find_routes_with_fewest_splits_using_o_c_i.htm "Data used to calculate order fulfillment routes involving the fewest number of shipment splits, taking into account inventory availability.")

The input includes, for each order, the ordered item quantities, the assigned location group or locations, and, optionally, a maximum allowable number of shipment splits and a list of locations to exclude from the calculation.

#### Return Value

Type: [ConnectApi.FindRoutesWithFewestSplitsUsingOCIOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_find_routes_with_fewest_splits_using_o_c_i_output.htm "A list of order fulfillment routes with inventory availability information.")

#### See Also

-   [getInventoryAvailability(inventoryAvailabilityInputRepresentation)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OmnichannelInventoryService_static_methods.htm#apex_ConnectAPI_OmnichannelInventoryService_getInventoryAvailability_1 "Retrieve inventory availability data for one or more products at one or more inventory locations or location groups.")

-   [findRoutesWithFewestSplits(findRoutesWithFewestSplitsInputRepresentation)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Routing_static_methods.htm#apex_ConnectAPI_Routing_findRoutesWithFewestSplits_1 "Returns combinations of inventory locations that can fulfill an order within a specified limit of shipment splits. By default, checks up to 1,000,000 potential routes, returning a maximum of 10,000 results.")


### getFOCapacityValues(getFOCapacityValuesInput)

Get information about the current fulfillment order capacity of one or more locations.

#### API Version

55.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.GetFOCapacityValuesOutputRepresentation getFOCapacityValues(ConnectApi.GetFOCapacityValuesRequestInputRepresentation getFOCapacityValuesInput)

#### Parameters

getFOCapacityValuesInput

Type: [ConnectApi.GetFOCapacityValuesRequestInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_get_f_o_capacity_values_request.htm "Locations to get fulfillment order capacity information for.")

Locations to get fulfillment order capacity information about.

#### Return Value

Type: [ConnectApi.GetFOCapacityValuesOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_get_f_o_capacity_values_output.htm "Response to a request for fulfillment order capacity values for one or more locations.")

### holdFOCapacity(holdFOCapacityInput)

Hold fulfillment order capacity at a location. Holding capacity at a location reserves a space for a fulfillment order that you’ll assign to it.

#### API Version

55.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.HoldFOCapacityOutputRepresentation holdFOCapacity(ConnectApi.HoldFOCapacityInputRepresentation holdFOCapacityInput)

#### Parameters

holdFOCapacityInput

Type: [ConnectApi.HoldFOCapacityInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_hold_f_o_capacity.htm "Request to hold fulfillment order capacity at one or more locations. Can correspond to one action call.")

The input includes, for each fulfillment order, the location to hold capacity for it.

#### Return Value

Type: [ConnectApi.HoldFOCapacityOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_hold_f_o_capacity_output.htm "Response to a request to hold fulfillment order capacity at one or more locations. Can correspond to one action call.")

### rankAverageDistance(rankAverageDistanceInputRepresentation)

Calculates the average distance from sets of inventory locations to an order recipient, and ranks them. Use this method to compare the average shipping distances for different sets of locations that can fulfill an order. While this method is executing, you can’t invoke another Apex callout.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.RankAverageDistanceOutputRepresentation rankAverageDistance(ConnectApi.RankAverageDistanceInputRepresentation rankAverageDistanceInputRepresentation)

#### Parameters

rankAverageDistanceInputRepresentation

Type: [ConnectApi.RankAverageDistanceInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_rank_average_distance.htm "An order recipient’s geographic location and information about sets of inventory locations that can fulfill the order.")

An order recipient’s geographic location and information about sets of inventory locations that can fulfill the order.

#### Return Value

Type: [ConnectApi.RankAverageDistanceOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_rank_average_distance_output.htm "The results of calculating the average distances from sets of inventory locations to an order recipient.")

### releaseHeldFOCapacity(releaseHeldFOCapacityInput)

Release held fulfillment order capacity at one or more locations. This call decreases a location’s held capacity without changing its assigned fulfillment order count. Release held capacity when you cancel the assignment of a fulfillment order to a location.

#### API Version

55.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ReleaseHeldFOCapacityOutputRepresentation releaseHeldFOCapacity(ConnectApi.ReleaseHeldFOCapacityInputRepresentation releaseHeldFOCapacityInput)

#### Parameters

releaseHeldFOCapacityInput

Type: [ConnectApi.ReleaseHeldFOCapacityInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_release_held_f_o_capacity.htm "Request to release held fulfillment order capacity at one or more locations. Can correspond to one action call.")

The input includes, for each fulfillment order, the location that holds the capacity to release.

#### Return Value

Type: [ConnectApi.ReleaseHeldFOCapacityOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_release_held_f_o_capacity_output.htm "Response to a request to confirm held fulfillment order capacity at one or more locations. Can correspond to one action call.")

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- confirmHeldFOCapacity(confirmHeldFOCapacityInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Routing_static_methods.htm)
- findRoutesWithFewestSplits(findRoutesWithFewestSplitsInputRepresentation) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Routing_static_methods.htm)
- findRoutesWithFewestSplitsUsingOCI(findRoutesWithFewestSplitsUsingOCIInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Routing_static_methods.htm)
- getFOCapacityValues(getFOCapacityValuesInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Routing_static_methods.htm)
- holdFOCapacity(holdFOCapacityInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Routing_static_methods.htm)
- rankAverageDistance(rankAverageDistanceInputRepresentation) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Routing_static_methods.htm)
- releaseHeldFOCapacity(releaseHeldFOCapacityInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Routing_static_methods.htm)
- ConnectApi.ConfirmHeldFOCapacityInputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_confirm_held_f_o_capacity.htm)
- ConnectApi.ConfirmHeldFOCapacityOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_confirm_held_f_o_capacity_output.htm)
