---
title: "Target Collection Update Input"
domain: chatterapi
topic: target-collection-update-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.944Z
estimatedTokens: 82
keywords: [Target, Collection, Input, targets]
---

# Target Collection Update Input

> Collection of targets to update.

# Target Collection Update Input

Collection of targets to update.

Root XML tag

<targetCollection>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| targets | Target Update Input[] | List of targets to update. | Required | 47.0 |

## Code Examples

```
{
   "targets": [{
      "audienceId":"6AuRM0000004D5w0AE",
      "priority":1,
      "targetId":"6AtRM0000000II30AM"
      }
   ]
}
```

## Related Topics

- Target Update Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_target_update_input.htm)
