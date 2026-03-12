---
title: "ForecastingCustomCategory"
domain: object-reference
topic: forecastingcustomcategory
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:10.619Z
estimatedTokens: 987
keywords: [ForecastingCustomCategory, custom, forecasting, category, forecast, rollups, API, version, 62.0, later, Calls]
---

# ForecastingCustomCategory

> Represents a custom forecasting category used for forecast rollups. This
      object is available in API version 62.0 and later.

# ForecastingCustomCategory

Represents a custom forecasting category used for forecast rollups. This object is available in API version 62.0 and later.

In API version 62.0, this object is available for rollup of Manager Judgments only.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

describeSObjects(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| CanHaveQuotas | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether forecasts in the custom category can have quotas. The default value is false. Available in API version 63.0 and later. |
| Description | TypetextareaPropertiesFilter, Group, Nillable, SortDescriptionA user-defined description of the custom category. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe developer name of the custom category. |
| DisplayPosition | TypeintPropertiesFilter, Group, Nillable, SortDescriptionIndicates the placement of the custom category column among the other columns on the forecasts page. |
| ForecastingSourceDefinitionId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the forecasting source definition.This field is a relationship field.Relationship NameForecastingSourceDefinitionRefers ToForecastingSourceDefinition |
| ForecastingTypeId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the related ForecastingType.This field is a relationship field.Relationship NameForecastingTypeRefers ToForecastingType |
| IsAdjustable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether forecast managers can adjust forecasts in the custom category. The default value is false. |
| IsAmount | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, then the adjustment is made in a revenue amount. If false, then IsQuantity must be true. The default value is false. Available in API version 63.0 and later. |
| IsHidden | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the custom category is hidden. The default value is false. Available in API version 63.0 and later. |
| IsOwnerAdjustable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether all forecast users can adjust their own forecasts in the custom category, including the territory forecasts that they own. The default value is false. |
| IsQuantity | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, then the adjustment is made in a quantity amount. If false, then IsAmount must be true. The default value is false. Available in API version 63.0 and later. |
| Language | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe language of the custom category. |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionThe label for this column. The label is in the default language locale for the organization. If there’s no default language locale, the label is in en_US. |
| MeasureFieldOverride | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe measure that this custom category supports.Possible values are:Opportunity.AmountOpportunity.AmountCustom__cOpportunity.AmountRSF__cOpportunity.TotalOpportunityQuantityOpportunityLineItem.QuantityOpportunityLineItem.TotalPriceOpportunityLineItem.oliCustomAmount__cOpportunityLineItemSplit.SplitAmountOpportunitySplit.SplitAmountOpportunitySplit.customAmount__c |
| UnitOfMeasure | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unit of measure for the specified custom category measure. Available in API version 63.0 and later. |
