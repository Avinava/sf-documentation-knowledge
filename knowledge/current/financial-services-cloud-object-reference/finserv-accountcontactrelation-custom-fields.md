---
title: "FinServ AccountContactRelation Custom Fields"
domain: financial-services-cloud-object-reference
topic: finserv-accountcontactrelation-custom-fields
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.303Z
estimatedTokens: 953
keywords: [FinServ, AccountContactRelation, Custom, relationship, individual, specifically, contact, part, household, account, member, standard, Shared, Contacts, feature]
---

# FinServ AccountContactRelation Custom Fields

> Represents the relationship between an individual (specifically the
            contact part of the individual) and the household (account) that the individual is a
            member of. AccountContactRelation is a standard object that is available through the
            Shared Contacts feature. Custom fields extend the AccountContactRelation standard object
            for use in Financial Services Cloud.

# FinServ AccountContactRelation Custom Fields

Represents the relationship between an individual (specifically the contact part of the individual) and the household (account) that the individual is a member of. AccountContactRelation is a standard object that is available through the Shared Contacts feature. Custom fields extend the AccountContactRelation standard object for use in Financial Services Cloud.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DecisionMakingAuthorityType | TypemultipicklistPropertiesCreate, Filter, Nillable, Restricted picklist, UpdateDescriptionSpecifies the type of the decision-making authority.Possible values are:Authorized SignatoryBoard MemberSenior Managing Official |
| DeclarationType | TypemultipicklistPropertiesCreate, Filter, Nillable, Restricted picklist, UpdateDescriptionSpecifies the formal manner or approach used to officially state the stakeholder's role or position.Possible values are:Official RegisterPrimary ResearchSelf declarationThird PartyVerified |
| IsDecisionMakingAuthority | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the stakeholder is a decision-making authority (true) or not (false).The default value is false. |
| IncludeInGroup__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIncludes this account in a related individual's primary group. |
| IsShareholder | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the stakeholder is a shareholder (true) or not (false).The default value is false. |
| Primary__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates the primary member of a group (true) or not (false). |
| PrimaryGroup__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates a person's primary group. You can roll up summary fields only to a person’s primary group if PrimaryGroup__c is set to true. |
| Rollups__c | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionRecords associated with the individual that are included in household roll-up summaries. Valid values:AllTasksEventsFinancial AccountsAssets and LiabilitiesFinancial Goals |
| ShareholderHierarchyLevel | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the hierarchical level between the account and the intermediate shareholder. The shareholder hierarchy level is applicable only to an intermediate share holder. |
| ShareholderHierarchyRole | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the shareholder's ownership type.Possible values are:Domestic Ultimate OwnerImmediate ShareholderIntermediate ShareholderUltimate Beneficial Owner |
| ShareholderType | TypemultipicklistPropertiesCreate, Filter, Nillable, Restricted picklist, UpdateDescriptionSpecifies the type of the shareholder.Possible values are:ShareholdingVoting RightsBeneficiary of a TrustSole ProprietorPartner |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the relationship between the applicant and the related applicant started. |
| SourceSystemId__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionID that uniquely identifies the individual in an external data source. |
| TotalSharePercent | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total percentage of shares owned by the stakeholder, combining both direct and indirect ownership. |
