---
title: "Question"
domain: sfFieldRef
topic: question
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:10.992Z
estimatedTokens: 516
keywords: [Question, zone, users, view, reply]
---

# Question

> Represents a question in a zone that users can
    view and reply to.

# Question

Represents a question in a zone that users can view and reply to.

For more information, see Question in the Object Reference for Salesforce and Lightning Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BestReplyId | Best Reply ID | reference |  | 18 |  |  |
| BestReplySelectedById | User ID | reference |  | 18 |  |  |
| Body | Question Body | textarea |  | 32000 |  |  |
| CommunityId | Zone ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CreatorFullPhotoUrl | Url of Creator's Profile Photo | string |  | 255 |  |  |
| CreatorName | Name of Creator | string |  | 121 |  |  |
| CreatorSmallPhotoUrl | Url of Creator's Thumbnail Photo | string |  | 255 |  |  |
| HasSingleFieldForContent | Has Single Field For Content | boolean |  |  |  |  |
| Id | Question ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastReplyDate | Last Reply Date | datetime |  |  |  |  |
| LastReplyId | Last Reply ID | reference |  | 18 |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MostReportAbusesOnReply | Most Report Abuses on Reply | int | 9 |  |  |  |
| NumReplies | Number of Replies | int | 9 |  |  |  |
| NumReportAbuses | Number of Report Abuses | int | 9 |  |  |  |
| NumSubscriptions | Number of Question Subscriptions | int | 9 |  |  |  |
| Origin | Question Origin | picklist |  | 40 |  |  |
| Priority | Question Priority | picklist |  | 255 |  |  |
| RecordTypeId | Record Type ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Title | Question Title | string |  | 255 |  |  |
| UpVotes | Up Votes | int | 9 |  |  |  |
| VoteScore | Vote Score | double |  |  | 18 | 4 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
