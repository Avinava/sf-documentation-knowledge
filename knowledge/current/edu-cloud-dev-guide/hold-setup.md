---
title: "Hold Setup"
domain: edu-cloud-dev-guide
topic: hold-setup
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:25.061Z
estimatedTokens: 143
keywords: [Hold, Setup, Output, representation]
---

# Hold Setup

> Output representation of the response details to create a hold setup.

# Hold Setup

Output representation of the response details to create a hold setup.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| aptAssignmentId | String | Unique ID of the action plan template created for the hold. | Big, 64.0 | 64.0 |
| regulatoryCodeId | String | Unique ID of the Hold that was setup. | Big, 64.0 | 64.0 |
| regulatory​CodeRegClVerId | String[] | Unique ID of the regulatory code regulation clause version associated with the hold. | Big, 64.0 | 64.0 |

## Code Examples

```
{
  "regulatoryCodeId": "0x8y556ddd",
  "regulatoryCodeRegClVerId": [
    "0x8y556dd3",
    "0x7725ss"
  ],
  "aptAssignmentId": "0x5567777d"
}
```
