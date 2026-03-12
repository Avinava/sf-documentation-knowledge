---
title: "BnftAsgntBnftItemCode"
domain: psc-api
topic: bnftasgntbnftitemcode
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:33.231Z
estimatedTokens: 595
keywords: [BnftAsgntBnftItemCode, junction, benefit, assignment, item, code, assigned, beneficiary, API, version, 66.0, later, Calls, Associated, Objects]
---

# BnftAsgntBnftItemCode

> Represents a junction between a benefit assignment and a benefit item code.
         Indicates the benefit item assigned to the beneficiary. This object is available in
      API version 66.0 and later.

# BnftAsgntBnftItemCode

Represents a junction between a benefit assignment and a benefit item code. Indicates the benefit item assigned to the beneficiary. This object is available in API version 66.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BenefitAssignmentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThis field is a relationship field.Relationship NameBenefitAssignmentRelationship TypeMaster-detailRefers ToBenefitAssignment (the master object) |
| BenefitItemCodeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThis field is a relationship field.Relationship NameBenefitItemCodeRefers ToBenefitItemCode |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the benefit assignment benefit item code. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[BnftAsgntBnftItemCodeFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[BnftAsgntBnftItemCodeHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- BnftAsgntBnftItemCodeFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- BnftAsgntBnftItemCodeHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
