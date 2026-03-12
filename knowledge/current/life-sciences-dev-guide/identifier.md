---
title: "Identifier"
domain: life-sciences-dev-guide
topic: identifier
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:43.291Z
estimatedTokens: 1272
keywords: [Identifier, multiple, objects, API, version, 51.0, later, Calls, Usage, Associated, FHIR, resource, maps, Salesforce, V4.0, Clinical, Data, Model, Mapping]
---

# Identifier

> Represents identifier information for multiple objects. This
    object is available in API version 51.0 and later.

# Identifier

Represents identifier information for multiple objects. This object is available in API version 51.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=life_sciences_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description related to the identifier. |
| EffectiveDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time from when the identifier is valid. |
| EndDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time from when the identifier is no longer valid. |
| IdTypeId | TypePolymorphic referencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that represents the type of ID the identifier is.Referenced ObjectsCodeSetCodeSetBundle |
| IdUsageType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of use of the ID.Possible values are:OfficialOldSecondaryTempUsual |
| IdValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe value of the identifier. |
| IdentifierKey | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionA unique key assigned to the identifier record.This is a calculated field. |
| IssuingAuthorityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe authorized body that issued the identifier.Referenced ObjectsAccount |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe system-generated name for the identifier record. |
| ParentRecordId | TypePolymorphic master-detail referencePropertiesCreate, Filter, Group, SortDescriptionThe parent entity associated with the identifier.Referenced ObjectsAccountBoardCertificationContactCareRegisteredDeviceMedicationHealthConditionAllergyIntolerancePatientMedicalProcedurePatientImmunizationMedicationStatementClinicalEncounterHealthcareFacilityHealthcareProviderClinicalAlertMedicationRequestDiagnosticSummaryHealthcarePractitionerFacilityClinicalServiceRequestClinicalDetectedIssue—This value is available in API version 55.0 and later. |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe source system from which the identifier record was brought into Salesforce. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier of the identifier record in its source system. |
| SourceSystemModified | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the identifier record was last modified in its source system. |

## Usage

The identifier object is used to assign identifiers to records in various other objects. Here’s a list of the objects whose records you can add identifiers to:

-   Account
-   Contact
-   Board Certification
-   Medication
-   HealthCondition
-   AllergyIntolerance
-   PatientMedicalProcedure
-   PatientImmunization
-   MedicationStatement
-   ClinicalEncounter
-   HealthcareFacility
-   ClinicalAlert
-   MedicationRequest
-   DiagnosticSummary
-   HealthcarePractitionerFacility
-   ClinicalServiceRequest
-   ClinicalDetectedIssue

You connect the identifier record to its related record in any of the listed objects by referencing that record using the ParentRecordId field.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[IdentifierChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 61.0)

Change events are available for the object.

## Related Topics

- IdentifierChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
- Identifier (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_Identifier.htm)
