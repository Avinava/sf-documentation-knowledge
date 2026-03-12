---
title: "MedicationAdministration"
domain: health-cloud-object-reference
topic: medicationadministration
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:34.738Z
estimatedTokens: 1727
keywords: [MedicationAdministration, instance, medication, administered, patient, API, version, 64.0, later, Calls, Associated, Objects]
---

# MedicationAdministration

> Represents an instance of medication administered to a patient. This
      object is available in API version 64.0 and later.

# MedicationAdministration

Represents an instance of medication administered to a patient. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ClinicalEncounterId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe clinical encounter associated with the medication administration.This field is a relationship field.Relationship NameClinicalEncounterRefers ToClinicalEncounter |
| DeviceCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe device code set bundle associated with the medication administration, representing the device used during the administration.This field is a relationship field.Relationship NameDeviceCodeRefers ToCodeSetBundle |
| EndDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe end date and time when the administration occurred (or didn't occur). |
| IsSubPotent | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the full dose wasn’t administered (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| MedicationId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe medication associated with the medication administration.This field is a relationship field.Relationship NameMedicationRefers ToMedication |
| MedicationRequestId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe medication request associated with the medication administration.This field is a relationship field.Relationship NameMedicationRequestRefers ToMedicationRequest |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the medication administration. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PatientId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe patient associated with the medication administration.This field is a relationship field.Relationship NamePatientRelationship TypeMaster-detailRefers ToAccount (the master object) |
| RecordedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the occurrence of the medication administration was first captured. |
| StartDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe start date and time when the administration occurred (or didn't occur). |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the medication administration.Possible values are:CompletedEnteredInErrorInProgressNotAdministeredOnHoldStoppedUnknownThe default value is InProgress. |
| StatusReasonCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status reason code set bundle associated with the medication administration indicating why the administration wasn’t performed.This field is a relationship field.Relationship NameStatusReasonCodeRefers ToCodeSetBundle |
| SubPotentReasonId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe sub potent reason code set bundle associated with the medication administration, representing the reason why the full dose wasn’t administered.This field is a relationship field.Relationship NameSubPotentReasonRefers ToCodeSetBundle |
| TypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type code set bundle associated with the medication administration that indicates the type of medication administration.This field is a relationship field.Relationship NameTypeRefers ToCodeSetBundle |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[MedicationAdministrationChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[MedicationAdministrationHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[MedicationAdministrationOwnerSharingRule](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[MedicationAdministrationShare](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

-   **[MedicationAdministrationDtl](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_objects_medicationadministrationdtl.htm)**
    Represents the details of an instance of medication administered to a patient. This object is available in API version 64.0 and later.

## Related Topics

- MedicationAdministrationChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- MedicationAdministrationHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- MedicationAdministrationOwnerSharingRule (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- MedicationAdministrationShare (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm)
- MedicationAdministrationDtl (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_objects_medicationadministrationdtl.htm)
