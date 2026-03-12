---
title: "PcmtEmssnFctrSetItem"
domain: netzero-cloud-dev-guide
topic: pcmtemssnfctrsetitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:59.670Z
estimatedTokens: 1101
keywords: [PcmtEmssnFctrSetItem, individual, emissions, factors, scope, procurement, analysis, environmentally, extended, input-output, EEIO, model, outputs, emission, units]
---

# PcmtEmssnFctrSetItem

> Represents the individual emissions factors for scope 3 procurement analysis.
         Here, the environmentally extended input-output (EEIO) model outputs are used as the
         emission factors in units of tCO₂e per million spent (currency not specified). This
      object is available in API version 54.0 and later.

# PcmtEmssnFctrSetItem

Represents the individual emissions factors for scope 3 procurement analysis. Here, the environmentally extended input-output (EEIO) model outputs are used as the emission factors in units of tCO₂e per million spent (currency not specified). This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| EconomicSector | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the economic sector. |
| EconomicSectorCategory | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe category of the economic sector. |
| EconomicSectorCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe code representing the economic sector. This value is unique within the dataset, such as a North American Industry Classification System (NAICS) code. |
| ExternalIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe external identifier for the emissions factor. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the record. |
| PcmtEmssnFctrSetId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe master record associated with this procurement item record.This is a relationship field.Relationship NamePcmtEmssnFctrSetRelationship TypeLookupRefers ToPcmtEmssnFctrSet |
| ReferenceDataLoadLogId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe reference data load log record that's associated with the emissions factor.This field is a relationship field.Relationship NameReferenceDataLoadLogRelationship TypeLookupRefers ToReferenceDataLoadLog |
| Region | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe region associated with this emissions factor |
| Scope3GhgCategory | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe greenhouse gas scope 3 category.Possible values are:Business TravelCapital GoodsDownstream Leased AssetsDownstream Transportation and DistributionEmployee CommutingEnd-of-Life Treatment of Sold ProductsFranchisesFuel and Energy-Related ActivitiesInvestmentsProcessing of Sold ProductsPurchased Goods and ServicesUncategorizedUpstream Leased AssetsUpstream Transportation and DistributionUse of Sold ProductsWaste Generated In Operations |
| ShouldLockDtastUpdtForRec | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the emissions factor record can be locked from dataset updates.The default value is false. |
| TotScpe3EmssnPerMillionSpent | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total scope 3 emissions per million spent that’s adjusted according to the inflation rate. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PcmtEmssnFctrSetItemFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PcmtEmssnFctrSetItemHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- PcmtEmssnFctrSetItemFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- PcmtEmssnFctrSetItemHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
