---
title: "ForecastingType"
domain: object-reference
topic: forecastingtype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:10.749Z
estimatedTokens: 1604
keywords: [ForecastingType, identify, forecast, associated, ForecastingAdjustment, ForecastingOwnerAdjustment, ForecastingQuota, ForecastingFact, ForecastingItem, objects, API, version, 30.0, greater, Calls]
---

# ForecastingType

> Used to identify the forecast type associated with ForecastingAdjustment, ForecastingOwnerAdjustment,
				ForecastingQuota, ForecastingFact, and ForecastingItem objects. Available in API version 30.0 and
		greater.

# ForecastingType

Used to identify the forecast type associated with ForecastingAdjustment, ForecastingOwnerAdjustment, ForecastingQuota, ForecastingFact, and ForecastingItem objects. Available in API version 30.0 and greater.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(). delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

As of Spring ’20 and later, only standard users with the View All Forecasts or Allow Forecasting permission or delegated forecast manager status can access this object.

## Fields

| Field Name | Details |
| --- | --- |
| CanDisplayQuotas | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionIndicates whether a forecast type can show quota information. The default value is false. Available in API version 38.0 and later. |
| DateType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe date type that forecast amounts are based on. These values are available for forecast types that were available before Summer ’21.OpportunityCloseDate: Base forecasts on opportunity close dates.ProductDate: Base forecasts on opportunity product line item dates, if available.ScheduleDate: Base forecasts on opportunity product schedule dates, if available.These values are available in API version 52.0 and later in Performance Edition and in Unlimited Edition with the Sales Cloud.OLIMeasureCloseDateOnly: Base forecasts on opportunity close dates.ProductDateOnly: Base forecasts on opportunity product line item dates, if available.ScheduleDateOnly: Base forecasts on opportunity product schedule dates, if available.These values to create forecasts on custom date fields are available in API version 57.0 and later in Performance, Professional, Enterprise, and Unlimited Edition with the Sales Cloud.OLIMeasureOppCustomDateOnly: Base forecasts on custom opportunity dates, if available.OpportunityCustomDate: Base forecasts on custom opportunity dates.The custom date field used must be on the opportunity object and based on the date type. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the forecasting type. The DeveloperName is called name in the Metadata API and Forecasting Type in custom reports. |
| ForecastingGroupID | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionIndicates whether the forecasting type has a group assignment, and if so, the name of the group. This field is a relationship field. Available in API version 60.0 and later.Relationship NameForecastingGroupRelationship TypeLookupRefers ToForecastingGroup |
| HasAdjustments | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether forecast managers can adjust forecasts of their immediate subordinates and child territories. The default value is false. Available in API version 60.0 and later. |
| HasOwnerAdjustments | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether all forecast users can adjust their own forecasts, including the territory forecasts that they own. The default value is false. Available in API version 60.0 and later. |
| HasProductFamily | TypebooleanPropertiesCreate, Defaulted on create, GroupDescriptionIndicates whether a forecasts view includes product families. The default value is false. Available in API version 40.0 and later. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the forecasting type is enabled. The default value is false. |
| IsAmount | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionIndicates whether the forecasting type is based on the revenue measure. The default value is false. |
| IsPlatformType | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates a legacy forecast type that wasn’t available before Summer ’21. The default value is false. Available in API version 52.0 and later. |
| IsQuantity | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionIndicates whether the forecasting type is based on the quantity measure. The default value is false. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the forecasting type. |
| LastActivatedDate | TypedateTimePropertiesCreate, Filter, Nillable, SortDescriptionThe date when a forecast type was activated. Read only. Available in API version 53.0 and later. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionControlling label for this forecasting type value. This display value is the internal label that doesn’t get translated. |
| OpportunitySplitTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionIndicates whether the forecasting type has a split type, and if so, the name of the split type. This field is a relationship field. Available in API version 41.0 and later.Relationship NameOpportunitySplitTypeRelationship TypeLookupRefers ToOpportunitySplitType |
| OpptyLineItemSplitTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionIndicates whether the forecasting type has a product split type, and if so, the name of the product split type. This field is a relationship field. Available in API version 58.0 and later.Relationship NameOpptyLineItemSplitTypeRelationship TypeLookupRefers ToOpptyLineItemSplitType |
| RoleType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionIndicates whether the role type has a forecasting type, and if so, which forecasting type. Available in API version 41.0 and later.Possible values are:R—User role-based forecasting typeT—Territory1-based forecasting type; not usedY—Territory2-based forecasting type |
| Territory2ModelId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionIndicates whether the forecasting type has a Territory2 model, and if so, the name of the Territory2 model. Available in API version 41.0 and later. |
