---
title: "OutcomeActivity"
domain: nonprofit-cloud-for-grantmaking-dev-guide
topic: outcomeactivity
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:02.927Z
estimatedTokens: 1298
keywords: [OutcomeActivity, junction, outcome, that's, activity, undertaken, organization, achieve, API, version, 59.0, later, Calls, Special, Access]
---

# OutcomeActivity

> Represents a junction between an outcome and the object that's related to the
         activity undertaken by an organization to achieve that outcome. This object is
      available in API version 59.0 and later.

# OutcomeActivity

Represents a junction between an outcome and the object that's related to the activity undertaken by an organization to achieve that outcome. This object is available in API version 59.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=nonprofit_cloud_for_grantmaking_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available in products:

-   That include the Outcome Management and Grantmaking licenses.
-   Where Outcome Management and Grantmaking are enabled.
-   The Manage Applications, Manage Funding Awards, Manage Outcomes, and Use Grantmaking system permissions are assigned to users.

## Fields

| Field | Details |
| --- | --- |
| BenefitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe benefit that's associated with the outcome.This field is a relationship field.Relationship NameBenefitRelationship TypeLookupRefers ToBenefit |
| FundingAwardId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe funding award that's associated with the outcome.This field is a relationship field.Relationship NameFundingAwardRelationship TypeLookupRefers ToFundingAward |
| FundingOpportunityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe funding opportunity that's associated with the outcome.This field is a relationship field.Relationship NameFundingOpportunityRelationship TypeLookupRefers ToFundingOpportunity |
| GoalDefinitionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe goal definition that's associated with the outcome. This field is available from API version 60.0 and later.This field is a relationship field.Relationship NameGoalDefinitionRelationship TypeLookupRefers ToGoalDefinition |
| IndividualApplicationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe individual application that's associated with the outcome.This field is a relationship field.Relationship NameIndividualApplicationRelationship TypeLookupRefers ToIndividualApplication |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the outcome activity. |
| OutcomeActivityType | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the type of activity that’s associated with the outcomePossible values are:BenefitGoal Definition This value is available from API version 60.0 and later.Program |
| OutcomeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe outcome that's associated with the outcome.This field is a relationship field.Relationship NameOutcomeRelationship TypeMaster-detailRefers ToOutcome (the master object) |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the record.This field is a polymorphic relationship field.This field is available from API version 63.0 and later.Relationship NameOwnerRefers ToGroup, User |
| ProgramId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe program that's associated with the outcome.This field is a relationship field.Relationship NameProgramRelationship TypeLookupRefers ToProgram |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[OutcomeActivityShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_share.htm)

Sharing is available for the object.

[OutcomeActivityOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[OutcomeActivityFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[OutcomeActivityHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.
