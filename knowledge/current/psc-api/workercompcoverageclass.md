---
title: "WorkerCompCoverageClass"
domain: psc-api
topic: workercompcoverageclass
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:35.194Z
estimatedTokens: 1084
keywords: [WorkerCompCoverageClass, compensation, coverage, worker, belongs, API, version, 60.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# WorkerCompCoverageClass

> Represents the compensation coverage class that a worker belongs to.
      This object is available in API version 60.0 and later.

# WorkerCompCoverageClass

Represents the compensation coverage class that a worker belongs to. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

To access this object on your Public Sector Solutions org, Benefit Disbursement must be enabled and you must have the Benefit Disbursement Access permission set or the Benefit Disbursement permission set license.

## Fields

| Field | Details |
| --- | --- |
| InsurancePolicyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe insurance policy that covers this compensation coverage class.This field is a relationship field.Relationship NameInsurancePolicyRelationship TypeLookupRefers ToInsurancePolicy |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the compensation coverage class. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Premium | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe premium for the insurance policy that covers this compensation coverage class. |
| TotalExposure | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe payroll that the employees of this compensation coverage class belong to. |
| WorkerClass | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe code that represents the compensation class of the employees.Possible values are:1701 Abrasive Wheel Mfg. & Drivers1748 Abrasive Wheel Mfg. & Drivers1860 Abrasive Paper or Cloth Preparation |
| WorkerCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of employees in this compensation coverage class. |
| WorkerLocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe location where the worker is employed.This field is a relationship field.Relationship NameWorkerLocationRelationship TypeLookupRefers ToAssociatedLocation |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[WorkerCompCoverageClassFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[WorkerCompCoverageClassHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[WorkerCompCoverageClassOwnerSharingRule](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[WorkerCompCoverageClassShare](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- WorkerCompCoverageClassFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- WorkerCompCoverageClassHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
- WorkerCompCoverageClassOwnerSharingRule (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm)
- WorkerCompCoverageClassShare (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm)
