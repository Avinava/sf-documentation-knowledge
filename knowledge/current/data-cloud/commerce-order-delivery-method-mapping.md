---
title: "Commerce: Order Delivery Method Mapping"
domain: data-cloud
topic: commerce-order-delivery-method-mapping
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:17:42.912Z
keywords: [Commerce, Order, Delivery, Method, Mapping, DLO, DMO]
---

# Commerce: Order Delivery Method Mapping

# Commerce: Order Delivery Method Mapping

After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Order Delivery Method data is a standardized method for transferring purchased products or services to the fulfillment destination. A delivery method characterized by the type of transportation used and by the delivering organization or group.

## DLO to DMO Mapping

These data mappings relate to the OrderDeliveryMethod object included in the Salesforce Commerce connector and how that data connects to DMOs.

| DLO Field | DLO Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Id | ID | OrderDeliveryMethod | id |
| Name | string | OrderDeliveryMethod | Name |
| ProductId | reference | OrderDeliveryMethod | ProductId |
| Carrier | picklist | OrderDeliveryMethod | OrderDeliverySupplierAccountId |
| ClassOfService | picklist | OrderDeliveryMethod | SupplierClassOfService |
| Description | textarea | OrderDeliveryMethod | Description |
| CreatedDate | dateTime | OrderDeliveryMethod | CreatedDate |
| LastModifiedDate | dateTime | OrderDeliveryMethod | LastModifiedDate |