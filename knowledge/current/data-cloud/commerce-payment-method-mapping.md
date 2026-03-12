---
title: "Commerce: Payment Method Mapping"
domain: data-cloud
topic: commerce-payment-method-mapping
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:13.243Z
estimatedTokens: 173
keywords: [Commerce, Payment, Mapping, After, data, stream, deployed, starter, bundle, automatically, maps, Cloud, model, objects, DMO, Data, Cloud., refers, buyer, compensate]
---

# Commerce: Payment Method Mapping

> After a data stream is deployed, the Commerce starter data bundle
         automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Payment Method data refers to the method for a
         buyer to compensate a seller for a purchased good or service.

# Commerce: Payment Method Mapping

After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Payment Method data refers to the method for a buyer to compensate a seller for a purchased good or service.

## DLO to DMO Mapping

These data mappings relate to the PaymentMethod object included in the Salesforce Commerce connector and how that data connects to DMOs.

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Id | ID | PaymentMethod | id |
| AccountId | reference | PaymentMethod | AccountId |
| Status | picklist | PaymentMethod | PaymentMethodStatus |
