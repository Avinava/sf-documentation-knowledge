---
title: "Product Category DMO"
domain: data-cloud
topic: product-category-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:15.475Z
estimatedTokens: 813
keywords: [Product, Category, DMO, data, model, Cloud, products, company, offers, shoes, services, API, Primary, Subject, Area]
---

# Product Category DMO

> The Product Category data model object (DMO) is a Data Cloud DMO for
      the types of products a company has or offers, such as shoes or types of services.

# Product Category DMO

The Product Category data model object (DMO) is a Data Cloud DMO for the types of products a company has or offers, such as shoes or types of services.

![Important](/docs/resources/img/en-us/252.0?doc_id=images%2Ficon_note_important.png&folder=c360a_api)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Object API Name

ssot\_\_ProductCategory\_\_dlm

## Category

Other

## Primary Subject Area

Product

## Primary Key

Product Category ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Master Product | Primary Product Category | Many To One: N:1 | Product Category | Product Category ID |
| Product Category | Parent Category | Many To One: N:1 | Product Category | Product Category ID |
| Product Category | Product Catalog | Many To One: N:1 | Product Catalog | Product Catalog ID |
| Product Category Product | Product Category | Many To One: N:1 | Product Category | Product Category ID |
| Bundle Product | Primary Product Category | Many To One: N:1 | Product Category | Product Category ID |
| Goods Product | Primary Product Category | Many To One: N:1 | Product Category | Product Category ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Active From Date | ssot__ActiveFromDate__c | The date the catalog is available for use. | dateTime |
| Active to Date | ssot__ActiveToDate__c | The date that the catalog is unavailable. | dateTime |
| Category Name | ssot__Name__c | The name of the category. | text |
| Created Date | ssot__CreatedDate__c | The date and time when the record was created. | dateTime |
| Data Source | ssot__DataSourceId__c | A reference ID to a system’s logical name that is a source of records identified by an external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID to an object’s logical name where a record originated, for example, a cloud storage file or another connector’s external object. | text |
| External Record ID | ssot__ExternalRecordId__c | A reference ID to an external data source system. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID to a system that an external record ID was assigned. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to a business unit or other internal organization that owns the business account. | text |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified the record. | dateTime |
| Parent Category | ssot__ParentCategoryID__c | A reference ID to the product category of a parent record. | text |
| Product Catalog | ssot__ProductCatalogID__c | A reference ID to the product catalog where the category is included. | text |
| Product Category ID | ssot__Id__c | A unique ID used as the primary key for the Product Category DMO. | text |
| Product Category Attribute Sets | ssot__ProductCategoryAttributeSets__c |  | text |
| Product Category Translations Relationship | sssot__ProductCategoryTranslations__c |  | text |
