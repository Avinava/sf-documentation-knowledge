---
title: "LoanApplicationTitleHolder"
domain: sfFieldRef
topic: loanapplicationtitleholder
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:02.866Z
estimatedTokens: 356
keywords: [LoanApplicationTitleHolder, borrowers, applying, hold, title, loan, application, finances, API, version, 47.0, later]
---

# LoanApplicationTitleHolder

> Represents details of borrowers who are applying to hold title to the
			property the loan application finances. This object is available in API version
		47.0 and later.

# LoanApplicationTitleHolder

Represents details of borrowers who are applying to hold title to the property the loan application finances. This object is available in API version 47.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see LoanApplicationTitleHolder in the Financial Services Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Loan Application Title Holder ID | id |  | 18 |  |  |
| IsCurrentTitleHolder | Current Title Holder | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LoanApplicationId | Residential Loan Application ID | reference |  | 18 |  |  |
| Name | Name | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TitleHolderExtIdentifier | Loan Application Title Holder External ID | string |  | 255 |  |  |
| TitleHolderName | Title Holder Name | string |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
