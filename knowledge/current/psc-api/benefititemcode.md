---
title: "BenefitItemCode"
domain: psc-api
topic: benefititemcode
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:33.173Z
estimatedTokens: 695
keywords: [BenefitItemCode, code, bundle, identifies, item, associated, benefit, API, version, 59.0, later, Calls, Special, Access, Rules]
---

# BenefitItemCode

> Represents information about a code set or a code set bundle that
         identifies an item that is associated with a benefit. This object is available in API
      version 59.0 and later.

# BenefitItemCode

Represents information about a code set or a code set bundle that identifies an item that is associated with a benefit. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available if Provider Management is enabled in your org.

## Fields

| Field | Details |
| --- | --- |
| BenefitId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the benefit record associated with the benefit code set bundle.This field is a relationship field.Relationship NameBenefitRelationship TypeLookupRefers ToBenefit |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the benefit code set bundle is active (true) or not (false).The default value is false. |
| ItemCodeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the code set or code set bundle record associated with the benefit item code.This field is a polymorphic relationship field.Relationship NameItemCodeRelationship TypeLookupRefers ToCodeSet, CodeSetBundle |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the benefit code set bundle. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[BenefitItemCodeFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[BenefitItemCodeHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- BenefitItemCodeFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- BenefitItemCodeHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
