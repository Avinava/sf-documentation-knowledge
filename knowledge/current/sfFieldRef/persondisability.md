---
title: "PersonDisability"
domain: sfFieldRef
topic: persondisability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:08.049Z
estimatedTokens: 425
keywords: [PersonDisability, person's, disability, API, version, 58.0, later]
---

# PersonDisability

> Represents information about a person's disability. This object is
      available in API version 58.0 and later.

# PersonDisability

Represents information about a person's disability. This object is available in API version 58.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see PersonDisability in the Education Cloud Developer Guide and Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| EndDate | End Date | datetime |  |  |  |  |
| Id | Person Disability ID | id |  | 18 |  |  |
| IndividualId | Individual ID | reference |  | 18 |  |  |
| IsAccommodationRequired | Accommodation Required | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| Rank | Rank | int | 9 |  |  |  |
| StartDate | Start Date | datetime |  |  |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Type | Type | picklist |  | 40 |  |  |
| VerificationDate | Verification Date | date |  |  |  |  |
| VerifiedBy | Verified By | picklist |  | 255 |  |  |
| VerifiedByOther | Verifier Information | string |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
