---
title: "Insurance Policy DMO"
domain: data-cloud
topic: insurance-policy-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:43.516Z
keywords: [Insurance, Policy, DMO, API, Name, Category, Primary, Subject, Area, Key, Label, Relationships, Fields]
---

# Insurance Policy DMO

# Insurance Policy DMO

Represents an insurance policy. Provided in the Financial Services Cloud Data Kit. This DMO is available in API version 58 and later.

## API Name

ssot\_\_InsurancePolicy\_\_dlm

## Category

Profile

## Primary Subject Area

Financial Account

## Primary Key Label

Insurance Policy ID (ssot\_Id\_c).

## Relationships

| DMO Label | DMO Field Label | Cardinality | Related DMO Label | Related DMO Field Label | Data Bundle or Origin |
| --- | --- | --- | --- | --- | --- |
| Insurance Policy | Financial Account ID | Many To One (N:1) | Party | ID | Financial Services Cloud |
| Financial Account | Insurance Policy ID | Many To One (N:1) | Insurance Policy | ID | Financial Services Cloud |

## Fields

| Label | API Name | Description | Data Type | Data Bundle or Origin |
| --- | --- | --- | --- | --- |
| Currency | ssot__Currency__c | The associated currency. | Text | Financial Services Cloud |
| Description | ssot__Description__c | The description of the insurance policy. | Text |  |
| Financial Account ID | ssot__FinancialAccountID__c | The associated financial account. | Text |  |
| Insurance Policy ID | ssot__Id__c | The primary key. | Text |  |
| Insurance Policy Number | ssot__InsurancePolicyNumber__c | The insurance policy number. | Text |  |
| Insured Amount | ssot__InsuredAmount__c | The insurance policy amount. | Number |  |
| Name | ssot__Name__c | The name of the insurance policy. | Text |  |
| Premium Amount | ssot__PremiumAmount__c | The amount paid to the insurer for insurance policy coverage. | Number |  |
| Renewal Date | ssot__RenewalDate__c | The due date of the insurance policy renewal. | Date Time |  |