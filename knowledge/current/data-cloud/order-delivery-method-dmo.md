---
title: "Order Delivery Method DMO"
domain: data-cloud
topic: order-delivery-method-dmo
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:17:43.807Z
keywords: [Order, Delivery, Method, DMO, Important, Object, API, Name, Category, Primary, Subject, Area, Key, Relationships, Fields]
---

# Order Delivery Method DMO

# Order Delivery Method DMO

The Order Delivery Method data model object (DMO) is a Data Cloud DMO for the order and delivery methods for products or service fulfillment.

![Important](/docs/resources/img/en-us/252.0?doc_id=images%2Ficon_note_important.png&folder=c360a_api)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Object API Name

ssot\_\_OrderDeliveryMethod\_\_dlm

## Category

Other

## Primary Subject Area

Sales Order

## Primary Key

Order Delivery Method ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Account | Order Delivery Method | Many To One: N:1 | Order Delivery Method | Order Delivery Method ID |
| Order Delivery Method | Product | Many To One: N:1 | Goods Product | Goods Product ID |
| Order Delivery Method | Product | Many To One: N:1 | Bundle Product | Bundle Product ID |
| Order Delivery Method | Product | Many To One: N:1 | Master Product | Master Product ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Created Date | ssot__CreatedDate__c | The record’s creation date. | dateTime |
| Data Source | ssot__DataSourceId__c | A reference ID for a system’s logical name for a system that is the source of records identified by an external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for an object’s logical name where this record originated, whether that is a name of a cloud storage file or another connector’s external object. | text |
| External Record ID | ssot__ExternalRecordId__c | A reference ID to an external data source system. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the business account. | text |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified the record. | dateTime |
| Name | ssot__Name__c | The name of the sales order delivery method, for example, in-store pickup or overnight delivery. | text |
| Order Delivery Method ID | ssot__Id__c | A unique ID used as the primary key for the Order Delivery Method DMO. | text |
| Product | ssot__ProductId__c | A reference ID for sale items, for example goods, services, bundles, and made-to-order products. | text |