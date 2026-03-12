---
title: "CrbnEmssnScopeAlloc"
domain: netzero-cloud-dev-guide
topic: crbnemssnscopealloc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:58.736Z
estimatedTokens: 689
keywords: [CrbnEmssnScopeAlloc, allocation, fuel, consumption, different, scope, emissions, energy, record, tCO₂e, calculated, results, classified, either, emission]
---

# CrbnEmssnScopeAlloc

> Represents the allocation of fuel consumption for different scope emissions.
         For an energy use record, tCO₂e is calculated and the results are classified as either
         Scope 1, Scope 2, or Scope 3 emission values. Each individual fuel type has its own scope
         allocation record. To put the tCO2e result in the correct scope, the energy use record
         points to the scope allocation record. This object is available in API version 54.0
      and later.

# CrbnEmssnScopeAlloc

Represents the allocation of fuel consumption for different scope emissions. For an energy use record, tCO₂e is calculated and the results are classified as either Scope 1, Scope 2, or Scope 3 emission values. Each individual fuel type has its own scope allocation record. To put the tCO2e result in the correct scope, the energy use record points to the scope allocation record. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CrbnEmssnScopeAllocFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CrbnEmssnScopeAllocHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[CrbnEmssnScopeAllocShare](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- CrbnEmssnScopeAllocFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- CrbnEmssnScopeAllocHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- CrbnEmssnScopeAllocShare (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm)
