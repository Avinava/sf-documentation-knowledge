---
title: "CareSpecialtyTaxonomy"
domain: health-cloud-object-reference
topic: carespecialtytaxonomy
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:36.744Z
estimatedTokens: 758
keywords: [CareSpecialtyTaxonomy, junction, CareSpecialty, CareTaxonomy, API, version, 52.0, later, Calls, Associated, Objects]
---

# CareSpecialtyTaxonomy

> The junction object between CareSpecialty and CareTaxonomy.  This object
      is available in API version 52.0 and later.

# CareSpecialtyTaxonomy

The junction object between CareSpecialty and CareTaxonomy. This object is available in API version 52.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CareSpecialtyId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe care specialty associated with a care specialty taxonomy.This is a relationship field.Relationship NameCareSpecialtyRelationship TypeLookupRefers ToCareSpecialty |
| CareTaxonomyId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe care taxonomy associated with a care specialty taxonomy.This is a relationship field.Relationship NameCareTaxonomyRelationship TypeLookupRefers ToCareTaxonomy |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe system-generated name of the record. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CareSpecialtyTaxonomyFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CareSpecialtyTaxonomyHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[CareSpecialtyTaxonomyChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 61.0)

Change events are available for the object.

## Related Topics

- CareSpecialtyTaxonomyFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- CareSpecialtyTaxonomyHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- CareSpecialtyTaxonomyChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
