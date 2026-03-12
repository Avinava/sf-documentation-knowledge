---
title: "CarePerformer"
domain: health-cloud-object-reference
topic: careperformer
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:34.210Z
estimatedTokens: 1097
keywords: [CarePerformer, person, performing, care, observations, procedure, immunizations, may, physician, patient’s, contact, anyone, administered, any, sort]
---

# CarePerformer

> Represents the person performing care in observations, procedure, and
      immunizations. This person may be a physician, the patient’s contact, or anyone who
      administered any sort of care to the patient in the context of the concerned care event.
    This object is available in API version 51.0 and later.

# CarePerformer

Represents the person performing care in observations, procedure, and immunizations. This person may be a physician, the patient’s contact, or anyone who administered any sort of care to the patient in the context of the concerned care event. This object is available in API version 51.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=health_cloud_object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AffiliatedOrganizationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences the business account of the organization the care performer is affiliated to in the context of the care event.Referenced ObjectsAccount |
| CareSpecialtyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences the CareSpecialty record that represents the performer’s specialty.Referenced ObjectsCareSpecialty |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe last date that the record was referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe last date that the record was viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the CarePerformer record. |
| ParentRecordId | TypePolymorphic master-detail referencePropertiesCreate, Filter, Group, SortDescriptionReferences the care observation, procedure, or immunization that this performer was involved in.Referenced ObjectsPatientMedicalProcedureCareObservationPatientImmunizationMedicationDispense—This value is available in API version 55.0 and later. |
| PersonId | TypePolymorphic referencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionReferences the person who performed care.Referenced ObjectsAccountHealthcareProviderUser—This value is available in API version 55.0 and later. |
| RoleId | TypePolymorphic referencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that specifies the care performer's role in the care event.Referenced ObjectsCodeSetCodeSetBundle |

## Usage

This object is used to record the relevant details of a care performer in the context of specific care events. The performed care is connected to the procedure, observation, or immunization care event using the ParentRecordId field.

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[CarePerformerFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CarePerformerHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[CarePerformerChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 61.0)

Change events are available for the object.

## Related Topics

- CarePerformerFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- CarePerformerHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- CarePerformerChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
