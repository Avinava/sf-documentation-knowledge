---
title: "Product Category Product DMO"
domain: data-cloud
topic: product-category-product-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:43.895Z
keywords: [Product, Category, DMO, Important, Object, API, Name, Primary, Subject, Area, Key, Relationships, Fields]
---

# Product Category Product DMO

# Product Category Product DMO

The Product Category Product data model object (DMO) is a Data Cloud DMO used to identify how products are assigned to categories. For example, Northern Trail Outfitters can use this DMO to identify how a specific running shoe is assigned to a shoe and running categories.

![Important](/docs/resources/img/en-us/252.0?doc_id=images%2Ficon_note_important.png&folder=c360a_api)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Object API Name

ssot\_\_ProductCategoryProduct\_\_dlm

## Category

Other

## Primary Subject Area

Product

## Primary Key

Product Category Product ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Product Category Product | Product Category | Many To One: N:1 | Product Category | Product Category ID |
| Product Category Product | Product | Many To One: N:1 | Goods Product | Goods Product ID |
| Product Category Product | Product | Many To One: N:1 | Bundle Product | Bundle Product ID |
| Product Category Product | Product | Many To One: N:1 | Master Product | Master Category ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Active From Date | ssot__ActiveFromDate__c | The date the catalog is available for use. | dateTime |
| Active to Date | ssot__ActiveToDate__c | The date that the catalog is unavailable. | dateTime |
| Created Date | ssot__CreatedDate__c | The record’s creation date. | dateTime |
| Data Source | ssot__DataSourceId__c | A reference ID to a system’s logical name that is the source of records identified by external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID to an object’s logical name where a record originated, for example, a cloud storage file or another connector’s external object. | text |
| External Record ID | ssot__ExternalRecordId__c | A reference ID to an external data source system. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID to a system that an external record ID was assigned. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to a business unit or other internal organization that owns the business account. | text |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified the record. | dateTime |
| Product | ssot__ProductId__c | A reference ID to the product assigned to a category. | text |
| Product Category | ssot__ProductCategoryID__c | A reference ID to the product category. | text |
| Product Category Product ID | ssot__Id__c | A unique ID used as the primary key for the Product Category Product DMO. | text |