---
title: "AccountPlan"
domain: object-reference
topic: accountplan
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:03.638Z
estimatedTokens: 1570
keywords: [AccountPlan, customer, measurable, objectives, executable, steps, proactively, manage, grow, relationships, API, version, 62.0, later, Calls]
---

# AccountPlan

> Represents customer information with measurable objectives and executable
         steps to proactively manage and grow customer relationships. This object is available
      in API version 62.0 and later.

# AccountPlan

Represents customer information with measurable objectives and executable steps to proactively manage and grow customer relationships. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Special Access Rules

This object is available if sales account plans are turned on.

## Fields

| Field | Details |
| --- | --- |
| AccountChallenges | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe key obstacles to the growth of the account. |
| AccountCmptvWeaknesses | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe shortcomings that hinder the account’s ability to outperform competitors in the market. |
| AccountCompetitiveStrengths | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe abilities of the account to outperform their competitors in the market. |
| AccountCompetitors | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe businesses or companies that offer similar products or services and compete for the same target market as the account. |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Account record.This field is a relationship field.Relationship NameAccountRefers ToAccount |
| AccountIndustryTrends | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe shifts in the pattern of the industry that are specific to the account. |
| AccountInternalRiskRating | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe rating that’s assigned to assess the risk level of the account. To access this field, you must have an FSC Sales or a Financial Services Cloud Extension license. |
| AccountPrfmIndicators | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe key performance indicators used by the account to measure the success and effectiveness of a product or service. |
| AccountStrategicPriorities | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe key priorities of the account. |
| AccountVision | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe long-term value statement of the account. |
| CallingStrategy | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionHow frequently the relationship team meets with the account. To access this field, you must have an FSC Sales or a Financial Services Cloud Extension license. |
| CallingStrategyNotes | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe outline of the format and organization of account meetings. To access this field, you must have an FSC Sales or a Financial Services Cloud Extension license. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date of the account plan. |
| FlexCard | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Omnistudio FlexCard. To access this field, you must have an FSC Sales or a Financial Services Cloud Extension license. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly. For example, accessed through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate isn’t null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the account plan. |
| Notes | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe notes or observations for the account plan. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the account plan.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| RelationshipOpportunities | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe list of sales or potential deal opportunities in the relationship with the account. |
| RelationshipStrengths | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe strengths in the relationship with the account. |
| RelationshipSummary | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA concise overview of the relationship dynamics with the account. To access this field, you must have an FSC Sales or a Financial Services Cloud Extension license. |
| RelationshipThreats | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe possible concerns in the relationship with the account. |
| RelationshipWeaknesses | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe shortcomings in the relationship with the account. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date of the account plan. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the account plan.Possible values are:ActiveInactiveNot StartedThe default value is Not Started. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AccountPlanChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[AccountPlanHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[AccountPlanOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_accountownersharingrule.htm)

Sharing rules are available for the object.

[AccountPlanShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_accountshare.htm)

Sharing is available for the object.
