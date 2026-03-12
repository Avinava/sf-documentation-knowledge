---
title: "AccountingModelConfig"
domain: sfFieldRef
topic: accountingmodelconfig
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:46.081Z
estimatedTokens: 567
namespace: NamespacePrefix
keywords: [AccountingModelConfig, settings, accounting, models, Subledger, include, data, how, API, version, 57.0, later]
---

# AccountingModelConfig

> Represents settings for the accounting models used with Accounting Subledger.
         Accounting models are based on accounting sets, which include details about what accounting
         data is used and how. This object is available in API version 57.0 and later.

**Namespace:** `NamespacePrefix`

# AccountingModelConfig

Represents settings for the accounting models used with Accounting Subledger. Accounting models are based on accounting sets, which include details about what accounting data is used and how. This object is available in API version 57.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see AccountingModelConfig in the Accounting Subledger Developer Guide and Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountingType | Accounting Type | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DefaultAccrualAccountCode | Default Accrual Account Code | string |  | 255 |  |  |
| DefaultWriteOffAccountCode | Default Write Off Account Code | string |  | 255 |  |  |
| DeveloperName | Name | string |  | 80 |  |  |
| EarliestCreatedDate | Earliest Created Date | datetime |  |  |  |  |
| ExpectedCashFlowGrouping | Expected Cash Flow Grouping | picklist |  | 255 |  |  |
| FinanceBook | Finance Book | string |  | 255 |  |  |
| FullName | Full Name | string |  | 80 |  |  |
| Id | Accounting Model Config ID | id |  | 18 |  |  |
| InternalMappingDetails | Internal Mapping Details | textarea |  | 32000 |  |  |
| IsActive | Is Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsGroupedByFundAccount | Is Grouped by Fund Account | boolean |  |  |  |  |
| IsUsed | Is Used | boolean |  |  |  |  |
| JobFilterCriteria | Job Filter Criteria | textarea |  | 32000 |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Label | string |  | 80 |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 15 |  |  |
| PaidCashFlowGrouping | Paid Cash Flow Grouping | picklist |  | 255 |  |  |
| RecordTypeFilter | Record Type Filter | textarea |  | 32000 |  |  |
| RunOrder | Run Order | int | 9 |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
