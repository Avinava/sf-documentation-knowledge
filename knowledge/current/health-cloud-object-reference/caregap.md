---
title: "CareGap"
domain: health-cloud-object-reference
topic: caregap
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:36.223Z
estimatedTokens: 1511
keywords: [CareGap, gaps, patient, care, period, API, version, 59.0, later, Calls, Associated, Objects]
---

# CareGap

> Represents gaps in patient care through a specified period. This object is
         available in API version 59.0 and later.

# CareGap

Represents gaps in patient care through a specified period. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe account associated with the care gap.This field is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| CareBarrierId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe care barrier associated with the care gap.This field is a relationship field.Relationship NameCareBarrierRelationship TypeLookupRefers ToCareBarrier |
| ClinicalMeasureId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe clinical measure asscoiated with the care gap.This field is a relationship field.Relationship NameClinicalMeasureRelationship TypeLookupRefers ToClinicalMeasure |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the care gap. |
| HealthConditionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe health condition associated with the care gap.This field is a relationship field.Relationship NameHealthConditionRelationship TypeLookupRefers ToHealthCondition |
| LastEvaluatedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the care gap was last evaluated. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced the record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed the record. |
| MeasureEvaluationStatus | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the measure evaluation.Possible values are:EvaluationComplete—Evaluation CompleteEvaluationError—Evaluation ErrorEvaluationInProgress—Evaluation In ProgressManuallyClosed—Manually ClosedManuallyExcluded—Manually ExcludedManuallyOpened—Manually Opened |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the care gap. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ProblemDefinitionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe problem definiton associated with the care gap.This field is a relationship field.Relationship NameProblemDefinitionRelationship TypeLookupRefers ToProblemDefinition |
| RecordOriginType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionSpecifies the method used for retrieving or creating the care gap record.Possible values are:CalculatedImportedManuallyCreated—Manually Created |
| ReportingPeriodEndDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe end date of the care gap reporting period. |
| ReportingPeriodStartDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe start date of the care gap reporting period. |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of external source system from which the record was imported. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the record in the external source system. |
| SourceSystemModified | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescription |
| Status | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the status of the care gap.Possible values are:ClosedExcludedOpen |
| StatusReason | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reason for force closing the care gap. |
| TargetResolutionDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe target resolution date of a care gap for a patient. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CareGapFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CareGapHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[CareGapOwnerSharingRule](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[CareGapShare](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- CareGapFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- CareGapHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- CareGapOwnerSharingRule (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- CareGapShare (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm)
