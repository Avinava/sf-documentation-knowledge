---
title: "Instant Pricing"
domain: revenue-cloud
topic: instant-pricing
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:09.438Z
estimatedTokens: 169
keywords: [Instant, Pricing, Output, representation, containing, results]
---

# Instant Pricing

> Output representation containing the results of the instant pricing request.

# Instant Pricing

Output representation containing the results of the instant pricing request.

Sample Response

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| contextId | String | Context ID returned by the context service. | Small, 59.0 | 59.0 |
| correlationId | String | Client-generated ID for tracking multiple related API calls. | Small, 59.0 | 59.0 |
| records | Object Reference[] | List of records related to pricing results. | Small, 59.0 | 59.0 |
| success | Boolean | Indicates whether the fetching of instant pricing is successful (true) or not (false). | Small, 59.0 | 59.0 |

## Code Examples

```
{
  "correlationid": "123",
  "contextid": "abcl23",
  "records": [
    {
      "referenceid": "refQuote",
      "record": {
        "attributes": {
          "type": "Quote",
          "method": "POST"
        },
        "quantity": "2"
      },
      "error": {
        "errorCode": "INVALID_API_INPUT",
        "message": "Reference Id format is irrelevant."
      }
    }
  ],
  "success": true
}
```

## Related Topics

- Object Reference (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_object_with_reference_response.htm)
