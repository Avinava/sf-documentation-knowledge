---
title: "LiveAgentSessionShare"
domain: sfFieldRef
topic: liveagentsessionshare
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:02.460Z
estimatedTokens: 283
keywords: [LiveAgentSessionShare, automatically, created, Chat, session, stores, API, versions, 28.0, later]
---

# LiveAgentSessionShare

> This object is automatically created for each Chat session and stores
   information about the session. This object is available in API versions 28.0 and
  later.

# LiveAgentSessionShare

This object is automatically created for each Chat session and stores information about the session. This object is available in API versions 28.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [LiveAgentSessionShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_liveagentsessionshare.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccessLevel | Custom Object Access | picklist |  | 40 |  |  |
| Id | Custom Object Share ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| ParentId | Parent ID | reference |  | 18 |  |  |
| RowCause | Row Cause | picklist |  | 40 |  |  |
| UserOrGroupId | User/Group ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
