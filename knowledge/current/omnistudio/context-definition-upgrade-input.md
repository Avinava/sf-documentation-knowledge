---
title: "Context Definition Upgrade Input"
domain: omnistudio
topic: context-definition-upgrade-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:47.169Z
estimatedTokens: 116
keywords: [Context, Definition, Upgrade, Input, representation]
---

# Context Definition Upgrade Input

> Input representation of context definition upgrade.

# Context Definition Upgrade Input

Input representation of context definition upgrade.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contextDefinitionId | String | ID of this context definition to be upgraded. | Required | 64.0 |
| upgradeMode | String | The upgrade mode enum. Possible values are:SyncPreviewOverrideThe default value is Sync. | Optional | 64.0 |

## Code Examples

```
{
  "contextDefinitions": [
    {
      "contextDefinitionId": "11Oxx0000006PfZEAU",
      "upgradeMode": "Sync"
    }
  ]
}
```
