---
title: "ConnectApi.ManagedContentSpaceInput"
domain: apex-reference
topic: connectapimanagedcontentspaceinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:37.286Z
keywords: [ConnectApi.ManagedContentSpaceInput, See]
---

# ConnectApi.ManagedContentSpaceInput

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