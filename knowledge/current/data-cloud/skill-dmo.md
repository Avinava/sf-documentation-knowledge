---
title: "Skill DMO"
domain: data-cloud
topic: skill-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:14.930Z
estimatedTokens: 329
keywords: [Skill, DMO, Data, Cloud, data, model, proficiency, competence, expertise, employee, possesses, which, useful, mission, organization., API, Name, Category, Primary, Subject]
---

# Skill DMO

> The Skill DMO is a Data Cloud data model object (DMO) for proficiency,
      competence, or expertise that an employee possesses, which is useful to the mission of an
      organization.

# Skill DMO

The Skill DMO is a Data Cloud data model object (DMO) for proficiency, competence, or expertise that an employee possesses, which is useful to the mission of an organization.

## Object API Name

ssot\_\_Skill\_\_dlm

## Category

Other

## Primary Subject Area

## Primary Key

Skill Id (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Agent Work Skill | Skill | Many To One: N:1 | Skill | Skill ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the service presence status. | text |
| Name | ssot__Name__c | The name of the skill. | text |
| Skill ID | ssot__Id__c | A unique ID used as the primary key for the skill DMO. | text |
