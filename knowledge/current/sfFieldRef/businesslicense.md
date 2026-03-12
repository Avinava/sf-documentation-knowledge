---
title: "BusinessLicense"
domain: sfFieldRef
topic: businesslicense
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:50.653Z
estimatedTokens: 728
keywords: [BusinessLicense, authorization, issued, regulatory, agency, granted, organization, contact, specific, user]
---

# BusinessLicense

> Represents an authorization issued by a regulatory agency. The
		authorization can be granted to an organization, a contact, or a specific user.

# BusinessLicense

Represents an authorization issued by a regulatory agency. The authorization can be granted to an organization, a contact, or a specific user.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see BusinessLicense in the Emergency Response Management Object Reference, Emergency Response Management for Public Health Developer Guide, Financial Services Cloud Developer Guide, Life Sciences Cloud Developer Guide, and Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| BusinessTypeId | Business Type ID | reference |  | 18 |  |  |
| ContactId | Contact ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | string |  | 255 |  |  |
| HealthcareProviderId | Healthcare Provider ID | reference |  | 18 |  |  |
| Id | Business License ID | id |  | 18 |  |  |
| Identifier | Identifier | string |  | 255 |  |  |
| IsActive | Is Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsPrimaryLicense | Primary license | boolean |  |  |  |  |
| IssueDate | Issue Date | date |  |  |  |  |
| Issuer | Issuer | string |  | 255 |  |  |
| JurisdictionCountry | Jurisdiction Country | string |  | 255 |  |  |
| JurisdictionOther | Jurisdiction Other | string |  | 255 |  |  |
| JurisdictionState | Jurisdiction State | string |  | 255 |  |  |
| JurisdictionType | Jurisdiction Type | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LicenseClass | License Class | picklist |  | 40 |  |  |
| LicenseNumber | License Number | string |  | 255 |  |  |
| LineOfAuthority | Line Of Authority | picklist |  | 40 |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PeriodEnd | Period End | datetime |  |  |  |  |
| PeriodStart | Period Start | datetime |  |  |  |  |
| RegulatoryAuthorizationTypeId | Regulatory Authorization Type ID | reference |  | 18 |  |  |
| ResidenceStatus | Residence Status | picklist |  | 40 |  |  |
| SourceSystemUpdateDate | Source System Updated Date | date |  |  |  |  |
| Status | Status | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UserId | User ID | reference |  | 18 |  |  |
| VerificationStatus | Verification Status | picklist |  | 40 |  |  |
| VerifiedDate | Verified On | date |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
