---
title: "ClinicalEncounterIdentifier"
domain: health-cloud-object-reference
topic: clinicalencounteridentifier
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:34.293Z
estimatedTokens: 1040
keywords: [ClinicalEncounterIdentifier, identifier, clinical, encounter, child, ClinicalEncounter, API, version, 51.0, later, Calls, Usage, Associated, Objects]
---

# ClinicalEncounterIdentifier

> Represents the identifier information for a clinical encounter. This object is
      a child object of ClinicalEncounter. This object is available in API version 51.0 and
    later.

# ClinicalEncounterIdentifier

Represents the identifier information for a clinical encounter. This object is a child object of ClinicalEncounter. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ClinicalEncounterId | TypeMaster-detail referencePropertiesCreate, Filter, Group, SortDescriptionThe parent clinical encounter that this identifier belongs to.Referenced ObjectsClinicalEncounter |
| EffectiveDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time from when the identifier is in effect. |
| EndDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time from when the identifier is no longer in effect. |
| IdTypeId | TypePolymorphic referencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that represents the type of the identifier.Referenced ObjectsCodeSetCodeSetBundle |
| IdUsageType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of use of the identifier.Possible values are:OfficialOldSecondaryTempUsual |
| IdValue | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe unique value of the identifier. No two ClinicalEncounterIdentifier records in an org can share the same IdValue. |
| IssuingAuthorityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe authority or organization that issued the identifier.Referenced ObjectsAccount |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe system-generated name of the ClinicalEncounterIdentifier record. |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe source system that the identifier belongs to. |

## Usage

Once the identifier-related information is recorded in the ClinicalEncounterIdentifier record, the parent ClinicalEncounter record is referenced using the ClinicalEncounterId field.

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[ClinicalEncounterIdentifierFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ClinicalEncounterIdentifierHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ClinicalEncounterIdentifierChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 61.0)

Change events are available for the object.

## Related Topics

- ClinicalEncounterIdentifierFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- ClinicalEncounterIdentifierHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- ClinicalEncounterIdentifierChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
