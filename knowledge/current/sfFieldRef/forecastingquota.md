---
title: "ForecastingQuota"
domain: sfFieldRef
topic: forecastingquota
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:58.564Z
estimatedTokens: 524
keywords: [ForecastingQuota, individual, user’s, territory’s, quota, time, period, Managed, Quotas, user, permission, creating, updating, deleting, Users]
---

# ForecastingQuota

> This object represents an individual user’s or territory’s quota for
            a specified time period. The Managed Quotas user permission is required for
        creating, updating, or deleting quotas. (Users can only edit their subordinates’ or child
        territories’ quotas, not their own.) The View All Forecasts permission is required to view
        any user's forecast, regardless of the forecast hierarchy. Available in API versions 25.0
        and later. Forecast managers can view the forecasts of subordinates and territories below
        them in the forecast hierarchy.

# ForecastingQuota

This object represents an individual user’s or territory’s quota for a specified time period. The Managed Quotas user permission is required for creating, updating, or deleting quotas. (Users can only edit their subordinates’ or child territories’ quotas, not their own.) The View All Forecasts permission is required to view any user's forecast, regardless of the forecast hierarchy. Available in API versions 25.0 and later. Forecast managers can view the forecasts of subordinates and territories below them in the forecast hierarchy.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ForecastingQuota](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_forecastingquota.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| ForecastingGroupItemId | Forecasting Group Item ID | reference |  | 18 |  |  |
| ForecastingTypeId | Forecasting Type ID | reference |  | 18 |  |  |
| Id | ForecastingQuota ID | id |  | 18 |  |  |
| IsAmount | Is Amount | boolean |  |  |  |  |
| IsQuantity | Is Quantity | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| PeriodId | Period ID | reference |  | 18 |  |  |
| ProductFamily | Product Family | picklist |  | 255 |  |  |
| QuotaAmount | Quota Amount | currency |  |  | 18 | 0 |
| QuotaOwnerId | Owner ID | reference |  | 18 |  |  |
| QuotaQuantity | Quota Quantity | double |  |  | 12 | 2 |
| StartDate | Quota Month | date |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Territory2Id | Territory ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
