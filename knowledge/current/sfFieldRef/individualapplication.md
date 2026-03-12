---
title: "IndividualApplication"
domain: sfFieldRef
topic: individualapplication
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:00.974Z
estimatedTokens: 691
keywords: [IndividualApplication, application, form, submitted, individual, organization, API, version, 50.0, later]
---

# IndividualApplication

> Represents an application form submitted by an individual or
         organization. This object is available in API version 50.0 and later.

# IndividualApplication

Represents an application form submitted by an individual or organization. This object is available in API version 50.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see IndividualApplication in the Education Cloud Developer Guide, Emergency Response Management Object Reference, Emergency Response Management for Public Health Developer Guide, Energy and Utilities Cloud Developer Guide, Grantmaking Guide, Public Sector Solutions Developer Guide, and Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| AmountPaid | Amount Paid | currency |  |  | 18 | 0 |
| ApplicationCaseId | Case ID | reference |  | 18 |  |  |
| ApplicationCategory | Application Tier | picklist |  | 40 |  |  |
| ApplicationType | Application Type | picklist |  | 40 |  |  |
| AppliedDate | Applied Date | datetime |  |  |  |  |
| ApprovedDate | Approved Date | datetime |  |  |  |  |
| BenefitAssignmentId | Benefit Assignment ID | reference |  | 18 |  |  |
| BenefitId | Benefit ID | reference |  | 18 |  |  |
| BusinessTypeId | Business Type ID | reference |  | 18 |  |  |
| Category | Category | picklist |  | 40 |  |  |
| ClaimId | Claim ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | string |  | 255 |  |  |
| Id | Individual Application ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LicensePermitNameId | Business License ID | reference |  | 18 |  |  |
| LicenseTypeId | Regulatory Authorization Type ID | reference |  | 18 |  |  |
| Name | Application ID | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ParentApplicationId | Parent Individual Application ID | reference |  | 18 |  |  |
| PaymentDate | Payment Date | datetime |  |  |  |  |
| RequirementsCompleteDate | Requirements Complete Date | datetime |  |  |  |  |
| SavedApplicationRefId | Preliminary Application Reference ID | reference |  | 18 |  |  |
| Status | Application Status | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| WasReturned | Returned to Applicant | boolean |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
