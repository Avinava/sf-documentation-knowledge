---
title: "AccountAccountRelation"
domain: financial-services-cloud-object-reference
topic: accountaccountrelation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:28.959Z
estimatedTokens: 1000
keywords: [AccountAccountRelation, relationship, two, accounts, household, business, account, API, version, 61.0, later, Calls, Special, Access, Rules]
---

# AccountAccountRelation

> Represents a relationship between two accounts, such as between a household
         and a business account. This object is available in API version 61.0 and later.

# AccountAccountRelation

Represents a relationship between two accounts, such as between a household and a business account. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This is a standard object and is available only when you turn on the Group Membership Settings.

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the account associated with the record.This field is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| DeclarationType | TypemultipicklistPropertiesCreate, Filter, Nillable, Restricted picklist, UpdateDescriptionSpecifies the formal manner or approach used to officially state the stakeholder's role or position.Possible values are:Official RegisterPrimary ResearchSelf DeclarationThird PartyVerified |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate when the relationship ended. |
| HierarchyType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the hierarchy between accounts that are related. For example, an account is related to another account as a parent, peer, or child.Possible values are:ChildParentPeerThe default value is Parent. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the relationship is active (true) or not (false). The default value is false. |
| IsShareholder | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the stakeholder is a shareholder (true) or not (false).The default value is false. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, Group, SortDescriptionName of the account account relationship. |
| PartyRoleRelationId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe relationship between two accounts.This field is a relationship field.Relationship NamePartyRoleRelationRelationship TypeLookupRefers ToPartyRoleRelation |
| RelatedAccountId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe related account in the relationship.This field is a relationship field.Relationship NameRelatedAccountRelationship TypeLookupRefers ToAccount |
| RelatedInverseRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe record that specifies the inverse relationship between the accounts.This field is a relationship field.Relationship NameRelatedInverseRecordRelationship TypeLookupRefers ToAccountAccountRelation |
| ShareholderHierarchyLevel | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the hierarchical level between the account and the intermediate shareholder. The shareholder hierarchy level is applicable only to an intermediate share holder. |
| ShareholderHierarchyRole | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the shareholder's ownership type.Possible values are:Domestic Ultimate OwnerImmediate ShareholderIntermediate ShareholderUltimate Beneficial Owner |
| ShareholderType | TypemultipicklistPropertiesCreate, Filter, Nillable, Restricted picklist, UpdateDescriptionSpecifies the type of the shareholder.Possible values are:ShareholdingVoting RightsBeneficiary of a TrustSole ProprietorPartner |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate when the relationship started. |
| TotalSharePercent | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total percentage of shares owned by the stakeholder, combining both direct and indirect ownership. |
