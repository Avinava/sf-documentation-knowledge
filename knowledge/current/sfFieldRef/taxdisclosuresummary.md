---
title: "TaxDisclosureSummary"
domain: sfFieldRef
topic: taxdisclosuresummary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:15.110Z
estimatedTokens: 599
keywords: [TaxDisclosureSummary, statistics, disclosure, business, entity, tax, jurisdictions]
---

# TaxDisclosureSummary

> Represents statistics about the disclosure of business entity
         information to all tax jurisdictions.

# TaxDisclosureSummary

Represents statistics about the disclosure of business entity information to all tax jurisdictions.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see TaxDisclosureSummary in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CustomerTaxCollected | Customer Tax Collected | currency |  |  | 14 | 2 |
| Description | Description | textarea |  | 32000 |  |  |
| DisclosedBy | Disclosed By | string |  | 255 |  |  |
| DisclsReportingPeriodId | Disclosure Reporting Period ID | reference |  | 18 |  |  |
| EmployeeCount | Employee Count | double |  |  | 10 | 0 |
| EmployeeTaxWithheld | Employee Tax Withheld | currency |  |  | 14 | 2 |
| EmployeeTotalIncome | Employee Total Income | currency |  |  | 14 | 2 |
| Id | Tax Disclosure Summary ID | id |  | 18 |  |  |
| IncomeTaxAccrued | Income Tax Accrued | currency |  |  | 14 | 2 |
| IncomeTaxPaid | Income Tax Paid | currency |  |  | 14 | 2 |
| IndustryTaxDue | Industry Tax Due | currency |  |  | 14 | 2 |
| IntraCompanyDebt | Intra Company Debt | currency |  |  | 14 | 2 |
| IntraGroupTrxnRev | Intra-Group Transaction Revenue | currency |  |  | 14 | 2 |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PrimaryActivity | Primary Activity | textarea |  | 4000 |  |  |
| ProfitLossBeforeTax | Profit Loss Before Tax | currency |  |  | 14 | 2 |
| SubsidiaryAccountId | Account ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TangibleAssetValue | Tangible Asset Value | currency |  |  | 14 | 2 |
| TaxJurisdiction | Tax Jurisdiction | string |  | 255 |  |  |
| ThirdPartySalesRevenue | Third Party Sales Revenue | currency |  |  | 14 | 2 |
| UncertainTaxPositionVal | Uncertain Tax Position Value | currency |  |  | 14 | 2 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
