---
title: "BusinessProfile"
domain: sfFieldRef
topic: businessprofile
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:50.768Z
estimatedTokens: 492
keywords: [BusinessProfile, business, license, permit, application, API, version, 49.0, later]
---

# BusinessProfile

> Represents details about the business on the license or permit application. This object is available in API version 49.0 and later.

# BusinessProfile

Represents details about the business on the license or permit application. This object is available in API version 49.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see BusinessProfile in the Education Cloud Developer Guide, Emergency Response Management Object Reference, Financial Services Cloud Developer Guide, and Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| ConsecWorkersCompCoverage | Consecutive Years of Workers' Compensation Coverage | int | 9 |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CreditTypesUsed | Credit Types Used | int | 9 |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| HasDishonoredPolicies | Dishonored Policies | boolean |  |  |  |  |
| HasSufferedBankruptcy | Suffered Bankruptcy | boolean |  |  |  |  |
| HasUncorrectedSafetyViolations | Uncorrected Safety Violations | boolean |  |  |  |  |
| Id | Business Profile ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| SourceSystem | Source System | string |  | 255 |  |  |
| SourceSystemIdentifier | Source System Identifier | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| WorkersCompClaims | Workers' Compensation Claims | int | 9 |  |  |  |
| WorkersCompMedicalClaims | Workers' Compensation Medical Claims | int | 9 |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
