---
title: "OCI Location Group Availability Output"
domain: chatterapi
topic: oci-location-group-availability-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.989Z
estimatedTokens: 135
keywords: [OCI, Location, Group, Availability, Output, inventory, data]
---

# OCI Location Group Availability Output

> A set of inventory availability data for one inventory location
      group.

# OCI Location Group Availability Output

A set of inventory availability data for one inventory location group.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| inventoryRecords | OCI Inventory Record Output[] | A list of availability data for individual products. The data combines the quantities for all locations belonging to this location group. | Big, 51.0 | 51.0 |
| locationGroupIdentifier | String | The identifier of the location group. | Big, 51.0 | 51.0 |

## Related Topics

- OCI Inventory Record Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_o_c_i_inventory_record_output.htm)
