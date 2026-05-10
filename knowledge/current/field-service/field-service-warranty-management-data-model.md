---
title: "Field Service Warranty Management Data Model"
domain: field-service
topic: field-service-warranty-management-data-model
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-05-10T00:40:37.880Z
estimatedTokens: 278
keywords: [Service, Warranty, Management, Model, items, record, labor, parts, expenses, along, any, exchange, options, provided, rectify, issues, products, sold, installed, standard, warranties, product, families, install, additional, extended, exclusions, terms]
---

> Use warranty items to record details of the labor, parts, and expenses, along with any
  exchange options, that are provided to rectify issues with products sold or installed. Create
  standard warranties for products and product families and, for products you install, record
  details of additional or extended warranties along with exclusions and void terms.

# Field Service Warranty Management Data Model

Use warranty items to record details of the labor, parts, and expenses, along with any exchange options, that are provided to rectify issues with products sold or installed. Create standard warranties for products and product families and, for products you install, record details of additional or extended warranties along with exclusions and void terms.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=field_service_dev)

#### Note

Asterisks in the following diagram signify required fields.

A warranty term is linked to a product warranty term to define the standard warranty offered for a product or product family. When a product is installed, asset warranty term details are created from the standard warranty. An asset warranty term can be associated with a work order, work order line item, case, or entitlement to track actions related to the fulfillment of the warranty term provisions.

![Warranty data model](/docs/resources/img/en-us/260.0?doc_id=field_service%2Fimages%2Ffsl_dev_warranty.png&folder=field_service_dev)
