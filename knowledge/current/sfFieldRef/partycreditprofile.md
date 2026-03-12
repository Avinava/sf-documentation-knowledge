---
title: "PartyCreditProfile"
domain: sfFieldRef
topic: partycreditprofile
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:06.569Z
estimatedTokens: 486
keywords: [PartyCreditProfile, credit, score, party, API, version, later]
---

# PartyCreditProfile

> Represents the credit score details for a party. This object is
      available in API version 60 and later.

# PartyCreditProfile

Represents the credit score details for a party. This object is available in API version 60 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see PartyCreditProfile in the Financial Services Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BureauReportedFirstName | Bureau Reported First Name | string |  | 40 |  |  |
| BureauReportedIdNumber | Bureau Reported Identification Number | string |  | 40 |  |  |
| BureauReportedIdType | Bureau Reported Identification Type | picklist |  | 40 |  |  |
| BureauReportedLastName | Bureau Reported Last Name | string |  | 40 |  |  |
| BureauRptDateOfBirth | Bureau Reported Date Of Birth | date |  |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CreditBureauName | Credit Bureau Name | picklist |  | 40 |  |  |
| CreditPrflReportIdentifier | Credit Profile Report Identifier | string |  | 255 |  |  |
| CreditScore | Credit Score | int | 9 |  |  |  |
| CreditScoreDate | Credit Score Date | date |  |  |  |  |
| Id | Party Credit Profile ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsVerified | Verified | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ReferenceObjectId | Reference Object ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalExposureAmount | Total Exposure Amount | currency |  |  | 18 | 0 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
