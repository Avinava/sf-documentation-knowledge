---
title: "AdvAcctForecastMeasureDef"
domain: mfg-api-devguide
topic: advacctforecastmeasuredef
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:55.545Z
estimatedTokens: 569
keywords: [AdvAcctForecastMeasureDef, measures, advanced, account, forecasts, grid, forecast, API, version, 53.0, later, Calls]
---

# AdvAcctForecastMeasureDef

> Represents information about the measures to be displayed in the advanced
         account forecasts grid for the forecast set. This object is available in API version
      53.0 and later.

# AdvAcctForecastMeasureDef

Represents information about the measures to be displayed in the advanced account forecasts grid for the forecast set. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdvAccountForecastSetId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe forecast set associated with the advanced account forecast metric.This is a relationship field.Relationship NameAdvAccountForecastSetRelationship TypeLookupRefers ToAdvAccountForecastSet |
| AdvAcctForecastMeasureDefName | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName for the measure. |
| AggregationType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of aggregation used for calculating advanced account forecast values.Possible values are:AVERAGE—AverageMAXIMUM—MaximumMINIMUM—MinimumSUM—SumThe default value is 'SUM'. |
| ComputationMethod | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe method used for calculating advanced account forecast values.Possible values are:CUSTOM—User-EditableDATA_PROCESSING_ENGINE_DEFINITION—Batch ProcessFORMULA—Forecast FormulaThe default value is 'Batch Process'. |
| ForecastDataMeasureName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionField of the facts object used for this measure. |
| ForecastMeasureName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name for the measure to show on UI. |
| ForecastMeasureType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the measure type used for the generated advanced forecast values.Possible values are:QUANTITY—QuantityREVENUE—RevenueThe default value is 'QUANTITY'. |
| IsAdjustmentTracked | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the adjustments made to the advanced account forecast values for this metric are tracked.The default value is 'false'. |
