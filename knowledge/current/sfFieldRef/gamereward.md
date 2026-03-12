---
title: "GameReward"
domain: sfFieldRef
topic: gamereward
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:59.237Z
estimatedTokens: 398
keywords: [GameReward, reward, that’s, offered, participants, game]
---

# GameReward

> The reward that’s offered to participants of a game.

# GameReward

The reward that’s offered to participants of a game.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see GameReward in the Loyalty Management Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Color | Color | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| CurrentRewardCount | Current Reward Count | int | 9 |  |  |  |
| Description | Description | textarea |  | 1000 |  |  |
| GameDefinitionId | Game Definition ID | reference |  | 18 |  |  |
| Id | Game Reward ID | id |  | 18 |  |  |
| ImageUrl | Image URL | string |  | 255 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MaximumRewardCount | Maximum Reward Count | int | 9 |  |  |  |
| Name | Name | string |  | 255 |  |  |
| RewardDefinitionId | Reward Definition ID | reference |  | 18 |  |  |
| RewardType | Reward Type | picklist |  | 255 |  |  |
| RewardValue | Reward Value | double |  |  | 12 | 2 |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| WinProbability | Win Probability | double |  |  | 12 | 2 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
