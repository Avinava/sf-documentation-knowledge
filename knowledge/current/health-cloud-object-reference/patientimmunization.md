---
title: "PatientImmunization"
domain: health-cloud-object-reference
topic: patientimmunization
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:34.525Z
estimatedTokens: 2826
keywords: [PatientImmunization, patient’s, immunizations, API, version, 51.0, later, Calls, Additional, Objects, Associated]
---

# PatientImmunization

> Represents information about a patient’s immunizations. This object is
    available in API version 51.0 and later.

# PatientImmunization

Represents information about a patient’s immunizations. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CareObservationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe observation that determined the need for the immunization.Referenced ObjectsCareObservation |
| ClinicalEncounterId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe clinical encounter that the immunization was a part of.Referenced ObjectsClinicalEncounter |
| CurrentDose | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe current dose the patient is on in the total number of doses recommended for immunization. |
| DiagnosticSummaryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe diagnostic summary that determined the need for the immunization.Referenced ObjectsDiagnosticSummary |
| Dose | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount of vaccine that was administered. |
| DoseUnitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unit of the amount of vaccine that was administered.Referenced ObjectUnitOfMeasure |
| ExpirationDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the immunization is expected to expire. |
| FacilityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe healthcare facility where the immunization was performed.Referenced ObjectsHealthcareFacility |
| HealthConditionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe health condition that determined the need for the immunization.Referenced ObjectsHealthCondition |
| ImmunizationRecommendation | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe protocol that was followed for the immunzation. |
| InformationSourceId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that represents the source that provided information about the immunization.Referenced ObjectsCodeSetBundle |
| IsRecordedByVaccinator | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the immunization record was recorded by the vaccinator. |
| IsSubpotent | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the vaccination dose was sub-potent. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last viewed. |
| LotNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe lot number of the vaccine. |
| Manufacturer | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the vaccine’s manufacturer. |
| ManufacturerAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences the organization that manufactured the vaccine.Referenced ObjectsAccount |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe system-generated name of the patient immunization record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the patient immunization record. Available in API version 56.0 and later.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroupUser |
| PatientId | TypeMaster-detail referencePropertiesCreate, Filter, Group, SortDescriptionThe patient who was immunized.Referenced ObjectsAccount |
| ReasonCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that represents the reason for the immunization.Referenced ObjectsCodeSetBundle |
| RecommendedDoses | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTotal number of doses recommended to achieve immunity. |
| RecommendingAuthority | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe authority or organization that recommended the vaccination protocol that was followed. |
| RecordCreationDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the patient immunization record was created. |
| RouteId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that represents the route followed in the vaccine administration.Referenced ObjectsCodeSetBundle |
| SiteId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that represents the site of the vaccine administration on the patient’s body.Referenced ObjectsCodeSetBundle |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe source system from where the immunization record was brought into Salesforce. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier of the immunization record in its source system. |
| SourceSystemModified | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the immunization record was last modified in its source system. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the status of the vaccination.Possible values are:CompletedEntered in ErrorNot Done |
| StatusReasonCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that represents the reason for the status of the vaccination.Referenced ObjectsCodeSetBundle |
| SubpotencyReasonCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that represents the reason for why the vaccination was sub-potent.Referenced ObjectsCodeSetBundle |
| TargetDiseaseCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that represents the disease that was targeted in the immunization.Referenced ObjectsCodeSetBundle |
| VaccinationDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time of the vaccination. If you specify a vaccination date, you can’t specifiy a vaccination period. |
| VaccinationPeriod | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe period of time during which the vaccination happened. If you specify a vaccination period, you can’t specify a vaccination date. |
| VaccineCodeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe system-defined code that represents vaccine that was administered in the immunization.Referenced ObjectsCodeSetBundle |

## Additional Information for PatientImmunization in Other Objects

In addition to creating a record using these fields, you can add more details to your PatientImmunization record by creating records in certain other objects, and referencing your PatientImmunization record as the parent record. Here’s the list of objects you can associate to PatientImmunization in this way, the type of information they add, and the field they use to reference PatientImmunization.

| Object | Type of Information | Reference Field |
| --- | --- | --- |
| Identifier | Associates an identifier value to the patient immunization. | ParentRecordId |
| Patient Health Reaction | Adds information about a patient’s adverse reaction to an immunization, if any. | ParentId |
| Patient Immunization Protocol | Adds information about this protocols followed by a provider during the immunization. This object enables the support of one-to-many values between immunization and protocols applied. | PatientImmunizationId |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PatientImmunizationChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 58.0)

Change events are available for the object.

[PatientImmunizationFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PatientImmunizationHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[PatientImmunizationOwnerSharingRule](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.") (API version 56.0)

Sharing rules are available for the object.

[PatientImmunizationShare](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.") (API version 56.0)

Sharing is available for the object.

-   **[PatientImmunizationProtocol](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_patientimmunizationprotocol.htm)**
    Represents the protocol followed by a provider for a patient’s immunization and its related details. The protocol defines the set of recommendations that are followed while a vaccine is administered. This object is a child of the PatientImmunization object. This object is available in API version 56.0 and later.

## Related Topics

- PatientImmunizationChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- PatientImmunizationFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- PatientImmunizationHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- PatientImmunizationOwnerSharingRule (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- PatientImmunizationShare (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm)
- PatientImmunizationProtocol (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_patientimmunizationprotocol.htm)
