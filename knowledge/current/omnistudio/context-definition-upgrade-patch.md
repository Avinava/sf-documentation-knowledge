---
title: "Context Definition Upgrade (PATCH)"
domain: omnistudio
topic: context-definition-upgrade-patch
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:48.984Z
estimatedTokens: 240
keywords: [Context, Definition, Upgrade, PATCH, context, definition., Once, extended, definition, created, base, standard, API, reflect, any, updates, made]
---

# Context Definition Upgrade (PATCH)

> Upgrade a context definition. Once an extended definition is created from a base
        standard definition, use this API to reflect any updates made to the base standard
        definition in the extended definition.

# Context Definition Upgrade (PATCH)

Upgrade a context definition. Once an extended definition is created from a base standard definition, use this API to reflect any updates made to the base standard definition in the extended definition.

Resource

```

```

Example for PATCH

```

```

Available version

64.0

HTTP methods

PATCH

Request body for PATCH

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contextDefinitionId | String | ID of this context definition to be upgraded. | Required | 64.0 |
| upgradeMode | String | The upgrade mode enum. Possible values are:SyncPreviewOverrideThe default value is Sync. | Optional | 64.0 |

Response body for PATCH

[Context Definition Information](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_definition_info.htm "Output representation of context definition information.")

## Code Examples

```
/connect/context-definitions/upgrades
```

```
https://yourInstance.salesforce.com/services/data/v64.0/connect/context-definitions/upgrades
```

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

## Related Topics

- Context Definition Information (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_definition_info.htm)
