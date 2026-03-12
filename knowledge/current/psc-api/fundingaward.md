---
title: "FundingAward"
domain: psc-api
topic: fundingaward
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:33.705Z
estimatedTokens: 950
keywords: [FundingAward, award, individual, organization, facilitate, goal, funder’s, mission, API, version, 57.0, later, Calls, Special, Access]
---

# FundingAward

> Represents an award given to an individual or organization to facilitate a goal related to the funder’s mission. This object is available in API version 57.0 and
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
| AwardNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, SortDescriptionThe unique identifier of the funding award in the customer's org. |
| AwardeeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe entity related to the funding award. The account can be an organization or individual that receives the funding.This field is a relationship field.Relationship NameAwardeeRelationship TypeLookupRefers ToAccount |
| BudgetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe budget that's used to track the use of the award funding.This field is a relationship field.Relationship NameBudgetRelationship TypeLookupRefers ToBudget |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe individual receiving the funding award.This field is a relationship field.Relationship NameContactRelationship TypeLookupRefers ToContact |
| DecisionDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time of the decision about the funding award. |
| EndDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the contract related to the award ends. |
| FundingOpportunityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe funding opportunity that's associated with the award.This field is a relationship field.Relationship NameFundingOpportunityRelationship TypeLookupRefers ToFundingOpportunity |
| IndividualApplicationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe individual application that's related to the award.This field is a relationship field.Relationship NameIndividualApplicationRelationship TypeLookupRefers ToIndividualApplication |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the funding award. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner who owns the record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ParentFundingAwardId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe parent funding award for this amendment.This field is a relationship field.Relationship NameParentFundingAwardRelationship TypeLookupRefers ToFundingAward |
| StartDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the contract related to the award begins. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the current status of the award.Possible values are:ActiveCancelledCompleted |
