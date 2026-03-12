---
title: "PatientMedicationDosage"
domain: life-sciences-dev-guide
topic: patientmedicationdosage
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:43.396Z
estimatedTokens: 1864
keywords: [PatientMedicationDosage, dosage, medication, primarily, add, MedicationStatement, MedicationRequest, MedicationDispense, records, API, version, 51.0, later, Calls, Usage]
---

# PatientMedicationDosage

> Represents dosage information for medication. This object is primarily
      used to add dosage information in MedicationStatement, MedicationRequest, or
      MedicationDispense records. This object is available in API version 51.0 and
    later.

# PatientMedicationDosage

Represents dosage information for medication. This object is primarily used to add dosage information in MedicationStatement, MedicationRequest, or MedicationDispense records. This object is available in API version 51.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=life_sciences_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdditionalInstruction | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe supplemental instructions or warnings associated with the medication for the patient. |
| Comments | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe comments associated with the medication dosage for the patient. |
| DosageDefinitionType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies how the dosage was determined.Possible values are:CalculatedOrdered |
| DosageQuantityDenominator | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe denominator value for the quantity of medication per dose. This field can be used to record a simple quantity or a quantity range. |
| DosageQuantityNumerator | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe numerator value for the quantity of medication per dose. This field can be used to record a simple quantity or a quantity range. |
| DosageQuantityType | TypeStatic picklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of dosage quantity recorded in DosageQuantityNumerator and DosageQuantityDenominator.Possible values are:DoseDose Range |
| DosageRateDenominator | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe denominator value for the rate of medication in the dosage. That is, amount of medication per unit of time. This field can be used to record a simple rate, a rate ratio, or a rate range. |
| DosageRateNumerator | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe numerator value for the rate of medication in the dosage. That is, amount of medication per unit of time. This field can be used to record a simple rate, a rate ratio, or a rate range. |
| DosageRateType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of dosage rate recorded in DosageRateNumerator and DosageRateDenominator.Possible values are:FrequencyFrequency RangeFrequency Ratio |
| DosageRateUnitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unit of the dosage rate recorded using DosageRateNumerator and DosageRateDenominator.Referenced ObjectsUnitOfMeasure |
| DosageUnitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unit of the dosage rate recorded using DosageQuantityNumerator and DosageQuantityDenominator.Referenced ObjectsUnitOfMeasure |
| DosePrerequisiteId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that represents the conditions that are to be met for the dosage to be taken.Referenced ObjectsCodeSetBundle |
| IsAsNeeded | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the medication is taken on an as-needed basis. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last viewed. |
| MethodId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that represents the method of dosage administration.Referenced ObjectsCodeSetBundle |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe system-generated name of the PatientMedicationDosage record. |
| ParentRecordId | TypeMaster-detail polymorphic referencePropertiesCreate, Filter, Group, SortDescriptionThe MedicationStatement, MedicationRequest, or the MedicationDispense record that the PatientMedicationDosage record belongs to.Referenced ObjectsMedicationDispense—This value is available in API version 55.0 and later.MedicationStatementMedicationRequestMedicationAdministration |
| PatientInstruction | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe patient or consumer instructions associated with this medication. |
| RouteId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that represents the route of dosage administration.Referenced ObjectsCodeSetBundle |
| Sequence | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe position of this medication in the sequence of medications prescribed to a patient. |
| SiteId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that represents the site of dosage administration.Referenced ObjectsCodeSetBundle |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe source system from where the dosage record was brought into Salesforce. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier of the dosage record in its source system. |
| SourceSystemModified | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the dosage record was last modified in its source system. |
| TimingId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe timing information for when and how frequent the medication dosage should be taken.Referenced ObjectsActivityTiming |

## Usage

PatientMedicationDosage records are used to add more dosage-related information to MedicationStatement, MedicationRequest, and MedicationDispense records. The PatientMedicationDosage record is associated to the MedicationStatement, MedicationRequest, and MedicationDispense records using the ParentRecordId field.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PatientMedicationDosageChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 59.0)

Change events are available for the object.

## Related Topics

- PatientMedicationDosageChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
