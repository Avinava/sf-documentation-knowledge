---
title: "ProgramInitiativeEnrl"
domain: netzero-cloud-dev-guide
topic: programinitiativeenrl
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:59.749Z
estimatedTokens: 1041
keywords: [ProgramInitiativeEnrl, enrollment, sustainability, initiative, program, API, version, 59.0, later, Calls, Associated, Objects]
---

# ProgramInitiativeEnrl

> Represents the enrollment details of a sustainability initiative in a
         program. This object is available in API version 59.0 and later.

# ProgramInitiativeEnrl

Represents the enrollment details of a sustainability initiative in a program. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account associated with an organization enrolled in the initiative.This field is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date of the enrollment in the initiative. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the enrollment for the participant in the initiative is active (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the initiative enrollment record. |
| ProgramInitiativeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe program initiative that's associated with the enrollee.This field is a relationship field.Relationship NameProgramInitiativeRelationship TypeLookupRefers ToProgramInitiative |
| Scope3EmssnSrcId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe scope 3 emissions source associated with the environment, social, and governance initiative.This field is a relationship field.Relationship NameScope3EmssnSrcRelationship TypeLookupRefers ToScope3EmssnSrc |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date of the enrollment in the initiative. |
| StnryAssetEnvrSrcId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe stationary asset associated with the environment, social, and governance initiative.This field is a relationship field.Relationship NameStnryAssetEnvrSrcRelationship TypeLookupRefers ToStnryAssetEnvrSrc |
| SupplierId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe supplier associated with the environment, social, and governance initiative.This field is a relationship field.Relationship NameSupplierRelationship TypeLookupRefers ToSupplier |
| VehicleAssetEmssnSrcId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe vehicle asset associated with the environment, social, and governance initiative.This field is a relationship field.Relationship NameVehicleAssetEmssnSrcRelationship TypeLookupRefers ToVehicleAssetEmssnSrc |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProgramInitiativeEnrlFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ProgramInitiativeEnrlHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- ProgramInitiativeEnrlFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- ProgramInitiativeEnrlHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
