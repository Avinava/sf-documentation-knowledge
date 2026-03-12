---
title: "List Current Share Collection Input"
domain: chatterapi
topic: list-current-share-collection-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.966Z
estimatedTokens: 92
keywords: [Current, Share, Collection, Input, Shares, associate]
---

# List Current Share Collection Input

> Shares to associate with a list.

# List Current Share Collection Input

Shares to associate with a list.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| currentListShares | String[] | List of API names or 15-character IDs that identify the groups or roles with which to share the list. | Required | 44.0 |

## Code Examples

```
{"currentListShares": ["00GD00000000izfKAA", "00GD00000000izfKAA", "00GD00000000izfKAA"]
}
```
