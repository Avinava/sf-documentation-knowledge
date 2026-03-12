---
title: "BusinessLicenseApplication"
domain: sfFieldRef
topic: businesslicenseapplication
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:50.665Z
estimatedTokens: 763
keywords: [BusinessLicenseApplication, application, form, submitted, business, owner, API, version, 49.0, later]
---

# BusinessLicenseApplication

> Represents an application form submitted by a business owner. This
      object is available in API version 49.0 and later.

# BusinessLicenseApplication

Represents an application form submitted by a business owner. This object is available in API version 49.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see BusinessLicenseApplication in the Emergency Response Management Object Reference, Emergency Response Management for Public Health Developer Guide, and Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| AmountPaid | Amount Paid | currency |  |  | 18 | 0 |
| ApplicantId | Contact ID | reference |  | 18 |  |  |
| ApplicationCaseId | Case ID | reference |  | 18 |  |  |
| ApplicationCategory | Application Tier | picklist |  | 40 |  |  |
| ApplicationType | Application Type | picklist |  | 40 |  |  |
| AppliedDate | Applied Date | datetime |  |  |  |  |
| ApprovedDate | Approved Date | datetime |  |  |  |  |
| BusinessTypeId | Business Type ID | reference |  | 18 |  |  |
| Category | Category | picklist |  | 40 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | string |  | 255 |  |  |
| Id | Business License Application ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Updated | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LicensePermitNameId | Business License ID | reference |  | 18 |  |  |
| LicenseTypeId | Regulatory Authorization Type ID | reference |  | 18 |  |  |
| Name | Application ID | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PaymentDate | Payment Date | datetime |  |  |  |  |
| PrimaryOwnerId | Contact ID | reference |  | 18 |  |  |
| RequirementsCompleteDate | Requirements Complete Date | datetime |  |  |  |  |
| SavedApplicationRefId | Preliminary Application Reference ID | reference |  | 18 |  |  |
| SiteAddress | Site Address | address |  |  |  |  |
| SiteCity | Site Address City | string |  | 40 |  |  |
| SiteCountry | Site Address Country | string |  | 80 |  |  |
| SiteGeocodeAccuracy | Site Address Geocode Accuracy | picklist |  | 40 |  |  |
| SiteLatitude | Site Address Latitude | double |  |  | 18 | 15 |
| SiteLongitude | Site Address Longitude | double |  |  | 18 | 15 |
| SitePostalCode | Site Address Postal Code | string |  | 20 |  |  |
| SiteState | Site Address State | string |  | 80 |  |  |
| SiteStreet | Site Address Street | textarea |  | 255 |  |  |
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
