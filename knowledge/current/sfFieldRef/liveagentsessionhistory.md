---
title: "LiveAgentSessionHistory"
domain: sfFieldRef
topic: liveagentsessionhistory
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:02.456Z
estimatedTokens: 294
keywords: [LiveAgentSessionHistory, automatically, created, Chat, session, stores, changes, made, API, versions, 28.0, later]
---

# LiveAgentSessionHistory

> This object is automatically created for each Chat session and stores
      information about changes made to the session. This object is available in API versions
    28.0 and later.

# LiveAgentSessionHistory

This object is automatically created for each Chat session and stores information about changes made to the session. This object is available in API versions 28.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [LiveAgentSessionHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_liveagentsessionhistory.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DataType | Datatype | picklist |  | 40 |  |  |
| Field | Changed Field | picklist |  | 255 |  |  |
| Id | Chat Session History ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LiveAgentSessionId | Chat Session ID | reference |  | 18 |  |  |
| NewValue | New Value | anyType |  | 255 |  |  |
| OldValue | Old Value | anyType |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
