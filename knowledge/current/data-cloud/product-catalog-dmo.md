---
title: "Product Catalog DMO"
domain: data-cloud
topic: product-catalog-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:14.769Z
estimatedTokens: 510
keywords: [Product, Catalog, DMO, Data, Cloud, data, model, company’s, inventory, merchandising, catalog., API, Name, Category, Primary, Subject, Area, Key, Relationships, Fields]
---

# Product Catalog DMO

> The Product Catalog DMO is a Data Cloud data model object (DMO) for a
      company’s inventory or merchandising catalog.

# Product Catalog DMO

The Product Catalog DMO is a Data Cloud data model object (DMO) for a company’s inventory or merchandising catalog.

## Object API Name

ssot\_\_ProductCatalog\_\_dlm

## Category

Other

## Primary Subject Area

Product

## Primary Key

Product Catalog ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Product Category | Product Catalog | Many To One: N:1 | Product Catalog | Product Catalog ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Active From Date | ssot__ActiveFromDate__c | The date the catalog is available for use. | dateTime |
| Active to Date | ssot__ActiveToDate__c | The date the catalog is unavailable. | dateTime |
| Created Date | ssot__CreatedDate__c | The date when a record was created. | dateTime |
| Data Source | ssot__DataSourceId__c | A reference ID to logical name for system that is source of records identified by external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID to logical name of object where record originated, for example a cloud storage file or another connector’s external object. | text |
| External Record ID | ssot__ExternalRecordId__c | A reference ID to an external data source system. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID to system that External Record ID was assigned. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to business unit or other internal organization that owns the business account. | text |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified the record. | dateTime |
| Product Catalog ID | ssot__Id__c | A unique ID used as primary key for the Product Catalog DMO. | text |
| Product Catalog Name | ssot__Name__c | The name of the product catalog. | text |
| Product Catalog Translations Relationship | ssot__ProductCatalogTranslations__c |  | text |
