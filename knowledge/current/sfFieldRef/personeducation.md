---
title: "PersonEducation"
domain: sfFieldRef
topic: personeducation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:08.077Z
estimatedTokens: 690
keywords: [PersonEducation, professional, education, person]
---

# PersonEducation

> Represents information about the professional education for a person.

# PersonEducation

Represents information about the professional education for a person.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see PersonEducation in the Education Cloud Developer Guide, Financial Services Cloud Developer Guide, Life Sciences Cloud Developer Guide, and Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CertificateIdentifier | Certificate ID | string |  | 255 |  |  |
| CompletionDate | Completion Date | datetime |  |  |  |  |
| ContactId | Contact ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| EducationLevel | Education Level | picklist |  | 40 |  |  |
| GraduationDate | Graduation Date | datetime |  |  |  |  |
| HealthcareProviderId | Healthcare Provider ID | reference |  | 18 |  |  |
| Id | Person Education ID | id |  | 18 |  |  |
| Identifier | Identifier | string |  | 255 |  |  |
| IdentifierIssuer | Institution | string |  | 255 |  |  |
| IndividualId | Individual ID | reference |  | 18 |  |  |
| InstitutionAddress | Institution Address | address |  |  |  |  |
| InstitutionCity | Institution City | string |  | 40 |  |  |
| InstitutionCountry | Institution Country | string |  | 80 |  |  |
| InstitutionGeocodeAccuracy | Institution Geocode Accuracy | picklist |  | 40 |  |  |
| InstitutionLatitude | Institution Latitude | double |  |  | 18 | 15 |
| InstitutionLongitude | Institution Longitude | double |  |  | 18 | 15 |
| InstitutionPostalCode | Institution Postal Code | string |  | 20 |  |  |
| InstitutionState | Institution State | string |  | 80 |  |  |
| InstitutionStreet | Institution Street | textarea |  | 255 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Degree | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ProgramName | Program Name | string |  | 255 |  |  |
| StartDate | Start Date | datetime |  |  |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UserId | User ID | reference |  | 18 |  |  |
| VerificationStatus | Verification Status | picklist |  | 255 |  |  |
| VerifiedDate | Verified On | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
