---
title: "Data Use Purpose DMO"
domain: data-cloud
topic: data-use-purpose-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:43.315Z
keywords: [Data, Purpose, DMO, Object, API, Name, Category, Primary, Subject, Area, Key, Relationships, Fields]
---

# Data Use Purpose DMO

# Data Use Purpose DMO

The Data Use Purpose DMO is a Data Cloud data model object (DMO) for the purpose of contacting a prospect or customer, such as for billing, marketing, or surveys.

## Object API Name

ssot\_\_DataUsePurpose\_\_dlm

## Category

Other

## Primary Subject Area

Privacy

## Primary Key

Data Use Purpose ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Communication Subscription | Data Use Purpose ID | Many To One: N:1 | Data Use Purpose | Data Use Purpose ID |
| Data Use Purpose Consent Action | Data Use Purpose ID | Many To One: N:1 | Data Use Purpose | Data Use Purpose ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Can Data Subject Opt Out | ssot__CanDataSubjectOptOut__c | An indicator whether a user can opt out of data use for a specific purpose. | text |
| Data Source | ssot__DataSourceId__c | A reference ID to logical name for system that is source of records identified by external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID to logical name of object where record originated, for example a cloud storage file or another connector’s external object. | text |
| Data Use Purpose ID | ssot__Id__c | A unique ID used as primary key for the Data Use Purpose DMO. | text |
| Data Use Purpose Name | ssot__Name__c | The purpose name, for example third-party data sharing, marketing, billing, or shipping. | text |
| Description | ssot__Description__c | The description of the purpose of the data use. | text |
| Entity | ssot__EntityId__c | A reference ID to class of data specific to data use purpose, for example product. | text |
| Entity Instance ID | ssot__EntityInstanceId__c | A reference ID to instance of an entity. | text |
| External Record ID | ssot__ExternalRecordId__c | A reference ID to an external data source system. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the business account. | text |
| Legal Basis ID | ssot__LegalBasisId__c | A reference ID to legal basis of data use. | text |
| Maintain Per Contact Channel Flag | ssot__CanMaintainPerContactChannel__c | An indicator whether data use purpose can be maintained per contact channel. | text |
| Maintain Per Contact Point Flag | ssot__CanMaintainPerContactPoint__c | An indicator whether data use purpose can be maintained per contact point. | text |
| Maintain Per Party Flag | ssot__CanMaintainPerParty__c | An indicator whether data use purpose can be maintained per party. | text |