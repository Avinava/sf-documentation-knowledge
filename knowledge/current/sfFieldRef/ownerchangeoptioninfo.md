---
title: "OwnerChangeOptionInfo"
domain: sfFieldRef
topic: ownerchangeoptioninfo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:06.361Z
estimatedTokens: 344
keywords: [OwnerChangeOptionInfo, actions, performed, record’s, owner, changed, API, version, 35.0, later, query, change, metadata, Tooling, instead]
---

# OwnerChangeOptionInfo

> Represents default and
    optional actions that can be performed when a record’s owner is changed. Available in API
   version 35.0 and later, but to query for change owner metadata, use the OwnerChangeOptionInfo
   object in Tooling API instead. For more information, see OwnerChangeOptionInfo in the Tooling
   API.

# OwnerChangeOptionInfo

Represents default and optional actions that can be performed when a record’s owner is changed. Available in API version 35.0 and later, but to query for change owner metadata, use the OwnerChangeOptionInfo object in Tooling API instead. For more information, see [OwnerChangeOptionInfo](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_tooling.meta/api_tooling/tooling_api_objects_ownerchangeoptioninfo.htm) in the Tooling API.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [OwnerChangeOptionInfo](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_ownerchangeoptioninfo.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| DefaultValue | Default Value | boolean |  |  |  |  |
| DurableId | Durable ID | string |  | 255 |  |  |
| EntityDefinitionId | Entity Definition ID | string |  | 70 |  |  |
| Id | Change Owner Option ID | id |  | 18 |  |  |
| IsEditable | Is Editable | boolean |  |  |  |  |
| Label | Label | string |  | 150 |  |  |
| Name | Name | string |  | 150 |  |  |
| ParentId | Change Owner Option ID | string |  | 70 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
