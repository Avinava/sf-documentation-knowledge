---
title: "ForecastingSubmissionItem"
domain: object-reference
topic: forecastingsubmissionitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:10.737Z
estimatedTokens: 561
keywords: [ForecastingSubmissionItem, forecast, category, submitted, API, version, 62.0, later, Calls]
---

# ForecastingSubmissionItem

> Represents the values for each forecast category in a submitted
         forecast. This object is available in API version 62.0 and later.

# ForecastingSubmissionItem

Represents the values for each forecast category in a submitted forecast. This object is available in API version 62.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| Amount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionFor forecasting types that use Amount as the measure, the amount for the forecast category. Amounts must be provided in the corporate currency. |
| CurrencyIsoCode | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionThe currency code of the forecast submission. If omitted, the default is USD. |
| ForecastingItemCategory | TypepicklistPropertiesCreate, Filter, Group, SortDescriptionThe category the forecast belongs to.For individual forecast category rollups, the possible values are:PipelineOnly—Rollup from Pipeline opportunities only.BestCaseOnly—Rollup from Best Case opportunities only.MostLikelyOnly—Rollup from Most Likely opportunities only.CommitOnly —Rollup from Commit opportunities only.For cumulative forecast rollups, the possible values are:OpenPipeline—Rollup from Pipeline, Best Case, Most Likely, and Commit opportunities.BestCaseForecast —Rollup from Best Case, Most Likely, Commit, and Closed opportunities.MostLikelyForecast—Rollup from Most Likely, Commit, and Closed opportunities.CommitForecast —Rollup from Commit and Closed opportunities.For either cumulative or individual forecast category rollups, the possible values are:ClosedOnly—Rollup from Closed opportunities only. |
| ForecastingSubmissionId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the forecast submission.This field is a relationship field.Relationship NameForecastingSubmissionRelationship TypeMaster-detailRefers ToForecastingSubmission (the master object) |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionFor internal use only. The ID of this record. |
| Quantity | TypedoublePropertiesFilter, Nillable, SortDescriptionFor forecasting types that use Quantity as the measure, the quantity for the forecast category. Quantities must be provided in the corporate currency. |
