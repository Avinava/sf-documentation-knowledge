---
title: "HealthCondition"
domain: life-sciences-dev-guide
topic: healthcondition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:43.280Z
estimatedTokens: 2356
keywords: [HealthCondition, clinical, condition, problem, any, clinically, relevant, occurrence, matter, concern, API, version, 51.0, later, Calls]
---

# HealthCondition

> Represents a clinical condition, problem, or any clinically relevant occurrence
      that is a matter of concern. This object is available in API version 51.0 and later.

# HealthCondition

Represents a clinical condition, problem, or any clinically relevant occurrence that is a matter of concern. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AbatementEndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe end date and time of the abatement period. |
| AbatementStartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe start date and time of the abatement period or the specific date and time when the condition abated. |
| AssertionSourceId | TypePolymorphic referencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe person made the assertion about the condition. This may be a physician, a patient, or even the patient’s contact.Referenced ObjectsAccountHealthcareProvider |
| CaseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe case associated with the health condition of the disease outbreak.This field is a relationship field.Relationship NameCaseRefers ToCase |
| ClinicalEncounterId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe clinical encounter that the immunization was a part of.Referenced ObjectsClinicalEncounter |
| ConditionCodeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe system-defined code that represents the condition.Referenced ObjectsCodeSetBundle |
| ConditionStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the condition.Possible values are:ActiveInactiveRecurrenceRelapseRemissionResolved |
| DiagnosticStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe diagnostic status of the condition.Possible values are:ConfirmedDifferentialEntered in errorProvisionalRefutedUnconfirmed |
| ExtlProblemDefIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the external problem definition in the source system. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe system-generated name of the health condition record. |
| OnsetEndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe end date and time of the onset period. |
| OnsetStartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe start date and time of the onset period or the specific date and time when the condition manifested. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the health condition record. Available in API version 56.0 and later.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroupUser |
| PatientId | TypeMaster-detail referencePropertiesCreate, Filter, Group, SortDescriptionThe patient who is afflicted with the condition.Referenced ObjectsAccount |
| ProblemDefinitionId | TypeLookupPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences the problem definition in the PGI library that was used to instantiate the HealthCondition record in a care plan.This field is available from version 57.0This field is a relationship field.Relationship NameProblemDefinitionRelationship TypeLookupRefers ToProblemDefinition |
| ProblemDescription | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description for the condition as a problem in a care plan.This field is available from version 57.0 |
| ProblemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the condition as a problem in a care plan.This field is available from version 57.0 |
| RecordCreationDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the record of the condition was created. |
| RecordCreatorId | TypePolymorphic referencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe person who created the record of the condition.Referenced ObjectsAccountHealthcareProvider |
| RelatedHealthConditionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe health condition associated with the primary health condition.This field is a relationship field.Relationship NameRelatedHealthConditionRefers ToHealthCondition |
| RelatedHealthConditionType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of health condition based on which the primary and related health conditions are associated.Possible values are:Coinfection |
| ReportDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date the health condition was reported. |
| Severity | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the severity of the condition.Possible values are:MildModerateSevere |
| SiteId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that represents the site of the condition on the patient’s body.Referenced ObjectsCodeSetBundle |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe source system from where the record was brought into Salesforce. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe identifier for the record in its source system. |
| SourceSystemModified | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the record was last modified in its source system. |
| StageId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that represents the stage of the condition.Referenced ObjectsCodeSetBundle |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contextual type of the condition.Possible values are:Encounter DiagnosisProblem List Item |
| DiagnosticStatusCategory | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the category of a patient's diagnosis status.Possible values are:ConfirmedProbableSuspectedUnknown |

## Additional Information for HealthCondition in Other Objects

In addition to creating a record using these fields, you can add more details to your HealthCondition record by creating records in certain other objects, and referencing your HealthCondition record as the parent record. Here’s the list of objects you can associate to HealthCondition in this way, the type of information they add, and the field they use to reference HealthCondition.

| Object | Type of Information | Reference Field |
| --- | --- | --- |
| Identifier | Associates an identifier value to the health condition. | ParentRecordId |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[HealthConditionChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 58.0)

Change events are available for the object.

[HealthConditionOwnerSharingRule](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.") (API version 56.0)

Sharing rules are available for the object.

[HealthConditionShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.") (API version 56.0)

Sharing is available for the object.

-   **[HealthConditionDetail](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_healthconditiondetail.htm)**
    This child object is used to associate body site and laterality codes to HealthCondition records. This object is available in API version 52.0 and later.

## Related Topics

- HealthConditionChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
- HealthConditionOwnerSharingRule (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_ownersharingrule.htm)
- HealthConditionShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
- HealthConditionDetail (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_healthconditiondetail.htm)
