---
title: "Rate Plan Response"
domain: revenue-cloud
topic: rate-plan-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:09.845Z
estimatedTokens: 130
keywords: [Rate, Plan, Output, representation]
---

# Rate Plan Response

> Output representation of the details of a rate plan.

# Rate Plan Response

Output representation of the details of a rate plan.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| error | Rating Error Response[] | Error response for the API request, if any. | Small, 62.0 | 62.0 |
| executionId | String | ID of the procedure execution record. | Small, 62.0 | 62.0 |
| success | Boolean | Indicates whether the request is successful (true) or not (false) | Small, 62.0 | 62.0 |

## Code Examples

```
{
  "success": true,
  "executionId" : "a521d592-71c3-4db3-8048-r64504df1605",
  "error": {}
}
```

## Related Topics

- Rating Error Response (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_rating_error_response.htm)
