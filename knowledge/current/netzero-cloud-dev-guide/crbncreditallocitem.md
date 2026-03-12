---
title: "CrbnCreditAllocItem"
domain: netzero-cloud-dev-guide
topic: crbncreditallocitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:58.691Z
estimatedTokens: 755
keywords: [CrbnCreditAllocItem, carbon, credit, allocation, emissions, emission, activity, API, version, 56.0, later, Calls, Associated, Objects]
---

# CrbnCreditAllocItem

> Represents information about carbon credit allocation and emissions related
         to each emission activity. This object is available in API version 56.0 and later.

# CrbnCreditAllocItem

Represents information about carbon credit allocation and emissions related to each emission activity. This object is available in API version 56.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update()

## Fields

| Field | Details |
| --- | --- |
| CrbnCreditAllocId | TypereferencePropertiesFilter, Group, SortDescriptionThe carbon credit allocation record that's associated with the emissions activity.This field is a relationship field.Relationship NameCrbnCreditAllocRelationship TypeLookupRefers ToCrbnCreditAlloc |
| EmissionsActivityId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe emissions activity record that's associated with the carbon credit allocation.This field is a relationship field.Relationship NameEmissionsActivityRelationship TypeLookupRefers ToEmissionsActivity |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the emissions activity associated with the carbon credit allocation item. |
| NetEmssnInTco2e | TypedoublePropertiesFilter, Nillable, SortDescriptionThe remaining emissions that couldn't be offset from the annual emissions inventory for the emissions activity. |
| TotalCrbnCrAllocInTco2e | TypedoublePropertiesFilter, Nillable, SortDescriptionThe carbon credits allocated for the emissions activity. |
| TotalEmssnInTco2e | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total emissions derived from the annual emissions inventory that an organization can offset for the emissions activity. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CrbnCreditAllocItemFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CrbnCreditAllocItemHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- CrbnCreditAllocItemFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- CrbnCreditAllocItemHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
