---
title: "ForecastingFact"
domain: sfFieldRef
topic: forecastingfact
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:58.510Z
estimatedTokens: 355
keywords: [ForecastingFact, read-only, links, ForecastingItem, opportunities, share, owner, forecast, category, closing, date, period, forecasting, item, API]
---

# ForecastingFact

> This object is read-only and links a ForecastingItem with its
   opportunities, such as opportunities that share the same owner or forecast category and have a
   closing date within the period of the forecasting item. Available in API versions 26 and
  greater.

# ForecastingFact

This object is read-only and links a ForecastingItem with its opportunities, such as opportunities that share the same owner or forecast category and have a closing date within the period of the forecasting item. Available in API versions 26 and greater.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ForecastingFact](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_forecastingfact.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ForecastCategoryName | Forecast Category | picklist |  | 255 |  |  |
| ForecastedObjectId | ForecastedObject ID | reference |  | 18 |  |  |
| ForecastingItemId | Forecasting Item ID | reference |  | 18 |  |  |
| ForecastingTypeId | Forecasting Type ID | reference |  | 18 |  |  |
| Id | Forecasting Fact ID | id |  | 18 |  |  |
| OpportunityId | Opportunity ID | reference |  | 18 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PeriodId | Period ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TargetValue | Target Value | double |  |  | 12 | 2 |
| Territory2Id | Territory ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
