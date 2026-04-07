---
title: "ImportDefinitionUpdateType"
domain: mc-apis
topic: importdefinitionupdatetype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:22.440Z
estimatedTokens: 316
keywords: [ImportDefinitionUpdateType, how, import, definition, handles, new, data, process]
---

# ImportDefinitionUpdateType

> The ImportDefinitionUpdateType object defines how the import definition handles new and existing data during the import process.

# ImportDefinitionUpdateType

The ImportDefinitionUpdateType object defines how the import definition handles new and existing data during the import process.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| AddAndDoNotUpdate | Enumeration | Ignores existing subscribers and only adds new subscribers. This property applies to both subscriber lists and data extensions. It corresponds to the Add Only option in Marketing Cloud. |
| AddAndUpdate | Enumeration | Adds new subscribers and updates existing subscribers. his property applies to both subscriber lists and data extensions. It corresponds to the Add and Update option in Marketing Cloud. |
| ColumnBased | Enumeration | Indicates that information in the import is updated based on columns. |
| Merge | Enumeration | Reserved for future use. |
| Overwrite | Enumeration | Indicates that imported information overwrites existing data. This property applies to data extensions, and it can be used only if no primary key is available. |
| UpdateButDoNotAdd | Enumeration | Indicates that any existing values are updated, but no new values can be entered. This property applies to both subscriber lists and data extensions. It corresponds to the Update Only option in Marketing Cloud. |
