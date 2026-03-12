---
title: "AllergyIntolerance"
domain: health-cloud-object-reference
topic: allergyintolerance
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:34.157Z
estimatedTokens: 1741
keywords: [AllergyIntolerance, clinical, assessment, patient’s, allergy, intolerance, API, version, 51.0, later, Calls, Additional, Objects, Associated, Allergy​Intolerance, FHIR, resource, maps, PatientHealthReaction, objects]
---

# AllergyIntolerance

> Represents a clinical assessment of a patient’s allergy or intolerance.
    This object is available in API version 51.0 and later.

# AllergyIntolerance

Represents a clinical assessment of a patient’s allergy or intolerance. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssertionSourceId | TypePolymorphic referencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents the person who asserted the information about the allergy or intolerance.ExampleThe patient or the provider who assessed the patient’s condition.Referenced ObjectsAccountHealthcareProvider |
| Category | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionSpecifies the categories the allergy or intolerance belongs to.Possible values are:BiologicEnvironmentFoodMedication |
| ClinicalEncounterId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe encounter where the allergy or intolerance was asserted.ExampleThe encounter record for a patient’s ER visit after a bee sting. |
| CodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that represents the allergy or intolerance. |
| LastOccurrenceDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date of the last occurrence of the allergy or intolerance.Example1993-11-09T21:45:00.384Z |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe last date that the record was referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe last date that the record was viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe system-generated name of the AllergyIntolerance record. |
| OnsetEndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe end of the estimated onset period.Example1993-11-09T23:50:00.384Z |
| OnsetStartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe onset date of the allergy intolerance or the estimated start date of the allergy intolerance's onset.Example1993-11-09T21:45:00.384Z |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the allergy intolerance record. Available in API version 56.0 and later.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroupUser |
| PatientId | TypeMaster-detail referencePropertiesCreate, Filter, Group, SortDescriptionThe patient who has the allergy or intolerance.Referenced ObjectsAccount |
| RecordCreationDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe time the record for the allergy or intolerance was created. |
| RecordCreatorId | TypePolymorphic referencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe person who created the record for the allergy or intolerance.Referenced ObjectsAccountHealthcareProvider |
| Severity | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the severity of the allergy or intolerance.Possible values are:HighLowUnable to assess |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe source system from where the record was brought into Salesforce. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier of the record in its source system. |
| SourceSystemModified | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the record was last modified in its source system. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the allergy or intolerance. Possible values are:ActiveInactiveResolved |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies whether the record is about an allergy or an intolerance.Possible values are:AllergyIntolerance |
| VerificationStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies whether the allergy or intolerance has been verified.Possible values are:ConfirmedEntered in errorRefutedUnconfirmed |

## Additional Information for AllergyIntolerance in Other Objects

In addition to creating a record using these fields, you can add more details to your AllergyIntolerance record by creating records in certain other objects, and referencing your AllergyIntolerance record as the parent record. Here’s the list of objects you can relate to AllergyIntolerance in this way, the type of information they add, and the field they use to reference AllergyIntolerance.

| Object | Type of Information | Reference Field |
| --- | --- | --- |
| PatientMedicalReaction | Specifies the information about the patient’s adverse reaction linked to the allergy or intolerance. | ParentId |
| Identifier | Associates an identifier value to the allergy intolerance. | ParentRecordId |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AllergyIntoleranceChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 58.0)

Change events are available for the object.

[AllergyIntoleranceOwnerSharingRule](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.") (API version 56.0)

Sharing rules are available for the object.

[AllergyIntoleranceShare](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.") (API version 56.0)

Sharing is available for the object.

## Related Topics

- AllergyIntoleranceChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- AllergyIntoleranceOwnerSharingRule (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- AllergyIntoleranceShare (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm)
- AllergyIntolerance (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_AllergyIntolerance.htm)
