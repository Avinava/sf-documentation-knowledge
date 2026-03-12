---
title: "VisitedPartyFeed"
domain: sfFieldRef
topic: visitedpartyfeed
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:16.734Z
estimatedTokens: 354
keywords: [VisitedPartyFeed, posts, feed-tracked, changes, VisitedParty, API, version, 49.0, later]
---

# VisitedPartyFeed

> This object represents the posts and feed-tracked changes of the VisitedParty object.  This object is available in API
    version 49.0 and later.

# VisitedPartyFeed

This object represents the posts and feed-tracked changes of the VisitedParty object. This object is available in API version 49.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see VisitedPartyFeed in the Life Sciences Cloud Developer Guide and Salesforce Health Cloud Developer Guide.

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
