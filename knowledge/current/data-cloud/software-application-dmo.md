---
title: "Software Application DMO"
domain: data-cloud
topic: software-application-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:15.645Z
estimatedTokens: 513
keywords: [Software, Application, DMO, Data, Cloud, model, defining, programs, created, end, user, app, Northern, Trail, Outfitters]
---

# Software Application DMO

> The Software Application DMO is a Data Cloud data model object (DMO)
      for defining programs created for the end user, such as an app for Northern Trail Outfitters
      loyalty members.

# Software Application DMO

The Software Application DMO is a Data Cloud data model object (DMO) for defining programs created for the end user, such as an app for Northern Trail Outfitters loyalty members.

## Object API Name

ssot\_\_SoftwareApplication\_\_dlm

## Category

Other

## Primary Subject Area

Software Application

## Primary Key

Software Application ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Contact Point App | Software Application | Many To One: N:1 | Software Application | Software Application ID |
| Device Application Engagement | Software Application | Many To One: N:1 | Software Application | Software Application ID |
| Software Application | Product | Many To One: N:1 | Goods Product | Goods Product ID |
| Software Application | Product | Many To One: N:1 | Bundle Product | Bundle Product ID |
| Software Application | Product | Many To One: N:1 | Master Product | Master Product ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the data record. | text |
| Product | ssot__ProductId__c | A reference ID to the associated product. | text |
| Provider Token | ssot__ProviderTokenText__c | The token of the software provider. | text |
| Software Application ID | ssot__ID__c | A unique ID used as primary key for Sales Order DMO. | text |
| Software Application Name | ssot__SoftwareApplicationName__c | The name of the application. | text |
