---
title: "GameParticipantReward"
domain: sfFieldRef
topic: gameparticipantreward
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:59.213Z
estimatedTokens: 364
keywords: [GameParticipantReward, reward, that’s, provided, participant, they’ve, played, game]
---

# GameParticipantReward

> Represents the reward that’s provided to a participant after they’ve
         played a game.

# GameParticipantReward

Represents the reward that’s provided to a participant after they’ve played a game.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see GameParticipantReward in the Loyalty Management Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| ExpirationDate | Expiration Date | datetime |  |  |  |  |
| GameParticipantId | Game Participant ID | reference |  | 18 |  |  |
| GameRewardId | Game Reward ID | reference |  | 18 |  |  |
| Id | Game Participant Reward ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IssuedRewardReferenceId | Issued Reward Reference ID | reference |  | 18 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| SourceActivityId | Source Activity ID | reference |  | 18 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
