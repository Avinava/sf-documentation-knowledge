---
title: "PatientHealthReaction"
domain: health-cloud-object-reference
topic: patienthealthreaction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:34.505Z
estimatedTokens: 1205
keywords: [PatientHealthReaction, patient’s, adverse, reaction, allergy, intolerance, immunization, API, version, 51.0, later, Calls, Usage, Associated, Objects]
---

# PatientHealthReaction

> Represents a patient’s adverse reaction to an allergy, intolerance, or
      immunization. This object is available in API version 51.0 and later.

# PatientHealthReaction

Represents a patient’s adverse reaction to an allergy, intolerance, or immunization. This object is available in API version 51.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=health_cloud_object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CausativeSubstanceId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe system-defined code that represents the substance that triggered the reaction.Referenced ObjectsCodeSetBundle |
| Details | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAdditional information about the reaction and, if required, the manifested symptoms. |
| ExposureRouteId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that represents the route of exposure related to the reaction.Referenced ObjectsCodeSetBundle |
| IsSelfReported | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the reaction was reported by the patient. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last viewed. |
| ManifestedSymptomId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe system-defined code that represents the manifested symptom.Referenced ObjectsCodeSetBundle |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe system-generated name of the PatientHealthReaction record. |
| ObservationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe observation that provides additional information about the reaction.Referenced ObjectsCareObservation |
| ParentId | TypePolymorphic master-detail referencePropertiesCreate, Filter, Group, SortDescriptionThe imm unization or allergy intolerance that this reaction is a result of.Referenced ObjectsAllergyIntolerancePatientImmunization |
| ReactionDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time of the reaction. |
| Severity | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the severity of the reaction.Possible values are:MildModerateSevere |

## Usage

PatientHealthReaction records are used to add more information to AllergyIntolerance and PatientImmunization records in the event of the patient experiencing an adverse reaction related to those events. The PatientHealthReaction record is associated to the AllergyIntolerance or PatientImmunization records using the ParentId field.

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[PatientHealthReactionFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PatientHealthReactionHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[PatientHealthReactionChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 61.0)

Change events are available for the object.

## Related Topics

- PatientHealthReactionFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- PatientHealthReactionHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- PatientHealthReactionChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
