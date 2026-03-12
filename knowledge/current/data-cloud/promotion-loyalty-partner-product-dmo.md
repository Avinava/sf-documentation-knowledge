---
title: "Promotion Loyalty Partner Product DMO"
domain: data-cloud
topic: promotion-loyalty-partner-product-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:15.520Z
estimatedTokens: 599
keywords: [Promotion, Loyalty, Partner, Product, DMO, Data, Cloud, model, co-marketing, program, members, API, Category, Primary, Subject]
---

# Promotion Loyalty Partner Product DMO

> The Promotion Loyalty Partner Product DMO is a Data Cloud data model
      object (DMO) for the promotion of a product that a partner is co-marketing to loyalty program
      members.

# Promotion Loyalty Partner Product DMO

The Promotion Loyalty Partner Product DMO is a Data Cloud data model object (DMO) for the promotion of a product that a partner is co-marketing to loyalty program members.

## Object API Name

ssot\_\_PromotionLoyaltyPartnerProduct\_\_dlm

## Category

Other

## Primary Subject Area

Loyalty

## Primary Key

Promotion Loyalty Partner Product ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Promotion Loyalty Partner Product | Promotion | Many To One: N:1 | Promotion | Promotion ID |
| Promotion Loyalty Partner Product | Loyalty Partner Product | Many To One: N:1 | Loyalty Program Partner | Loyalty Program Partner ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Created Date | ssot__CreatedDate__c | The date the record was created. | dateTime |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| External Record ID | ssot__ExternalRecordId__c | A reference ID for an external data source system. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the data record. | text |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified the record. | dateTime |
| Loyalty Partner Product | ssot__LoyaltyPartnerProductId__c | A reference ID to product offered by loyalty program partner that's co-marketed with products marketed to loyalty program members. | text |
| Promotion | ssot__PromotionId__c | A reference ID to type of marketing communication used to inform or persuade target audiences of relative merits of product, service, brand, or issue. | text |
| Promotion Loyalty Partner Product ID | ssot__Id__c | A unique ID used as primary key for the Promotion Loyalty Partner Product DMO. | text |
