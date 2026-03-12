---
title: "Target Update Input"
domain: chatterapi
topic: target-update-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.958Z
estimatedTokens: 204
keywords: [Target, Input]
---

# Target Update Input

> Target to update.

# Target Update Input

Target to update.

Root XML tag

<target>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| audienceId | String | ID of the audience to assign to the target. | Required if priority isn’t specified. Otherwise, Optional | 47.0 |
| priority | Integer | Priority of the target. Within a group, priority determines which target is returned if the user matches more than one audience. | Required if audienceId isn’t specified. Otherwise, Optional | 47.0 |
| targetId | String | ID of the target to update. | Required | 47.0 |

#### See Also

-   [Target Collection Update Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_target_collection_update_input.htm "Collection of targets to update.")

## Code Examples

```
{
   "audienceId":"6AuRM0000004D5w0AE",
   "priority":1,
   "targetId":"6AtRM0000000II30AM"
}
```

## Related Topics

- Target Collection Update Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_target_collection_update_input.htm)
