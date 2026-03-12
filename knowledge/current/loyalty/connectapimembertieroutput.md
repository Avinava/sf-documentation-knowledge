---
title: "ConnectApi.MemberTierOutput"
domain: loyalty
topic: connectapimembertieroutput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:50.772Z
estimatedTokens: 346
keywords: [ConnectApi.MemberTierOutput, Output, representation, loyalty, program, member's, associated, tiers]
---

# ConnectApi.MemberTierOutput

> Output representation of the details of the loyalty program member's
      associated tiers.

# ConnectApi.MemberTierOutput

Output representation of the details of the loyalty program member's associated tiers.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| additionalLoyalty​MemberTierFields | Map<String, Object> | The details of the custom fields added in the Loyalty Member Tier object. | 55.0 |
| areTierBenefits​Assigned | Boolean | Indicates whether the benefits associated with the tier have been assigned to the member (true) or not (false). | 55.0 |
| loyaltyMemberTierId | String | The tier ID associated with the loyalty program member. | 55.0 |
| loyaltyMemberTierName | String | The name of the loyalty member tier. | 55.0 |
| tierChangeReason | String | The reason why the member's was assigned the current tier. | 55.0 |
| tierChangeReasonType | String | The reason type why the member's was assigned the current tier. | 55.0 |
| tierEffectiveDate | Datetime | The date on which the member was assigned the tier. | 55.0 |
| tierExpirationDate | Datetime | The date on which the member's current tier expires. | 55.0 |
| tierGroupId | String | The ID of the tier group associated with the Loyalty Tier record. | 55.0 |
| tierGroupName | String | The name of the tier group. | 55.0 |
| tierId | String | The ID of the loyalty tier record. | 55.0 |
| tierSequenceNumber | Integer | The sequence number of the tier. | 55.0 |
