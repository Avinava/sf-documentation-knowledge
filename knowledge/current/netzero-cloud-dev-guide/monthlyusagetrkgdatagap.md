---
title: "MonthlyUsageTrkgDataGap"
domain: netzero-cloud-dev-guide
topic: monthlyusagetrkgdatagap
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:59.529Z
estimatedTokens: 993
keywords: [MonthlyUsageTrkgDataGap, gap, tracking, fuel, usage, data, month, API, version, 64.0, later, Calls, Associated, Objects]
---

# MonthlyUsageTrkgDataGap

> Represents a gap in the tracking of fuel usage data for the month. This
      object is available in API version 64.0 and later.

# MonthlyUsageTrkgDataGap

Represents a gap in the tracking of fuel usage data for the month. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DataGap | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe gap in the fuel usage data of a stationary asset for a month. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Month | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe month in which this data gap is recorded.Possible values are:AprilAugustDecemberFebruaryJanuaryJulyJuneMarchMayNovemberOctoberSeptember |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| SourceObjectId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe source record that stores the details of the asset that consumes the fuel.This field is a polymorphic relationship field.Relationship NameSourceObjectRefers ToScope3EmssnSrc, StnryAssetEnvrSrc, VehicleAssetEmssnSrc |
| Type | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of data gap to track.Possible values are:FuelConsumption—Fuel ConsumptionThe default value is FuelConsumption. |
| UsageType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the usage type of the data gap.Possible values are:ESG—Environment, Social, and GovernanceThe default value is ESG. |
| Value | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe values of the data gap type to track. |
| Year | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe year in which this data gap is recorded.Possible values are:2000200120022003200420052006200720082009201020112012201320142015201620172018201920202021202220232024202520262027202820292030203120322033203420352036203720382039204020412042204320442045204620472048204920502051205220532054205520562057205820592060206120622063206420652066206720682069207020712072207320742075207620772078207920802081208220832084208520862087208820892090209120922093209420952096209720982099 |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[MonthlyUsageTrkgDataGapHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[MonthlyUsageTrkgDataGapShare](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- MonthlyUsageTrkgDataGapHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- MonthlyUsageTrkgDataGapShare (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm)
