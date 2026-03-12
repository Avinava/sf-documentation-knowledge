---
title: "Delete Member Plans"
domain: insurance-developer-guide
topic: delete-member-plans
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.570Z
estimatedTokens: 131
keywords: [Member, Plans, Output, representation, plan, deletion, process]
---

# Delete Member Plans

> Output representation for the member plan deletion process.

# Delete Member Plans

Output representation for the member plan deletion process.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Insurance Error[] | List of errors occurred during the API operation. | Small, 65.0 | 65.0 |
| isSuccess | Boolean | Indicates whether the API executed successfully (true) or not (false). | Small, 65.0 | 65.0 |
| memberId | String | ID of the group census member. | Small, 65.0 | 65.0 |

## Code Examples

```
{
  "errors": [],
  "isSuccess": true,
  "memberId": "0r6p00000004C9wAAE"
}
```

## Related Topics

- Insurance Error (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_error_output.htm)
