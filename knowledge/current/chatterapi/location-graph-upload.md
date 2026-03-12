---
title: "Location Graph, Upload"
domain: chatterapi
topic: location-graph-upload
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.020Z
estimatedTokens: 319
keywords: [Location, Graph, Upload, Asynchonously, inventory, group, data, Omnichannel, check, status, jobs]
---

# Location Graph, Upload

> Asynchonously upload inventory location and location group data to
      Omnichannel Inventory and check the status of upload jobs.

# Location Graph, Upload

Asynchonously upload inventory location and location group data to Omnichannel Inventory and check the status of upload jobs.

Available resources are:

| Resource | Description |
| --- | --- |
| /commerce/oci/location-graph/uploads | POST - Asynchronously publish information about your inventory locations and location groups to Omnichannel Inventory. The publish includes records whose IsEnabled and ShouldSyncWithOci fields are both true. This method returns an ID that you can use to retrieve the status of the publish job. |
| /commerce/oci/location-graph/uploads/uploadId | GET - Retrieve the status of a publish location structure job. |

Resource

```

```

Available version

51.0

HTTP methods

POST (No request payload)

Response body for POST

[OCI Publish Location Structure Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_o_c_i_publish_location_structure_output.htm "Response to a publish location structure request.")

Resource

```

```

Available version

51.0

HTTP methods

GET

Response body for GET

[OCI Publish Location Structure Status Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_o_c_i_publish_location_structure_status_output.htm "Detailed status of a publish location structure job.")

## Related Topics

- OCI Publish Location Structure Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_o_c_i_publish_location_structure_output.htm)
- OCI Publish Location Structure Status Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_o_c_i_publish_location_structure_status_output.htm)
