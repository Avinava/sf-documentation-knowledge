---
title: "MedicationDispense"
domain: health-cloud-object-reference
topic: medicationdispense
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:34.674Z
estimatedTokens: 2512
keywords: [MedicationDispense, dispense, medication, patient, order, includes, instructions, how, administered, API, version, 54.0, later, Calls, Additional]
---

# MedicationDispense

> Represents the dispense of a medication to a patient in response to a
         medication request or order. This object also includes the instructions for how the
         medication is to be administered This object is available in API version 54.0 and
      later.

# MedicationDispense

Represents the dispense of a medication to a patient in response to a medication request or order. This object also includes the instructions for how the medication is to be administered This object is available in API version 54.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=health_cloud_object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CollectedBy | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contact, account, or a healthcare provider who collected the dispensed medication. This field is available in API version 55.0 and later.This field is a polymorphic relationship field.Relationship NameCollectedByRelationship TypeLookupRefers ToAccount, Contact, HealthcareProvider |
| ContextId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe encounter that establishes the context for the dispense of a medication.Refers ToClinicalEncounter |
| DeliveryLocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe location where the dispensed medication will be delivered. This field is available in API version 55.0 and later.This field is a polymorphic relationship field.Relationship NameDeliveryLocationRelationship TypeLookupRefers ToHealthcareFacility, Location |
| DispenseTypeCodeId | TypePolymorphic lookupPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that identifies the dispense event type. For instance, a first fill, trial fill, or refill.Refers ToCodeSetCodeSetBundle |
| DispensedDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the medication was handed over. |
| HealthcareFacilityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe location where the dispense occurred.Refers ToHealthcareFacility |
| IsSubstituted | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a substitute medication was dispensed.The default value is false.This field is available in API version 55.0 and later. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last viewed. |
| MedAdministrationSettingCategory | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the setting in which the medication is expected to be administered to the patient.Possible values are:InpatientOutpatientCommunityDischarge |
| MedicationCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that identifies the medication that's dispensed.Refers ToCodeSetCodeSetBundle |
| MedicationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe medication that's dispensed.Relationship NameMedicationRelationship TypeLookupRefers ToMedication |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |
| PatientId | TypeMaster-detail referencePropertiesCreate, Filter, Group, SortDescriptionThe patient for whom the medication is dispensed.Refers ToAccount |
| PreparedDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the medication was prepared for dispense. |
| PrimaryDetectedIssueId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe primary clinical issue associated with the medication dispensation. This field is available in API version 55.0 and later.This field is a relationship field.Relationship NamePrimaryDetectedIssueRelationship TypeLookupRefers ToClinicalDetectedIssue |
| PrimaryMedicationRequestId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe primary medication request that authorized the dispense of the medication.Refers ToMedicationRequest |
| PrimaryProcedureId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe primary medical procedure associated with the medication dispensation. This field is available in API version 55.0 and later.This field is a relationship field.Relationship NamePrimaryProcedureRelationship TypeLookupRefers ToPatientMedicalProcedure |
| Quantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe quantity of medication that was dispensed. |
| QuantityUnitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unit of the quantity of medication that was dispensed.Refers ToUnitOfMeasure |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the system this record came from. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of this record in its source system. |
| SourceSystemModifiedDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when this item was last changed in the source system. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the dispense event.Possible values are:CancelledCompletedDeclinedEntered-In-ErrorIn-ProgressOn-HoldPreparationStoppedUnknown |
| StatusReasonCodeId | TypePolymorphic referencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that specifies the reason for the specified status.Refers ToCodeSetCodeSetBundle |
| StatusReasonRelatedIssueId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies clinical issue that resulted in the status of the medication dispensation. This field is available in API version 55.0 and later.This field is a relationship field.Relationship NameStatusReasonRelatedIssueRelationship TypeLookupRefers ToClinicalDetectedIssue |
| SubstitutedById | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the user or healthcare provider who substituted the medication. This field is available in API version 55.0 and later.This field is a polymorphic relationship field.Relationship NameSubstitutedByRelationship TypeLookupRefers ToHealthcareProvider, User |
| SubstitutionReason | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionSpecifies the reason for substituting the medication.Possible values are:Continuing therapyFormulary policyOut of stockRegulatory requirementThis field is available in API version 55.0 and later. |
| SubstitutionType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of substitution done for the medication.Possible values are:Brand compositionEquivalentEquivalent compositionFormularyGeneric compositionNoneTherapeutic alternativeTherapeutic brandTherapeutic genericThis field is available in API version 55.0 and later. |
| SupplyDaysCount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number of days that the dispensed supply is expected to last. |

## Additional Information for MedicationStatement in Other Objects

In addition to creating a record using these fields, you can add more details to your MedicationDispense record by creating records in certain other objects, and referencing your MedicationDispense record as the parent record. Here’s the list of objects you can associate to MedicationStatement in this way, the type of information they add, and the field they use to reference MedicationStatement.

| Object | Type of Information | Reference Field |
| --- | --- | --- |
| Identifier | Associates an identifier value to the medication dispense. | ParentRecordId |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[MedicationDispenseChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 59.0)

Change events are available for the object.

[MedicationDispenseFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[MedicationDispenseHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- MedicationDispenseChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- MedicationDispenseFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- MedicationDispenseHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
