---
title: "AccountForecast"
domain: mfg-api-devguide
topic: accountforecast
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.443Z
estimatedTokens: 920
keywords: [AccountForecast, rolling, forecast, record, particular, account, prepared, data, directly, sales, agreements, orders, opportunities, API, version]
---

# AccountForecast

> Represents the rolling forecast record of a particular account. The forecast is
      prepared using data directly from sales agreements, orders, and opportunities. This
    object is available in API version 47.0 and later.

# AccountForecast

Represents the rolling forecast record of a particular account. The forecast is prepared using data directly from sales agreements, orders, and opportunities. This object is available in API version 47.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesFilter, Group, SortDescriptionID of the account for which forecast is generated. |
| DefaultAccountGrowthPercentage | TypepercentPropertiesFilter, Nillable, SortDescriptionDefault value of the account growth metric used to calculate forecast for the first time. The default value is zero. |
| DefaultMarketGrowthPercentage | TypepercentPropertiesFilter, Nillable, SortDescriptionDefault value of the market growth metric used to calculate forecast for the first time. The default value is zero. |
| EndDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionDate till which forecast is generated and displayed for this account.NoteEnd Date of an active account forecast must be null.End Date can not be updated. |
| LastCalculatedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate on which forecast was last calculated, either automatically or manually. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which this record was referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which this record was viewed. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionName of the account forecast record. |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionOwner of the account.NoteOnly the account owner can create the account forecast record. |
| StartDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionDate from which forecast is generated and displayed for this account. It is automatically created in active status. |
| Status | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionStatus of the forecast record.Possible values are:ActiveExpiredNoteThere can be only 1 active account forecast at any time.An existing account forecast must be expired before creating a new one.Active account forecast records must be expired before deleting them.You can’t change status from Expired to Active. |
| TotalAdjustedRevenue | TypedoublePropertiesFilter, Nillable, SortDescriptionTotal revenue after manual adjustments are made to the auto-calculated forecast value. |
| TotalRevenue | TypedoublePropertiesFilter, Nillable, SortDescriptionTotal revenue as calculated by the application based on forecast calculations. |

## Associated Object

This object has the following associated object. Unless noted, it is available in the same API version as this object.

[AccountForecastChangeEvent](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 62.0)

Change events are available for the object.

## Related Topics

- AccountForecastChangeEvent (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_change_event.htm)
