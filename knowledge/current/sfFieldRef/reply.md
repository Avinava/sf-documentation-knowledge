---
title: "Reply"
domain: sfFieldRef
topic: reply
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:12.223Z
estimatedTokens: 332
keywords: [Reply, user, submitted, question, answers, zone]
---

# Reply

> Represents a reply that a user has submitted to a
    question in an answers zone.

# Reply

Represents a reply that a user has submitted to a question in an answers zone.

For more information, see Reply in the Object Reference for Salesforce and Lightning Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Body | Reply Body | textarea |  | 32000 |  |  |
| CommunityId | Zone ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CreatorFullPhotoUrl | Url of Creator's Profile Photo | string |  | 255 |  |  |
| CreatorName | Name of Creator | string |  | 121 |  |  |
| CreatorSmallPhotoUrl | Url of Creator's Thumbnail Photo | string |  | 255 |  |  |
| DownVotes | Down Votes | int | 9 |  |  |  |
| Id | Reply ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| NumReportAbuses | Number of Report Abuses | int | 9 |  |  |  |
| QuestionId | Question ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UpVotes | Up Votes | int | 9 |  |  |  |
| VoteTotal | Vote Total | double |  |  | 18 | 0 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
