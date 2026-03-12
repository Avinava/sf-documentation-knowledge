---
title: "ConnectApi.OCIGetInventoryAvailabilityOutputRepresentation"
domain: apex-reference
topic: connectapiocigetinventoryavailabilityoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:28.162Z
estimatedTokens: 478
keywords: [inventory, availability, data]
---

# ConnectApi.OCIGetInventoryAvailabilityOutputRepresentation

> Response to a request for inventory availability
    data.

# ConnectApi.OCIGetInventoryAvailabilityOutputRepresentation

Response to a request for inventory availability data.

Subclass of [ConnectApi.OCIBaseOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_o_c_i_base_output.htm "Base Omnichannel Inventory output class.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| locationGroups | List<ConnectApi.​OCILocationGroup​AvailabilityOutputRepresentation> | A list of inventory availability data for individual location groups. | 51.0 |
| locations | List<ConnectApi.​OCILocationAvailability​OutputRepresentation> | A list of inventory availability data for individual locations. | 51.0 |

#### See Also

-   [getInventoryAvailability(inventoryAvailabilityInputRepresentation)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OmnichannelInventoryService_static_methods.htm#apex_ConnectAPI_OmnichannelInventoryService_getInventoryAvailability_1 "Retrieve inventory availability data for one or more products at one or more inventory locations or location groups.")

-   [findRoutesWithFewestSplitsUsingOCI(findRoutesWithFewestSplitsUsingOCIInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Routing_static_methods.htm#apex_ConnectAPI_Routing_findRoutesWithFewestSplitsUsingOCI_1 "For one or more order summaries, find inventory availability using Omnichannel Inventory and identify the fulfillment routes with fewest splits. By default, checks up to 1,000,000 potential routes, returning a maximum of 10,000 results. This method combines the functionality of the getInventoryAvailability() and findRoutesWithFewestSplits() methods.")

-   [ConnectApi.FindRoutesWithFewestSplitsUsingOCIOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_find_routes_with_fewest_splits_using_o_c_i_output.htm "A list of order fulfillment routes with inventory availability information.")

## Related Topics

- ConnectApi.OCIBaseOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_o_c_i_base_output.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​OCILocationGroup​AvailabilityOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_o_c_i_location_group_availability_output.htm)
- ConnectApi.​OCILocationAvailability​OutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_o_c_i_location_availability_output.htm)
- getInventoryAvailability(inventoryAvailabilityInputRepresentation) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OmnichannelInventoryService_static_methods.htm)
- findRoutesWithFewestSplitsUsingOCI(findRoutesWithFewestSplitsUsingOCIInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Routing_static_methods.htm)
- ConnectApi.FindRoutesWithFewestSplitsUsingOCIOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_find_routes_with_fewest_splits_using_o_c_i_output.htm)
