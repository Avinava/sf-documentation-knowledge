---
title: "Delete Member Plans Input"
domain: insurance-developer-guide
topic: delete-member-plans-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.824Z
estimatedTokens: 103
keywords: [Member, Plans, Input, representation, deleting, insurance, census]
---

# Delete Member Plans Input

> Input representation for deleting the insurance plans for a census member.

# Delete Member Plans Input

Input representation for deleting the insurance plans for a census member.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| plans | String[] | List of group census member plan IDs to delete.If you specify the root plan ID, all the associated details will be deleted. | Required | 65.0 |

## Code Examples

```
{
  "plans": {
    "values": [
      "0rgSG0000000eALYAY",
      "0rgSG0000000e8jYAA"
    ]
  }
}
```
