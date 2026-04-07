---
title: "Formula Scope"
domain: chatterapi
topic: formula-scope
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:19.615Z
estimatedTokens: 179
keywords: [Formula, Scope, target]
---

> Formula scope for a target.

# Formula Scope

Formula scope for a target.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| contextValues | Map<String, String> | Map of context values for the scope.NoteIn version 52.0 and later, use the contextValuesMap property. | Small, 50.0 | 50.0–51.0 |
| contextValuesMap | Map<String, Object> | Map of context values for the scope. | Small, 52.0 | 52.0 |
| fields | String[] | List of fields of the scope. | Small, 50.0 | 50.0 |
| formula | String | Formula of the scope. | Medium, 50.0 | 50.0 |

#### See Also

-   [Target](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_target.htm "Personalization target information.")

## Related Topics

- Target (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_target.htm)
