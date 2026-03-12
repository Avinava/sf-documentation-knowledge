---
title: "AdvAcctForecastMeasureDef"
domain: tooling-api
topic: advacctforecastmeasuredef
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:44.502Z
estimatedTokens: 617
keywords: [AdvAcctForecastMeasureDef, Represents, information, measures, displayed, advanced, account, forecasts, grid, forecast, set., API, version, 57.0, later., Supported, SOAP, Calls, REST, Fields]
---

# AdvAcctForecastMeasureDef

> Represents information about the measures to be displayed in the advanced account
      forecasts grid for the forecast set. This object is available in API version 57.0 and
      later.

# AdvAcctForecastMeasureDef

Represents information about the measures to be displayed in the advanced account forecasts grid for the forecast set. This object is available in API version 57.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| AdvAccountForecastSetId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe forecast set associated with the advanced account forecast metric. This can also reference the SalesAgreementSettings.This field is a relationship field.Relationship NameAdvAccountForecastSetRelationship TypeLookupRefers ToAdvAccountForecastSet |
| AdvAcctForecastMeasureDefName | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the advanced account forecast measure definition. |
| AggregationType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of aggregation used for calculating advanced account forecast values.Possible values are:AVERAGE—AverageMAXIMUM—MaximumMINIMUM—MinimumSUM—SumThe default value is SUM. |
| ComputationMethod | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe method used for calculating advanced account forecast values.Possible values are:CUSTOM—CustomDATA_PROCESSING_ENGINE_DEFINITION—Data Processing Engine definitionFORMULA—FormulaThe default value is DATA_PROCESSING_ENGINE_DEFINITION. |
| ForecastDataMeasureName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionField of the facts object used for this measure. |
| ForecastMeasureName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name for the measure to show on UI. |
| ForecastMeasureType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the measure type used for the generated advanced forecast values.Possible values are:QUANTITY—QuantityREVENUE—RevenueThe default value is QUANTITY. |
| IsAdjustmentTracked | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the adjustments made to the advanced account forecast values for this metric are tracked.The default value is false. |
