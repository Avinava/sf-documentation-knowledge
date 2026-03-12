---
title: "AnnualEmssnRdctnTarget"
domain: netzero-cloud-dev-guide
topic: annualemssnrdctntarget
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:58.500Z
estimatedTokens: 1059
keywords: [AnnualEmssnRdctnTarget, emissions, reduction, target, company, particular, year, API, version, 54.0, later, Calls, Associated, Objects]
---

# AnnualEmssnRdctnTarget

> Represents information about the emissions reduction target set by a company for a particular year. This object is available in API version 54.0 and later.

# AnnualEmssnRdctnTarget

Represents information about the emissions reduction target set by a company for a particular year. This object is available in API version 54.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search()

## Fields

| Field | Details |
| --- | --- |
| EmissionsReductionPercentage | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of emissions reduced from the previous year. |
| EmssnIntensityReductionPct | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of emission intensity reduced from the previous year. |
| IsLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates if the record is locked or not.The default value is 'false'. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| MayEdit | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates if the record can be edited or not.The default value is 'false'. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the annual emissions reduction target record. |
| OtherTargetKpiChangePercentage | TypepercentPropertiesFilter, Nillable, SortDescriptionThe targeted percentage of change in the key performance indicators (KPI) from the base year to the target year. |
| OtherTargetKpiInTargetYear | TypedoublePropertiesFilter, Nillable, SortDescriptionThe key performance indicator (KPI) target to achieve in the target year for the KPI of the parent emissions reduction target record. |
| ParentTargetId | TypereferencePropertiesFilter, Group, SortDescriptionThe parent target record that’s related to the annual emissions reduction target record.This is a relationship field.Relationship NameParentTargetRelationship TypeLookupRefers ToEmssnReductionTarget |
| Scope3GhgCatgTgtEmssnRdctn | TypedoublePropertiesFilter, Nillable, SortDescriptionThe emissions targeted to be reduced in the scope 3 greenhouse gas category in the target year. |
| Scope3GhgCatgTgtEmssnRdctnPct | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of scope 3 greenhouse gas emissions targeted to be reduced from the base year to the target year. |
| TargetEmissions | TypedoublePropertiesFilter, Nillable, SortDescriptionThe emissions targeted to be reached in the target year. |
| TargetEmissionsIntensity | TypedoublePropertiesFilter, Nillable, SortDescriptionThe emissions intensity targeted to be reached in the target year. |
| TargetYear | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe year of the annual emissions reduction target record.Possible values are:2015201620172018201920202021202220232024202520262027202820292030203120322033203420352036203720382039204020412042204320442045204620472048204920502051205220532054205520562057205820592060 |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AnnualEmssnRdctnTargetFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[AnnualEmssnRdctnTargetHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- AnnualEmssnRdctnTargetFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- AnnualEmssnRdctnTargetHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
