---
title: "Shopping Cart Event Type DMO"
domain: data-cloud
topic: shopping-cart-event-type-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:14.915Z
estimatedTokens: 339
keywords: [Shopping, Cart, Event, DMO, Data, Cloud, data, model, customer, interacts, commerce, site’s, shopping, cart., API, Name, Category, Primary, Subject, Area]
---

# Shopping Cart Event Type DMO

> The Shopping Cart Event Type DMO is a Data Cloud data model object (DMO)
      for when a customer interacts with a commerce site’s shopping cart.

# Shopping Cart Event Type DMO

The Shopping Cart Event Type DMO is a Data Cloud data model object (DMO) for when a customer interacts with a commerce site’s shopping cart.

## Object API Name

ssot\_\_ShoppingCartEventType\_\_dlm

## Category

Other

## Primary Subject Area

Sales Order

## Primary Key

Shopping Cart Event Type ID (ssot\_\_Id\_\_c)

## Relationships

There are no relationships related to this DMO.

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the business account. | text |
| Name | ssot__Name__c | The name of the shopping cart event type, for example added product to cart, cart viewed, or product removed from cart. | text |
| Shopping Cart Event Type ID | ssot__Id__c | A unique ID used as primary key for the Shopping Cart Event Type DMO. | text |
