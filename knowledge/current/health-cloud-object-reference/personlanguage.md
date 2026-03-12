---
title: "PersonLanguage"
domain: health-cloud-object-reference
topic: personlanguage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:34.556Z
estimatedTokens: 1135
keywords: [PersonLanguage, preference, person’s, language, API, version, 51.0, later, Calls, Usage, Associated, Objects]
---

# PersonLanguage

> Represents the use and preference information about a person’s language.
    This object is available in API version 51.0 and later.

# PersonLanguage

Represents the use and preference information about a person’s language. This object is available in API version 51.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=health_cloud_object_reference)

#### Important

Where possible, we have changed noninclusive terms to align with our company value of Equality. We’ve maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| IndividualId | TypePolymorphic master-detail referencePropertiesCreate, Filter, Group, SortDescriptionThe person who speaks the language.Referenced ObjectsPerson AccountAccountContact |
| Language | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the language spoken by the person.Possible values are:EnglishSpanish |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionA system-generated name for the PersonLanguage record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner. Available in API version 56.0 and later.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Rank | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe preference rank for a particular language for a particular person. |
| SpeakingProficiencyLevel | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the person’s speaking proficiency level.Possible values are:BeginnerIntermediateFluentThe default value is Fluent. Available in API version 56.0 and later. |
| WritingProficiencyLevel | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Sort, Nillable, UpdateDescriptionSpecifies the person’s writing proficiency level.Possible values are:NoviceIntermediateAdvancedSuperiorDistinguishedThe default value is Novice. Available in API version 56.0 and later. |

## Usage

PersonLanguage is a data type-like object that’s associated to different objects representing people. The language a person speaks is associated to that person by referencing their account, contact, or person account records using the IndividualId field on PersonLanguage.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PersonLanguageOwnerSharingRule](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.") (API version 56.0)

Sharing rules are available for the object.

[PersonLanguageShare](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.") (API version 56.0)

Sharing is available for the object.

[PersonLanguageChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 61.0)

Change events are available for the object.

## Related Topics

- PersonLanguageOwnerSharingRule (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- PersonLanguageShare (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm)
- PersonLanguageChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
