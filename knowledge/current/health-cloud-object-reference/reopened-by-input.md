---
title: "Reopened By Input"
domain: health-cloud-object-reference
topic: reopened-by-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:33.161Z
estimatedTokens: 97
keywords: [Reopened, Input, person, care]
---

# Reopened By Input

> The name of the person who reopened the care request.

# Reopened By Input

The name of the person who reopened the care request.

Root XML tag

<reopenedBy>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| username | String | The user who reopened the care request. | NoNoteThis field is required if reopenedBy is passed in the request. | 52.0 |

## Code Examples

```
"reopenedBy": {
   "username": "admin@um.org"
}
```
