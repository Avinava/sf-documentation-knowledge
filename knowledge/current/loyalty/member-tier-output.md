---
title: "Member Tier Output"
domain: loyalty
topic: member-tier-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:51.546Z
estimatedTokens: 390
keywords: [Member, Tier, Output, loyalty, program, member's, associated, tiers]
---

# Member Tier Output

> Represents the details of the loyalty program member's associated tiers.

# Member Tier Output

Represents the details of the loyalty program member's associated tiers.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| additionalLoyaltyMemberTierFields | Map<String, Object> | The details of the custom fields added in the Loyalty Member Tier object. | Small, 55.0 | 55.0 |
| areTierBenefitsAssigned | Boolean | Indicates whether the benefits associated with the tier have been assigned to the member (true) or not (false). | Small, 55.0 | 55.0 |
| loyaltyMemberTierId | String | The ID of tier associated with the loyalty program member. | Small, 55.0 | 55.0 |
| loyaltyMemberTierName | String | The name of the loyalty member tier. | Small, 55.0 | 55.0 |
| tierChangeReason | String | The reason why the member's was assigned the current tier. | Small, 55.0 | 55.0 |
| tierChangeReasonType | String | The reason type why the member's was assigned the current tier. | Small, 55.0 | 55.0 |
| tierEffectiveDate | String | The date on which the member was assigned the tier. | Small, 55.0 | 55.0 |
| tierExpirationDate | String | The date on which the member's current tier expires. | Small, 55.0 | 55.0 |
| tierGroupId | String | The ID of the tier group associated with the Loyalty Tier record. | Small, 55.0 | 55.0 |
| tierGroupName | String | The name of the tier group. | Small, 55.0 | 55.0 |
| tierId | String | The ID of the Loyalty Tier record. | Small, 55.0 | 55.0 |
| tierSequenceNumber | Integer | The sequence number of the tier. | Small, 55.0 | 55.0 |
