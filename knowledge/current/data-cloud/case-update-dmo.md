---
title: "Case Update DMO"
domain: data-cloud
topic: case-update-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:13.006Z
estimatedTokens: 554
keywords: [Case, Update, DMO, Data, Cloud, data, model, historical, information, changes, made, associated, case., API, Name, Category, Primary, Subject, Area, Key]
---

# Case Update DMO

> The Case Update DMO is a Data Cloud data model object (DMO) for a for
      historical information about changes made to the associated case.

# Case Update DMO

The Case Update DMO is a Data Cloud data model object (DMO) for a for historical information about changes made to the associated case.

## Object API Name

ssot\_\_CaseUpdate\_\_dlm

## Category

Other

## Primary Subject Area

CaseHistory2

## Primary Key

Case ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Case Update | Case | Many To One: N:1 | Case | Case ID |
| Case Update | Last Modified By | Many To One: N:1 | User | User ID |
| Case Update | Related Owner | Many To One: N:1 | User | User ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Case Id | ssot__CaseId__c | A reference ID to the associated case. | text |
| Case Update Id | ssot__Id__c | A unique ID used as the primary key for the case update DMO. | text |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| Description | ssot__Description__c | The case update description. | text |
| Internal Organization | ssot__InternalOrganizationId___c | A reference ID to the business unit or other internal organization that owns the case. | text |
| Last Modified By | ssot__LastModifiedById__c | A reference ID to the user that made the last update. | text |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified the record. | dateTime |
| Name | ssot__Name__c | The name of the case update. | text |
| Previous Update Date | ssot__PreviousUpdateDateTime__c | The date and time the case was previously updated. | dateTime |
| Related Owner | ssot__RelatedOwnerId__c | A reference ID to the related user for the update. | text |
| Related Owner Object | ssot__RelatedOwnerObject__c | The related owner object for the case update. | text |
| Status | ssot__Status__c | The status of the case update. | text |
