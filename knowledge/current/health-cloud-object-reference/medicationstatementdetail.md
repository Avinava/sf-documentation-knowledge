---
title: "MedicationStatementDetail"
domain: health-cloud-object-reference
topic: medicationstatementdetail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:34.680Z
estimatedTokens: 959
keywords: [MedicationStatementDetail, additional, associated, MedicationStatement, records, API, version, 54.0, later, Calls, Usage, Objects]
---

# MedicationStatementDetail

> Represents additional information associated with MedicationStatement
         records. This object is available in API version 54.0 and later.

# MedicationStatementDetail

Represents additional information associated with MedicationStatement records. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DetailCodeId | TypePolymorphic Master-Detail referencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences a code set or code set bundle that adds information to a MedicationStatement record.Referenced ObjectsCodeSetCodeSetBundle |
| DetailRecordId | TypePolymorphic referencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences a record that adds information to a MedicationStatement recordRefers ToCareObservationClinicalServiceRequestDiagnosticSummaryHealthConditionMedicationDispenseMedicationRequestMedicationStatementPatientMedicalProcedure |
| DetailType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of information added to the MedicationStatement record.Possible values are:Based OnPart OfStatus ReasonReason CodeReason ReferenceDerived From |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last viewed. |
| MedicationStatementId | TypeMaster-detail referencePropertiesCreate, Filter, Group, SortDescriptionThe parent MedicationStatement record to which additional information is being added.This is a relationship field.Refers ToMedicationStatement |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |

## Usage

-   Use the MedicationStatementId field to reference the parent MedicationStatement record that the additional information is being associated to.
-   Use the DetailType picklist to specify the type of detail that’s being associated to the MedicationStatement record. Here's how the associated record types are mapped to values in the DetailType field.
    -   Based On - MedicationRequest, ServiceRequest
    -   Part Of - MedicationDispense, MedicationStatement, PatientMedicalProcedure, CareObservation
    -   Status Reason - CodeSet, CodeSetBundle
    -   Reason Code - CodeSet, CodeSetBundle
    -   Reason Reference - HealthCondition, CareObservation, DiagnosticSummary
    -   Derived From - CareObservation, ClinicalServiceRequest, DiagnosticSummary, HealthCondition, MedicationDispense, MedicationRequest, MedicationStatement, PatientMedicalProcedure
-   Use the DetailCodeId and DetailRecordId fields to reference the records with the associated information.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[MedicationStatementDetailChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 62.0)

Change events are available for the object.

## Related Topics

- MedicationStatementDetailChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
