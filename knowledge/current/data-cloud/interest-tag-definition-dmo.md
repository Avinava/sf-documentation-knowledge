---
title: "Interest Tag Definition DMO"
domain: data-cloud
topic: interest-tag-definition-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:43.519Z
keywords: [Interest, Tag, Definition, DMO, API, Name, Category, Primary, Subject, Area, Key, Label, Relationships, Fields]
---

# Interest Tag Definition DMO

# Interest Tag Definition DMO

Represents products, services, features in which a party has expressed interest. Provided in the Financial Services Cloud Data Kit. This DMO is available in API version 58 and later.

## API Name

ssot\_\_InterestTagDefinition\_\_dlm

## Category

Profile

## Primary Subject Area

Add value

## Primary Key Label

Interest Tag Definition ID (ssot\_Id\_c).

## Relationships

| DMO Label | DMO Field Label | Cardinality | Related DMO Label | Related DMO Field Label | Data Bundle or Origin |
| --- | --- | --- | --- | --- | --- |
| Party Interest Tag | Interest Tag Definition ID | Many To One (N:1) | Interest Tag Definition | ID | Financial Services Cloud |

## Fields

| Label | API Name | Description | Data Type | Data Bundle or Origin |
| --- | --- | --- | --- | --- |
| Description | ssot__Description__c | The interest tag definition. description. | Text | Financial Services Cloud |
| Interest Tag Definition ID | ssot__Id__c | The primary key. | Text | Financial Services Cloud |
| Interest Tag Type | ssot__InterestTagType__c | The interest tag definition type. | Text | Financial Services Cloud |
| Name | ssot__Name__c | The interest tag definition name. | Text | Financial Services Cloud |