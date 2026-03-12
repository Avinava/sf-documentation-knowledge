---
title: "MedicationStatement"
domain: life-sciences-dev-guide
topic: medicationstatement
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:43.346Z
estimatedTokens: 2193
keywords: [MedicationStatement, record, medication, patient, currently, taking, taken, past, API, version, 51.0, later, Calls, Additional, Objects, Medication​Statement, FHIR, resource, maps, Salesforce​]
---

# MedicationStatement

> Represents a record of medication that the patient is currently taking or has
      taken in the past. This object is available in API version 51.0 and later.

# MedicationStatement

Represents a record of medication that the patient is currently taking or has taken in the past. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssertionDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time the medication statement was made. |
| CareObservationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe observation that warranted this medication.Referenced ObjectsCareObservation |
| CaseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe case associated with the patient's medication statement.This field is a relationship field.Relationship NameCaseRefers ToCase |
| ClinicalEncounterId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe encounter related to the medication statement.Referenced ObjectsClinicalEncounter |
| DeliverySetting | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the setting in which the medication was administered.Possible values are:CommunityInpatientOutpatientPatientSpecified |
| EndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe stated end date and time for the medication. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| MedicationCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that identifies a medication. A record can select either a MedicationId or a MedicationCodeId, but not both.Referenced ObjectsCodeSetBundle |
| MedicationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe medication associated with this medication statement. A record can select either a MedicationId or a MedicationCodeId, but not both.Referenced ObjectsMedication |
| MedicationReasonCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that specifies the reason this medication was taken.Referenced ObjectsCodeSetBundle |
| MedicationReasonId | TypePolymorphic referencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe observation, condition, or diagnostic report that warranted the medication.Referenced ObjectsHealthConditionCareObservation |
| MedicationRequestId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA medication request associated with the medication statement.Referenced ObjectsMedicationRequest |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe system-generated name of the medication statement record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the medication statement record. Available in API version 56.0 and later.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroupUser |
| ParentMedicationStatementId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe parent medication statement associated with the medication statement.Referenced ObjectsMedicationStatement |
| PatientId | TypeMaster-detail referencePropertiesCreate, Filter, Group, SortDescriptionA patient that the medication statement refers to.Referenced ObjectsAccount |
| ProcedureId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe procedure associated with this medication statement.Referenced ObjectsPatientMedicalProcedure |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the system this record came from. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of this record in its source system. |
| SourceSystemModified | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which this item was last changed in the source system. |
| StartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe stated start date and time for the medication. |
| StatementSourceId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe person who made the medication statement. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the medication in this statement.Possible values are:ActiveCompletedEntered-in-errorIntendedNot-takenOn-holdReview Pending - This picklist value is available for the Home Health feature in API version 59.0 and later.StoppedUnknown |
| StatusReasonCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that specifies the reason for the status.Referenced ObjectsCodeSetBundle |

## Additional Information for MedicationStatement in Other Objects

In addition to creating a record using these fields, you can add more details to your MedicationStatement record by creating records in certain other objects, and referencing your MedicationStatement record as the parent record. Here’s the list of objects you can associate to MedicationStatement in this way, the type of information they add, and the field they use to reference MedicationStatement.

| Object | Type of Information | Reference Field |
| --- | --- | --- |
| Identifier | Associates an identifier value to the medication statement. | ParentRecordId |
| PatientMedicationDosage | Associates dosage related information for the medication in the medication statement record. | ParentRecordId |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[MedicationStatementChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 58.0)

Change events are available for the object.

[MedicationStatementFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[MedicationStatementHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[MedicationStatementOwnerSharingRule](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.") (API version 56.0)

Sharing rules are available for the object.

[MedicationStatementShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.") (API version 56.0)

Sharing is available for the object.

-   **[MedicationStatementDetail](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_medicationstatementdetail.htm)**
    Represents additional information associated with MedicationStatement records. This object is available in API version 54.0 and later.

## Related Topics

- MedicationStatementChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
- MedicationStatementFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- MedicationStatementHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- MedicationStatementOwnerSharingRule (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_ownersharingrule.htm)
- MedicationStatementShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
- MedicationStatementDetail (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_medicationstatementdetail.htm)
- MedicationStatement (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_MedicationStatement.htm)
