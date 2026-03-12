---
title: "Idea"
domain: sfFieldRef
topic: idea
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:00.628Z
estimatedTokens: 553
keywords: [Idea, users, allowed, comment, vote, suggestion, enhancement, product, process, API, version, later]
---

# Idea

> Represents an idea on which users are allowed to
        comment and vote, for example, a suggestion for an enhancement to an existing product or
        process.
    This object is available in API version 12 and later.

# Idea

Represents an idea on which users are allowed to comment and vote, for example, a suggestion for an enhancement to an existing product or process. This object is available in API version 12 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [Idea](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_idea.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Body | Idea Body | textarea |  | 32000 |  |  |
| Categories | Categories | multipicklist |  | 4099 | 7 |  |
| CommunityId | Zone ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CreatorFullPhotoUrl | URL of Creator's Profile Photo | string |  | 255 |  |  |
| CreatorName | Name of Creator | string |  | 121 |  |  |
| CreatorSmallPhotoUrl | URL of Creator's Thumbnail Photo | string |  | 255 |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Idea ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsHtml | IsHtml | boolean |  |  |  |  |
| IsMerged | Is Merged | boolean |  |  |  |  |
| LastCommentDate | Last Idea Comment Date | datetime |  |  |  |  |
| LastCommentId | Idea Comment ID | reference |  | 18 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| NumComments | Number of Comments | int | 9 |  |  |  |
| ParentIdeaId | Idea ID | reference |  | 18 |  |  |
| RecordTypeId | Record Type ID | reference |  | 18 |  |  |
| Status | Status | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Title | Title | string |  | 255 |  |  |
| VoteScore | Vote Score | double |  |  | 18 | 4 |
| VoteTotal | Vote Total | double |  |  | 18 | 0 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
