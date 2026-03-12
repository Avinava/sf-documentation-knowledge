---
title: "Commitment Payment Updates Response Link"
domain: edu-cloud-dev-guide
topic: commitment-payment-updates-response-link
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.967Z
estimatedTokens: 122
keywords: [Commitment, Payment, Updates, Link, Output, representation, links]
---

# Commitment Payment Updates Response Link

> Output representation of the links to the response object for the commitment payment
    updates.

# Commitment Payment Updates Response Link

Output representation of the links to the response object for the commitment payment updates.

Sample Response

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| gift​commitment | Link Details | Link to the gift commitment response. | Small, 60.0 | 60.0 |
| payment​instrument | Link Details | Link to the first payment instrument response. | Small, 60.0 | 60.0 |

## Code Examples

```
{
  "links": {
    "giftcommitment": {
      "href": "/services/data/vXX.X/sobjects/sObject/...",
      "id": "string"
    },
    "paymentinstrument": {
      "href": "/services/data/vXX.X/sobjects/sObject/...",
      "id": "string"
    }
  }
}
```

## Related Topics

- Link
                Details (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_link_detail.htm)
