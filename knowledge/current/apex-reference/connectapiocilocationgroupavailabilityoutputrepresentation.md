---
title: "ConnectApi.OCILocationGroupAvailabilityOutputRepresentation"
domain: apex-reference
topic: connectapiocilocationgroupavailabilityoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:28.173Z
estimatedTokens: 133
keywords: [inventory, availability, data, location, group]
---

# ConnectApi.OCILocationGroupAvailabilityOutputRepresentation

> A set of inventory availability data for one inventory location
      group.

# ConnectApi.OCILocationGroupAvailabilityOutputRepresentation

A set of inventory availability data for one inventory location group.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| inventoryRecords | List<ConnectApi.​OCIInventoryRecord​OutputRepresentation> | A list of availability data for individual products. The data combines the quantities for all locations belonging to this location group. | 51.0 |
| locationGroup​Identifier | String | The identifier of the location group. | 51.0 |

## Related Topics

- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​OCIInventoryRecord​OutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_o_c_i_inventory_record_output.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
