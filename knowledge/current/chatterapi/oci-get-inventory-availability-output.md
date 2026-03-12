---
title: "OCI Get Inventory Availability Output"
domain: chatterapi
topic: oci-get-inventory-availability-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.979Z
estimatedTokens: 126
keywords: [OCI, Inventory, Availability, Output, data]
---

# OCI Get Inventory Availability Output

> Response to a request for inventory availability
    data.

# OCI Get Inventory Availability Output

Response to a request for inventory availability data.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| locationGroups | OCI Location Group Availability Output[] | A list of inventory availability data for individual location groups. | Big, 51.0 | 51.0 |
| locations | OCI Location Availability Output[] | A list of inventory availability data for individual locations. | Big, 51.0 | 51.0 |

## Related Topics

- OCI Location Group Availability Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_o_c_i_location_group_availability_output.htm)
- OCI Location Availability Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_o_c_i_location_availability_output.htm)
