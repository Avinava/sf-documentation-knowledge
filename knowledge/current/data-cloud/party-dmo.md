---
title: "Party DMO"
domain: data-cloud
topic: party-dmo
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:15.366Z
estimatedTokens: 951
keywords: [Party, DMO, dealing, Provided, Financial, Services, Cloud, Data, Kit, API, version, later, Category, Primary, Subject]
---

# Party DMO

> Represents information about who you are dealing with. Provided in the Financial
      Services Cloud Data Kit. This DMO is available in API version 58 and later.

# Party DMO

Represents information about who you are dealing with. Provided in the Financial Services Cloud Data Kit. This DMO is available in API version 58 and later.

## API Name

ssot\_\_Party\_\_dlm

## Category

Profile

## Primary Subject Area

Party

## Primary Key Label

Party ID (ssot\_Id\_c).

## Relationships

| DMO Label | DMO Field Label | Cardinality | Related DMO Label | Related DMO Field Label | Data Bundle or Origin |
| --- | --- | --- | --- | --- | --- |
| Party | Individual ID | Many To One (N:1) | Individual | ID | Financial Services Cloud |
| Party | Organization ID | Many To One (N:1) | Organization ID | ID | Financial Services Cloud |
| Account | Party ID | Many To One (N:1) | Party | ID | Financial Services Cloud |
| Authorization Form Consent | Party ID | Many To One (N:1) | Party | ID | Financial Services Cloud |
| Communication Subscription Consent | Party ID | Many To One (N:1) | Party | ID | Financial Services Cloud |
| Contact Point Consent | Party ID | Many To One (N:1) | Party | ID | Financial Services Cloud |
| Contact Point Type Consent | Party ID | Many To One (N:1) | Party | ID | Financial Services Cloud |
| Contact Point | Party ID | Many To One (N:1) | Party | ID | Financial Services Cloud |
| Coupon | Customer ID | Many To One (N:1) | Party | ID | Financial Services Cloud |
| Engagement Channel Type Consent | Party ID | Many To One (N:1) | Party | ID | Financial Services Cloud |
| Financial Goal Party | Party ID | Many To One (N:1) | Party | ID | Financial Services Cloud |
| Financial Plan | Party ID | Many To One (N:1) | Party | ID | Financial Services Cloud |
| Individual | Party ID | Many To One (N:1) | Party | ID | Financial Services Cloud |
| Lead | Party ID | Many To One (N:1) | Party | ID | Financial Services Cloud |
| Loyalty Program Member | Party ID | Many To One (N:1) | Party | ID | Financial Services Cloud |
| Organization | Party ID | Many To One (N:1) | Party | ID | Financial Services Cloud |
| Party Consent | Party ID | Many To One (N:1) | Party | ID | Financial Services Cloud |
| Party Expense | Payee ID | Many To One (N:1) | Party | ID | Financial Services Cloud |
| Party Expense | Player ID | Many To One (N:1) | Party | ID | Financial Services Cloud |
| Party Financial Asset | Party ID | Many To One (N:1) | Party | ID | Financial Services Cloud |
| Party Financial Liability | Party ID | Many To One (N:1) | Party | ID | Financial Services Cloud |
| Party Identification | Party ID | Many To One (N:1) | Party | ID | Financial Services Cloud |
| Party Income | Party ID | Many To One (N:1) | Party | ID | Financial Services Cloud |
| Party Interest Tag | Party ID | Many To One (N:1) | Party | ID | Financial Services Cloud |
| Party Role | Party ID | Many To One (N:1) | Party | ID | Financial Services Cloud |
| Party Web Address | Party ID | Many To One (N:1) | Party | ID | Financial Services Cloud |
| Payment Method | Party ID | Many To One (N:1) | Party | ID | Financial Services Cloud |
| Privacy Consent | Party ID | Many To One (N:1) | Party | ID | Financial Services Cloud |
| Shopping Card | Party ID | Many To One (N:1) | Party | ID | Financial Services Cloud |

## Fields

| Label | API Name | Description | Data Type | Data Bundle or Origin |
| --- | --- | --- | --- | --- |
| Borrower Rating ID | ssot__BorrowerRatingId__c | The party’s borrowing history. | Text | Financial Services Cloud |
| Credit Rating ID | ssot__CreditRatingId__c | The party’s credit rating. | Test | Financial Services Cloud |
| Credit Score Number | ssot__CreditScoreNumber__c | The party’s credit score. | Number | Financial Services Cloud |
| Lifetime Asset Value Amount | ssot__LifetimeAssetValueAmount__c | The party’s lifetime net asset value to a financial institution. | Number | Financial Services Cloud |
