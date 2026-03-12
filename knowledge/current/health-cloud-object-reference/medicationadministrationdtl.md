---
title: "MedicationAdministrationDtl"
domain: health-cloud-object-reference
topic: medicationadministrationdtl
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:34.744Z
estimatedTokens: 882
keywords: [MedicationAdministrationDtl, instance, medication, administered, patient, API, version, 64.0, later, Calls, Associated, Objects]
---

# MedicationAdministrationDtl

> Represents the details of an instance of medication administered to a
         patient. This object is available in API version 64.0 and later.

# MedicationAdministrationDtl

Represents the details of an instance of medication administered to a patient. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DetailCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences a code set or code set bundle that adds information to a medication administration record.This field is a relationship field.Relationship NameDetailCodeRefers ToCodeSet |
| DetailRecordId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionReferences a record that adds information to a medication administration record.This field is a polymorphic relationship field.Relationship NameDetailRecordRefers ToAccount, CareObservation, CarePlan, DiagnosticSummary, HealthCondition, HealthcareProvider, MedicationAdministration, MedicationDispense, MedicationRequest, MedicationStatement, PatientMedicalProcedure |
| DetailType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the relation between the medication administration and the medication administration detail record.Possible values are:BasedOnPartOfPerformerDetailReasonReference |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| MedicationAdministrationId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe medication administration associated with the medication administration detail.This field is a relationship field.Relationship NameMedicationAdministrationRelationship TypeMaster-detailRefers ToMedicationAdministration (the master object) |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[MedicationAdministrationDtlChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[MedicationAdministrationDtlHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- MedicationAdministrationDtlChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- MedicationAdministrationDtlHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
