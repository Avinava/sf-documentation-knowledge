---
title: "ClinicalMeasureCriteriaGrp"
domain: health-cloud-object-reference
topic: clinicalmeasurecriteriagrp
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:36.873Z
estimatedTokens: 1226
keywords: [ClinicalMeasureCriteriaGrp, group, computable, criteria, health-related, measure, API, version, 59.0, later, Calls, Associated, Objects]
---

# ClinicalMeasureCriteriaGrp

> Represents a group of computable criteria for a health-related measure. This
         object is available in API version 59.0 and later.

# ClinicalMeasureCriteriaGrp

Represents a group of computable criteria for a health-related measure. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ClinicalMeasureId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe clinical measure that the criteria group belongs to.This field is a relationship field.Relationship NameClinicalMeasureRelationship TypeLookupRefers ToClinicalMeasure |
| CriteriaGroupCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique code associated with the clinical measure criteria group.This field is a polymorphic relationship field.Relationship NameCriteriaGroupCodeRelationship TypeLookupRefers ToCodeSet, CodeSetBundle |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the clinical measure criteria group. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced the record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed the record. |
| MeasureType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the measure type the criteria group belongs to based on what the measure calculates.Possible values are:CompositeOutcomePatient-Reported-OutcomeProcessStructure |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the clinical measure criteria group. |
| PopulationBasisTypeCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the population basis type for a measure the criteria group belongs to, when the basis is different from the subject.This field is a relationship field.Relationship NamePopulationBasisTypeCodeRelationship TypeLookupRefers ToCodeSet |
| ProgramName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe program used for calculating the measure that the criteria group belongs to. |
| ProgramType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of program used for calculating the measure that the criteria group belongs to.Possible values are:Apex ClassExpression SetFlowOmniStudio Integration Procedure |
| ScoreAggregationMethod | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA description of the method used to combine the different measure scores of each population into one aggregated result. |
| ScoreImprovementIndication | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies whether an increase or decrease in score is the preferred result for the measure that the criteria group belongs to.Possible values are:DecreaseIncrease |
| ScoringType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe scoring type used for calculating the measure the criteria group belongs to.Possible values are:CohortContinuous-VariableProportionRatio |
| ScoringUnitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the expected unit of measure for the measure score when the unit can't be inferred from the measure logic.This field is a relationship field.Relationship NameScoringUnitRelationship TypeLookupRefers ToUnitOfMeasure |
| SubjectCategory | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the subject category of the measure that the criteria group belongs to.Possible values are:DeviceLocationOrganizationPatientPractitionerRelated Person |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ClinicalMeasureCriteriaGrpFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ClinicalMeasureCriteriaGrpHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- ClinicalMeasureCriteriaGrpFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- ClinicalMeasureCriteriaGrpHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
