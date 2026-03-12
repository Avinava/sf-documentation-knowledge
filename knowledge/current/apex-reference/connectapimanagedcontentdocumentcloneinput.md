---
title: "ConnectApi.ManagedContentDocumentCloneInput"
domain: apex-reference
topic: connectapimanagedcontentdocumentcloneinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:25.092Z
estimatedTokens: 253
keywords: [ConnectApi.ManagedContentDocumentCloneInput, Managed, content, clone, input.]
---

# ConnectApi.ManagedContentDocumentCloneInput

> Managed content clone input.

# ConnectApi.ManagedContentDocumentCloneInput

Managed content clone input.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| apiName | String | API name of the cloned content. | Optional | 61.0 |
| contentSpaceOr​FolderId | String | ID of the target folder for the cloned content. If unspecified, defaults to the folder of the source content. | Optional | 61.0 |
| includeVariants | Boolean | Specifies whether to include variants (true) or not (false) when cloning the content. If unspecified, default is false. | Optional | 61.0 |
| title | String | Title of the cloned content. If unspecified, “clone of” is appended to the source content’s title. | Optional | 61.0 |

#### See Also

-   [cloneManagedContentDocument(contentKeyOrId, ManagedContentCloneInputParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_cloneManagedContentDocument_1 "Clone a piece of managed content.")

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- cloneManagedContentDocument(contentKeyOrId, ManagedContentCloneInputParam) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm)
