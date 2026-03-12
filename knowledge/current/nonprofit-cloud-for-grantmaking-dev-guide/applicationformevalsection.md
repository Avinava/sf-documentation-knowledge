---
title: "ApplicationFormEvalSection"
domain: nonprofit-cloud-for-grantmaking-dev-guide
topic: applicationformevalsection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:02.818Z
estimatedTokens: 1209
keywords: [ApplicationFormEvalSection, Application, Form, Evaluation, API, version, 66.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# ApplicationFormEvalSection

> Represents a section of an Application Form Evaluation.  This object is
      available in API version 66.0 and later.

# ApplicationFormEvalSection

Represents a section of an Application Form Evaluation. This object is available in API version 66.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the Grantmaking license is enabled, Grantmaking is enabled, and Track Applications is turned on.

## Fields

| Field | Details |
| --- | --- |
| ApplicationFormEvaluationId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe lookup to the related Application Form Evaluation.This field is a relationship field.Relationship NameApplicationFormEvaluationRefers ToApplicationFormEvaluation |
| ApplicationFormId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe lookup to the related Application Form.This field is a relationship field.Relationship NameApplicationFormRefers ToApplicationForm |
| ApplicationStageDefinitionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe lookup to the related Application Stage Definition.This field is a relationship field.Relationship NameApplicationStageDefinitionRefers ToApplicationStageDefinition |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIdentifies the currency used for the Application Form Evaluation section.Possible values are:USD—U.S. DollarThe default value is USD. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe short description of this section. |
| DisplayOrder | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the order in which to show this section in the list of all Application Form Evaluation sections. |
| DueDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date by which this section must be submitted. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date that the evaluator completed review of this section. |
| IsRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether this evaluation section must be completed.The default value is false. |
| IsSubmitted | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether the section was submitted by the evaluator for review.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate isn’t null, the user accessed this record or list view. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the Application Form Evaluation Section. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this object. ID of the creator of this object.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date that the evaluator started reviewing this section. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe evaluation review status of this section. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ApplicationFormEvaluationSectionFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_feed.htm)

Feed tracking is available for the object.

[ApplicationFormEvaluationSectionHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_history.htm)

History is available for tracked fields of the object.

[ApplicationFormEvaluationSectionOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[ApplicationFormEvaluationSectionShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_share.htm)

Sharing is available for the object.
