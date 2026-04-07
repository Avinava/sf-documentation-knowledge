---
title: "ImportDefinitionColumnBasedActionType"
domain: mc-apis
topic: importdefinitioncolumnbasedactiontype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:22.423Z
estimatedTokens: 246
keywords: [ImportDefinitionColumnBasedActionType, action, take, columns, import, definition]
---

# ImportDefinitionColumnBasedActionType

> The ImportDefinitionColumnBasedActionType object indicates which action to take on columns during an import definition.

# ImportDefinitionColumnBasedActionType

The ImportDefinitionColumnBasedActionType object indicates which action to take on columns during an import definition.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| AddAndUpdate | Enumeration | Adds new subscribers and updates existing subscribers. This property applies to both subscriber lists and data extensions. It corresponds to the Add and Update option in Marketing Cloud. |
| AddButDoNotUpdate | Enumeration | Indicates that values are added if no value is present, but existing values are not changed |
| Delete | Enumeration | Indicates whether an object is deleted. |
| Skip | Enumeration | Indicates that this value is skipped with no action taken. |
| UpdateButDoNotAdd | Enumeration | Indicates that any existing values are updated, but no new values can be entered. This property applies to both subscriber lists and data extensions. It corresponds to the Update Only option in Marketing Cloud. |
