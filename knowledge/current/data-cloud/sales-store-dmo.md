---
title: "Sales Store DMO"
domain: data-cloud
topic: sales-store-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:15.575Z
estimatedTokens: 439
keywords: [Sales, Store, DMO, Data, Cloud, model, regarding, retail, establishment, selling, items, API, Category, Primary, Subject]
---

# Sales Store DMO

> The Sales Store DMO is a Data Cloud data model object (DMO) that provides
      information regarding a retail establishment selling items to the public.

# Sales Store DMO

The Sales Store DMO is a Data Cloud data model object (DMO) that provides information regarding a retail establishment selling items to the public.

## Object API Name

ssot\_\_SalesStore\_\_dlm

## Category

Other

## Primary Subject Area

Sales Order

## Primary Key

Sales Store ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Sales Order | Sales Store | Many To One: N:1 | Sales Store | Sales Store ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Created Date | ssot__CreatedDate__c | The date a record was created. | dateTime |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| External Record ID | ssot__ExternalRecordId__c | A reference ID for external data source record. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the data record. | text |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified the record. | dateTime |
| Name | ssot__Name__c | The store name. | text |
| Sales Store ID | ssot__Id__c | A unique ID used as primary key for Sales Order DMO. | text |
