---
title: "Claim Response"
domain: insurance-developer-guide
topic: claim-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.424Z
estimatedTokens: 133
keywords: [Claim, Output, representation, created, updated]
---

# Claim Response

> Output representation for a created or updated claim.

# Claim Response

Output representation for a created or updated claim.

JSON example

```

```

Properties

| Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| claimId | String | ID of the claim that's created or updated. | Big, 65.0 | 65.0 |
| errors | Error Detail[] | List of errors, including detailed information about each error. | Big, 65.0 | 65.0 |
| isSuccess | Boolean | Indicates whether the operation is successful (true) or not (false). | Big, 65.0 | 65.0 |

## Code Examples

```
{
     "claimId": "0Zkxx000000001dEAA",
     "isSuccess": true,
     "errors": []
     }
```

## Related Topics

- Error
           Detail[] (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_error_details.htm)
