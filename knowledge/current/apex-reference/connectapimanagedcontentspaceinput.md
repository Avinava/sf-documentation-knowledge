---
title: "ConnectApi.ManagedContentSpaceInput"
domain: apex-reference
topic: connectapimanagedcontentspaceinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:25.343Z
estimatedTokens: 227
keywords: [ConnectApi.ManagedContentSpaceInput, managed, content, space]
---

# ConnectApi.ManagedContentSpaceInput

> Create a managed content space.

# ConnectApi.ManagedContentSpaceInput

Create a managed content space.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| apiName | String | API name of the managed content space. | Optional | 64.0 |
| defaultLanguage | String | Default language of the managed content space. | Optional | 64.0 |
| description | String | Description of the managed content space. | Optional | 64.0 |
| name | String | Name of the managed content space. | Required | 64.0 |
| spaceType | ConnectApi.​ManagedContent​SpaceType | Type of managed content space. Values are:ContentMarketing | Optional | 64.0 |

#### See Also

-   [postManagedContentSpace(ManagedContentSpaceInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentSpaces_static_methods.htm#apex_ConnectAPI_ManagedContentSpaces_postManagedContentSpace_2 "Create a managed content space.")

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​ManagedContent​SpaceType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- postManagedContentSpace(ManagedContentSpaceInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentSpaces_static_methods.htm)
