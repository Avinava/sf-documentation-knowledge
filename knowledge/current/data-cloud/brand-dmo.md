---
title: "Brand DMO"
domain: data-cloud
topic: brand-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:13.822Z
estimatedTokens: 539
keywords: [Brand, DMO, Data, Cloud, model, product’s, Northern, Trail, Outfitters, API, Category, Primary, Subject, Area, Key]
---

# Brand DMO

> The Brand DMO is a Data Cloud data model object (DMO) for the product’s
      brand, for example, Northern Trail Outfitters.

# Brand DMO

The Brand DMO is a Data Cloud data model object (DMO) for the product’s brand, for example, Northern Trail Outfitters.

## Object API Name

ssot\_\_Brand\_\_dlm

## Category

Other

## Primary Subject Area

Product

## Primary Key

Brand ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Goods Product | Brand | Many To One: N:1 | Brand | Brand ID |
| Bundle Product | Brand | Many To One: N:1 | Brand | Brand ID |
| Master Product | Brand | Many To One: N:1 | Brand | Brand ID |
| Loyalty Transaction Journal | Brand | Many To One: N:1 | Brand | Brand ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Brand Grade | ssot__BrandGradeId__c | A reference ID to the brand’s grade, for example, premium or regular. | text |
| Brand ID | ssot__Id__c | A unique ID used as primary key for the Brand DMO. | text |
| Created Date | ssot__CreatedDate__c | The date the record was created. | dateTime |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| External Record ID | ssot__ExternalRecordId__c | A reference ID to an external data source system. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the business account. | text |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified the record. | dateTime |
| Name | ssot__Name__c | The brand name of a product, for example Northern Trail Outfitters. | text |
| Parent Brand | ssot__ParentBrandId__c | A reference ID to the parent brand. | text |
