---
title: "Update Commitment"
domain: edu-cloud-dev-guide
topic: update-commitment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:25.130Z
estimatedTokens: 159
keywords: [Commitment, Output, representation, status, errors, any, links, objects, gift]
---

# Update Commitment

> Output representation of the update commitment request that contains the status, errors
    if any, and the links to objects after you update a gift commitment.

# Update Commitment

Output representation of the update commitment request that contains the status, errors if any, and the links to objects after you update a gift commitment.

Sample Response

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Error Details[] | Error message if the process failed. | Small, 60.0 | 60.0 |
| links | Update Commitment Response Link | Links to the response object. | Small, 60.0 | 60.0 |
| success | Boolean | Indicates whether the request was processed successfully (true) or not (false). | Small, 60.0 | 60.0 |

## Code Examples

```
{
  "success": true,
  "errors": [
    {
      "field": "string",
      "message": "string"
    }
  ],
  "links": {
    "giftcommitment": {
      "href": "/services/data/vXX.X/sobjects/sObject/...",
      "id": "string"
    },
    "giftcommitmentschedule": {
      "href": "/services/data/vXX.X/sobjects/sObject/...",
      "id": "string"
    }
  }
}
```

## Related Topics

- Error
                  Details[] (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_error_detail.htm)
- Update Commitment Response
                  Link (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_update_commitment_response_lin.htm)
