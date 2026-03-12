---
title: "Target Collection Input"
domain: chatterapi
topic: target-collection-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.941Z
estimatedTokens: 78
keywords: [Target, Collection, Input, targets]
---

# Target Collection Input

> Collection of targets to create.

# Target Collection Input

Collection of targets to create.

Root XML tag

<targetCollection>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| targets | Target Input[] | List of targets to create. | Required | 47.0 |

## Code Examples

```
{
   "targets": [{
      "audienceId":"6AuRM0000004D5w0AE",
      "groupName":"2b8bc305-d415-49f9-8e24-814455427324",
      "priority":1,
      "publishStatus":"Draft",
      "targetType":"ExperienceVariation",
      "targetValue":"ContactSupport_ContactSupportForCalifornia_Page"
      }
   ]
}
```

## Related Topics

- Target Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_target_input.htm)
