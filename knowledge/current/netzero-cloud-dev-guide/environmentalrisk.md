---
title: "EnvironmentalRisk"
domain: netzero-cloud-dev-guide
topic: environmentalrisk
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:59.176Z
estimatedTokens: 1332
keywords: [EnvironmentalRisk, risk, environmental, resources, organization, API, version, 56.0, later, Calls, Associated, Objects]
---

# EnvironmentalRisk

> Represents information about the risk that the environmental resources create
         for an organization. This object is available in API version 56.0 and later.

# EnvironmentalRisk

Represents information about the risk that the environmental resources create for an organization. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Aquifer | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the groundwater aquifer system. |
| BaselineStress | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the baseline stress that is a ratio of total water withdrawals to available renewable surface and groundwater supplies. Water withdrawals include domestic, industrial, irrigation, and livestock consumptive and non-consumptive uses. Available renewable water supplies include the impact of upstream consumptive water users and large dams on downstream water availability. Higher values indicate more competition among users.Possible values are:ExtremelyHigh—Extremely High (>80%)High—High (40-80%)Low—Low (<10%)LowToMedium—Low to Medium (10-20%)MediumToHigh—Medium to High (20-40%) |
| BusinessQuantifiedRisk | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe risk that's identified by an organization using the internal tools and processes. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the environmental risk. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| MajorBasin | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the major river basin. |
| MinorBasin | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the minor river basin. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of this environmental risk. |
| OverallRisk | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the total risk that’s calculated by aggregating the selected indicators from the categories, such as physical quantity, quality, and regulatory, and reputation risk. Higher values indicate high environmental risk.Possible values are:ExtremelyHigh—Extremely HighHighLowLowToMedium—Low to MediumMediumToHigh—Medium to High |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThis field is a relationship field.Relationship NameRecordTypeRelationship TypeLookupRefers ToRecordType |
| RiskType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the type of risk related to the environment.Possible values are:Water |
| UpdateYear | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the year when the customer has updated the environment risk.Possible values are:2000200120022003200420052006200720082009201020112012201320142015201620172018201920202021202220232024202520262027202820292030203120322033203420352036203720382039204020412042204320442045204620472048204920502051205220532054205520562057205820592060206120622063206420652066206720682069207020712072207320742075207620772078207920802081208220832084208520862087208820892090209120922093209420952096209720982099 |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[EnvironmentalRiskFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[EnvironmentalRiskHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[EnvironmentalRiskShare](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- EnvironmentalRiskFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- EnvironmentalRiskHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- EnvironmentalRiskShare (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm)
