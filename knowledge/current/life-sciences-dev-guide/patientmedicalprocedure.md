---
title: "PatientMedicalProcedure"
domain: life-sciences-dev-guide
topic: patientmedicalprocedure
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:43.507Z
estimatedTokens: 2429
keywords: [PatientMedicalProcedure, detailed, healthcare, procedure, patient, undergone, undergoing, undergo, API, version, 51.0, later, Calls, Additional, Objects]
---

# PatientMedicalProcedure

> Represents detailed information about a healthcare procedure the patient has
      undergone, is undergoing or will undergo.  This object is available in API version 51.0
    and later.

# PatientMedicalProcedure

Represents detailed information about a healthcare procedure the patient has undergone, is undergoing or will undergo. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssertionSourceId | TypePolymorphic ReferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe person who made the statement about the procedure.ExampleThe patient or the provider who assessed the patient’s condition.Referenced ObjectsAccountHealthcareProvider |
| ClinicalEncounterId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe patient’s clinical encounter that the procedure is a part of.Referenced ObjectsClinicalEncounter |
| CodeId | TypeReferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that identifies a procedure.ExampleThe SNOMED code for frontal sinusectomy.Referenced ObjectCodeSetBundle |
| DurationTimeString | TypeStringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe duration of the procedure in string format.Example2 hours |
| EndDate | TypeDateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time that the procedure ended or the end date of the estimated period within which the procedure was performed.Example1993-11-09T18:30:00.384Z |
| FacilityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe heathcare facility where the procedure is performed.Referenced ObjectHealthcareFacility |
| LastReferencedDate | TypeDateTimePropertiesFilter, Nillable, SortDescriptionThe date and time the last time this record was referenced. |
| LastViewedDate | TypeDateTimePropertiesFilter, Nillable, SortDescriptionThe date and time the last time this record was viewed. |
| Name | TypeDtringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. This is automatically generated when the record is saved.ExamplePMP-7396 |
| Outcome | TypePicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the outcome for the procedure.Possible values are:Partially successfulSuccessfulUnsuccessful |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the patient medical procedure record. Available in API version 56.0 and later.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroupUser |
| PatientId | TypeMaster-Detail ReferencePropertiesCreate, Filter, Group, SortDescriptionThe patient on whom the procedure was performed.ExampleCharles GreenReferenced ObjectAccount |
| PerformedAgeRangeUnitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unit of measure for the performed at age upper and lower limit fields.Referenced ObjectUnitOfMeasure |
| PerformedAtAge | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe patient’s age when the procedure was performed. |
| PerformedAtAgeLowerLimit | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe lower limit for the range of the patient’s age when the procedure was performed |
| PerformedAtAgeUnitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unit of measure for the PerformedAtAge field.Referenced ObjectUnitOfMeasure |
| PerformedAtAgeUpperLimit | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe upper limit for the range of the patient’s age when the procedure was performed |
| ReasonCodeId | TypeReferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that specifies the reason for the procedure.ExampleThe SNOMED code for paraparesis.Referenced ObjectCodeSetBundle |
| ReasonReferenceId | TypeReferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe event that warranted the procedure.Referenced ObjectsHealthConditionCareObservationPatientMedicalProcedureDiagnosticSummaryExampleChronic sinusitis, a record in HealthCondition. |
| RecordCreatorId | TypeReferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe person who created the record.Referenced ObjectsAccountHealthcareProviderExampleDr. Carol Peterson |
| ReportId | TypeReferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe report associated with this procedure..ExampleCharles Green’s sinusectomy report.Referenced ObjectDiagnosticSummary |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe source system from where the record was brought into Salesforce. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier of the record in its source system. |
| SourceSystemModified | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the record was last modified in its source system. |
| StartDate | TypeDateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time that the procedure began or the start date of the estimated period within which the procedure was performed.This field can be used in two ways to indicate the date and time of the procedure:If you want to specify a single date as either the actual or estimated date of the procedure, enter that date and time in this field.If you want to specify a period in which the procedure was estimated to have happened, use this field to specify that start of the period, and the EndDate field to specify the end of the period.Example1993-11-09T21:45:00.384Z |
| Status | TypePicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the procedure.Possible values are:CompletedEntered in errorIn ProgressNot DoneOn HoldPreparationStoppedUnknown |
| StatusReasonCodeId | TypeReferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that specifies the reason for the status.ExampleThe SNOMED code for ‘Procedure not ordered’Referenced ObjectCodeSetBundle |
| TypeId | TypeReferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that specifies the procedure's type.ExampleThe SNOMED code for ‘Surgical procedure’Referenced ObjectCodeSetBundle |

## Additional Information for PatientMedicalProcedure in Other Objects

In addition to creating a record using these fields, you can add more details to your PatientMedicalProcedure record by creating records in certain other objects, and referencing your PatientMedicalProcedure record as the parent record. Here’s the list of objects you can associate to PatientMedicalProcedure in this way, the type of information they add, and the field they use to reference PatientMedicalProcedure.

| Object | Type of Information | Reference Field |
| --- | --- | --- |
| CarePerformer | Specifies the person who performed the procedure. | ParentRecordId |
| Identifier | Associates an identifier value to the procedure. | ParentRecordId |
| PatientMedicalProcedureDetail | Associates the procedure with various other records and defines the nature of association. For instance, if the procedure is based on, part of, or a follow up of the associated record, and so on. | PatientMedicalProcedureId |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PatientMedicalProcedureChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 58.0)

Change events are available for the object.

[PatientMedicalProcedureOwnerSharingRule](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.") (API version 56.0)

Sharing rules are available for the object.

[PatientMedicalProcedureShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.") (API version 56.0)

Sharing is available for the object.

-   **[PatientMedicalProcedureDetail](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_PatientMedicalProcedureDetail.htm)**
    Associates records from different objects to a patient medical procedure record to add more information to the procedure record. This is a multi-object junction object. This object is available in API version 51.0 and later.

## Related Topics

- PatientMedicalProcedureChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
- PatientMedicalProcedureOwnerSharingRule (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_ownersharingrule.htm)
- PatientMedicalProcedureShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
- PatientMedicalProcedureDetail (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_PatientMedicalProcedureDetail.htm)
