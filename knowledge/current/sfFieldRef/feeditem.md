---
title: "FeedItem"
domain: sfFieldRef
topic: feeditem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:57.886Z
estimatedTokens: 519
keywords: [FeedItem, entry, feed, changes, record, including, text, posts, link, content, API, version, 21.0, later, replaces]
---

# FeedItem

> FeedItem represents an entry in the feed, such
        as changes in a record feed, including text posts, link posts, and content posts.
      This object is available in API version 21.0 and later.
      This object replaces FeedPost.

# FeedItem

FeedItem represents an entry in the feed, such as changes in a record feed, including text posts, link posts, and content posts. This object is available in API version 21.0 and later. This object replaces FeedPost.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [FeedItem](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_feeditem.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BestCommentId | Best Comment ID | reference |  | 18 |  |  |
| Body | Body | textarea |  | 10000 |  |  |
| CommentCount | Comment Count | int | 9 |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| HasContent | Has Content | boolean |  |  |  |  |
| HasFeedEntity | Has Feed Entity Attachment | boolean |  |  |  |  |
| HasLink | Has Link | boolean |  |  |  |  |
| HasVerifiedComment | Has Verified Comment | boolean |  |  |  |  |
| Id | Feed Item ID | id |  | 18 |  |  |
| InsertedById | InsertedBy ID | reference |  | 18 |  |  |
| IsClosed | Is Closed | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsRichText | Is Rich Text | boolean |  |  |  |  |
| LastEditById | Last Edit By ID | reference |  | 18 |  |  |
| LastEditDate | Last Edit Date | datetime |  |  |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LikeCount | Like Count | int | 9 |  |  |  |
| LinkUrl | Link URL | url |  | 1000 |  |  |
| ParentId | Parent ID | reference |  | 18 |  |  |
| RelatedRecordId | Related Record ID | reference |  | 18 |  |  |
| Revision | Revision | int | 9 |  |  |  |
| Status | Status | picklist |  | 40 |  |  |
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
