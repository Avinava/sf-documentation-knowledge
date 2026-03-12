---
title: "MedicationTherapyReview"
domain: health-cloud-object-reference
topic: medicationtherapyreview
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:37.648Z
estimatedTokens: 1594
keywords: [MedicationTherapyReview, Stores, medication, therapy, review, conducted, patient, API, version, 56.0, later, Calls, Associated, Objects]
---

# MedicationTherapyReview

> Stores information about a medication therapy review conducted for a
         patient. This object is available in API version 56.0 and later.

# MedicationTherapyReview

Stores information about a medication therapy review conducted for a patient. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CareProgramId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe care program associated with the medication therapy review.This field is a relationship field.Relationship NameCareProgramRelationship TypeLookupRefers ToCareProgram |
| ConductedById | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe user who started the medication therapy review for the patient.This field is a relationship field.Relationship NameConductedByRelationship TypeLookupRefers ToUser |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA description of the medication therapy review conducted for the patient. |
| IsPatientInLtrmCareFacility | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the patient was at a long-term healthcare facility during the medication therapy review.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced the record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed the record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the medication therapy review. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns the record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PatientId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe patient on whom the medication therapy review is conducted.This field is a relationship field.Relationship NamePatientRelationship TypeMaster-DetailRefers ToAccount |
| ReviewDueDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the medication therapy review is expected to complete. |
| ReviewEndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the medication therapy review is complete. |
| ReviewStartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the medication therapy review is initiated. |
| ReviewSubtype | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionA further classification of the medication therapy review type. |
| ReviewType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of medication therapy review conducted for the patient.Possible values are:ComprehensiveMedicationReviewTargetedMedicationReview |
| SourceSysModifiedDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the record was last modified in its source system. |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe source system from where the record was brought into Salesforce. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier of the record in its source system. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe current status of the medication therapy review.Possible values are:CancelledCompletedInProgressNotStarted |
| SurrogateDecisionMakerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe authorized representative who attends the medication therapy review and makes health-care related decisions on behalf of a cognitively impaired patient.This field is a polymorphic relationship field.Relationship NameSurrogateDecisionMakerRelationship TypeLookupRefers ToAccount, Contact, HealthcareProvider, User |
| SurrogateLocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe address of the surrogate decision maker where the comprehensive medication review document is delivered.This field is a polymorphic relationship field.Relationship NameSurrogateLocationRelationship TypeLookupRefers ToAddress, Location |
| SurrogateType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe relationship between the surrogate decision maker and the patient.Possible values are:Healthcare ProxyPatient's Guardian of the EstatePatient’s ChildPatient’s FriendPatient’s GuardianPatient’s ParentPatient’s RelativePatient’s SiblingPatient’s Spouse |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[MedicationTherapyReviewFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[MedicationTherapyReviewHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[MedicationTherapyReviewShare](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- MedicationTherapyReviewFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- MedicationTherapyReviewHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- MedicationTherapyReviewShare (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm)
