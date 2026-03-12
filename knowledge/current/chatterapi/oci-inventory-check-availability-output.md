---
title: "OCI Inventory Check Availability Output"
domain: chatterapi
topic: oci-inventory-check-availability-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.212Z
estimatedTokens: 163
keywords: [OCI, Inventory, Check, Availability, Output, product, individual, location, group]
---

# OCI Inventory Check Availability Output

> Inventory product availability for an individual location or location
      group.

# OCI Inventory Check Availability Output

Inventory product availability for an individual location or location group.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| locationGroups | OCI Location Group Check Availability Output[] | List of inventory availability data for individual location groups. Request locationGroups or location information, not both. | Big, 60.0 | 60.0 |
| locations | OCI Location Check Availability Output[] | List of inventory availability data for individual locations. Request locationGroups or location information, not both. | Big, 60.0 | 60.0 |

## Related Topics

- OCI Location Group Check Availability Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_location_group_check_availability_output.htm)
- OCI Location Check Availability Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_location_check_availability_output.htm)
