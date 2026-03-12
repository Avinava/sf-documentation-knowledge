---
title: "Assign
    Actionable List"
domain: omnistudio
topic: assign-actionable-list
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:48.419Z
estimatedTokens: 102
keywords: [Assign, Actionable, Output, representation, assignment]
---

# Assign
    Actionable List

> Output representation of the actionable list assignment request.

# Assign Actionable List

Output representation of the actionable list assignment request.

JSON Example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| actionableListId | String | ID of the actionable list record | Small, 57.0 | 57.0 |
| status | Sales Excellence Status | Status of the API request | Small, 57.0 | 57.0 |

## Code Examples

```
{
  "actionableListId": "012000000000000AAA",
  "status": {
    "code": 200,
    "message": "The actionable list is assigned successfully."
  }
}
```

## Related Topics

- Sales
                  Excellence Status (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_sales_excellence_status.htm)
