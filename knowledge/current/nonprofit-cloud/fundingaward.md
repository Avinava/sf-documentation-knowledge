---
title: "FundingAward"
domain: nonprofit-cloud
topic: fundingaward
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:02.311Z
estimatedTokens: 1445
keywords: [FundingAward, award, individual, organization, facilitate, goal, funder’s, mission, API, version, 57.0, later, Calls, Special, Access]
---

# FundingAward

> Represents an award given to an individual or organization to facilitate a goal
      related to the funder’s mission. This object is available in API version 57.0 and
      later.

# FundingAward

Represents an award given to an individual or organization to facilitate a goal related to the funder’s mission. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the Grantmaking license is enabled, Grantmaking is enabled, and the Manage Funding Awards system permission is assigned to users.

## Fields

| Field | Details |
| --- | --- |
| Amount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total award amount. |
| ApplicationFormId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe application form associated with the funding award.This field is a relationship field.This field is available from API version 66.0 and later.Relationship NameApplicationFormRefers ToApplicationForm |
| AwardNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, SortDescriptionThe unique identifier of the funding award in the customer's org. |
| AwardeeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe entity related to the funding award. The account can be an organization (business account) or individual (person account) that receives the funding.This field is a relationship field.Relationship NameAwardeeRelationship TypeLookupRefers ToAccount |
| BudgetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe budget that's used to track the use of the award funding.This field is a relationship field.Relationship NameBudgetRelationship TypeLookupRefers ToBudget |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe individual receiving the funding award.This field is a relationship field.Relationship NameContactRelationship TypeLookupRefers ToContact |
| ContractId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contract associated with the funding award.This field is available from API version 59.0 and later.This field is a relationship field.Relationship NameContractRelationship TypeLookupRefers ToContract |
| DecisionDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time of the decision about the funding award. |
| EndDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the contract related to the award ends. |
| FundingOpportunityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe funding opportunity that's associated with the award.This field is a relationship field.Relationship NameFundingOpportunityRelationship TypeLookupRefers ToFundingOpportunity |
| IndividualApplicationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe individual application that's related to the award.This field is a relationship field.Relationship NameIndividualApplicationRelationship TypeLookupRefers ToIndividualApplication |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the funding award. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner who owns the record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ParentFundingAwardId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe parent funding award for this funding award.This field is a relationship field.Relationship NameParentFundingAwardRelationship TypeLookupRefers ToFundingAward |
| ProgramId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe program associated with the funding award.This field is available from API version 58.0 and later.This field is a relationship field.Relationship NameProgramRelationship TypeLookupRefers ToProgram |
| StartDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the contract related to the award begins. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the current status of the award.Possible values are:ActiveCancelledCompleted |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[FundingAwardFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_feed.htm)

Feed tracking is available for the object.

[FundingAwardHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_history.htm)

History is available for tracked fields of the object.

[FundingAwardOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[FundingAwardShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_share.htm)

Sharing is available for the object.
