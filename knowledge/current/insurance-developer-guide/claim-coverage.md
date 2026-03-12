---
title: "Claim Coverage"
domain: insurance-developer-guide
topic: claim-coverage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.391Z
estimatedTokens: 129
keywords: [Claim, Coverage, Output, representation]
---

# Claim Coverage

> Output representation for a claim coverage.

# Claim Coverage

Output representation for a claim coverage.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| coverageId | String | ID of the claim coverage record. | Big, 65.0 | 65.0 |
| errors | Error Detail[] | Details of the errors that are associated with the API request. | Big, 65.0 | 65.0 |
| isSuccess | Boolean | Indicates whether the API operation is successful (true) or not (false). | Big, 65.0 | 65.0 |

## Code Examples

```
{
  "isSuccess": true,
  "coverageId": "0kPxx000000002fEAA",
  "errors": []
}
```

## Related Topics

- Error
        Detail (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_error_details.htm)
