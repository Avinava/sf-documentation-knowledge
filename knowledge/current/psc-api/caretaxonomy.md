---
title: "CareTaxonomy"
domain: psc-api
topic: caretaxonomy
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:33.405Z
estimatedTokens: 1032
keywords: [CareTaxonomy, taxonomy, codes, API, version, 64.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# CareTaxonomy

> Represents a static list of taxonomy codes. This object is
      available in API version 64.0 and later.

# CareTaxonomy

Represents a static list of taxonomy codes. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available if Provider Management is enabled in your org. To access the object, you need the Provider Management Access permission set or the Provider Management permission set license. Partner users need the Provider Management for Partner permission set or permission set license.

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the care taxonomy. |
| EffectiveFrom | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the care taxonomy is effective. |
| EffectiveTo | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the care taxonomy is no longer effective. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the care taxonomy is active (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the care taxonomy. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the record owner.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ParentTaxonomyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe parent care taxonomy associated with the current care taxonomy.This field is a relationship field.Relationship NameParentTaxonomyRefers ToCareTaxonomy |
| TaxonomyCode | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe unique code for the care taxonomy. |
| TaxonomyType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of the care taxonomy. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CareTaxonomyChangeEvent](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[CareTaxonomyFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CareTaxonomyHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- CareTaxonomyChangeEvent (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_change_event.htm)
- CareTaxonomyFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- CareTaxonomyHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
