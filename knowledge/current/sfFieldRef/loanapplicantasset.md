---
title: "LoanApplicantAsset"
domain: sfFieldRef
topic: loanapplicantasset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:02.634Z
estimatedTokens: 308
keywords: [LoanApplicantAsset, junction, borrower, loan, application, asset, API, version, 47.0, later]
---

# LoanApplicantAsset

> Represents a junction between a borrower and a loan application asset.
		This object is available in API version 47.0 and later.

# LoanApplicantAsset

Represents a junction between a borrower and a loan application asset. This object is available in API version 47.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see LoanApplicantAsset in the Financial Services Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Loan Applicant Asset ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LoanApplicantId | Loan Applicant ID | reference |  | 18 |  |  |
| LoanApplicationAssetId | Loan Application Asset ID | reference |  | 18 |  |  |
| Name | Name | string |  | 255 |  |  |
| Role | Role | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
