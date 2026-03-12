---
title: "LinkedArticleFeed"
domain: sfFieldRef
topic: linkedarticlefeed
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:02.373Z
estimatedTokens: 376
keywords: [LinkedArticleFeed, comment, feed, linked, article, API, version, 39.0, later]
---

# LinkedArticleFeed

> Represents the comment feed on a linked article. This object is available
    in API version 39.0 and later.

# LinkedArticleFeed

Represents the comment feed on a linked article. This object is available in API version 39.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [LinkedArticleFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_linkedarticlefeed.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BestCommentId | Best Comment ID | reference |  | 18 |  |  |
| Body | Body | textarea |  | 10000 |  |  |
| CommentCount | Comment Count | int | 9 |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Feed Item ID | id |  | 18 |  |  |
| InsertedById | InsertedBy ID | reference |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsRichText | Is Rich Text | boolean |  |  |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LikeCount | Like Count | int | 9 |  |  |  |
| LinkUrl | Link URL | url |  | 1000 |  |  |
| ParentId | Parent ID | reference |  | 18 |  |  |
| RelatedRecordId | Related Record ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Title | Title | string |  | 255 |  |  |
| Type | Feed Item Type | picklist |  | 40 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
