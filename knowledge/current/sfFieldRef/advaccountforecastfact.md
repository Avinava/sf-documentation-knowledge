---
title: "AdvAccountForecastFact"
domain: sfFieldRef
topic: advaccountforecastfact
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:46.527Z
estimatedTokens: 570
keywords: [AdvAccountForecastFact, generated, advanced, account, forecast, records, API, version, 53.0, later]
---

# AdvAccountForecastFact

> Represents information about the generated advanced account forecast
         records. This object is available in API version 53.0 and later.

# AdvAccountForecastFact

Represents information about the generated advanced account forecast records. This object is available in API version 53.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see AdvAccountForecastFact in the Manufacturing Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| AdvAcctForecastSetPartnerId | Advanced Account Forecast Set Partner ID | reference |  | 18 |  |  |
| AdvAcctForecastSetUseId | Advanced Account Forecast Set Use ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| ForecastedQuantity | Forecasted Quantity | double |  |  | 18 | 6 |
| ForecastedRevenue | Forecasted Revenue | currency |  |  | 14 | 2 |
| Id | Advanced Account Forecast Fact ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LastYearOrderQuantity | Last Year Order Quantity | double |  |  | 18 | 6 |
| LastYearOrderRevenue | Last Year Order Revenue | currency |  |  | 14 | 2 |
| Name | Name | string |  | 255 |  |  |
| OpportunityQuantity | Opportunity Quantity | double |  |  | 18 | 6 |
| OpportunityRevenue | Opportunity Revenue | currency |  |  | 14 | 2 |
| OrderQuantity | Order Quantity | double |  |  | 18 | 6 |
| OrderRevenue | Order Revenue | currency |  |  | 14 | 2 |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PeriodId | Period ID | reference |  | 18 |  |  |
| PeriodStartDate | Period Start Date | date |  |  |  |  |
| ProductId | Product ID | reference |  | 18 |  |  |
| SalesAgreementQuantity | Sales Agreement Quantity | double |  |  | 18 | 6 |
| SalesAgreementRevenue | Sales Agreement Revenue | currency |  |  | 14 | 2 |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
