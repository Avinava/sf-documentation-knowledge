---
title: "LinkedArticleHistory"
domain: sfFieldRef
topic: linkedarticlehistory
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:02.378Z
estimatedTokens: 282
keywords: [LinkedArticleHistory, history, changes, made, tracked, linked, article, API, version, 37.0, later]
---

# LinkedArticleHistory

> Represents the history of changes made to tracked fields on a linked
			article. This object is available in API
		version 37.0 and later.

# LinkedArticleHistory

Represents the history of changes made to tracked fields on a linked article. This object is available in API version 37.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [LinkedArticleHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_linkedarticlehistory.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DataType | Datatype | picklist |  | 40 |  |  |
| Field | Changed Field | picklist |  | 255 |  |  |
| Id | Linked Article History ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LinkedArticleId | Linked Article ID | reference |  | 18 |  |  |
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
