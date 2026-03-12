---
title: "AssetDowntimePeriod"
domain: revenue-cloud
topic: assetdowntimeperiod
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:10.777Z
estimatedTokens: 520
keywords: [AssetDowntimePeriod, period, asset, able, perform, expected, Downtime, periods, include, planned, activities, maintenance, unplanned, events, mechanical]
---

# AssetDowntimePeriod

> Represents a period during which an asset is not able to perform as expected.
      Downtime periods include planned activities, such as maintenance, and unplanned events, such
      as mechanical breakdown. This object is available in API version 49.0 and later.

# AssetDowntimePeriod

Represents a period during which an asset is not able to perform as expected. Downtime periods include planned activities, such as maintenance, and unplanned events, such as mechanical breakdown. This object is available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssetDowntimePeriodNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe unique number of this asset downtime period record. |
| AssetId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the asset this asset downtime period record is for. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of this asset downtime period. |
| DowntimeType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of this asset downtime period. Possible values are:PlannedUnplanned |
| EndTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe time this asset downtime period ended. |
| IsExcluded | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionWhether this asset downtime period is excluded from the calculation of accumulated downtime and accumulated unplanned downtime, and therefore not included in availability and reliability calculations. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| StartTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe time this asset downtime period started. |
