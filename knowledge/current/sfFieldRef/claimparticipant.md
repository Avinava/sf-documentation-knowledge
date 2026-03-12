---
title: "ClaimParticipant"
domain: sfFieldRef
topic: claimparticipant
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:53.097Z
estimatedTokens: 456
keywords: [ClaimParticipant, participants, claim, insured, claimants, witnesses, associates, claims, participant, accounts]
---

# ClaimParticipant

> Represents the participants of a claim such as those insured, the
         claimants, and the witnesses. The object associates claims with participant
      accounts.

# ClaimParticipant

Represents the participants of a claim such as those insured, the claimants, and the witnesses. The object associates claims with participant accounts.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see ClaimParticipant in the Automotive Cloud Developer Guide, Financial Services Cloud Developer Guide, Manufacturing Cloud Developer Guide, and Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ClaimId | Claim ID | reference |  | 18 |  |  |
| ClaimInstanceIdentifier | Claim Instance Identifier | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Claim Participant ID | id |  | 18 |  |  |
| InsurancePolicyParticipantId | Insurance Policy Participant ID | reference |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsInjured | Injured | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| ParticipantAccountId | Account ID | reference |  | 18 |  |  |
| ParticipantContactId | Contact ID | reference |  | 18 |  |  |
| Roles | Roles | multipicklist |  | 4099 | 0 |  |
| SourceSystem | Source System | string |  | 255 |  |  |
| SourceSystemIdentifier | Source System Identifier | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
