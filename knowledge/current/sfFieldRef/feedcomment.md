---
title: "FeedComment"
domain: sfFieldRef
topic: feedcomment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:57.877Z
estimatedTokens: 459
keywords: [FeedComment, comment, added, feed, user, API, version, 18.0, later]
---

# FeedComment

> Represents a comment added to a feed by
          a user.
      This object is available in API version 18.0 and later.

# FeedComment

Represents a comment added to a feed by a user. This object is available in API version 18.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [FeedComment](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_feedcomment.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CommentBody | Comment Body | textarea |  | 10000 |  |  |
| CommentType | Comment Type | picklist |  | 40 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| FeedItemId | Feed Item ID | reference |  | 18 |  |  |
| HasEntityLinks | Has entity links | boolean |  |  |  |  |
| Id | Feed Comment ID | id |  | 18 |  |  |
| InsertedById | InsertedBy ID | reference |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsRichText | Is Rich Text | boolean |  |  |  |  |
| IsVerified | Is a Verified Comment | boolean |  |  |  |  |
| LastEditById | Last Edit By ID | reference |  | 18 |  |  |
| LastEditDate | Last Edit Date | datetime |  |  |  |  |
| ParentId | Parent ID | reference |  | 18 |  |  |
| RelatedRecordId | Related Record ID | reference |  | 18 |  |  |
| Revision | Revision | int | 9 |  |  |  |
| Status | Status | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| ThreadChildrenCount | Thread Children Count | int | 9 |  |  |  |
| ThreadLastUpdatedDate | Thread Last Updated Date | datetime |  |  |  |  |
| ThreadLevel | Thread Level | int | 9 |  |  |  |
| ThreadParentId | Feed Comment ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
