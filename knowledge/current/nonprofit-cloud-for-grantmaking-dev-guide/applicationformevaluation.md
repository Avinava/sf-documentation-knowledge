---
title: "ApplicationFormEvaluation"
domain: nonprofit-cloud-for-grantmaking-dev-guide
topic: applicationformevaluation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:02.824Z
estimatedTokens: 763
keywords: [ApplicationFormEvaluation, evaluation, performed, application, form, Grantmaking, API, version, 66.0, later, Calls, Special, Access, Rules, Associated]
---

# ApplicationFormEvaluation

> Represents the details of the evaluation performed for an application
         form. This object is available in Grantmaking API version 66.0 and later.

# ApplicationFormEvaluation

Represents the details of the evaluation performed for an application form. This object is available in Grantmaking API version 66.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the Grantmaking license is enabled, Grantmaking is enabled, and Track Applications is turned on.

## Fields

| Field | Details |
| --- | --- |
| AssignedDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the application form evaluation was assigned to the evaluator. |
| DueDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the application form evaluation is due. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the application form evaluation was completed. |
| RelationReferenceRecordId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the record that's referenced in the application form relation object that's associated with this application form evaluation.This field is a polymorphic relationship field.Relationship NameRelationReferenceRecordRefers ToBenefit, BenefitAssignment, Case, FundingOpportunity, JobPosition, Program, ProgramEnrollment, RecruitmentRequisition |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the application form evaluation was started. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the application form evaluation.Possible values are:EligibleNeed more informationNot Eligible |
| Title | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the application form evaluation. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ApplicationFormEvaluationFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_feed.htm)

Feed tracking is available for the object.

[ApplicationFormEvaluationHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_history.htm)

History is available for tracked fields of the object.

[ApplicationFormEvaluationOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[ApplicationFormEvaluationShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_share.htm)

Sharing is available for the object.
