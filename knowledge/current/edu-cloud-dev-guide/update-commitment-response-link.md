---
title: "Update Commitment Response Link"
domain: edu-cloud-dev-guide
topic: update-commitment-response-link
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:25.133Z
estimatedTokens: 126
keywords: [Commitment, Link, Output, representation, links, updates]
---

# Update Commitment Response Link

> Output representation of the links to the response object for the commitment
    updates.

# Update Commitment Response Link

Output representation of the links to the response object for the commitment updates.

Sample Response

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| gift​commitment | Link Details | Link to the updated gift commitment details. | Small, 60.0 | 60.0 |
| giftcommitment​schedule | Link Details | Link to the schedule associated with the updated gift commitment. | Small, 60.0 | 60.0 |

## Code Examples

```
{
  "giftcommitment": {
    "href": "/services/data/vXX.X/sobjects/sObject/...",
    "id": "string"
  },
  "giftcommitmentschedule": {
    "href": "/services/data/vXX.X/sobjects/sObject/...",
    "id": "string"
  }
}
```

## Related Topics

- Link
                Details (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_link_detail.htm)
