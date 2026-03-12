---
title: "EmissionsForecastFact"
domain: netzero-cloud-dev-guide
topic: emissionsforecastfact
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:58.965Z
estimatedTokens: 3143
keywords: [EmissionsForecastFact, time, periods, measures, dimensions, forecast, emissions, company, generated, business, revenue, employee, count, actual, data]
---

# EmissionsForecastFact

> Represents information about the time periods, measures, and dimensions used to forecast the emissions of a company. The emissions forecast of the company is generated based on its business measures such as revenue or employee count, and the actual emissions data from previous years. This object is available in API version 54.0 and later.

# EmissionsForecastFact

Represents information about the time periods, measures, and dimensions used to forecast the emissions of a company. The emissions forecast of the company is generated based on its business measures such as revenue or employee count, and the actual emissions data from previous years. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe account for which the emissions are being forecasted.This is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| ActualEmissions | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe actual emissions for the emissions activity in the specified forecasting year. This value is from the annual emissions inventory record and is based on the activity source type. For example, if the source of the emissions activity is business travel, the emissions from business travel value in the annual emissions inventory record is used. |
| ActualEmissionsIntensity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe ratio of actual emissions of an emissions activity to the value of the underlying forecasting measure, such as revenue, number of employees, or office space. |
| ActualEnergyConsumption | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe actual energy consumption for commercial buildings or data centers generating scope 2 emissions. This value is the total energy consumption value in the annual emissions inventory record. The appropriate value is determined based on whether the emissions activity is related to commercial buildings or data centers. |
| ActualLocationBasedEmissions | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe actual location-based emissions from electricity-related emissions activity in the forecasting year. This value is the total scope 2 location-based emissions value in the annual emissions inventory record. The appropriate value is determined based on whether the emissions activity is related to commercial buildings or data centers. |
| ActualMarketBasedEmissions | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe actual market-based emissions from electricity-related emissions activity in the forecasting year. This value is the total scope 2 market-based emissions value in the annual emissions inventory record. The appropriate value is determined based on whether the emissions activity is related to commercial buildings or data centers. |
| ActualRenewableEnergyCnsmpPct | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe consumption percentage of electricity generated from renewable energy by commercial buildings and data centers generating scope 2 emissions. This value is the total renewable energy consumption value in the annual emissions inventory record. The appropriate value is determined based on whether the emissions activity is related to commercial buildings or data centers. |
| AdvAcctForecastSetPartnerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe advanced account forecast set partner record that associates a partner with a forecast set. This value is required to view the forecasting grid.This is a relationship field.Relationship NameAdvAcctForecastSetPartnerRelationship TypeLookupRefers ToAdvAcctForecastSetPartner |
| CarbonCreditCost | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe forecasted cost of the carbon credits in USD per tCO2e. |
| EmissionsActivityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe emissions activity record for which the emissions are being forecasted.This is a relationship field.Relationship NameEmissionsActivityRelationship TypeLookupRefers ToEmissionsActivity |
| FinalForecastedEmissions | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe final forecasted emissions value is calculated by deducting the planned internal and external emissions reductions from the forecasted emissions. If a forecasted emissions override is specified, the override becomes the final forecasted emissions. |
| ForcstEmssnIntensityRdctnPct | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe forecasted percentage of emissions intensity reduction for the emissions activity of the previous year. This value is required to reduce emissions. For example, as the revenue increases, this intensity reduction percentage ensures that the forecasted emissions don't increase. |
| ForcstRenewableEnergyCnsmpPct | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe forecasted consumption percentage of electricity generated from renewable energy that overrides the target renewable energy consumption percentage. |
| ForecastedEmissions | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe forecasted emissions for the specified emissions activity in the forecasting year that’s calculated based on the forecasting measures and emissions activity. |
| ForecastedEmissionsIntensity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe forecasted emissions intensity that’s calculated by dividing the emissions intensity for the emissions activity by the forecasting metric. |
| ForecastedEmissionsOverride | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe emissions value that overrides the forecasted emissions value. |
| ForecastedEnergyConsumption | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe forecasted energy consumption for the year. |
| ForecastedLocationBasedEmssn | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe forecasted location-based emissions from the electricity consumed for the year. |
| ForecastedMarketBasedEmssn | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe forecasted market-based emissions from the electricity consumed for the year. |
| Headcount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number of employees and contractors of the company by year. |
| IsLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates if the record is locked or not.The default value is 'false'. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| MayEdit | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates if the record can be edited or not.The default value is 'false'. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the record. |
| NetEmissionsForecast | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe forecasted value of the emissions that must be reduced after accounting for the planned carbon offsets for a year. |
| OtherApplnForecastedEmissions | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe emissions value that’s forecasted by an application other than Sustainability Cloud. This value can be added in Sustainability Cloud through an automated process or by manual entry. Users can refer to this value when generating forecasts in Sustainability Cloud. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PeriodId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe period for which the forecasting data is created. This period is typically a year for Sustainability Cloud.This is a relationship field.Relationship NamePeriodRelationship TypeLookupRefers ToPeriod |
| PlannedCarbonCredits | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe carbon credits that have been planned to be allocated for an emissions activity for a year. |
| PlannedCarbonCreditsInvst | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe cost incurred to invest in the carbon credits that are planned for the future. |
| PlnOperationalEmissionsRdctn | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe planned reduction of emissions from the operational initiatives of the annual emissions activity. |
| PlnSupplierEmissionsRdctn | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe planned reduction of emissions from the supplier initiatives of the annual emissions activity. |
| ProcurementSpend | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount spent on procurement of material and services from suppliers. |
| RequiredCarbonCredits | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe carbon credits that are required to meet target compensated emissions. This value is the difference between the valid forecasted emissions and the target compensated emissions. |
| RequiredCarbonCreditsInvst | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe cost incurred to invest in the carbon credits that are required for the future. |
| Revenue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe revenue of the company by year. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the combination of forecast year, measure, account, and emissions activity record.Possible values are:ActiveInactiveThe default value is 'Active'. |
| TargetCompensatedEmissions | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe target emissions value for the specified emissions activity in the forecasting year. This value is from the annual emissions reduction target record when the target type is Net Zero Emissions. |
| TargetEmissions | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe target emissions for the specified emissions activity in the forecasting year. This value is from the annual emissions reduction target record when the target type is Emissions Reduction. |
| TargetRenewableEnergyPct | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of target renewable energy consumption for electricity. This value is from the annual emissions reduction target record when the target type is Renewable Energy Consumption. |
| TotalFloorArea | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total floor area occupied by the company. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[EmissionsForecastFactFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[EmissionsForecastFactHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[EmissionsForecastFactShare](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- EmissionsForecastFactFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- EmissionsForecastFactHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- EmissionsForecastFactShare (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm)
