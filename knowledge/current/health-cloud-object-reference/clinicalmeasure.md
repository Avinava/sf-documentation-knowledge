---
title: "ClinicalMeasure"
domain: health-cloud-object-reference
topic: clinicalmeasure
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:36.836Z
estimatedTokens: 2725
keywords: [ClinicalMeasure, structured, computable, definition, health-related, measure, identifying, care, gaps, API, version, 59.0, later, Calls, Associated]
---

# ClinicalMeasure

> Represents a structured and computable definition of a health-related measure
         for identifying care gaps. This object is available in API version 59.0 and
      later.

# ClinicalMeasure

Represents a structured and computable definition of a health-related measure for identifying care gaps. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApplicationName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe application used for calculating the measure. |
| ApplicationType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of application used for calculating the measure.Possible values are:ApexCustomExpressionSet—Expression SetFlowIntegrationProcedure—Integration Procedure |
| Author | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe individual or organization that primarily authored the measure. |
| ClinicalRcmdSummary | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA summary of relevant clinical guidelines or other clinical recommendations supporting the measure. |
| ClinicalUsage | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of how the measure is used. |
| CompositeScoringType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe scoring method used to combine the component measures to determine the composite score.Possible values are:All-Or-NothingLinearOpportunityWeighted |
| CopyrightLabel | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe copyright label of a measure. |
| CopyrightStatement | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA copyright statement of the measure and/or its contents. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the measure. |
| Disclaimer | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA disclaimer for the use of the measure or its referenced content. |
| Editor | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe individual or organization responsible for editing the measure. |
| EffectiveEndDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe end date of a measure evaluation period. |
| EffectiveStartDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe start date of a measure evaluation period. |
| Endorser | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe individual or organization responsible for endorsing the measure. |
| IntendedJurisdictionCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe legal or geographic region where the measure is intended to be used.This field is a polymorphic relationship field.Relationship NameIntendedJurisdictionCodeRelationship TypeLookupRefers ToCodeSet, CodeSetBundle |
| IsExperimental | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a measure was authored for experimental purposes (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced the record. |
| LastReviewedDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date the measure was last reviewed. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed the record. |
| MeasureCategory | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the high-level category that the measure belongs to, such as Assessment or Treatment.Possible values are:AssessmentEducationTreatment |
| MeasureType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the measure type based on what the measure calculates.Possible values are:CompositeOutcomePatient-Reported-OutcomeProcessStructure |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionA human-friendly name for a measure. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PopulationBasisTypeCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the population basis type for a measure when the basis is different from the subject.This field is a relationship field.Relationship NamePopulationBasisTypeCodeRelationship TypeLookupRefers ToCodeSet |
| ProblemDefinitionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe problem definition associated with the measure.This field is a relationship field.Relationship NameProblemDefinitionRelationship TypeLookupRefers ToProblemDefinition |
| PublisherApprovalDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date the measure was approved by the publisher. |
| PublisherContact | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contact details of the publisher. |
| PublisherName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe individual or organization that publishes and maintains the measure. |
| Purpose | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA short explanation of why a measure is needed. |
| Rationale | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA detailed reason for why the measure exists, inlcuding its objective and impact. |
| RelatedResources | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSupplementary resources or materials supporting a measure, such as additional documentation and citations. |
| Reviewer | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe individual or organization responsible for reviewing the measure. |
| RiskAdjustmentMethod | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA description of the adjustment method for risks, such as clinical severity and conditions present at the start of care that may influence measure scores. |
| ScoreAggregationMethod | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA description of the method used to combine the different measure scores of each population into one aggregated result. |
| ScoreImprovementIndication | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies whether an increase or decrease in score is the preferred result for a measure.Possible values are:DecreaseIncrease |
| ScoringType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe scoring type used for calculating the measure.Possible values are:CohortContinuous VariableProportionRatio |
| ScoringUnitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifes the expected unit of measure for the measure score when the unit can't be inferred from the measure logic.This field is a relationship field.Relationship NameScoringUnitRelationship TypeLookupRefers ToUnitOfMeasure |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe external system of record. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the record in the source system. |
| SourceSystemModified | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the record was last modified in the source system. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of a measure, such as draft, active, retired, or unknown.Possible values are:ActiveDraftRetiredUnknown |
| SubjectCategory | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the subject category that the measure is intended for.Possible values are:DeviceLocationOrganizationPatientPractitionerRelatedPerson |
| Subtitle | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA subtitle for a measure, adding additonal context. |
| SupportedContext | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe context that the measure is intended to support. |
| SystemReadableName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA computer-friendly name for a measure. |
| TermCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies description of an individual term used within the measure.This field is a relationship field.Relationship NameTermCodeRelationship TypeLookupRefers ToCodeSet |
| VersionNumber | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe version of a measure that is managed by the author. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ClinicalMeasureFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ClinicalMeasureHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ClinicalMeasureOwnerSharingRule](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[ClinicalMeasureShare](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ClinicalMeasureFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- ClinicalMeasureHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- ClinicalMeasureOwnerSharingRule (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- ClinicalMeasureShare (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm)
