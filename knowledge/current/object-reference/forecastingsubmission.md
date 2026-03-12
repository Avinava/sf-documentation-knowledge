---
title: "ForecastingSubmission"
domain: object-reference
topic: forecastingsubmission
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:10.730Z
estimatedTokens: 698
keywords: [ForecastingSubmission, submitted, forecast, API, version, 62.0, later, Calls, Special, Access, Rules, Usage]
---

# ForecastingSubmission

> Represents a submitted forecast. This object is available in API version
      62.0 and later.

# ForecastingSubmission

Represents a submitted forecast. This object is available in API version 62.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

Available for forecast types that aren’t grouped by product family forecast.

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionThe currency code of the forecast submission. If omitted, the default is USD. |
| ForecastOwnerId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the forecast owner.This field is a relationship field.Relationship NameForecastOwnerRefers ToUser |
| ForecastingGroupItemId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionReserved for future use. Forecast submissions aren't supported in forecast types with groups.Relationship NameForecastingGroupItemRefers ToForecastingGroupItem |
| ForecastingTypeId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the forecast type.This field is a relationship field.Relationship NameForecastingTypeRefers ToForecastingType |
| IsLatest | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates if the forecast submission is the most recent submission.The default value is false. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionFor internal use only. ID of this record. |
| Note | TypetextareaPropertiesFilter, Nillable, SortDescriptionThe note attached to the submitted forecast. |
| PeriodId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the period to which the submission applies.This field is a relationship field.Relationship NamePeriodRefers ToPeriod |
| PeriodStartDate | TypedatePropertiesFilter, Group, SortDescriptionIndicates the start date of the forecast period. |
| ProductFamily | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionMust be set to none. Forecast submissions aren't supported in forecast types grouped by product families. |
| SubmissionDateTime | TypedateTimePropertiesFilter, SortDescriptionThe date and time that the forecast submission was made. Calculated internally. |
| Territory2Id | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the territory to forecast on.This field is a relationship field.Relationship NameTerritory2Refers ToTerritory2 |

## Usage

ForecastingSubmission is a detail object that contains the submitted item category values. Each record represents the values for a single item category. ForecastingSubmission is always used as a detail object for the submission, and inserted only as part of a transaction that includes all detail objects.
