---
title: "Benefit Action DMO"
domain: data-cloud
topic: benefit-action-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:42.754Z
keywords: [Benefit, Action, DMO, Object, API, Name, Category, Primary, Subject, Area, Key, Relationships, Fields]
---

# Benefit Action DMO

# Benefit Action DMO

The Benefit Action DMO is a Data Cloud data model object (DMO) for actions triggered when a program benefit is assigned to a loyalty program member.

## Object API Name

ssot\_\_BenefitAction\_\_dlm

## Category

Other

## Primary Subject Area

Loyalty

## Primary Key

Benefit Action ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Loyalty Benefit | Benefit Action | Many To One: N:1 | Benefit Action | Benefit Action ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Benefit Action ID | ssot__Id__c | A unique ID used as primary key for the Benefit Action DMO. | text |
| Benefit Action Process Type | ssot__BenefitActionProcessTypeId__c | A reference ID to the benefit action process type, such as loyalty or rebates. | text |
| Created Date | ssot__CreatedDate__c | The date the record was created. | dateTime |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| Description | ssot__Description__c | A description of the benefit action. | text |
| External Record ID | ssot__ExternalRecordId__c | A reference ID for an external data source system. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the data record. | text |
| Is Benefit Expiration Allowed | ssot__IsBenefitExpirationAllowed__c | An indicator if the benefits expire. | text |
| Is Benefit Update Allowed | ssot__IsBenefitUpdateAllowed__c | An indicator if updates can be made to benefits. | text |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified the record. | dateTime |