---
title: "Reopened By Input"
domain: life-sciences-dev-guide
topic: reopened-by-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:55.303Z
estimatedTokens: 97
keywords: [Reopened, person, care]
---

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
