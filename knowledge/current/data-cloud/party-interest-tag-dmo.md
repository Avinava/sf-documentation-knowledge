---
title: "Party Interest Tag DMO"
domain: data-cloud
topic: party-interest-tag-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:15.408Z
estimatedTokens: 350
keywords: [Party, Interest, Tag, DMO, association, Provided, Financial, Services, Cloud, Data, Kit, API, version, later, Category]
---

# Party Interest Tag DMO

> Represents an association between a party and interest tag. Provided in the Financial
      Services Cloud Data Kit. This DMO is available in API version 58 and later.

# Party Interest Tag DMO

Represents an association between a party and interest tag. Provided in the Financial Services Cloud Data Kit. This DMO is available in API version 58 and later.

## API Name

ssot\_\_PartyInterestTag\_\_dlm

## Category

Profile

## Primary Subject Area

Market Audience

## Primary Key Label

Party Interest Tag (ssot\_Id\_c).

## Relationships

| DMO Label | DMO Field Label | Cardinality | Related DMO Label | Related DMO Field Label | Data Bundle or Origin |
| --- | --- | --- | --- | --- | --- |
| Party Interest Tag | Interest Tag Definition ID | Many To One (N:1) | Interest Tag Definition | ID | Financial Services Cloud |
| Party Interest Tag | Party ID | Many To One (N:1) | Party | ID | Financial Services Cloud |

## Fields

| Label | API Name | Description | Data Type | Data Bundle or Origin |
| --- | --- | --- | --- | --- |
| Description | ssot__Description__c | The description of the party interest tag. | Text | Financial Services Cloud |
| Party Interest Tag ID | ssot__Id__c | The primary key. | Text | Financial Services Cloud |
| Interest Tag Definition ID | ssot__InterestTagDefinitionId__c | The related interest tag definition. | Text | Financial Services Cloud |
| Name | ssot__Name__c | The name of the party interest tag. | Text | Financial Services Cloud |
| Party ID | ssot__PartyId__c | The related party. | Text | Financial Services Cloud |
