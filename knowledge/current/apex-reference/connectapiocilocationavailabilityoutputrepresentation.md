---
title: "ConnectApi.OCILocationAvailabilityOutputRepresentation"
domain: apex-reference
topic: connectapiocilocationavailabilityoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:28.131Z
estimatedTokens: 111
keywords: [ConnectApi.OCILocationAvailabilityOutputRepresentation, set, inventory, availability, data, location.]
---

# ConnectApi.OCILocationAvailabilityOutputRepresentation

> A set of inventory availability data for one inventory
    location.

# ConnectApi.OCILocationAvailabilityOutputRepresentation

A set of inventory availability data for one inventory location.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| inventoryRecords | List<ConnectApi.​OCIInventoryRecord​OutputRepresentation> | A list of availability data for individual products at this location. | 51.0 |
| locationIdentifier | String | The identifier of the location. | 51.0 |

## Related Topics

- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​OCIInventoryRecord​OutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_o_c_i_inventory_record_output.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
