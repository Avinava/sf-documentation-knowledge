---
title: "FinServ_AccountAccountRelation__c"
domain: financial-services-cloud-object-reference
topic: finservaccountaccountrelationc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.291Z
estimatedTokens: 1030
keywords: [FinServ_AccountAccountRelation__c, relationship, two, accounts, household, business, account, FinServ, _AccountAccountRelation, Calls]
---

# FinServ_AccountAccountRelation__c

> Represents a relationship between two accounts, such as between a
   household and a business account.

# FinServ\_AccountAccountRelation\_\_c

Represents a relationship between two accounts, such as between a household and a business account.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=financial_services_cloud_object_reference)

#### Note

To avoid DML errors on insert, read-only access at minimum is required for all fields that have a default value.

| Field | Details |
| --- | --- |
| Account__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAccount that RelatedAccount__c is related from. |
| Active__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the relationship is active (true) or not (false). The default value is false. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIf multiple currencies is enabled, contains the currency ISO code associated with the record. |
| DeclarationType__c | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionSpecifies the formal manner or approach used to officially state the stakeholder's role or position.Possible values are:Official RegisterPrimary ResearchSelf declarationThird PartyVerified |
| EndDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate when the relationship ended. |
| ExternalId__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionID that uniquely identifies the relationship in an external data source. |
| InverseRelationship__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUniquely identifies the relationship between Account and RelatedAccount__c so that it can be referenced by a trigger that creates the inverse relationship record. |
| IsShareholder__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the stakeholder is a shareholder (true) or not (false).The default value is false. |
| Name | TypestringPropertiesDefaulted on create, Filter, idLookup, SortDescriptionAuto-number identifier for the relationship. Label is Account Relation Name. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who created the relationship record. |
| RelatedAccount__c | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionAccount that Account__c is related to. |
| Role__c | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRole that describes how RelatedAccount__c is related to Account__c. |
| ShareholderHierarchyLevel__c | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the hierarchical level between the account and the intermediate shareholder. The shareholder hierarchy level is applicable only to an intermediate share holder. |
| ShareholderHierarchyRole__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the shareholder's ownership type.Possible values are:Domestic Ultimate OwnerImmediate ShareholderIntermediate ShareholderUltimate Beneficial Owner |
| ShareholderType__c | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionSpecifies the type of the shareholder.Possible values are:ShareholdingVoting RightsBeneficiary of a TrustSole ProprietorPartner |
| SourceSystemId__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionID that uniquely identifies the relationship in an external data source. |
| StartDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate when the relationship started. |
| TotalSharePercent__c | TypepercentPropertiesCreate, Filter, Nillable,Sort, UpdateDescriptionThe total percentage of shares owned by the stakeholder, combining both direct and indirect ownership. |
