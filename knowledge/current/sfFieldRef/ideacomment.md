---
title: "IdeaComment"
domain: sfFieldRef
topic: ideacomment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:00.633Z
estimatedTokens: 321
keywords: [IdeaComment, comment, user, submitted, idea]
---

# IdeaComment

> Represents a comment that a user has submitted
    in response to an idea.

# IdeaComment

Represents a comment that a user has submitted in response to an idea.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [IdeaComment](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_ideacomment.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CommentBody | Comment Body | textarea |  | 4000 |  |  |
| CommunityId | Zone ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CreatorFullPhotoUrl | URL of Creator's Profile Photo | string |  | 255 |  |  |
| CreatorName | Name of Creator | string |  | 121 |  |  |
| CreatorSmallPhotoUrl | URL of Creator's Thumbnail Photo | string |  | 255 |  |  |
| Id | Idea Comment ID | id |  | 18 |  |  |
| IdeaId | Idea ID | reference |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsHtml | IsHtml | boolean |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UpVotes | Up Votes | int | 9 |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
