---
title: "Referral"
domain: sfFieldRef
topic: referral
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:11.916Z
estimatedTokens: 720
keywords: [Referral, client, referrals, organization, API, version, 56.0, later]
---

# Referral

> Represents the information on client referrals in an
         organization. This object is available in API version 56.0 and later.

# Referral

Represents the information on client referrals in an organization. This object is available in API version 56.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see Referral in the Case Management Guide, Public Sector Solutions Developer Guide, and Referral Marketing Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CaseId | Case ID | reference |  | 18 |  |  |
| Category | Category | picklist |  | 40 |  |  |
| ClientEmail | Client Email | email |  | 80 |  |  |
| ClientId | Account ID | reference |  | 18 |  |  |
| ClientLanguage | Client Language | multipicklist |  | 4099 | 0 |  |
| ClientName | Client Name | string |  | 255 |  |  |
| ClientPhone | Client Phone | phone |  | 40 |  |  |
| Comments | Comments | textarea |  | 5000 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | textarea |  | 5000 |  |  |
| Id | Referral ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsSelfReferred | Self Referred | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OutboundSourceId | Referral Outbound Source ID | reference |  | 18 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| Priority | Priority | picklist |  | 40 |  |  |
| ProgramId | Referral Program ID | reference |  | 18 |  |  |
| ProviderEmail | Provider Email | email |  | 80 |  |  |
| ProviderId | Provider ID | reference |  | 18 |  |  |
| ProviderName | Provider Name | string |  | 255 |  |  |
| ProviderOrg | Provider Org | string |  | 255 |  |  |
| ProviderPhone | Provider Phone | phone |  | 40 |  |  |
| ReferralDate | Referral Date | date |  |  |  |  |
| ReferralType | Referral Type | picklist |  | 255 |  |  |
| ReferrerEmail | Referrer Email | email |  | 80 |  |  |
| ReferrerId | Referrer ID | reference |  | 18 |  |  |
| ReferrerName | Referrer Name | string |  | 255 |  |  |
| ReferrerOrg | Referrer Org | string |  | 255 |  |  |
| ReferrerPhone | Referrer Phone | phone |  | 40 |  |  |
| Result | Result | textarea |  | 1000 |  |  |
| ResultCategory | Result Category | picklist |  | 40 |  |  |
| Source | Source | picklist |  | 40 |  |  |
| Status | Status | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Title | Title | string |  | 255 |  |  |
| UsageType | Usage Type | picklist |  | 40 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
