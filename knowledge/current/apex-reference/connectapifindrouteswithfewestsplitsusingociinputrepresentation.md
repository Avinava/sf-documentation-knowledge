---
title: "ConnectApi.FindRoutesWithFewestSplitsUsingOCIInputRepresentation"
domain: apex-reference
topic: connectapifindrouteswithfewestsplitsusingociinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:37.189Z
keywords: [ConnectApi.FindRoutesWithFewestSplitsUsingOCIInputRepresentation, See]
---

# ConnectApi.FindRoutesWithFewestSplitsUsingOCIInputRepresentation

# ConnectApi.FindRoutesWithFewestSplitsUsingOCIInputRepresentation

Data used to calculate order fulfillment routes involving the fewest number of shipment splits, taking into account inventory availability.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| findRoutesWithFewestSplitsUsingOCIInputs | List<ConnectApi.FindRoutesWithFewestSplitsGroupUsingOCIInputRepresentation> | Each list element represents a routing request for one order. | At least one element is required | 54.0 |
| ociExpandAttributes | Collection | The string value groupEligibilityExclusion excludes specific locations. | Optional | 59.0 |

#### See Also

-   [findRoutesWithFewestSplitsUsingOCI(findRoutesWithFewestSplitsUsingOCIInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Routing_static_methods.htm#apex_ConnectAPI_Routing_findRoutesWithFewestSplitsUsingOCI_1 "For one or more order summaries, find inventory availability using Omnichannel Inventory and identify the fulfillment routes with fewest splits. By default, checks up to 1,000,000 potential routes, returning a maximum of 10,000 results. This method combines the functionality of the getInventoryAvailability() and findRoutesWithFewestSplits() methods.")