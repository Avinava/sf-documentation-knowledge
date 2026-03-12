---
title: "FeedRevision"
domain: sfFieldRef
topic: feedrevision
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:57.906Z
estimatedTokens: 314
keywords: [FeedRevision, Holds, revision, history, specific, feed, item, comment, including, attributes, changed, API, version, 34.0, later]
---

# FeedRevision

> Holds the revision history of a specific feed item or comment,
      including a list of attributes that changed for each revision. This object is available in API version 34.0 and
    later.

# FeedRevision

Holds the revision history of a specific feed item or comment, including a list of attributes that changed for each revision. This object is available in API version 34.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [FeedRevision](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_feedrevision.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Action | Action | picklist |  | 40 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EditedAttribute | Edited Attribute | picklist |  | 40 |  |  |
| FeedEntityId | Feed Entity ID | reference |  | 18 |  |  |
| Id | Feed Revision ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsValueRichText | Is Value RichText | boolean |  |  |  |  |
| Revision | Revision | int | 9 |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Value | Value | textarea |  | 10000 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
