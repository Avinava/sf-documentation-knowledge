---
title: "FinServ_FinancialGoal__c"
domain: financial-services-cloud-object-reference
topic: finservfinancialgoalc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:30.256Z
estimatedTokens: 752
keywords: [FinServ_FinancialGoal__c, Financial, Goal, installed, Services, Cloud, Salesforce, org, install, Managed, Package, client’s, college, funds, major]
---

# FinServ_FinancialGoal__c

> This Financial Goal object is installed in your Financial Services
   Cloud Salesforce org when you install the Financial Services Cloud Managed Package. It represents
   a client’s financial goal, such as college funds or a major purchase.

# FinServ\_FinancialGoal\_\_c

This Financial Goal object is installed in your Financial Services Cloud Salesforce org when you install the Financial Services Cloud Managed Package. It represents a client’s financial goal, such as college funds or a major purchase.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActualValue__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionCurrent amount saved toward goal. |
| CompletionDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate when the goal was reached. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIf multiple currencies is enabled, contains the currency ISO code associated with the record. |
| Description__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDescription of the goal. |
| Household__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHousehold that this goal is associated with. |
| InitialValue__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionStarting amount saved toward goal. |
| LastActivityDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionTimestamp for when this goal last had a task or event action associated with the record. |
| LastReferencedDate | TypedatePropertiesFilter, Nillable, Sort,DescriptionTimestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTimestamp for when the current user last viewed this record. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionName of this goal. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who created the financial goal record. |
| PrimaryOwner__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPrimary owner of this goal. |
| SourceSystemId__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionID that uniquely identifies the goal in an external data source. |
| Status__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStatus of goal. Valid values:CompletedIn ProgressNot Started |
| TargetDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate when the goal is expected to be reached. |
| TargetValue__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAmount required for the goal. |
| Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPurpose of goal. Valid values:EducationHome PurchaseOtherRetirement |
