---
title: "CareObservation"
domain: health-cloud-object-reference
topic: careobservation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:34.185Z
estimatedTokens: 3861
keywords: [CareObservation, observed, care, metrics, originating, external, systems, contain, biometric, data, API, version, 49.0, later, Calls]
---

# CareObservation

> Represents the observed values for care
      metrics originating from external systems that contain biometric data. This object is
    available in API version 49.0 and later.

# CareObservation

Represents the observed values for care metrics originating from external systems that contain biometric data. This object is available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdditionalCode1Id | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that represents the type of the observation. This field is meant to be used if the CodeId field isn’t sufficient.Referenced ObjectsCodeSet |
| AdditionalCode2Id | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that represents the type of the observation. This field is meant to be used if the CodeId and AdditionalCode1Id fields aren’t sufficient.Referenced ObjectsCodeSet |
| BasedOnId | TypePolymorphic referencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe medication request or service request that the observation is based on.Referenced ObjectsMedicationRequestClinicalServiceRequest |
| BaselineUnitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unit of measure for the baseline values of this observation.Referenced ObjectsUnitOfMeasure |
| BaselineValueText | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe baseline value of an observation represented as a string. |
| BodySiteId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that represents the site of the observation on the patient’s body.Referenced ObjectsCodeSetBundle |
| CaseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe case associated with the patient's care observation.This field is a relationship field.Relationship NameCaseRefers ToCase |
| Category | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the category of the observation.Possible values are:ActivityExamImagingProcedureSocial-HistorySurveyTherapyVital-Signs |
| CodeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe system-defined code that represents the specific observation type.Referenced ObjectsCodeSetNoteWhen creating a Care Observation record in Apex, use Salesforce IDs instead of external IDs. |
| DerivationSourceId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents the document or observation from which the value of the observation is derived. If the observation value is derived from a document, reference the diagnostic summary record that represents the document. If the observation value is derived from another observation, reference the CareObservation record representing that observation.This is a polymorphic relationship field.Relationship NameDerivationSourceRelationship TypeLookupReferenced ObjectsCareObservation, DiagnosticSummary |
| DeviceId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the device generating the observed value.NoteWhen creating a Care Observation record in Apex, use Salesforce IDs instead of external IDs. |
| EffectiveDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the observation was recorded or the start date and time of the observation’s clinically relevant period. |
| EncounterId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe encounter related to the observation.Referenced ObjectsClinicalEncounter |
| EndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe end date and time of the observation’s clinically relevant period. |
| ExpectedValueId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe CodeSet ID related to the care metric target.NoteWhen creating a Care Observation record in Apex, use Salesforce IDs instead of external IDs. |
| HasMetExpectedValue | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the observed value aligns with the expected value or range. |
| IdentifierId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier for the observation.Referenced ObjectsIdentifier |
| IsMonitoredRemotely | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the observed value is obtained via remote monitoring. This record can only be used in processing and charting if this field is set to True. The default value Is false. |
| IsObserved | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates the boolean value for the observation. The value is true if something is observed, and false if it’s not. The default value is false. This field is a duplicate field introduced in API version 51.0 that stores the same information as IsOutcomePositive. Use only one of these two fields for this type of information. |
| IsOutcomePositive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates the boolean value for the observation. The value is true if something is observed, and false if it’s not. The IsObserved field is a duplicate of this field that stores the same information. Use only one of these two fields for this type of information. The default value is false. |
| IssuedDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time the current version of the observation record is issued. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| LowerBaselineValue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionRepresents the lower limit of the baseline value range for the observation. |
| MethodId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that represents the method of the observation.Referenced ObjectsCodeSetBundle |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of this care observation. |
| NumericValue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe numeric value of the care observation (6 decimal places). |
| ObservationEndTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the observation ended. |
| ObservationStartTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the observation started. |
| ObservationStatus | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the status of the observationPossible values are:AmendedFinalPreliminaryRegistered |
| ObservedSubjectId | TypeMaster-detail referencePropertiesCreate, Filter, Group, SortDescriptionThe account ID of the subject being observed. For example, the ID of the patient being observed.Referenced ObjectsAccountNoteWhen creating a Care Observation record in Apex, use Salesforce IDs instead of external IDs. |
| ObservedValueCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that represents the observed value.Referenced ObjectsCodeSetBundle |
| ObservedValueDenominator | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe denominator of the observed value. |
| ObservedValueNumerator | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe numerator of the observed value. |
| ObservedValueText | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe observed value in text form. |
| ObservedValueType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of observed values recorded in ObservedValueNumerator and ObservedValueDenominator.Possible values are:QuantityRangeRatio |
| ObservedValueUnitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unit of measure for the observed value. This is a duplicate field introduced in API version 51.0 that stores the same information as UnitOfMeasureId. Use only one of these fields to store this information.Referenced ObjectsUnitOfMeasure |
| ObserverId | TypePolymorphic referencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe person who made the observation.Referenced ObjectsAccountHealthcareProvider |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner. Available in API version 56.0 and later.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PartOfId | TypePolymorphic referencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe medication statement, procedure, or immunization that this observation is a part of.Referenced ObjectsMedicationStatementPatientImmunizationPatientMedicalProcedure |
| ProcessingResult | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe processing result of this observation record. Applicable only if IsMonitoredRemotely is set to TruePossible values are:DATA_TYPE_MISMATCH—Invalid record. Provide a numeric value that matches the data type in the Expected Value field.DOES_NOT_MEET_TARGET—Record processed. Expected value updated. Observation Numeric Value or Outcome Positive does not meet Care Metric Target conditions.MEETS_TARGET—Record processed. Expected value updated. Observation Numeric Value or Outcome Positive meets Care Metric Target conditions.MISSING_UNIT—Invalid record. Provide a valid unit of measure for the code.NO_EXPECTED_VALUE_IN_DATE—Record processed. There is no Expected Value with Care Metric Target StartDate and EndDate that meets Observation Effective Date TimeNO_VALUE_WITH_UNIT—Record processed. There is no Expected Value with matching Observation Unit of MeasureNULL_PATIENT_DEVICE—Invalid record. Add information about the patient or the device.PATIENT_NOT_FOUND—Invalid record. Patient not found in the system. |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe source system from where the record was brought into Salesforce. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier of the record in its source system. |
| SourceSystemModified | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the record was last modified in its source system. |
| UnitOfMeasureId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unit of measure for the observed value. The ObservedValueUnitId field is a duplicate of this field that stores the same information. Use only one of these fields to store this information.Referenced ObjectsUnitOfMeasureNoteWhen creating a Care Observation record in Apex, use Salesforce IDs instead of external IDs. |
| UpperBaselineValue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionRepresents the upper limit of the baseline value range for the observation. |
| ValueInterpretation | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the interpretation of values observed.Possible values are:HighLowNormal |

## Additional Information for CareObservation in Other Objects

In addition to creating a record using these fields, you can add more details to your CareObservation record by creating records in certain other objects, and referencing your CareObservation record as the parent record. Here’s the list of objects you can associate to CareObservation in this way, the type of information they add, and the field they use to reference CareObservation.

| Object | Type of Information | Reference Field |
| --- | --- | --- |
| CareObservationComponent | Associates information about the observation’s child components. | CareObservationId |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CareObservationChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 58.0)

Change events are available for the object.

[CareObservationFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CareObservationHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[CareObservationOwnerSharingRule](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.") (API version 56.0)

Sharing rules are available for the object.

[CareObservationShare](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.") (API version 56.0)

Sharing is available for the object.

-   **[CareObservationComponent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_CareObservationComponent.htm)**
    Represents information about a component of a care observation. This object is available in API version 51.0 and later.

## Related Topics

- CareObservationChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- CareObservationFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- CareObservationHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- CareObservationOwnerSharingRule (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- CareObservationShare (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm)
- CareObservationComponent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_CareObservationComponent.htm)
